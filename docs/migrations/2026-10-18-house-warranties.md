# Garantías de casas de madera y prefabricadas · 2026-10-18

## Objetivo y arquitectura
Landing informativa y de confianza en territorio EMPRESA / Garantías y mantenimiento. URL prevista: `/pages/garantias-casas-madera-prefabricadas`. No sustituye `/pages/warranty-delivery-payment-options` (entrega y pagos) ni ninguna política contractual. Referencia visual: `/pages/services`.

Fuentes directivas: 01 Business Brief; 03 Arquitectura y Sitemap; 05 Catálogo / Modelo de Datos; guía visual Natural Precision. Mercado España. Referencias competitivas recibidas: Maestro Casas, Pineca, Hobycasa, SODO Casa, Caleba, NorgesHus, Arbola House, Grupo Amara, ModuÁgora y Casas Natura; se analizan como benchmark, no se trasladan sus plazos como compromisos propios.

## Criterio jurídico-editorial
- Real Decreto Legislativo 1/2007, texto refundido Ley General para la Defensa de Consumidores y Usuarios: faltas de conformidad de bienes que se manifiesten dentro de tres años de entrega conforme a condiciones legales, cuando se trate de compraventa de bienes a consumidores aplicable.
- Ley 38/1999 de Ordenación de la Edificación, artículo 17: responsabilidad de agentes por daños materiales en edificios que entren en su ámbito; 1 año terminación/acabado, 3 años habitabilidad y 10 años daños estructurales que comprometan resistencia y estabilidad. Los plazos no son una garantía comercial universal de diez años para todo kit.
- Las garantías comerciales adicionales son voluntarias, expresas y no sustituyen derechos legales. No se anuncian coberturas propias adicionales no aprobadas.
- Es necesario revisar contrato, agentes, ámbito jurídico, aceptación de obra, configuración, uso y condiciones técnicas particulares. Revisión jurídica de publicación final recomendable.

## Implementación
- `sections/ie-house-warranties.liquid`: landing semántica con un H1, tres regímenes, verificación documental, proceso de incidencias, FAQ y CTA.
- `assets/ie-house-warranties.css`: CSS exclusivo, responsive y accesible, tipografías Source Serif 4 y Manrope y paleta corporativa.
- `templates/page.house-warranties.json`: plantilla OS2.0 exclusiva; sin alterar templates compartidos.
- Página Shopify nueva con título SEO orientado a dudas de garantía y body editorial breve; la sección realiza presentación completa.
- URLs legislativas directas: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 y https://www.boe.es/buscar/act.php?id=BOE-A-1999-21567.
- Enlaces internos: garantías/entrega/pagos, mantenimiento y contacto.

## Validación y rollback
Comprobar sintaxis schema y JSON; referencias de archivos, anchuras móvil y escritorio, CTA, accesibilidad de details y ausencia de claims no aprobados. En Shopify, comprobar templateSuffix `house-warranties` y publicación de Page. Integración GitHub no acredita sincronización del tema publicado: QA visual/Theme Check y consulta HTTP independiente pendientes hasta su comprobación.

Rollback: despublicar la nueva página o reasignar otra plantilla en Shopify; revertir la PR sin alterar productos ni catálogo.

## Revisión comercial y jurídica · 18-10-2026
- Política IDEAS EXTERIORES: suministros estándar por defecto, montaje y extras solo cuando figuren en oferta; no se asume gratuitamente trabajo ajeno.
- Matriz: suministro sin montaje / suministro y montaje contratado / obra sometida a LOE. No usar el contrato para desplazar responsabilidades legales del vendedor, subcontratista bajo nuestra responsabilidad ni agentes de edificación.
- Servicios no cubiertos, personalización, mantenimiento ordinario o reparación de daños ajenos: presupuesto y aceptación antes de ejecución. Diagnóstico remoto primero, inspección proporcional después; ninguna tasa previa como obstáculo al ejercicio de garantía legal.
- No rechazar automáticamente reclamaciones por fisuras, uso, montaje de terceros o aviso posterior; determinar causalidad y responsabilidad. No presentar 24/48h como caducidad.
- No se promete cobertura comercial adicional de 5 o 10 años sin documento propio específico.
- Control pendiente: revisión por asesoría jurídica de cláusulas definitivas de ventas B2C, proyectos de edificación y transacciones B2B; verificar contenido renderizado en tema Shopify activo.
