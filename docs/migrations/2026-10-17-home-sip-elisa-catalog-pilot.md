# HOME-SIP ELISA · Piloto de saneamiento de ficha · 17/10/2026

## Identidad y alcance
- Catálogo maestro: CAT-023, modelo HOME-SIP ELISA, familia Casas panel SIP.
- Shopify Product: `gid://shopify/Product/15218583503192`, handle `home-sip-elisa-77-m-terraza`, template `product.casas-sip`.
- Variante única real: `gid://shopify/ProductVariant/55382601662808`; BASIC, STANDARD y PASSIVE están expresados como metafields de precio, no como tres variantes comprables.
- Importes conservados: BASIC 42.858 €, STANDARD 67.760 €, PASSIVE 135.520 €. No cambiar variante ni metafields monetarios.
- Ficha de partida conservada en `docs/product-migrations/2026-10-17-home-sip-elisa-before.json`; HTML limpio propuesto en `docs/product-migrations/2026-10-17-home-sip-elisa-description.html`.

## Decisión de arquitectura
- Mantener un Product para el modelo, sin duplicarlo ni crear template nominal.
- Mantener `product.casas-sip.json`; el aviso acotado por handle queda temporalmente en el hero compartido, sin datos numéricos hardcoded. Cuando se aprueben los metafields tipados de superficies y estado técnico, sustituir este guard por datos maestros.
- Mover CSS e interacciones de la descripción fuera del campo merchant-managed. Eliminar formulario oculto `/cart/add` y enlaces de compartir `href="#"`; el theme resuelve acciones y presentación.
- La descripción conserva solo datos comerciales ya existentes y exige verificación documental de las superficies. SEO title y meta proceden de CAT-023.
- No crear SKUs ficticios para paquetes ni publicar prestaciones de una memoria técnica sin aprobación.

## Validación y criterios de aceptación
1. Producto y handle idénticos; estado ACTIVE y templateSuffix `casas-sip`.
2. Descripción sin `<style>`, `<script>`, `<form>`, Liquid `{{...}}` ni enlaces `#` sin destino.
3. Superficie de planta 77 m² y terraza cubierta 34 m² rotuladas por separado como referencias comerciales.
4. El hero advierte que paquetes no son certificaciones y que debe cotejarse alcance.
5. Precio principal, metafields BASIC/STANDARD/PASSIVE e inventario inalterados.
6. Verificar PDP en desktop/mobile, accesibilidad de encabezados, schema Product, enlaces y formulario de presupuesto; QA visual en theme activo no inferible solo desde Git.
7. Validación comercial y técnica pendiente: memoria SIP, espesores, uniones, prestaciones térmicas/acústicas/incendio, superficies, partidas BASIC/STANDARD/PASSIVE, costes, IVA y condiciones logísticas.

## Rollback
- Shopify: restaurar el `descriptionHtml`, `productType` y `seo` guardados en el JSON de backup con la misma identidad de Product.
- Theme: revertir el commit GitHub que incluye el aviso específico o eliminar el aviso guardado por handle.
- No cambiar estado de publicación, handle, IDs, precios, inventario, medios ni productos duplicados como KIT-SIP ELISA borrador.

## Dependencias de salida
Arquitectura revisada contra los documentos de 12/09 y las auditorías de 15–17/10. La aprobación humana de Técnico/Pricing para prestaciones/precios es una tarea separada de la higienización de código y contenido.
