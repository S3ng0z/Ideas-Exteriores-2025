# ProTech Bio · refactorización de producto, arquitectura y PVP

**Fecha:** 2026-10-22  
**Ámbito:** Shopify Product + arquitectura de Shopify Theme  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458599272792`  
**Handle:** `eco-biocomposite-decking-rice-husk`

## Fuentes y validación previa

Se contrastan el catálogo maestro unificado y las auditorías internas de arquitectura/data, pricing, técnica y UX/CRO del proyecto. La referencia ProTech Bio corresponde a una tarima tecnológica/biocomposite y el flujo comercial se plantea por superficie.

Las auditorías requieren evitar afirmaciones técnicas no acreditadas y confirmar, antes de contratar, perfil y lote reales, rendimiento, subestructura y fijaciones, juntas, prestaciones superficiales, garantía, stock, transporte y montaje.

## Decisión de arquitectura

Se sustituye la plantilla legacy `desk` por la plantilla maestra compartida `product.decking`.

No se crea CSS, Liquid ni una plantilla específica para ProTech Bio. La arquitectura vigente ya es material-agnóstica y mantiene el patrón visual validado en la familia de tarimas y alineado con las PDP de referencia: hero editorial, galería/ficha técnica, comparador de alcance, proceso, recomendaciones y CTA.

La información específica del producto permanece en Shopify Product y metafields. El sistema visual se mantiene en los componentes compartidos y en `assets/ie-decking-layout.css`.

## Descripción técnica

Se elimina la descripción legacy con CSS embebido, contacto duplicado y afirmaciones categóricas no documentadas.

La nueva descripción:
- usa HTML semántico con H2 y listas;
- conserva como referencia comercial el formato 2500 × 150 × 21 mm, sujeto a confirmación de lote;
- presenta el componente vegetal de cáscara de arroz como información de la ficha comercial asociada al producto;
- condiciona fijación, subestructura, juntas, apoyos y prestaciones al sistema realmente suministrado;
- no promete ausencia de mantenimiento, antideslizamiento, resistencia UV u otras prestaciones sin documentación técnica;
- explica claramente CORE, CLEAN y SELECT y las partidas que deben cerrarse en oferta.

## PVP y unidad comercial

Se normaliza la venta por **m²** y se configura la variante con medición `1 m² / 1 m²`.

Los importes de referencia anteriores se convierten a PVP con IVA incluido, manteniendo su equivalencia económica:

- OUTDOOR CORE: 34,90 € → **42,23 €/m²**
- OUTDOOR CLEAN: 99,90 € → **120,88 €/m²**
- OUTDOOR SELECT: 179,00 € → **216,59 €/m²**

La cantidad final de lamas, merma, remates y componentes se calcula con la geometría real y el perfil confirmado.

## Shopify Product

- `templateSuffix`: `decking`
- `productType`: `Tarima exterior WPC`
- SEO title: `ProTech Bio | Tarima exterior tecnológica WPC`
- SEO description y metafields globales legacy sincronizados
- variante principal: 42,23 € con `showUnitPrice=true` y referencia 1 m²
- `custom.price_basic`: 42,23 €
- `custom.price_standard`: 120,88 €
- `custom.price_passive`: 216,59 €
- descripciones BASIC/STANDARD/PASSIVE reemplazadas por alcances sobrios y verificables

Se conservan título, handle, imágenes, estado ACTIVE y breadcrumbs existentes.

## QA

- `productUpdate`: sin `userErrors`
- `productVariantsBulkUpdate`: sin `userErrors`
- `metafieldsSet`: sin `userErrors`
- la arquitectura compartida `templates/product.decking.json` ya existe en `main`
- no se modifica ningún componente compartido porque la plantilla actual ya cubre WPC sin introducir terminología de madera natural

## Rollback

Restaurar `templateSuffix=desk`, `productType` vacío, descripción y SEO anteriores, variante a 34,90 € sin medición unitaria y metafields de precio a 34,90 / 99,90 / 179,00 €.
