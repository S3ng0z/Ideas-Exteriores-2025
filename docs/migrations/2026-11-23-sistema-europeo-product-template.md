# Sistema Europeo · plantilla de modelo `product.sistema-europeo`

**Fecha:** 2026-11-23  
**Ámbito:** Shopify Theme + Shopify Admin  
**Rama:** `main`  
**Piloto:** BURGAS (IE-SE-01) · documentos comunes IE-SE-02 y IE-SE-03

## Objetivo

Plantilla única y reutilizable para los ~15 modelos del Sistema Europeo. La página traslada a la web la estructura de la documentación técnico-comercial: ficha del modelo (IE-SE-01), memoria de calidades (IE-SE-02) y guía de compra (IE-SE-03).

## Análisis de negocio

- El precio publicado corresponde a la **configuración de referencia en suministro de kit**. Transporte, descarga, montaje, base, instalaciones, proyecto y licencias quedan fuera salvo presupuesto aceptado. La página lo hace visible junto al precio, en «Qué incluye» y en «Compra e instalación».
- Pared de 34 mm sin aislar = uso estacional. El aviso «Uso durante todo el año» evita que el precio de referencia se lea como vivienda permanente.
- «Sistema Europeo» es denominación comercial, no norma ni certificación. No se declaran U, energía, acústica ni fuego (se justifican en proyecto).
- Superficies a ejes de muro: no se presentan como útil ni construida.
- Imágenes del fabricante = renders: etiqueta «Render» y nota de imágenes. Sin referencias al proveedor.

## Arquitectura (validada con el Diseño Técnico)

- **Un template por línea, sin templates por modelo.** Un modelo nuevo se publica asignando `sistema-europeo` y rellenando metafields.
- **Datos del modelo → metafields `custom.eu_*` del producto.** Contenido común del sistema → ajustes y bloques de sección (editable en el Theme Editor).
- Componentes con prefijo `ie-`, CSS encapsulado en `.ie-eu` (sin `!important`, sin estilos globales), una sola hoja `assets/ie-eu-model.css`.
- Tokens «Natural Precision»: Source Serif 4 500 (titulares) + Manrope 400–600 (interfaz y datos); Forest #566236 como acción; Bone/Stone como superficies; radios 4/8/pill; retícula 12/8/4 (7/5 en cabecera y planta).
- Accesibilidad: un H1, tablas con `th`/`scope`, chips con texto (no solo color), foco visible, `aria-pressed` en galería y conmutador de plano, `prefers-reduced-motion`.
- SEO: `structured_data` de Product y JSON-LD `FAQPage`.

### Secciones

| Orden | Archivo | Datos |
|---|---|---|
| 1 | `ie-european-product-showcase` | Título, imágenes, precio · `eu_subtitle`, `eu_short_description`, `eu_dimensions`, `eu_interior_area`, `eu_terrace_area`, `eu_layout`, `eu_wall_height`. Incluye navegación interna y CTA fijo en móvil. |
| 2 | `ie-european-product-plan` | `eu_rooms` (json), `eu_plan_image`, `eu_layout_image` (o imágenes con alt «plano» / «amueblad»). |
| 3 | `ie-european-product-specs` | `eu_specs` (json), `eu_options` (json). Compatibilidad con `eu_wall`, `eu_roof`, `eu_insulation`. |
| 4 | `ie-european-product-inclusions` | Bloques comunes (partida, situación, condiciones). |
| 5 | `ie-european-product-purchase` | Ajustes y bloques comunes (modalidades, precio, 8 pasos). |
| 6 | `ie-european-product-docs` | `eu_datasheet` (PDF) + URLs comunes IE-SE-02/03. Solo muestra documentos publicados. |
| 7 | `ie-european-product-faq` | Bloques comunes + cierre con presupuesto. |

Retirados: `sections/ie-european-product-guide.liquid` y `assets/ie-european-product-showcase.css` (solo los usaba esta plantilla).

## Shopify Admin (BURGAS) · aplicado el 2026-11-23

Aplicado con la Admin API (conector Shopify), sin token local:

- 16 definiciones de metafield `custom.eu_*` (Producto), con nombre «Sistema Europeo · …».
- Files: IE-SE-01 (ficha BURGAS), IE-SE-02 (memoria de calidades) e IE-SE-03 (guía de compra), importados desde `docs/catalogo/sistema-europeo/`.
- Producto `BURGAS` (`/products/burgas`): `templateSuffix: sistema-europeo`, `ACTIVE`, publicado en Online Store; 4 imágenes con alt (render frontal, render posterior, distribución amueblada, plano acotado); metafields de la ficha IE-SE-01; `eu_datasheet`, `eu_plan_image`, `eu_layout_image` enlazados.
- Precio de la variante: 0,00 € (sin PVP aprobado). La cabecera muestra «Precio según configuración». Al aprobar el PVP basta con fijar el precio de la variante: la plantilla pasa a «Desde X €» con su alcance.
- URLs de IE-SE-02 / IE-SE-03 guardadas en `templates/product.sistema-europeo.json` (sección `docs`).

Datos de origen: `docs/product-migrations/2026-11-23-burgas-sistema-europeo.json`. El script `apply-sistema-europeo-model.mjs` queda como alternativa para modelos siguientes con token de Admin.

## QA

- Theme Check: 0 incidencias en los archivos `ie-european-*` y en la plantilla.
- Render local con datos de BURGAS a 1440 px y 390 px: galería, conmutador de plano, navegación interna (scroll-spy) y CTA móvil verificados.
- Pendiente tras publicar: revisión en tienda real (Theme Editor, LCP de la imagen principal, formulario de contacto con `?modelo=`).

## Nuevo modelo del Sistema Europeo

1. Duplicar el JSON de BURGAS con los datos de la ficha IE-SE-01 del modelo.
2. Imágenes en orden: render principal, render secundario, distribución amueblada, plano acotado.
3. Ejecutar el script. No hace falta tocar el theme.

## ALDAN · aplicado el 2026-11-23

- Producto `ALDAN` (`/products/aldan`): `sistema-europeo`, `ACTIVE`, publicado en Online Store; 4 imágenes (render frontal, render lateral, distribución amueblada, plano acotado); datos de la ficha IE-SE-01 en `docs/product-migrations/2026-11-23-aldan-sistema-europeo.json`.
- IE-SE-02 e IE-SE-03: sin cambios (mismo PDF); se reutilizan los publicados.
- Precio de la variante: 0,00 € (sin PVP aprobado) → «Precio según configuración».

### Campos por modelo añadidos a la plantilla (opcionales)

| Metafield | Uso | Si está vacío |
|---|---|---|
| `custom.eu_terrace_label` | Etiqueta del dato «Terraza cubierta» / «Porche cubierto» | «Terraza cubierta» |
| `custom.eu_plan_caption` | Pie del plano (unidades de cota) | Ajuste de sección (milímetros) |
| `custom.eu_plan_note` | Nota de superficies (a ejes / entre muros) | Ajuste de sección (a ejes) |

Recintos en `eu_rooms` sin `n` → la tabla oculta la columna Nº (planos sin numeración).

Regla Shopify: los ajustes `url` no admiten `default` distinto de `/collections` o `/collections/all`; los enlaces se fijan en la plantilla.

## CATALAN · aplicado el 2026-11-23

- Producto `CATALAN` (`/products/catalan`): `sistema-europeo`, `ACTIVE`, publicado en Online Store; 4 imágenes (render frontal, fachada y hastial, distribución amueblada, plano acotado); datos de IE-SE-01 en `docs/product-migrations/2026-11-23-catalan-sistema-europeo.json`.
- Dato de cabecera combinado: `eu_terrace_label` «Cochera · porche» / `eu_terrace_area` «17,6 · 2,7 m²». Recintos numerados (1–8, T1–T2): columna Nº visible. Pie y nota del plano: los comunes (milímetros, a ejes).
- Imagen excluida: render de la cochera con vehículo y matrícula con marca de terceros (no figura en IE-SE-01).
- IE-SE-02 / IE-SE-03 sin cambios. Precio 0,00 € (sin PVP aprobado) → «Precio según configuración».
- Sin cambios de theme: el modelo se publica solo con datos.

## DUERO · aplicado el 2026-11-23

- Producto `DUERO` (`/products/duero`): `sistema-europeo`, `ACTIVE`, publicado en Online Store; 4 imágenes (render frontal, hastial y porche, distribución amueblada, plano acotado); datos de IE-SE-01 en `docs/product-migrations/2026-11-23-duero-sistema-europeo.json`.
- Los renders están en simetría respecto al plano: se indica en el texto alternativo de las imágenes y en `eu_plan_note` («la disposición válida es la del plano»).
- Pared de referencia 34 mm (uso estacional); recintos numerados 1–6 + T. IE-SE-02 / IE-SE-03 sin cambios. Precio 0,00 € → «Precio según configuración». Sin cambios de theme.

## Rediseño editorial · 2026-11-24 (piloto BURGAS)

Regla editorial de la familia: MODELO → USO → DISTRIBUCIÓN → CONFIGURACIÓN → ALCANCE → DOCUMENTACIÓN → SIGUIENTE PASO.
Cada dato se cuenta como «qué es → qué significa → qué comprobar». Tuteo en toda la plantilla.

| Campo por modelo | Qué escribir | Si falta |
|---|---|---|
| `eu_subtitle` | Frase de posicionamiento: tipo, uso y rasgo principal («Una casa compacta de una planta con…») | Sin subtítulo |
| `eu_short_description` | Distribución factual, sin adjetivos de valor | Sin introducción |
| `eu_plan_heading` / `eu_plan_intro` | Para qué sirve la distribución de este modelo | Textos comunes de la sección |
| `eu_specs[].value` / `.detail` | `value`: primera lectura comprensible · `detail`: precisión técnica | Una sola lectura |
| `eu_use_note` | Nota de uso con el espesor real de pared del modelo | Nota común sin espesor |

Pendiente: aplicar los campos a ALDAN, CATALAN y DUERO (hoy usan los textos comunes, coherentes pero menos específicos).

## EBRO · completado el 2026-11-26

- Producto creado por S3ng0z (datos en `docs/product-migrations/2026-11-26-ebro-sistema-europeo.json`, revisados contra IE-SE-01: correctos; ya con campos editoriales del piloto BURGAS).
- Completado: publicación en Online Store (`/products/ebro`), orden de imágenes 1 frontal · 2 hastial y porche · 3 distribución amueblada · 4 plano, textos alternativos (la plantilla los usa para distinguir render / plano), `eu_plan_image` y `eu_layout_image`.
- Fuentes en `docs/catalogo/sistema-europeo/ebro/`. IE-SE-02 / IE-SE-03 sin cambios. Precio 0,00 € → «Presupuesto según configuración». Sin cambios de theme.
- Checklist para próximos modelos: tras `productSet`, verificar siempre publicación en Online Store, orden y alt de imágenes y los dos campos de imagen del plano.

## FORTUNA · aplicado el 2026-11-26

- Producto `FORTUNA` (`/products/fortuna`): `sistema-europeo`, `ACTIVE`, publicado en Online Store; 4 imágenes con alt (render frontal, porche y fachada lateral, distribución amueblada, plano); `eu_plan_image` y `eu_layout_image` enlazados; campos editoriales del piloto BURGAS incluidos desde el alta.
- Datos de IE-SE-01 en `docs/product-migrations/2026-11-26-fortuna-sistema-europeo.json`. Porche publicado como intervalo 10,2–10,7 m² (calculado con las cotas): el plano rotula 10,99 m², cifra que no resulta de sus cotas; se explica en `eu_plan_note`, como en la ficha.
- Altura de pared 2.770 mm (cubierta a un agua). IE-SE-02 / IE-SE-03 sin cambios. Precio 0,00 € → «Presupuesto según configuración». Sin cambios de theme.
