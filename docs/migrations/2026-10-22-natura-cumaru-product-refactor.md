# Natura Cumarú · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458651308376`  
**Handle:** `outdoor-hardwood-decking-cumaru`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.natural-decking`, ya validada con Natura Iroko e Itaúba y alineada con el patrón de producto de FREJA/ALICE: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

No se añaden componentes ni CSS específicos para Cumarú.

## Hallazgos previos

El catálogo maestro y las auditorías internas marcan el producto como P0 en UX/arquitectura. Los principales riesgos documentados son: unidad comercial no acreditada originalmente, coste real/margen no acreditados y necesidad de validar perfil, largos, acabado, rendimiento, subestructura, fijaciones, origen, certificaciones y documentación de proveedor.

La descripción legacy incluía CSS embebido y afirmaciones específicas sobre FSC, largos fijos, separación de rastreles, inox, densidad y comportamiento que no están individualmente acreditadas en la auditoría.

## PVP y unidad

Se adopta **m²** como unidad comercial para la ficha, en coherencia con Natura Iroko e Itaúba.

Los importes base existentes se convierten a PVP con IVA incluido manteniendo su equivalencia económica:

- OUTDOOR CORE: **62,92 €/m²**
- OUTDOOR CLEAN: **111,32 €/m²**
- OUTDOOR SELECT: **211,75 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera`
- SEO title: `Natura Cumarú | Tarima exterior de madera`
- Descripción HTML limpia y semántica.
- Se mantiene el perfil de referencia 19 × 90 mm como dato declarado, sujeto a confirmación de lote/stock.
- Se eliminan afirmaciones cerradas no respaldadas individualmente por ficha de proveedor.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `natural-decking`, precio 62,92 €, unidad m² y metafields 62,92 / 111,32 / 211,75 €.
- Theme MAIN contiene la plantilla compartida y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 52,00 € y metafields 52 / 92 / 175 €. Restaurar la medición unitaria si fuera necesario.
