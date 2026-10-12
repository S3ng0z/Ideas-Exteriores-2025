# Casetas de madera a medida — migración de landing

Fecha: 2026-10-12  
URL: https://www.ideas-exteriores.com/pages/bespoke-wooden-sheds  
Template: `page.bespoke-sheds.json`

## Objetivo

Sustituir la página genérica por una landing comercial coherente con `/pages/services` y con las páginas de pérgolas/porches, manteniendo la intención "casetas de madera a medida" sin volver a un modelo de personalización ilimitada.

## Decisiones de arquitectura

- Mantener el handle existente para evitar una migración SEO innecesaria.
- Conservar esta URL como landing de captación `quote`, no como familia principal de navegación.
- Reutilizar componentes existentes: `ie-services-hero`, `ie-pergola-details`, `ie-services-confidence`, `ie-pergola-scope`, `ie-services-process`, `ie-light-timber-faq` e `ie-pergola-quote`.
- Orientar la decisión por uso, superficie, parcela, envolvente y alcance; SIP/entramado se presentan como decisiones técnicas posteriores.
- Enlazar a `/pages/timber-products` para devolver al usuario al catálogo de familias/modelos.
- Mantener el formulario Powerful Form Builder existente (`OTY5NTM=`) como superficie de conversión.

## Criterios de contenido

- Evitar valores térmicos, estructurales o acústicos no vinculados a una composición concreta.
- Evitar afirmar que una solución sirve como vivienda por el hecho de ser de madera o estar aislada.
- No dar una regla universal de licencia: municipio, uso, dimensiones, ubicación y base pueden cambiar el trámite.
- Tratar base, humedad y drenaje como parte de la definición técnica; no separar la caseta del soporte sobre el que se instala.
- Diferenciar caseta de almacenaje de oficina/estudio con ocupación habitual.

## Referencias analizadas

- CTE DB-SE-M: seguridad estructural, durabilidad, ejecución y control de estructuras de madera.
- CTE DB-HE: ahorro de energía.
- CTE DB-HS: salubridad y humedad/ventilación.
- Timber Development UK: guías de timber frame.
- Pineca y Casetas de Jardín 24: patrones de decisión comercial por uso, superficie, aislamiento, montaje y mantenimiento.
- Structural Timber Association: documentación técnica SIP (cuando el acceso público permite verificar el alcance).
- Documentación interna del proyecto: IA/Sitemap, Search Intent Map, Diseño Funcional, Diseño Técnico y sistema visual.

## QA esperado

- Un solo H1 visible.
- CTA principal de presupuesto, sin quick-add ni señales de compra directa.
- H2/H3 semánticos y FAQ con marcado FAQPage existente en el componente.
- Responsive heredado de las páginas de pérgolas/porches y del sistema `/pages/services`.
- Enlaces internos válidos: `/pages/timber-products`, política de privacidad y ancla del formulario.
- Imágenes alojadas en Shopify Files mediante `shopify://shop_images`.
