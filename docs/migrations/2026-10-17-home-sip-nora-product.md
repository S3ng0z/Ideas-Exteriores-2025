# HOME-SIP NORA · CAT-021 · implementación (2026-10-17)

Producto Shopify: gid://shopify/Product/15218583732568
Variante: gid://shopify/ProductVariant/55382605103448
Handle: home-sip-nora-89m-terraza
Template suffix: casas-sip
PVP conservado: 51.207,00 EUR

## Fuentes
Catálogo maestro unificado 16-10-2026, fila CAT-021; auditorías de Shopify/Data, SEO, UX/CRO, arquitectura técnica, producto y compras en carpeta del proyecto. Validado contra Shopify Admin en sesión de 17-10-2026.

## Refactorización
Se ha actualizado la descripción en Shopify Admin eliminando estilos y formularios legacy, enlaces # e iconos duplicados de contacto. La información se entrega como HTML semántico, con clase raíz específica ie-sip-nora.

Campos: productType=Casas panel SIP; SEO title="HOME-SIP NORA | Casa con panel SIP 89 m²"; SEO description="Conoce HOME-SIP NORA, casa con panel SIP de 89 m². Compara distribución, prestaciones documentadas y qué incluye el precio de partida."; custom.technical_status=review_required.

Se mantiene el título existente, URL, imágenes, estado ACTIVE, inventario, precio de variante y los tres metafields de BASIC/STANDARD/PASSIVE. Los últimos tres precios no se consideran variantes comprables acreditadas. La salvaguarda preexistente de sections/ie-sip-product-packages.liquid oculta las tarjetas de paquetes cuando technical_status=review_required, *si ese código está desplegado en el tema efectivo*.

## Datos y reservas técnicas
Planta baja 62,6 m²; altillo 25,9 m²; suma 88,5 m², redondeada a 89 m² nominales. Terraza separada de 42,9 m². Clasificación útil/construida sin confirmar documentalmente. Un modelo separado KIT-SIP NORA (handle nora) permanece DRAFT y no se toca.

Antes de aprobar los paquetes: memoria técnica del fabricante (caras, EPS/aislante, adhesivo, espesores, uniones, cubierta, encuentros y humedad), planos de superficie, CTE aplicable, inclusiones/exclusiones económicas, transporte, montaje y margen. No afirmar certificación Passivhaus a partir de etiqueta PASSIVE.

## QA / rollback
Shopify Admin guardó la mutación productUpdate sin userErrors. Comprobar lectura tras escritura, storefront en móvil y desktop, renderización de fichas, CTA y que la plantilla publicada coincida con la rama main (commit en GitHub por sí solo no despliega tema Shopify). Para rollback se necesita copia anterior de descriptionHtml de Shopify: no está guardada en este archivo; debe recuperarse del historial/copia previa. Antes de esta intervención productType estaba vacío, SEO title y SEO description eran null y custom.technical_status no existía. No eliminar el metafield de revisión hasta la aprobación técnica y comercial.

Fuentes de verdad: Shopify Admin para el producto, catálogo maestro para el criterio comercial, GitHub main para el CSS del tema.
