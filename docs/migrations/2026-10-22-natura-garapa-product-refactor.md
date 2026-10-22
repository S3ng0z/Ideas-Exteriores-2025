# Natura Garapa · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458650259800`  
**Handle:** `outdoor-hardwood-decking-garapa`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.natural-decking`, ya validada con Natura Iroko, Itaúba y Cumarú y alineada con el patrón FREJA/ALICE: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

## Hallazgos previos

El catálogo maestro y las auditorías internas marcan Garapa como P0 en UX/arquitectura. Riesgos principales: unidad comercial no acreditada originalmente, coste/margen no acreditados y necesidad de validar perfil, largos, acabado, rendimiento, subestructura, fijaciones, origen y documentación de proveedor.

La descripción legacy incluía CSS embebido y afirmaciones técnicas concretas sobre especie botánica, secado, clases, densidad, largos, separaciones, tornillería y comportamiento no acreditadas individualmente.

## PVP y unidad

Se adopta **m²** como unidad comercial, coherente con el resto de tarimas naturales.

Los importes base existentes se convierten a PVP con IVA incluido manteniendo su equivalencia económica:

- OUTDOOR CORE: **42,35 €/m²**
- OUTDOOR CLEAN: **83,49 €/m²**
- OUTDOOR SELECT: **156,09 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera`
- SEO title: `Natura Garapa | Tarima exterior de madera`
- Descripción HTML limpia y semántica.
- Se mantiene el perfil de referencia 21 × 145 mm como dato declarado, sujeto a confirmación de lote/stock.
- Se eliminan afirmaciones cerradas no respaldadas individualmente por ficha de proveedor.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `natural-decking`, precio 42,35 €, unidad m² y metafields 42,35 / 83,49 / 156,09 €.
- Theme MAIN contiene la plantilla compartida y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 35,00 € y metafields 35 / 69 / 129 €. Restaurar la medición unitaria si fuera necesario.
