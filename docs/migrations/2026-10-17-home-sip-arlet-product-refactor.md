# ARLET · refactorización del producto SIP · 2026-10-17

- **Product GID:** `gid://shopify/Product/15218583306584`
- **Variant GID:** `gid://shopify/ProductVariant/55382601236824`
- **Handle:** `home-sip-arlet-187-m-terraza`
- **Template suffix:** `casas-sip`
- **Ficha:** https://www.ideas-exteriores.com/products/home-sip-arlet-187-m-terraza
- **Fuente:** Catálogo maestro unificado, CAT-024, y auditorías técnicas, arquitectura/data, PO, SEO, UX y pricing.
- **Backup HTML exacto anterior:** `docs/backups/2026-10-17-home-sip-arlet-description.html`

## Estado de la intervención

1. Shopify Admin: descripción HTML sustituida por semántica de lectura sin estilos incrustados, formulario oculto ni enlaces ficticios; datos antiguos mantenidos como referencia comercial y condicionados a plano.
2. Shopify Admin: SEO específico de ARLET actualizado.
3. Shopify Admin: metafield `custom.technical_status=review_required` añadido. La sección `ie-sip-product-packages` ya interpreta este valor y oculta precios y descripciones de los tres paquetes, sustituyéndolos por una nota de revisión. Es indispensable verificar en storefront que el tema publicado contiene esta lógica.
4. Theme GitHub `main`: la sección `ie-sip-product-hero` muestra advertencia de revisión cuando dicho metafield está presente.
5. Sin cambios de precio, precio de variantes, imágenes, handle, estado de publicación ni asignación de plantilla.

## Datos observados y pendientes

- Precio variante por defecto: 104.084 € (BASIC según metafield), sin aprobación adicional.
- Metafields STANDARD: 164.560 € y PASSIVE: 329.120 €, **en revisión**.
- Ficha original: 187 m² = 127 m² planta baja + 60 m² planta alta; terraza exterior 31 m² y balcón cubierto 10 m². Falta aclarar naturaleza y perímetro de superficies mediante planos.
- Confirmar documentación del fabricante de paneles SIP, núcleo, adhesivo, caras, uniones, detalles de humedad, cubierta, huecos y justificaciones aplicables del CTE.
- Confirmar coste, IVA, transporte, descarga, montaje, licencias, cimentación, instalaciones y acabados en una oferta comparable.
- Los tres niveles de precios son metafields, **no** variantes Shopify comprables independientes.

## QA

- Admin: leer nuevamente descripción, SEO, precio, estado y metafield.
- GitHub: comprobar patch de hero y consistencia del estado `review_required`.
- Storefront: revisar vista desktop/mobile, HTML accesible, ausencia de CSS visible y enlaces válidos; confirmar presentación de bloqueo de paquetes, CTA y metadatos. No se puede declarar completado el despliegue de tema sin confirmar la sincronización de GitHub `main` con Shopify Theme MAIN.

## Rollback

1. Reponer descripción desde backup.
2. Restituir SEO previo (valores vacíos en Shopify Admin).
3. Retirar/ajustar `custom.technical_status` solo tras aprobación técnica, económica y editorial.
4. Revertir modificación del hero en GitHub si fuese necesario.

El producto permanece activo para consultas. Su información comercial y técnica continúa pendiente de aprobación documental.
