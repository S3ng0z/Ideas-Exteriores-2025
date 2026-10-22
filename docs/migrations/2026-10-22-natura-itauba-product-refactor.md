# Natura Itaúba · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458652520792`  
**Handle:** `outdoor-hardwood-decking-itauba`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.natural-decking`, ya validada con Natura Iroko y basada en el patrón de producto de FREJA/ALICE: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

La plantilla se ha neutralizado para eliminar referencias específicas a Iroko y poder reutilizarla correctamente en toda la familia de tarima natural.

## Hallazgos previos

El catálogo maestro y las auditorías internas identifican Itaúba como P0 en UX/arquitectura y señalan como riesgos: unidad comercial no acreditada originalmente, coste real/margen no acreditados, necesidad de validar perfil, largos, acabado, rendimiento, subestructura, fijaciones, origen y documentación del proveedor.

La descripción legacy incluía CSS embebido y afirmaciones técnicas específicas no respaldadas por la auditoría individual.

## PVP y unidad

Se adopta **m²** como unidad comercial para la ficha, coherente con Natura Iroko.

Los importes base existentes se convierten a PVP con IVA incluido aplicando el mismo criterio comercial:

- OUTDOOR CORE: **54,45 €/m²**
- OUTDOOR CLEAN: **95,59 €/m²**
- OUTDOOR SELECT: **175,45 €/m²**

La variante principal se configura con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera`
- SEO title: `Natura Itaúba | Tarima exterior de madera`
- Descripción HTML limpia y semántica.
- Se mantiene el perfil de referencia 95 × 21 mm como dato declarado, sujeto a confirmación de lote/stock.
- Se eliminan CSS embebido y afirmaciones cerradas sobre distancias, especie botánica, prestaciones o mantenimiento cuando no están acreditadas individualmente.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `natural-decking`, precio 54,45 €, unidad m² y metafields 54,45 / 95,59 / 175,45 €.
- Theme MAIN contiene la plantilla actualizada y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 45,00 € y metafields 45 / 79 / 145 €. Restaurar la medición unitaria si fuera necesario.
