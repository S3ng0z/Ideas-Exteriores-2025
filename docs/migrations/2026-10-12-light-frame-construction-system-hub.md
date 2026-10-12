# Hub de Entramado Ligero · consolidación editorial

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Page existente  
**Rama:** `main`

## Objetivo

Convertir `/pages/light-frame-construction-system` en el hub técnico y comercial de Entramado Ligero, sustituyendo la presentación legacy de ocho tarjetas por una arquitectura de cuatro guías alineada con `/pages/services` y con las cuatro páginas formativas ya publicadas.

## Decisión de arquitectura

- Page = hub técnico del sistema.
- Collection = familia comercial de casas de entramado ligero.
- Product = modelo comercial.
- Las cuatro guías profundizan en intenciones distintas sin duplicar catálogo.
- El metafield legacy usado por `page.producto` se conserva para rollback, pero deja de renderizarse al asignar el nuevo template.

## Nuevo template

`templates/page.light-frame-construction-system.json`

Orden:
1. Hero y mapa de las cuatro guías.
2. Cuatro tarjetas editoriales enlazadas a las páginas relacionadas.
3. Proceso del sistema al proyecto.
4. Criterios de decisión y alcance.
5. CTA técnico/comercial.

## Fuentes y criterios

La redacción prioriza CTE DB-SE-M y DB-HE para el contexto español; documentación sectorial de timber frame de Egoin, TRADA y Timber Development UK; Build-in-Wood para industrialización; y referencias europeas de circularidad y ciclo de vida. Se evitan claims absolutos sobre precio, plazo, Passivhaus, durabilidad o sostenibilidad.

## SEO y descubrimiento

- Metadata específica para el handle `light-frame-construction-system`.
- Entrada del hub añadida a `config/llms.txt` en ES y EN.
- Se mantienen los handles públicos de las cuatro guías.

## QA

- JSON parseable y secciones existentes en el theme.
- Un único H1 proporcionado por `ie-services-hero`.
- CTAs y enlaces internos apuntan a URLs públicas actuales.
- No se modifica `page.producto`.
- No se modifica ninguna de las cuatro guías relacionadas.
- La asignación del `templateSuffix` se realiza sobre la Page `gid://shopify/Page/155465875800`.
