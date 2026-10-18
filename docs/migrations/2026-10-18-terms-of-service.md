# Términos del servicio · Shopify nativo · 18/10/2026

## Decisión arquitectónica
La URL canónica es `/policies/terms-of-service`. La fuente jurídica única es Shopify > Configuración > Políticas > Términos del servicio (`TERMS_OF_SERVICE`); no duplicar la página pública ni usar un snippet como fuente contractual. La copia preparada para revisión y publicación está en `docs/migrations/2026-10-18-terms-of-service-body.html`.

## Base de negocio
Modelo preferente: catálogo de modelos estándar configurables, compra directa solo cuando hay alcance y precio cerrados; para soluciones de alto valor, solicitud de presupuesto contextualizada y aceptación expresa. Separar precio del bien de los servicios variables de transporte, descarga, grúa, montaje, bases, licencias y proyecto. Revisiones y extras solo por aceptación previa. No comprometer plazos universales ni cláusulas de pérdida de anticipo de carácter general.

## Marco y referencias
RDL 1/2007 (información precontractual, precio total, entrega, riesgo, desistimiento, excepciones del art. 103, conformidad y cláusulas abusivas); Ley 34/2002 (contratación electrónica); Código Civil y Código de Comercio cuando correspondan. Referencias competitivas aportadas: Maestro Casas, Pineca, Hobycasa, Casetas de Jardín 24, CADEMA, MNVEEK, Grupo Tene, Bosque Nórdico, La Casa Modular y Casas ECO. Se adoptan patrones de estructura, no texto copiado ni cláusulas incompatibles con el consumidor.

## Implementación y diseño
`layout/theme.liquid`: carga condicional de `assets/ie-terms-of-service.css` solo en `request.page_type == 'policy'` y `request.path == '/policies/terms-of-service'`. Paleta de marca, Manrope, Source Serif 4 y ancho legible; CSS derivado de la política de privacidad nativa ya implantada. No altera otras páginas/políticas ni modifica `shop.policies`.

## Validaciones y bloqueos
- El contenido de las condiciones no está publicado con el commit del tema: Shopify mantiene el documento legal fuera de GitHub.
- La conexión de Shopify registró falta del alcance `write_legal_policies` en la tarea de privacidad anterior. Es imprescindible verificar permisos antes de intentar una mutación; si sigue denegado, publicar desde Shopify Admin.
- Validar con asesoría el encaje por tipología contractual: compraventa de bienes, suministro con instalación, prestación de servicios y obras. Verificar NIF, domicilio, contacto, oferta y plazos de retención antes de uso.
- Comprobar que la política de reembolso no contradice la excepción de productos personalizados ni los 14 días generales de desistimiento.
- Revisar comunicación de confirmación electrónica, elección de pago, impuestos, costes variables y derechos en checkout.
- Realizar QA visual a 375, 768 y 1440 px, accesibilidad, un H1, enlaces, rutas internas, render del CSS en tema publicado y sincronización theme/GitHub.
- No se considera realizado un despliegue público ni certificación jurídica solo por fusionar GitHub main.

## Rollback
Revertir el commit de tema y restaurar contenido de política desde copia administrativa. No alterar políticas de privacidad, devoluciones ni envíos como efecto secundario.
