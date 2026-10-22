# Natura Pino CL4 · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458645606744`  
**Handle:** `outdoor-pine-decking-uc4-treated`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.natural-decking`, ya validada en la familia de tarimas naturales y alineada con el patrón FREJA/ALICE.

No se crea una plantilla específica: sigue siendo tarima de madera natural, aunque tratada. La particularidad del tratamiento se resuelve en la ficha técnica y no en la arquitectura.

## Hallazgos previos

El catálogo maestro y las auditorías internas marcan el producto como P0 en UX/arquitectura. Riesgos principales: unidad comercial no acreditada originalmente, coste/margen no acreditados y necesidad de validar perfil, largos, tratamiento, subestructura, fijaciones, origen y documentación de proveedor.

La auditoría técnica exige no equiparar la clase de durabilidad natural con tratamiento y documentar expresamente cualquier afirmación `CL4`.

## PVP y unidad

Se adopta **m²** como unidad comercial.

Los importes base 24 / 49 / 99 € se convierten a PVP con IVA incluido manteniendo su equivalencia económica:

- OUTDOOR CORE: **29,04 €/m²**
- OUTDOOR CLEAN: **59,29 €/m²**
- OUTDOOR SELECT: **119,79 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera tratada`
- SEO title: `Natura Pino CL4 | Tarima exterior tratada`
- Descripción HTML limpia y semántica.
- Se mantiene el formato de referencia 27 × 145 mm.
- La mención CL4 se conserva como denominación comercial, pero su clase de uso/tratamiento debe quedar respaldada por documentación del lote/proveedor.
- Se eliminan afirmaciones cerradas no respaldadas individualmente sobre especie, largos, caras, distancias de apoyo, tornillería o prestaciones.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `natural-decking`, precio 29,04 €, unidad m² y metafields 29,04 / 59,29 / 119,79 €.
- Theme MAIN contiene la plantilla compartida y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 24,00 € y metafields 24 / 49 / 99 €. Restaurar la medición unitaria si fuera necesario.
