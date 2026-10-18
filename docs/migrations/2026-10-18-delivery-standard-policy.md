# Política comercial de transporte estándar + extras — 18/10/2026

## Decisión de negocio
El precio del producto no incluye por defecto servicios logísticos. IDEAS EXTERIORES cotiza el transporte por separado por modelo/dirección, mediante una modalidad base de entrega al punto pactado accesible para vehículo. La descarga no forma parte de ese servicio base: el cliente aporta medios seguros y personal adecuado o contrata su descarga con precio independiente. Ningún servicio opcional se ejecuta ni factura sin aceptación previa.

## Opcionales de pago
Descarga con grúa, cambio de vehículo/ruta, traslado dentro de parcela, instalación, coordinaciones especiales y reprogramación o almacenaje solicitado: sujetos a disponibilidad, viabilidad y presupuesto desglosado con impuestos aplicables. No se ofrecen tarifas universales ni plazos de entrega no validados.

## Protección económica y obligaciones
- Recopilar dirección completa, fotos, medidas y restricciones antes de cotizar y programar, para evitar entregas fallidas.
- Formalizar alcance, destino, medio previsto, precio, impuestos y plazo o fecha acordada. Acordar el momento del pago según el presupuesto.
- Un extra derivado de cambios del cliente se presupuestará y aceptará antes de la intervención; no cargar tasas imprevistas unilateralmente.
- No trasladar al cliente costes propios imputables a IDEAS EXTERIORES ni limitar derechos de consumidores por entrega, riesgos, daños o falta de conformidad.
- Mantener los arts. 66 bis/ter del Real Decreto Legislativo 1/2007 y comprobar la clasificación del contrato.

## Arquitectura
Se modifica únicamente la sección `sections/ie-home-delivery.liquid` y el CSS local `assets/ie-home-delivery.css`. Se conserva la Page Shopify y la plantilla `page.home-delivery.json`. Un único H1, anclas válidas, no dependencias del handle, sin JS.
Benchmark y contexto: `docs/migrations/2026-10-18-home-delivery-page.md`.

## QA y reversión
Validar schema JSON, Liquid, CSS, anchors y un solo H1. Revisar redacción jurídica/comercial antes de otorgarle rango de condición general contractual. Probar móvil, tableta y escritorio, verificar sincronización de GitHub con el tema publicado. Revertir commit/PR si fuese necesario.
