# Reorganización de garantías, transporte y pagos · 2026-10-18
## Decisión ejecutiva
Hub `/pages/warranty-delivery-payment-options` como única visión general de contratación. Tres páginas de detalle con intención SEO propia y política diferenciada:
- `/pages/garantias-casas-madera-prefabricadas`: conformidad de bienes, LOE cuando corresponda, responsabilidad, mantenimiento e incidencias.
- `/pages/transporte-entrega-casas-casetas-madera`: transporte estándar hasta punto accesible pactado; medios de descarga, maniobras, montaje y otros extras con presupuesto separado.
- `/pages/formas-de-pago-y-financiacion`: transferencia, financiación con entidad bancaria, tarjeta, confirming, efectivo y Bizum; medios habilitados y condicionados a oferta, validación bancaria y límites legales.
## Fuentes contrastadas
Carpeta Google Drive del proyecto: 01 Web Business Brief, 03 Arquitectura de Información + Sitemap, Diseño Técnico y catálogo maestro actualizado 17-10-2026. Migraciones especializadas existentes del 18-10-2026. Referencia visual: /pages/services.
Shopify Admin contrastado 18-10-2026: cuatro Pages publicadas con templateSuffix warranty-delivery-payment-options, house-warranties, home-delivery y payment-financing. Tema activo: Ideas-Exteriores-2025/main.
## Implementación
- Hub reutiliza secciones nativas ie-services y añade índice transversal independiente ie-policy-hub-nav (sin copiar contenidos legales completos).
- Navegación entre las cuatro URLs por un snippet y CSS scoped reutilizables; aria-current para estado activo; grid responsive.
- Breadcrumbs detalle: Inicio > Servicios > Garantía, entrega y formas de pago > Página de detalle, con respeto a jerarquías de metafields existentes.
- Las tres páginas de detalle conservan alcance técnico, FAQ y CTA propios.
## Invariantes de negocio / jurídicos
Sin precio, plazo, coste logístico fijo, cuotas ni tipo de interés inventado. Suministro estándar primero; extras explícitos con aceptación. Los derechos legales de consumo y LOE no quedan sujetos a ventanas de 48h, inspecciones de pago ni exclusiones indiscriminadas. No se cambian precios ni datos del catálogo maestro.
## Validaciones y publicación
Control estático en script de commit: JSON de plantilla y schema de section, enlaces reales contrastados en Shopify, H1 únicos (las 3 sections originales y hero de hub), inserción navegación por template y ausencia de CSS global. Revisión visual de 375/768/1440 y Theme Check por canal de despliegue pendiente de verificación independiente.
**Importante:** GitHub main es origen de código, no prueba de sincronización del tema MAIN de Shopify. Revisar timestamp/checksum de los archivos nuevos y del template de hub antes de declarar web publicada.
## Rollback
Revertir commit de esta intervención y verificar sincronización; ninguna migración de URL, asignación de Page, producto o catálogo es necesaria.
