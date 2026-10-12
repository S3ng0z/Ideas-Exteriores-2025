# Sistema europeo · hub general

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Shopify Admin  
**Rama:** `main`

## Objetivo

Convertir `/pages/european-timber-construction-system` en el hub técnico general del Sistema Europeo de Ideas Exteriores, alineado con los hubs de Entramado Ligero y Paneles SIP y con el sistema visual de `/pages/services`.

## Criterio de negocio y arquitectura

- El sistema constructivo funciona como capa técnica transversal; no crea un catálogo comercial paralelo.
- La Page general organiza la decisión y deriva a cuatro guías:
  1. `/pages/european-timber-system-how-it-works`
  2. `/pages/european-timber-system-components-joints-materials`
  3. `/pages/european-timber-system-assembly-finishes`
  4. `/pages/european-timber-system-applications-models`
- Se reutilizan componentes existentes del sistema visual Services.
- «Sistema europeo» se presenta como denominación comercial de la solución descrita por Ideas Exteriores, no como norma, sello UE o tipología técnica europea universal.
- Prestaciones térmicas, acústicas, de fuego, estructura, humedad, durabilidad o sostenibilidad se vinculan a la composición, documentación, ejecución y proyecto reales.
- El cumplimiento del CTE se atribuye al edificio/proyecto y a las soluciones justificadas, no a la denominación comercial.

## Investigación y validación técnica

Criterios consolidados a partir de:
- documentación de proyecto de Ideas Exteriores: Diseño Funcional, Diseño Orgánico / Shopify Solution Design y Diseño Técnico;
- CTE: DB-SE/DB-SE-M, DB-HE, DB-HS, DB-SI y DB-HR;
- Puuinfo: comportamiento de construcción con troncos y necesidad de considerar asentamientos/movimientos;
- documentación de fabricantes nórdicos como Honka, utilizada únicamente para distinguir tecnologías específicas de tronco no asentable de las soluciones tradicionales;
- referencias comerciales y técnicas facilitadas para Sistema Europeo.

## Implementación

### Theme

- Nuevo template:
  - `templates/page.european-timber-construction-system.json`
  - Commit inicial: `53a81576e6b1fe6ab1601c15507299c44eaa398d`
- Metadata:
  - `snippets/meta-tags.liquid`
  - Commit: `5ce6f654b49dae0d875f4c3d000a94202f383b4c`

Composición del template:
1. Hero con definición y límites del término.
2. Cuatro tarjetas de guía.
3. Proceso de decisión: uso → sección → encuentros/movimientos → validación.
4. Criterios de confianza: denominación, prestaciones, CTE/documentación y alcance comparable.
5. CTA a asesoría técnica.

## Shopify Admin

Página:
- GID: `gid://shopify/Page/167408664920`
- Handle: `european-timber-construction-system`
- Título: `SISTEMA EUROPEO DE CONSTRUCCIÓN EN MADERA`
- Publicada: sí
- Body: vacío
- Template anterior: `page`
- Template asignado: `european-timber-construction-system`

La asignación se realizó mediante `pageUpdate` y devolvió cero `userErrors`.

## SEO

Title:
`Sistema europeo de madera: guía de construcción y montaje`

Meta description:
`Guía del sistema europeo de madera: funcionamiento, componentes, uniones, aislamiento, montaje, acabados y aplicaciones con criterios técnicos para España.`

Se conserva la URL pública y el canonical existente.

## QA

- JSON del template parseado correctamente.
- Orden de secciones verificado: hero → guides → process → confidence → CTA.
- Section types reutilizados y existentes:
  - `ie-services-hero`
  - `ie-services-cards`
  - `ie-services-process`
  - `ie-services-confidence`
  - `ie-services-cta`
- Enlaces internos verificados a las cuatro guías y contacto.
- Un único H1 queda delegado en `ie-services-hero`, siguiendo el patrón del theme.
- Sin claims absolutos de ahorro, eficiencia, aislamiento, fuego, acústica, plazo, durabilidad o sostenibilidad.
- Sin creación de colección/productos duplicados por sistema.
