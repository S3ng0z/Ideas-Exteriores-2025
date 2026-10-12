# Sistema europeo · qué es y cómo funciona

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Shopify Admin  
**Rama:** `main`

## Objetivo

Convertir `/pages/european-timber-system-how-it-works` en una guía técnica y comercial de decisión alineada con las páginas equivalentes de Entramado Ligero y Paneles SIP, sin presentar «sistema europeo» como una denominación técnica universal de la Unión Europea.

## Decisión de arquitectura

- Page = guía técnica del sistema.
- El hub se conserva en `/pages/european-timber-construction-system`.
- No se crea una colección comercial paralela por sistema.
- La página enlaza progresivamente a:
  - `/pages/european-timber-system-components-joints-materials`
  - `/pages/european-timber-system-assembly-finishes`
  - `/pages/european-timber-system-applications-models`
- Se reutiliza el sistema visual de Services: hero, tarjetas, proceso, criterios, FAQ y CTA.

## Criterio técnico y editorial

En esta web, «sistema europeo» se usa como denominación comercial para la solución de muro con pieza exterior de madera perfilada y capa técnica interior destinada a aislamiento, instalaciones y acabado. Se evita equipararlo a una norma o tipología europea universal.

La redacción se apoya en documentación de construcción con troncos y madera industrializada, y en las exigencias españolas aplicables al edificio. Se evitan claims absolutos de ahorro, plazo, aislamiento, durabilidad o sostenibilidad.

Criterios incorporados:

1. La geometría del perfil, las juntas, el sellado y la función estructural deben corresponder al sistema documentado.
2. Base, barrera capilar, anclajes, esquinas, huecos y encuentros de cubierta forman parte del comportamiento del conjunto.
3. Aislamiento e instalaciones se coordinan dentro de la sección real del muro.
4. Humedad, movimientos dimensionales y condiciones de servicio deben resolverse mediante proyecto, detalle y ejecución.
5. El cumplimiento CTE corresponde al edificio y a su proyecto, no a la denominación comercial del sistema.

## Cambios de código

- `templates/page.european-timber-system-how-it-works.json`: nueva landing técnica.
  - Commit: `121e32adc9b3a7797065a96c17aa2b31fd163e87`
- `snippets/meta-tags.liquid`: title y meta description específicos.
  - Commit: `cef847ffecd14cdef8a5e86ab1ef4238647a2c84`
- `config/llms.txt`: se incorpora Sistema Europeo como tercer sistema y se añaden hub + guía.
  - Commit: `a16f59bfa11ffe07052ee0953a660fd564338726`

## Shopify Admin

Página objetivo:

- GID: `gid://shopify/Page/167408566616`
- Handle: `european-timber-system-how-it-works`
- Título: `QUÉ ES Y CÓMO FUNCIONA`
- Estado inicial: publicada, body vacío y `templateSuffix: page`
- Template objetivo: `european-timber-system-how-it-works`

## QA

1. JSON válido y secciones existentes.
2. Un único H1 en el hero.
3. Metadata específica por handle.
4. Enlaces internos a las tres guías siguientes.
5. Canonical sobre la URL pública actual.
6. Sin claims técnicos absolutos ni equivalencia «sistema europeo = norma europea».
7. Page publicada con el nuevo template suffix.
8. Respuesta pública 200 y revisión de contenido renderizado.
