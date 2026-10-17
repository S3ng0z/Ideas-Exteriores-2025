# Hub de casetas de madera · 17-10-2026

**Página:** `/pages/wooden-sheds-and-outbuildings` · Shopify Page ID `155531936088`

## Auditoría
- Página Shopify publicada; plantilla previa `producto`, con bloque genérico de contenido y un metafield editorial JSON.
- Metafield `custom.contenido_json` contiene enlaces heredados (`/collections/sip-smartfit`, `/collections/sip-compactkit`, `/products/poolhouse-oasis-plus`): no se reutilizan en la nueva plantilla porque no corresponden a los handles comerciales actuales.
- Catálogo maestro: casetas de entramado ligero, SIP SmartFit y SIP CompactKit; oficinas/estudios en familia propia; poolhouse como referencia de otra necesidad sin gama canónica verificada.
- Criterios rectores: documentos 01 (Brief), 03 (IA), 05 (catálogo), guía Natural Precision y diseño de `/pages/services`.

## Cambios
- `templates/page.wooden-sheds.json`: plantilla exclusiva, asignable mediante `Page.templateSuffix=wooden-sheds`.
- `sections/ie-sheds-hub.liquid`: H1 editorial, catálogo de tres colecciones reales con referencias nativas Shopify, guía de elección, destinos relacionados, FAQ y CTA de consulta.
- `assets/ie-sheds-hub.css`: estilos locales, diseño responsive 1/2/3 columnas y máximo 1600 px.
- Las URLs comerciales se obtienen de `collection.url` y `product.url`, evitando fallos por renombrar handles.
- No se alteran el resto de Pages, colecciones, productos, inventario ni precios.

## QA y verificación
- JSON de template y schema de sección deben validar.
- Cada colección citada debe existir en Shopify: `casetas-de-entramado-ligero`, `sip-smartfit-sheds`, `sip-compactkit-sheds`.
- Colección complementaria: `sip-offices-and-studios`. Producto complementario: `oasis-poolhouse-wood-aluminum`.
- UX: solo un H1, orden H2/H3, enlaces con foco accesible, imágenes `loading=lazy`, responsive y sin controles JS.
- Pendiente de verificar en un navegador real y de comprobar que la sincronización GitHub → tema publicado está activa.
- Para activar la nueva composición hay que actualizar únicamente la asignación de plantilla de la página Shopify a `wooden-sheds`.

## Reversión
- Restaurar la anterior `templateSuffix=producto` en Shopify. El campo de cuerpo y `custom.contenido_json` se conservan intactos.
- La reversión de GitHub es opcional, al no afectar las nuevas secciones a ninguna otra página.
