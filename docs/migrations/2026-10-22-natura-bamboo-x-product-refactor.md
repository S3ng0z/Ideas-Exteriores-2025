# Natura Bamboo X · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458649243992`  
**Handle:** `outdoor-bamboo-decking-densified-thermo`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por una plantilla específica compartiendo la misma arquitectura visual que `product.natural-decking`: `product.bamboo-decking`.

La separación es intencionada: el bambú densificado no debe etiquetarse como madera natural. La nueva plantilla conserva hero, ficha/galería, comparador, proceso, recomendaciones y CTA, pero adapta el lenguaje material.

## Hallazgos previos

El catálogo maestro identifica el producto como P0 y registra 72 / 109 / 189 € como precios de referencia existentes, con unidad de venta no acreditada originalmente y revisión técnica/costes requerida. La descripción legacy incluía CSS embebido y afirmaciones concretas sobre fabricante, sistema de fijación, testas, rendimiento e instalación que deben quedar sujetas a confirmación de referencia/lote y documentación del sistema.

## PVP y unidad

Se adopta **m²** como unidad comercial, coherente con la familia de tarimas.

Los importes base se convierten a PVP con IVA incluido manteniendo equivalencia económica:

- OUTDOOR CORE: **87,12 €/m²**
- OUTDOOR CLEAN: **131,89 €/m²**
- OUTDOOR SELECT: **228,69 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `bamboo-decking`
- `productType`: `Tarima exterior de bambú`
- SEO title: `Natura Bamboo X | Tarima exterior de bambú`
- Descripción HTML limpia y semántica.
- Se mantiene el formato 1850 × 137 × 18 mm como dato declarado.
- El rendimiento geométrico se expresa como aproximación y no sustituye el rendimiento útil de pedido.
- Se eliminan afirmaciones categóricas no respaldadas individualmente por documentación del suministro.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `bamboo-decking`, precio 87,12 €, unidad m² y metafields 87,12 / 131,89 / 228,69 €.
- Theme MAIN contiene `templates/product.bamboo-decking.json` y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 72,00 € y metafields 72 / 109 / 189 €. Restaurar la medición unitaria si fuera necesario.
