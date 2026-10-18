# Formas de pago y financiación · 2026-10-18

## Objetivo y arquitectura
URL prevista: `/pages/formas-de-pago-y-financiacion`; template exclusiva `page.payment-financing.json`. Página informativa en EMPRESA / Condiciones de contratación, complementaria a `/pages/warranty-delivery-payment-options` y `/pages/transporte-entrega-casas-casetas-madera`. No modificar páginas existentes.
Fuentes: 01 Web Business Brief, 03 Arquitectura y Sitemap, 05 Catálogo/Modelo de Datos, guía de diseño Natural Precision; catálogo maestro con precio/alcance sujetos a aprobación.
Competencia aportada: EuroCasetas, SODO Casa, Las Casas Madera, Lercasa, NHS Natural Home, TecnoHome, Moodul, NIDO45, Box House y Tu Fábrica de Casas. Sus anticipos y calendarios no constituyen condiciones propias de IDEAS EXTERIORES.

## Decisiones editoriales
- Compra directa: los métodos habilitados se muestran en el checkout; no presumir tarjeta/transferencia/PayPal.
- Presupuesto: el medio, importe, vencimientos y calendario se fijan en la oferta y contrato específicos. Sin porcentajes automáticos.
- Financiación: no consta oferta verificada de financiación propia, crédito intermediado, cuotas, TAE o banco colaborador. Se explica consulta independiente con entidad bancaria y posible préstamo autopromotor sujeto a requisitos.
- Referencia Banco de España: https://clientebancario.bde.es/pcb/es/blog/construye-tu-propia-casa-y-financiala.html
- Las garantías sobre cantidades anticipadas para vivienda en construcción pueden requerir protección específica según legislación aplicable; revisión jurídico-comercial antes de fijar política estándar.

## Implementación
`sections/ie-payment-financing.liquid` usa Liquid SSR, sin guardas por page.handle, un único H1, 3 modalidades, cronología no contractual, guía de financiación, checklist, FAQ y CTA.
`assets/ie-payment-financing.css` CSS scoped y responsive, con Manrope y Source Serif 4, paleta Bone/Ink/Forest.
`templates/page.payment-financing.json` plantilla Shopify OS 2.0 exclusiva.
Shopify Page nueva debe tener `templateSuffix=payment-financing`, SEO específico, descripción breve.

## QA pendiente en producción
Validación estática JSON/schema/anclas/URLs/H1; Theme Check y vistas 375, 768, 1440; verificación independiente de sincronización del tema activo y checkout, confirmación comercial y legal del lenguaje.
Rollback: despublicar nueva página o reasignar template; revertir PR sin impacto en catálogo, productos o páginas existentes.
