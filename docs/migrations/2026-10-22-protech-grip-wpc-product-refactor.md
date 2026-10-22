# ProTech Grip · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458600550744`  
**Handle:** `wpc-anti-slip-decking-pool`

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla compartida `product.decking`, patrón vigente de tarimas y ya validado en Natura Iroko y ProTech Air.

No se crea una plantilla ni CSS específicos para Grip. Se reutiliza la arquitectura material-agnóstica existente: hero, ficha/galería, comparador de alcance, proceso, recomendaciones y CTA. La información específica permanece en Shopify Product/metafields.

## Hallazgos previos

El catálogo maestro y las auditorías internas clasifican ProTech Grip como P0 y exigen homologar unidad comercial, perfil, rendimiento, subestructura, clips, dilatación, garantía y reposición.

La descripción legacy contenía CSS embebido y afirmaciones técnicas categóricas sobre largos, separación de apoyos, juntas, resbaladicidad, normas y tornillería que no estaban respaldadas por documentación individual del suministro.

Por ese motivo:
- se elimina el CSS de la descripción;
- se conserva como referencia el perfil 145 × 21 mm;
- la resistencia al deslizamiento queda condicionada a ficha/ensayo vigente del producto suministrado;
- no se publica una clase reglamentaria concreta sin evidencia aplicable;
- los parámetros de instalación dependen de la ficha técnica del perfil, soporte y condiciones de obra.

## PVP y unidad

Se adopta **m²** como unidad comercial, en coherencia con ProTech Air y con la arquitectura de tarimas.

Los importes anteriormente comunicados se convierten a PVP con IVA incluido manteniendo equivalencia económica:

- OUTDOOR CORE / precio principal: **33,76 €/m²**
- OUTDOOR CLEAN: **84,58 €/m²**
- OUTDOOR SELECT: **168,19 €/m²**

La variante principal queda configurada con medición `1 m² / 1 m²`.

## Shopify Product

- `templateSuffix`: `decking`
- `productType`: `Tarima exterior WPC`
- SEO title: `ProTech Grip | Tarima WPC para piscina 145×21`
- Descripción técnica limpia, semántica y sin CSS embebido.
- Se mantienen título, handle, imágenes, estado ACTIVE y tags existentes.
- Metafields `custom.price_basic`, `custom.price_standard` y `custom.price_passive`: 33,76 / 84,58 / 168,19 €.

## QA

- `productUpdate`: sin `userErrors`.
- `productVariantsBulkUpdate`: sin `userErrors`.
- `metafieldsSet`: sin `userErrors`.
- `templates/product.decking.json` existe en `main` y es la plantilla compartida vigente.
- La jerarquía visual y CSS proceden del sistema común de decking; no se añade deuda técnica específica de producto.

## Rollback

Restaurar `templateSuffix=desk`, `productType` vacío, descripción/SEO anteriores, precio de variante 27,90 €, metafields 27,90 / 69,90 / 139,00 € y retirar la medición m² si fuera necesario.
