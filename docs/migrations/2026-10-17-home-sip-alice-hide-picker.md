# HOME-SIP ALICE · ocultación del selector de variantes (2026-10-17)

## Petición
Retirar el bloque visual «Configuración» con botones BASIC / STANDARD / PASSIVE señalado en una captura de la ficha pública. **No** eliminar la sección inferior de «Compara precio y alcance antes de decidir».

## Arquitectura
- La plantilla compartida `templates/product.casas-sip.json` contiene `product-details → group_JtXipy → variant_picker_nhbWcG`; se mantiene intacta para preservar los otros modelos SIP.
- El bloque de tema `blocks/variant-picker.liquid` no renderiza `variant-main-picker` únicamente si `product_resource.handle == 'home-sip-alice-117-m-terraza'`.
- No se usan `display:none` ni CSS global. No hay modificaciones del catálogo, Shopify Admin, las variantes ni los precios.
- La nota comercial `scope_note`, el ancla a `#ie-sip-packages` y el comparador de niveles del tema permanecen.
- Motivo comercial: ALICE tiene `custom.commercial_mode=quote`, `custom.price_mode=on_request` y `custom.technical_status=review_required`. La presentación comercial continúa requiriendo presupuesto y comprobación técnica.

## QA y aceptación
1. En el producto Alice no debe existir el `variant-picker` con el texto «Configuración» y los tres botones.
2. Otros productos SIP con variantes deben mantener el selector cuando corresponda.
3. El comparador inferior y el enlace a contacto deben seguir funcionando.
4. Verificar en Shopify Theme MAIN la actualización del archivo tras GitHub `main`; la sincronización de código por sí sola no constituye una prueba de renderizado responsive.
5. Confirmar en Shopify Admin que las variantes BASIC, STANDARD y PASSIVE no han cambiado.

## Reversión
Eliminar el guard de `blocks/variant-picker.liquid` y recuperar la llamada `{% render 'variant-main-picker', product_resource: product_resource %}`.
