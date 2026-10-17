# HOME-SIP ALICE · eliminar selector de variantes visible en PDP

Fecha: 2026-10-17. Selección visual proporcionada en captura: caja «Configuración» con BASIC, STANDARD y PASSIVE en columna derecha, justo bajo enlace «Comparar configuraciones».

## Incidencia detectada
El bloque en el tema Shopify MAIN `blocks/variant-picker.liquid` conserva la condición antigua basada en `product_resource.handle == 'home-sip-alice-117-m-terraza'`, mientras que Shopify Admin tiene actualmente el handle `home-sip-alice-117sqm-terrace`. La condición antigua no oculta el selector. GitHub main ya contenía una condición por ID, pero aún no se había reflejado en el tema vivo al comprobarlo.

## Corrección
Se usa la ID Shopify inmutable `15218578587992` y una comprobación tanto en `product.id` como en `product_resource.id`, independiente de handles y parámetros de variante. Si se trata de Alice, no se renderiza el snippet `variant-main-picker`.

No se elimina el bloque de la plantilla SIP compartida (afectaría a otros modelos); no se cambian variantes, importes, campos o HTML de producto. El comparador inferior `#ie-sip-packages` y la nota de revisión comercial permanecen.

## QA y control de despliegue
1. GitHub main: inspeccionar el nuevo guard y el commit.
2. Shopify MAIN: releer `blocks/variant-picker.liquid` y comprobar que contiene la nueva condición.
3. Storefront: confirmar que Alice no presenta «Configuración» y que los demás productos SIP conservan el selector; revisar en escritorio y móvil.
4. Si la sincronización automática GitHub→Shopify no actualiza el tema, desplegar los archivos mediante la integración GitHub de Shopify o el editor del tema, sin afirmar que un commit GitHub equivale a despliegue.
