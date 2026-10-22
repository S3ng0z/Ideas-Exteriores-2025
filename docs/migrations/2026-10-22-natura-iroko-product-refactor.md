# Natura Iroko · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458653438296`  
**Handle:** `outdoor-hardwood-decking-iroko`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por `product.natural-decking`, derivada de la arquitectura probada de `product.entramado-ligero`: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA.

No se crean componentes ni CSS específicos para Iroko. El objetivo es reutilizar el sistema visual existente y mantener la información específica del producto en Shopify Product/metafields.

## Hallazgos previos

Las auditorías internas de pricing, técnica, UX y arquitectura coinciden en que la unidad comercial del precio no está acreditada documentalmente y que deben validarse referencia exacta, largos, rendimiento/merma, subestructura, fijaciones, acabado, stock, procedencia y condiciones de entrega.

Por ese motivo:
- no se publica equivalencia €/m² como hecho;
- la plantilla muestra "unidad a confirmar";
- se eliminan afirmaciones técnicas categóricas no respaldadas por documentación individual del suministro;
- el contenido dirige la decisión hacia material, kit coordinado o suministro con montaje.

## PVP

Los importes anteriormente comunicados como precios sin IVA se convierten a PVP final manteniendo su equivalencia económica:

- OUTDOOR CORE / precio principal: **95,59 €**
- OUTDOOR CLEAN: **143,99 €**
- OUTDOOR SELECT: **240,79 €**

Los metafields `custom.price_basic`, `custom.price_standard` y `custom.price_passive` se actualizan con esos importes. La unidad comercial permanece pendiente de confirmación antes de contratar.

## Shopify Product

- `templateSuffix`: `natural-decking`
- `productType`: `Tarima exterior de madera`
- SEO title: `Natura Iroko | Tarima exterior de madera`
- Descripción técnica saneada y semántica, sin H1 duplicado, JSON-LD embebido ni dependencias de clases legacy.
- Se mantienen título, handle, imágenes, estado ACTIVE y breadcrumbs/metafields existentes.

## QA

- `productUpdate`: sin `userErrors`.
- `productVariantsBulkUpdate`: sin `userErrors`.
- `metafieldsSet`: sin `userErrors`.
- Lectura posterior confirma plantilla, tipo, SEO, variante 95,59 € y metafields 95,59 / 143,99 / 240,79 €.
- Shopify Theme MAIN contiene `templates/product.natural-decking.json` y no reporta fallo de procesamiento.

## Rollback

Restaurar `templateSuffix=desk`, descripción/SEO anteriores, precio de variante 79,00 € y metafields 79 / 119 / 199 €. Eliminar `templates/product.natural-decking.json` solo si ningún otro producto lo utiliza.
