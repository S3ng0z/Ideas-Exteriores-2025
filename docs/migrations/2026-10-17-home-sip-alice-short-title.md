# HOME-SIP ALICE · título editorial corto

Fecha: 2026-10-17.

- **Producto Shopify:** `gid://shopify/Product/15218578587992` (identificador estable, independiente del handle).
- **Objetivo:** mostrar exclusivamente `HOME-SIP ALICE` en H1 principal y último breadcrumb, siempre en mayúsculas.
- **Archivo:** `sections/ie-sip-product-hero.liquid`; variable `ie_display_title` reutilizada por H1 y snippet global `ie-breadcrumb`.
- **Ámbito:** solamente Alice; el resto de modelos SIP mantienen sus nombres existentes.
- **Sin modificaciones:** nombre/handle del producto Shopify, SEO, metadatos, precios, variantes, plantilla, imágenes, descripción y CSS.
- **Accesibilidad:** H1 único y miga de pan `aria-current="page"` preservados. El mismo breadcrumb alimenta JSON-LD.
- **Reversión:** restaurar `current_title: product.title`, expresión del H1 y suprimir el condicional `ie_display_title`.
- **Control de publicación:** verificar GitHub `main` y contenido efectivo de la sección en Shopify Theme `MAIN`; comprobar H1/breadcrumb en URL pública.
