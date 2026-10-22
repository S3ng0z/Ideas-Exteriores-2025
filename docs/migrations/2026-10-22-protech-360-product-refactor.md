# ProTech 360 · refactorización de producto WPC y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458602090840`  
**Handle:** `wpc-capped-decking-360-premium`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por `product.wpc-decking`, derivada de la arquitectura visual unificada de `product.decking` y del patrón de producto usado por FREJA/ALICE: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

La separación WPC es intencionada. Las auditorías internas no acreditan todavía si el precio comercial corresponde a m², lama, caja u otra unidad; por ello la plantilla WPC reutiliza el sistema visual de tarimas sin publicar una equivalencia por m² como hecho.

## Evidencia revisada

Se contrastaron el catálogo maestro y las auditorías internas de pricing/compras, técnica constructiva, arquitectura/data, UX/CRO y SEO. Para ProTech 360 coinciden en:
- validar unidad de venta, perfil, dimensiones, rendimiento, subestructura y clips;
- no inferir precio por m² hasta disponer de evidencia;
- no prometer clase antideslizante, comportamiento al fuego, durabilidad o ausencia de mantenimiento sin documentación del suministro;
- confirmar ficha de perfil, ensayos aplicables, garantía y manual de instalación.

## PVP

Los importes históricos se tratan como netos sin IVA y se convierten a PVP final aplicando IVA del 21 %, siguiendo el criterio ya usado en la refactorización de tarimas del 22/10/2026:

- OUTDOOR CORE / precio principal: **42,23 €**
- OUTDOOR CLEAN: **102,73 €**
- OUTDOOR SELECT: **204,49 €**

Los metafields `custom.price_basic`, `custom.price_standard` y `custom.price_passive` se actualizan con esos importes. La unidad comercial permanece pendiente de confirmación antes de contratar.

## Shopify Product

- `templateSuffix`: `wpc-decking`
- `productType`: `Tarima exterior WPC`
- SEO title: `ProTech 360 | Tarima para exterior WPC`
- Descripción técnica saneada y semántica, sin CSS embebido ni H1 duplicado.
- Se eliminan dimensiones, rendimientos, separaciones de apoyo y prestaciones categóricas no acreditadas documentalmente.
- Se mantienen título, handle, imágenes, estado ACTIVE y tag existente.

## Shopify Theme

- Nuevo `templates/product.wpc-decking.json`.
- `sections/ie-habitable-product-hero.liquid` carga `ie-decking-layout.css` también para `wpc-decking`.
- El comparador muestra PVP con IVA incluido y “unidad comercial a confirmar”, sin afirmar €/m².
- El kit WPC exige clips, fijaciones y remates compatibles con la referencia confirmada.

## QA

- `productUpdate`: sin `userErrors`.
- `productVariantsBulkUpdate`: sin `userErrors`.
- `metafieldsSet`: sin `userErrors`.
- La integración GitHub → Shopify sincronizó los archivos nuevos en el tema MAIN.
- El tema MAIN no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, `productType` vacío, SEO, descripción, precio principal 34,90 € y metafields 34,90 / 84,90 / 169,00 € desde `docs/backups/2026-10-22-protech-360-before.json`. Revertir los commits de plantilla/hero únicamente si ningún otro producto WPC ha empezado a utilizar `wpc-decking`.
