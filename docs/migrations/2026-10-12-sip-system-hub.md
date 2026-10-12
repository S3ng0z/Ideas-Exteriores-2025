# Hub Paneles SIP · arquitectura, contenido y despliegue

Fecha: 2026-10-12. Rama: `main`.

## Objetivo

Convertir `/pages/sip-panels-system` en el hub técnico canónico de Paneles SIP de Ideas Exteriores, alineado con la arquitectura editorial de cuatro guías ya consolidada y con el sistema visual de `/pages/services`.

## Decisión de arquitectura

- Page `/pages/sip-panels-system` = hub técnico y de decisión del sistema SIP.
- Product = modelo comercial.
- Collection `/collections/sip-panel-houses` = familia comercial de modelos SIP.
- Las cuatro guías relacionadas profundizan sin duplicar la intención del hub:
  1. `/pages/what-are-sip-panels-how-they-work`
  2. `/pages/sip-panel-structure-layers-insulation`
  3. `/pages/sip-panel-assembly-durability-sustainability`
  4. `/pages/sip-panel-applications-compatible-models`
- No se crea un catálogo comercial paralelo dentro del hub.
- Se evitan claims universales de plazo, precio, ahorro energético, valor U, fuego, acústica, durabilidad o sostenibilidad. Las prestaciones se atribuyen al sistema documentado y al proyecto completo.

## Base de análisis

Se contrastaron documentación técnica y sectorial de CTE DB-SE-M / DB-HE, Structural Timber Association, Kingspan TEK, SIPA y fuentes del mercado español facilitadas para la tarea. La redacción prioriza composición real, uniones, continuidad de envolvente, humedad, cálculo, ejecución, alcance contractual y comparabilidad de presupuestos.

También se contrastó la arquitectura interna del proyecto en Google Drive: una intención dominante por landing, sistema constructivo transversal, Products/Collections como oferta comercial y Pages como guía/hub técnico.

## Implementación

### Template

Nuevo archivo:

- `templates/page.sip-panels-system.json`

Estructura:

1. Hero con propuesta y acceso comercial/técnico.
2. Cuatro tarjetas hacia las guías SIP.
3. Proceso de decisión: uso → sistema documentado → interfaces → alcance comparable.
4. Criterios comerciales para evitar comparaciones incompletas.
5. FAQ de primera decisión.
6. CTA de asesoría técnica.

El diseño reutiliza las secciones del sistema visual Services:

- `ie-services-hero`
- `ie-services-cards`
- `ie-services-process`
- `ie-services-confidence`
- `ie-light-timber-faq`
- `ie-services-cta`

### SEO

`snippets/meta-tags.liquid` incorpora metadata específica para el handle `sip-panels-system`:

- Title: `Paneles SIP: construcción, aislamiento y montaje`
- Description: `Guía de paneles SIP para construcción en madera: funcionamiento, aislamiento, montaje, durabilidad, aplicaciones, modelos y criterios de presupuesto.`

### Descubrimiento LLM

`config/llms.txt` incorpora el hub en ES y EN como visión general de Paneles SIP.

## Shopify Admin

Page conservada:

- ID: `gid://shopify/Page/155467317592`
- Handle: `sip-panels-system`
- Título: `PANELES SIP`
- Publicada: sí
- Template anterior: `producto`
- Template nuevo: `sip-panels-system`

Se actualizó también el body administrativo a una descripción neutra del hub.

## Commits

- `7271acf36e6fc95c8263671f13fdc07da2a4184b` · feat: add SIP system hub template
- `03567562cc9f823cc7083b95a980f2dca2fb2e8a` · seo: add SIP system hub metadata
- `56f82e03f738338cd144fb68a7d741bf8511b300` · docs: expose SIP system hub to crawlers

## Despliegue y QA

Shopify Theme MAIN confirmó la sincronización de:

- `templates/page.sip-panels-system.json`
- `snippets/meta-tags.liquid`
- `config/llms.txt`

Después de esa comprobación se asignó la Page al nuevo template para evitar una ventana de template inexistente.

QA requerido/realizado:

- JSON de template válido.
- Límites de bloques compatibles con los schemas reutilizados.
- Page publicada y templateSuffix correcto.
- Archivos presentes en MAIN sin errores de lectura.
- Metadata específica por handle.
- Enlaces internos a las cuatro guías y a la Collection SIP.
- Un H1 generado por el hero.
- Claims técnicos redactados como criterios verificables, no garantías universales.

La inspección externa mediante caché de buscador puede conservar una versión anterior de la página; para el estado de despliegue se considera autoritativa la lectura de Shopify Admin + Theme MAIN.

## Reversión

1. Cambiar el `templateSuffix` de la Page a `producto`.
2. Revertir los commits del template, metadata y `llms.txt`.
3. Eliminar el template `templates/page.sip-panels-system.json` solo después de retirar su asignación de la Page.
