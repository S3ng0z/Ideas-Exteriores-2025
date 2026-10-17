# HOME-SIP · paridad visual de los nueve modelos (2026-10-17)

## Diagnóstico
La plantilla Shopify `casas-sip` ya estaba asignada a los nueve productos. Sin embargo, `ie-sip-product-summary` resolvía los modelos mediante handles españoles antiguos y los handles canónicos vigentes usan `sqm-terrace`. Como consecuencia, el resumen comercial faltaba en las nueve fichas, incluida ALICE. Además, el hero abreviaba H1 y aplicaba breadcrumb en mayúsculas solo al ID de ALICE.

## Corrección en GitHub main
- Resolver datos del resumen con el identificador estable de Shopify `product.id`, no con rutas localizadas o traducidas.
- Usar en todos los modelos un H1 editorial breve (`HOME-SIP MODELO`) separado del título SEO y del nombre completo del producto.
- Igualar la capitalización del breadcrumb en las fichas `casas-sip`.
- Mantener una única plantilla, sección, CSS y tres tarjetas de paquetes; no duplicar por producto.
- Conservar metros, dormitorios, baños y superficies exteriores propios; la naturaleza útil/construida sigue pendiente de planos.
- No modificar las tarifas ni atribuir certificación Passivhaus a la denominación PASSIVE.

## Lista de productos
- 15218578587992: home-sip-alice-117-m-terraza
- 15218583896408: home-sip-valeria-97-m-terraza
- 15218583732568: home-sip-nora-89m-terraza
- 15218583634264: home-sip-naiara-56-m-terraza
- 15218583503192: home-sip-elisa-77-m-terraza
- 15218583306584: home-sip-arlet-187-m-terraza
- 15218583241048: home-sip-laia-106-m-terraza
- 15218582552920: home-sip-camelia-163-m-terraza
- 15218578686296: home-sip-luna-129-m-terraza

## QA
Comprobar en Shopify Admin el campo `templateSuffix=casas-sip` de cada producto; verificar en el tema MAIN la sincronización de los ficheros `snippets/ie-sip-product-summary.liquid` y `sections/ie-sip-product-hero.liquid`; probar responsive, breadcrumbs, fichas y accesibilidad.

La publicación del commit GitHub no acredita por sí misma un despliegue en Shopify Theme MAIN.
