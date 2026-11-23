#!/usr/bin/env node
/**
 * IE · Sistema Europeo · alta de un modelo en Shopify Admin.
 *
 *   SHOPIFY_STORE=xxxx.myshopify.com SHOPIFY_ADMIN_TOKEN=shpat_... \
 *   node docs/product-migrations/apply-sistema-europeo-model.mjs \
 *        docs/product-migrations/2026-11-23-burgas-sistema-europeo.json \
 *        --pdf-dir /ruta/a/pdfs [--write-template] [--dry-run]
 *
 * Idempotente: crea definiciones de metafield si faltan, sube los PDF si no existen
 * en Files (por nombre), fija metafields, plantilla «sistema-europeo», textos
 * alternativos y estado ACTIVE. Scopes: write_products, write_files, write_themes (no).
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [, , specPath, ...flags] = process.argv;
const opt = (name) => { const i = flags.indexOf(name); return i >= 0 ? (flags[i + 1] ?? true) : null; };
const DRY = flags.includes('--dry-run');
const STORE = process.env.SHOPIFY_STORE;
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const API = '2025-07';
if (!specPath || !STORE || !TOKEN) {
  console.error('Uso: SHOPIFY_STORE=… SHOPIFY_ADMIN_TOKEN=… node apply-sistema-europeo-model.mjs <spec.json> --pdf-dir <dir> [--write-template] [--dry-run]');
  process.exit(1);
}
const spec = JSON.parse(await readFile(specPath, 'utf8'));
const pdfDir = opt('--pdf-dir');

async function gql(query, variables = {}) {
  const res = await fetch(`https://${STORE}/admin/api/${API}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': TOKEN },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}
const userErrors = (payload) => {
  const errs = payload?.userErrors || [];
  if (errs.length) throw new Error(JSON.stringify(errs));
};

/* 1 · Definiciones de metafield (namespace custom, owner PRODUCT) */
const DEFS = {
  eu_subtitle: ['Subtítulo', 'single_line_text_field'],
  eu_short_description: ['Descripción breve', 'multi_line_text_field'],
  eu_dimensions: ['Dimensiones máximas', 'single_line_text_field'],
  eu_interior_area: ['Recintos interiores', 'single_line_text_field'],
  eu_terrace_area: ['Terraza cubierta', 'single_line_text_field'],
  eu_layout: ['Distribución', 'single_line_text_field'],
  eu_wall_height: ['Altura de pared', 'single_line_text_field'],
  eu_wall: ['Pared exterior', 'single_line_text_field'],
  eu_roof: ['Cubierta', 'single_line_text_field'],
  eu_insulation: ['Aislamiento', 'single_line_text_field'],
  eu_rooms: ['Recintos (planta)', 'json'],
  eu_specs: ['Especificaciones de referencia', 'json'],
  eu_options: ['Opciones compatibles', 'json'],
  eu_plan_image: ['Plano acotado', 'file_reference', [{ name: 'file_type_options', value: '["Image"]' }]],
  eu_layout_image: ['Distribución amueblada', 'file_reference', [{ name: 'file_type_options', value: '["Image"]' }]],
  eu_datasheet: ['Ficha técnico-comercial (PDF)', 'file_reference', [{ name: 'file_type_options', value: '["GenericFile"]' }]],
};
for (const [key, [name, type, validations]] of Object.entries(DEFS)) {
  if (DRY) { console.log('[dry] definición', key); continue; }
  const d = await gql(`mutation($def: MetafieldDefinitionInput!){ metafieldDefinitionCreate(definition:$def){ createdDefinition{ id } userErrors{ code message } } }`, {
    def: { name: `Sistema Europeo · ${name}`, namespace: 'custom', key, type, ownerType: 'PRODUCT', ...(validations ? { validations } : {}) },
  });
  const errs = d.metafieldDefinitionCreate.userErrors;
  if (errs.length && !errs.every((e) => e.code === 'TAKEN')) throw new Error(`${key}: ${JSON.stringify(errs)}`);
  console.log(errs.length ? `= definición ${key} (existente)` : `+ definición ${key}`);
}

/* 2 · Producto */
const { handle, match_title, template_suffix, status } = spec.product;
let product = (await gql(`query($h:String!){ productByHandle(handle:$h){ id title handle status media(first:20){ nodes{ id alt mediaContentType } } } }`, { h: handle })).productByHandle;
if (!product) {
  const r = await gql(`query($q:String!){ products(first:5, query:$q){ nodes{ id title handle status media(first:20){ nodes{ id alt mediaContentType } } } } }`, { q: `title:${match_title}` });
  product = r.products.nodes.find((p) => p.title.trim().toUpperCase() === match_title.toUpperCase());
}
if (!product) throw new Error(`Producto no encontrado: ${handle} / ${match_title}`);
console.log(`Producto: ${product.title} (${product.handle}) · ${product.status}`);

/* 3 · PDF en Files */
async function ensureFile(filename) {
  const found = await gql(`query($q:String!){ files(first:5, query:$q){ nodes{ id ... on GenericFile{ url fileStatus } } } }`, { q: `filename:${filename}` });
  const hit = found.files.nodes.find((n) => n.url);
  if (hit) return hit;
  if (!pdfDir) throw new Error(`Falta --pdf-dir para subir ${filename}`);
  const bytes = await readFile(path.join(pdfDir, filename));
  if (DRY) return { id: `dry:${filename}`, url: `dry:${filename}` };
  const staged = await gql(`mutation($i:[StagedUploadInput!]!){ stagedUploadsCreate(input:$i){ stagedTargets{ url resourceUrl parameters{ name value } } userErrors{ message } } }`, {
    i: [{ filename, mimeType: 'application/pdf', resource: 'FILE', httpMethod: 'POST', fileSize: String(bytes.length) }],
  });
  userErrors(staged.stagedUploadsCreate);
  const target = staged.stagedUploadsCreate.stagedTargets[0];
  const form = new FormData();
  target.parameters.forEach((p) => form.append(p.name, p.value));
  form.append('file', new Blob([bytes], { type: 'application/pdf' }), filename);
  const up = await fetch(target.url, { method: 'POST', body: form });
  if (!up.ok) throw new Error(`Subida fallida ${filename}: ${up.status}`);
  const created = await gql(`mutation($f:[FileCreateInput!]!){ fileCreate(files:$f){ files{ id } userErrors{ message } } }`, {
    f: [{ originalSource: target.resourceUrl, contentType: 'FILE', alt: filename.replace(/_/g, ' ').replace(/\.pdf$/, '') }],
  });
  userErrors(created.fileCreate);
  const id = created.fileCreate.files[0].id;
  for (let i = 0; i < 30; i++) {
    const n = (await gql(`query($id:ID!){ node(id:$id){ ... on GenericFile{ url fileStatus } } }`, { id })).node;
    if (n?.fileStatus === 'READY' && n.url) return { id, url: n.url };
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error(`Archivo no disponible: ${filename}`);
}
const datasheet = spec.files?.eu_datasheet ? await ensureFile(spec.files.eu_datasheet) : null;
const shared = {};
for (const [settingKey, filename] of Object.entries(spec.files?.template_settings || {})) shared[settingKey] = (await ensureFile(filename)).url;

/* 4 · Metafields */
const metafields = Object.entries(spec.metafields).map(([key, { type, value }]) => ({
  ownerId: product.id, namespace: 'custom', key, type, value: typeof value === 'string' ? value : JSON.stringify(value),
}));
if (datasheet) metafields.push({ ownerId: product.id, namespace: 'custom', key: 'eu_datasheet', type: 'file_reference', value: datasheet.id });
const images = product.media.nodes.filter((m) => m.mediaContentType === 'IMAGE');
const altList = spec.media_alt_by_position || [];
const planIdx = altList.findIndex((a) => /plano/i.test(a));
const layoutIdx = altList.findIndex((a) => /amueblad/i.test(a));
if (images[planIdx]) metafields.push({ ownerId: product.id, namespace: 'custom', key: 'eu_plan_image', type: 'file_reference', value: images[planIdx].id });
if (images[layoutIdx]) metafields.push({ ownerId: product.id, namespace: 'custom', key: 'eu_layout_image', type: 'file_reference', value: images[layoutIdx].id });
if (DRY) console.log('[dry] metafields', metafields.map((m) => m.key).join(', '));
else {
  for (let i = 0; i < metafields.length; i += 25) {
    const r = await gql(`mutation($m:[MetafieldsSetInput!]!){ metafieldsSet(metafields:$m){ metafields{ key } userErrors{ field message } } }`, { m: metafields.slice(i, i + 25) });
    userErrors(r.metafieldsSet);
  }
  console.log(`+ ${metafields.length} metafields`);
}

/* 5 · Textos alternativos */
const altUpdates = images.slice(0, altList.length).map((m, i) => ({ id: m.id, alt: altList[i] })).filter((u, i) => images[i].alt !== u.alt);
if (altUpdates.length && !DRY) {
  const r = await gql(`mutation($f:[FileUpdateInput!]!){ fileUpdate(files:$f){ files{ id } userErrors{ message } } }`, { f: altUpdates });
  userErrors(r.fileUpdate);
}
console.log(`${DRY ? '[dry] ' : ''}alt actualizados: ${altUpdates.length}`);

/* 6 · Plantilla y estado */
if (!DRY) {
  const r = await gql(`mutation($p:ProductUpdateInput!){ productUpdate(product:$p){ product{ handle status templateSuffix onlineStoreUrl } userErrors{ field message } } }`, {
    p: { id: product.id, templateSuffix: template_suffix, status },
  });
  userErrors(r.productUpdate);
  console.log('Producto:', r.productUpdate.product);
}

/* 7 · URLs de documentos comunes en la plantilla */
if (Object.keys(shared).length) {
  console.log('URLs comunes:', shared);
  if (flags.includes('--write-template')) {
    const tplPath = new URL('../../templates/product.sistema-europeo.json', import.meta.url);
    const tpl = JSON.parse(await readFile(tplPath, 'utf8'));
    for (const [k, url] of Object.entries(shared)) {
      const [sectionKey, settingKey] = k.split('.');
      tpl.sections[sectionKey].settings[settingKey] = url;
    }
    await writeFile(tplPath, JSON.stringify(tpl, null, 2) + '\n');
    console.log('Plantilla actualizada: commit y push a main para publicarla.');
  }
}
