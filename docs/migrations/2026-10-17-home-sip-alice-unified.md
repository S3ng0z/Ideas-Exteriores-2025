# HOME-SIP ALICE · unificación de ficha (CAT-019 · 2026-10-17)

## Alcance y fuentes
- Catálogo maestro unificado, CAT-019; documento comercial y auditorías de arquitectura/data, técnica, UX y pricing en Google Drive.
- Shopify Admin: producto `gid://shopify/Product/15218578587992`, `home-sip-alice-117-m-terraza`, status ACTIVE; plantilla original `home-sip`.
- Referente de organización visual: FREJA TIMBER HOME / `product.entramado-ligero`.
- Arquitectura objetivo: plantilla SIP compartida `product.casas-sip` (hero, ficha/galería, comparador, proceso, recomendaciones y CTA). No reutilizar `entramado-ligero` porque se trata de otro sistema constructivo.

## Cambios en tema (GitHub main)
- Resumen específico de ALICE en hero (117 m² nominales = 103 + 14; terraza externa 60 m²; tres dormitorios; dos baños) con la estética compacta de FREJA.
- Nota de IVA del comparador específica de ALICE: se refleja el IVA incluido declarado en los precios publicados, sin presentarlo como presupuesto cerrado.
- No se modifica el contenido técnico íntegro existente de BASIC, STANDARD ni PASSIVE; se mantiene su advertencia de revisión documental.
- No se modifican los demás modelos, colecciones, CSS compartido ni arquitectura de checkout.

## Datos comerciales y controles
- BASIC 65.122,00 €; STANDARD 102.960,00 €; PASSIVE 205.920,00 € (variantes y metafields de Shopify, validados).
- `custom.technical_status=review_required`; `custom.commercial_mode=quote`; `custom.price_mode=on_request`.
- Precaución: superficies nominales no equivalen automáticamente a superficie útil/construida; no afirmar conformidad CTE, aislamiento global, fuego ni Passivhaus sin proyecto/evidencia.
- Previos a la aprobación definitiva: planos acotados, sección y fabricante SIP, adhesivo, encuentros, cubierta, soportes, humedad, cálculos CTE y desglose económico por nivel.

## Shopify Admin y QA de publicación
- La ficha específica debe homogeneizarse con el bloque semántico `ie-model-spec` como FREJA, conservando el sistema SIP.
- La asignación a `casas-sip` y la revisión del título/SEO son operaciones de producto en Shopify Admin, separadas del commit en GitHub.
- Verificar lectura posterior de plantilla, título, SEO, HTML, los tres precios y status. Comprobar la página pública y el tema MAIN por separado: commit GitHub no es por sí solo prueba de sincronización.
- Rollback: reponer `home-sip`, el título/SEO y `descriptionHtml` desde `docs/backups/2026-10-17-home-sip-alice-before.json`; revertir este commit en tema si procede.
