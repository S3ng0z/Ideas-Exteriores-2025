# Natura Ipé · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458638102872`  
**Handle:** `outdoor-hardwood-decking-ipe`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.natural-decking`, ya validada en la familia de tarimas naturales y alineada con el patrón FREJA/ALICE.

## Hallazgos previos

El catálogo maestro y las auditorías internas marcan Ipé como P0 en UX/arquitectura. Riesgos principales: unidad comercial no acreditada originalmente, coste/margen no acreditados y necesidad de validar perfil, largos, selección, acabado, rendimiento, subestructura, fijaciones, origen y documentación de proveedor.

La descripción legacy mezclaba contenido de producto con referencias de catálogo/proveedor, precios por UM y JSON-LD manual, generando riesgo de inconsistencia y mantenimiento.

## PVP y unidad

Se adopta **m²** como unidad comercial.

Los importes base 92 / 132 / 199 € se convierten a PVP con IVA incluido manteniendo su equivalencia económica:

- OUTDOOR CORE: **111,32 €/m²**
- OUTDOOR CLEAN: **159,72 €/m²**
- OUTDOOR SELECT: **240,79 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera`
- SEO title: `Natura Ipé | Tarima exterior de madera`
- Descripción HTML limpia y semántica.
- Se mantiene el perfil de referencia 20–21 × 100 mm.
- Largos, selección, mecanizado, acabado, origen y fijaciones quedan sujetos a confirmación de lote/proveedor.
- Se eliminan afirmaciones cerradas no respaldadas individualmente y referencias comerciales de terceros incrustadas en la ficha.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `natural-decking`, precio 111,32 €, unidad m² y metafields 111,32 / 159,72 / 240,79 €.
- Theme MAIN contiene la plantilla compartida y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 92,00 € y metafields 92 / 132 / 199 €. Restaurar la medición unitaria si fuera necesario.
