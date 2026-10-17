# HOME-SIP LAIA · control de cambio (17-10-2026)

- Shopify Product GID: `gid://shopify/Product/15218583241048`.
- Variant GID: `gid://shopify/ProductVariant/55382600843608`.
- Handle: `home-sip-laia-106-m-terraza`.
- Referencia del catálogo maestro: CAT-025.
- Cambio aplicado directamente en Shopify Admin: solo `descriptionHtml`. Readback confirmado.
- HTML eliminado: bloque de estilos, formulario de compra oculto con Liquid sin procesar, enlaces sociales `href="#"`.
- Contenido añadido: superficie anunciada de 106 m² y terraza anunciada de 41 m² diferenciadas; descripción del sistema SIP, condiciones de presupuesto y CTA consultivo.
- Dato de superficie no homologado: verificar en planos si la terraza se incluye en los 106 m².
- No se cambiaron título, URL, variantes, precio BASIC 58.990 €, estado ACTIVE ni medios. Precios STANDARD 93.280 € y PASSIVE 186.560 € del catálogo maestro quedan pendientes de homologación.
- Arquitectura: el contenido específico del producto permanece en Shopify Product; la plantilla compartida SIP no se modifica. `main` ya contenía otro ajuste en el componente de paquetes y se preservó.
- Gates pendientes: técnico (planos, panel/uniones/CTE), pricing (alcance, márgenes, transporte y montaje), SEO y QA visual responsive.
- La actualización del contenido en Shopify no acredita publicación/sincronización del theme desde GitHub.

## Rollback
Restaurar el HTML original de `descriptionHtml` mediante historial/backup Shopify. La descripción original fue leída antes de la actualización; no se ha persistido copia íntegra en este commit. No revertir variantes, media ni metafields.

Fuente: catálogo maestro 16-10-2026, auditorías de Drive y lectura autenticada de Shopify Admin.
