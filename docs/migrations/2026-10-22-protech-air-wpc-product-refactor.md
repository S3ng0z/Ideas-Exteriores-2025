# ProTech Air · refactorización de producto y PVP

**Fecha:** 2026-10-22
**Ámbito:** Shopify Product + Shopify Theme
**Rama:** `main`
**Producto:** `gid://shopify/Product/15458606514520`
**Handle:** `wpc-hollow-decking-standard`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.decking`, que es el patrón vigente usado por la familia y por Natura Iroko.

La plantilla `product.decking` se hace material-agnóstica para que pueda servir a madera natural, WPC y bambú sin introducir terminología incorrecta. Se mantiene la misma arquitectura: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

## Hallazgos previos

El catálogo maestro marca ProTech Air como P0 en UX/arquitectura y registra 27,90 / 64,90 / 159 € como precios base. Las auditorías internas exigen homologar unidad, perfiles, kits, subestructura, clips, dilatación, garantía y reposición.

La descripción legacy incluía CSS embebido y afirmaciones categóricas sobre coextrusión, resbaladicidad, norma, separación de apoyos, ventilación y comportamiento superficial que deben depender de ficha/ensayo del perfil suministrado.

## PVP y unidad

Se adopta **m²** como unidad comercial.

Los importes base se convierten a PVP con IVA incluido manteniendo equivalencia económica:

- OUTDOOR CORE: **33,76 €/m²**
- OUTDOOR CLEAN: **78,53 €/m²**
- OUTDOOR SELECT: **192,39 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `decking`
- `productType`: `Tarima exterior WPC`
- SEO title: `ProTech Air | Tarima exterior WPC alveolar`
- Descripción HTML limpia y semántica.
- Se conserva como referencia el ancho aproximado 145 mm y espesor 21–22 mm.
- Composición, largo, perfil, fijaciones, subestructura, rendimiento, juntas, prestaciones superficiales y garantía quedan sujetos a documentación del fabricante/lote.
- Se evita prometer antideslizamiento, ausencia de mantenimiento o prestaciones no acreditadas.

## QA

- `productUpdate`: sin errores.
- `productVariantsBulkUpdate`: sin errores.
- `metafieldsSet`: sin errores.
- Lectura posterior confirma producto ACTIVE, plantilla `decking`, precio 33,76 €, unidad m² y metafields 33,76 / 78,53 / 192,39 €.
- Theme MAIN contiene `templates/product.decking.json` actualizado y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio 27,90 € y metafields 27,90 / 64,90 / 159 €. Restaurar la medición unitaria si fuera necesario.
