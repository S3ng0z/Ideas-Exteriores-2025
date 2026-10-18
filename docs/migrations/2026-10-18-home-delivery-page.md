# Transporte y entrega de casas y casetas de madera — 2026-10-18

## URL y objetivo
`/pages/transporte-entrega-casas-casetas-madera`; plantilla exclusiva `page.home-delivery.json`.
Resolver preguntas B2C de transporte, descarga, medios auxiliares, recepción, plazos y consulta de logística para un modelo. Complementa `/pages/secure-shipping-logistics-spain` (logística operativa transversal) y `/pages/warranty-delivery-payment-options` (condiciones de contratación). No se sustituye ninguna de las páginas existentes.

## Gobierno y arquitectura
- Revisión de 01 Web Business Brief, 03 Arquitectura IA, 05 Catálogo Modelo de Datos, guía visual Natural Precision, referencias `/pages/services`, `/pages/secure-shipping-logistics-spain`.
- Tres territorios comerciales: Exterior, Habitables y Estructuras; esta página es información de apoyo vinculada a Habitables, con rutas a servicios transversales.
- España peninsular es el ámbito prioritario; no se asegura cobertura concreta sin contrastar destino y proyecto.
- Catálogo maestro: precios contrastados con alcance y plazos sujetos a validación; no consta coste o plazo de entrega estándar aprobado a nivel familia.
- Se diferencian partidas: transporte hasta punto pactado, descarga/elevación, desplazamiento dentro de parcela, montaje y bases. Inclusiones solo por ficha/oferta aceptada.
- Formularios: CTA a contacto general como fallback; idealmente futuro presupuesto contextual desde producto.

## Benchmark competitivo recibido y contrastado
Maestro Casas (transporte incluido, descarga con suplemento) https://maestrocasas.es/transporte-y-entrega/
EuroCasetas (transporte por dirección, descarga y plazos según stock) https://eurocasetas.com/es/c/condiciones-generales-10
Honka (fabricación, plazo medio y transporte por ubicación) https://honka.com/es/es/suena-planifica-construye/
Arbola House (kit/prefabricado/obra, precio y montaje) https://arbola.house/casas-de-madera/prefabricadas/
Referencias adicionales comunicadas por usuario: Pineca, MNVEEK, Hobycasa, Hortum, Las Casas de Madera, NaturBuilt. No trasladar sus cifras comerciales al catálogo propio.

## Marco legal y precauciones
Real Decreto Legislativo 1/2007, arts. 66 bis y 66 ter: derechos de entrega y transmisión del riesgo en compraventas de bienes a consumidores. La regla general de 30 días puede modificarse por acuerdo aplicable; contratos de obra y entregas por fases requieren análisis específico. No establecer plazos de reclamación contractuales que limiten los derechos irrenunciables.
Fuente BOE: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555

## Código
- `sections/ie-home-delivery.liquid`: página SSR, un solo H1, tarjetas de alcance, checklist, proceso, recepción, FAQ, CTA y enlaces internos a servicios reales.
- `assets/ie-home-delivery.css`: diseño editorial con Source Serif 4/Manrope, colores Bone/Forest, anchura 1600px y responsive.
- `templates/page.home-delivery.json`: OS2.0 exclusiva, sin afectar shared templates.
- Shopify Page: `templateSuffix=home-delivery`; HTML de Page solo resumen editable, no duplicación visual.
- SEO: title y meta descripción de la Page. No introducir URLs absolutas de competidores en la página comercial.

## QA y despliegue
Validar template JSON, section schema, enlaces de navegación, presencia de un H1, CSS no global, condiciones contractuales y propiedad de Shopify Page.
Comprobar página en el tema activo con navegador, a 375, 768 y 1440px y con Theme Check. Confirmar sincronización GitHub a Shopify; un merge no prueba que el tema publicado ya sirva esos archivos.
Rollback: despublicar o reasignar la plantilla de la nueva Page, revertir PR.
