# Sistema europeo · montaje y acabados

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Shopify Admin  
**Rama:** `main`  
**Estado:** implementado y asignado.

## Objetivo

Convertir `/pages/european-timber-system-assembly-finishes` en una guía técnica y comercial alineada con las páginas equivalentes de Entramado Ligero y Paneles SIP, manteniendo la denominación comercial «sistema europeo» sin presentarla como tipología normativa europea universal.

## Decisión de arquitectura

- Page canónica: `/pages/european-timber-system-assembly-finishes`
- Page GID: `gid://shopify/Page/167408730456`
- Título conservado: «MONTAJE Y ACABADOS»
- Template suffix: `european-timber-system-assembly-finishes`
- Template: `templates/page.european-timber-system-assembly-finishes.json`
- Se reutiliza el sistema editorial de Services y de las consolidaciones SIP/Timber Frame: hero, cards, proceso, criterios, FAQ y CTA.

## Contenido implementado

1. Preparación de base, replanteo, barrera capilar y logística.
2. Montaje por secuencia, juntas mecanizadas, alineación, fijaciones y estabilización.
3. Encuentros de huecos, cubierta e instalaciones compatibles con movimientos de la madera.
4. Control de humedad, drenaje, sellados e inspección.
5. Acabados exteriores de madera vista y capa técnica interior.
6. Mantenimiento preventivo y documentación final.
7. Sostenibilidad basada en trazabilidad y ciclo de vida, sin claims absolutos.
8. FAQ técnica y CTA hacia asesoramiento.

## Criterio técnico

La página evita atribuir valores universales de asentamiento, durabilidad, plazo de montaje o comportamiento energético. Los movimientos dependen del producto, humedad, geometría y fabricación. El cumplimiento CTE corresponde al edificio completo y a su proyecto.

## SEO

`snippets/meta-tags.liquid` incorpora metadata específica:

- **SEO title:** «Sistema europeo: montaje, durabilidad y acabados»
- **Meta description:** «Montaje del sistema europeo de madera: base, juntas, movimientos, humedad, aislamiento, acabados, mantenimiento y criterios de sostenibilidad.»

`config/llms.txt` incorpora la nueva URL en español e inglés.

## Shopify Admin

La Page publicada se ha actualizado desde `templateSuffix: page` a `templateSuffix: european-timber-system-assembly-finishes`.

## QA realizado

1. JSON parseable.
2. Todas las section types referenciadas existen en `main`.
3. Orden de secciones válido.
4. Metadata específica por handle.
5. Page publicada con template suffix correcto.
6. Enlazado interno hacia guía general, componentes y aplicaciones.
7. Sin claims universales de vida útil, asentamiento, ahorro energético o sostenibilidad.

## Commits

- `16d3bae5e37943fb9079854f16e8cdf225b87575` — template.
- `5a6ccf9232c940462d220491516f326b871a6102` — metadata SEO.
- `4b5d5265947b0b6f11a7a5e47d6b645b07664012` — indexación `llms.txt`.

