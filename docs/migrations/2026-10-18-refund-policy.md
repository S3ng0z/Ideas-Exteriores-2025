# Política de reembolso · 18/10/2026

## Arquitectura
URL canónica /policies/refund-policy; Shopify Policy REFUND_POLICY es la fuente legal única. HTML de publicación propuesto guardado en docs/migrations/2026-10-18-refund-policy-body.html; no inyectarlo directamente en Liquid. CSS en assets/ie-refund-policy.css cargado solo para la ruta de reembolso.

## Modelo de negocio
Catálogo maestro consultado: 105 registros Shopify, 71 activos, 34 borradores, 74 entradas maestras, 52 BASIC/STANDARD/PASSIVE no necesariamente variantes comprables. Separar productos estándar, bienes realmente personalizados y servicios de transporte/montaje. Costes directos y estimación logística de retorno voluminoso deben informarse antes de la compra. No usar penalizaciones porcentuales automáticas.

## Marco
TRLGDCU arts. 97, 102–108 y garantías de conformidad. Plazo general 14 días naturales; excepción art. 103.c bajo requisitos; reembolso dentro de 14 días de comunicación salvo retención legal hasta recepción o prueba de devolución, lo primero; reembolso de entrega ordinaria inicial cuando corresponda; costes directos de retorno correctamente informados; no imponer embalaje original intacto como requisito general.

## Checklist
Validar con abogado contratos de obra/instalación y tratamiento de bienes personalizados; comprobar coherencia con /policies/terms-of-service, /pages/garantias-casas-madera-prefabricadas y /pages/transporte-entrega-casas-casetas-madera. Comprobar CSS real en tema publicado, accesibilidad, único H1, ancho móvil 375 px, tablet 768 px y desktop 1440 px. Shopify Admin > Configuración > Políticas requiere permisos write_legal_policies para API; la fusión en GitHub no actualiza el texto de Policy automáticamente.

## Reversión
Revertir commit del tema; para texto legal restaurar la versión anterior en Shopify Admin.
