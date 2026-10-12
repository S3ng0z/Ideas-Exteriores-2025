# Sistema europeo · componentes, uniones y materiales

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Shopify Admin  
**Rama:** `main`

## Objetivo

Convertir `/pages/european-timber-system-components-joints-materials` en la segunda guía técnica del Sistema Europeo, alineada con las páginas equivalentes de Paneles SIP y Entramado Ligero y con el sistema visual de `/pages/services`.

## Decisión de arquitectura

- Page = guía técnica del sistema; no ficha de producto ni colección comercial.
- Hub conservado en `/pages/european-timber-construction-system`.
- Secuencia editorial:
  1. Qué es y cómo funciona.
  2. Componentes, uniones y materiales.
  3. Montaje y acabados.
  4. Aplicaciones y modelos compatibles.
- Se reutilizan componentes existentes: hero, cards, process, confidence, FAQ y CTA.
- El contenido vive en el template JSON; Shopify Page mantiene body vacío para evitar duplicación de fuente de verdad.

## Criterio técnico y editorial

En Ideas Exteriores, «sistema europeo» se mantiene como denominación comercial de la solución de muro con pieza exterior de madera perfilada y capa técnica interior. No se presenta como norma o sistema técnico europeo universal.

La página evita extrapolar prestaciones de fabricantes nórdicos o de terceros y no publica espesores, transmitancias, aislamiento acústico, resistencia al fuego, rapidez, vida útil ni clases resistentes como valores universales.

Principios incorporados:

1. La función del perfil exterior, su especie/producto, sección, mecanizado y humedad deben corresponder al suministro real.
2. Machihembrados, juntas y sellos no equivalen por sí solos a una prestación de hermeticidad o estanqueidad.
3. Anclajes, esquinas, huecos, encuentros con forjados/cubierta y fijaciones metálicas forman parte del comportamiento del conjunto.
4. La capa técnica interior se explica como una secuencia coordinada de aislamiento, instalaciones, control de aire/humedad y acabado.
5. Los movimientos higroscópicos/asentamientos se tratan como una condición a resolver según el sistema concreto, no mediante un valor genérico.
6. En España, estructura, energía, salubridad, incendio y acústica se justifican en la solución y el proyecto aplicables; la denominación comercial no equivale a «cumple CTE».

## Fuentes contrastadas

- La Llave del Hogar: definición comercial de «sistema europeo» con tronco recto exterior, aislamiento y acabado interior.
- Puuinfo: perfiles macizos/laminados, juntas, sellado, encuentros, humedad y movimientos en construcción con troncos.
- CTE: DB-SE/DB-SE-M, DB-HE, DB-HS, DB-SI y DB-HR.
- Referencias nórdicas y europeas del briefing (Honka, Kontio, Rusticasa) utilizadas como contraste tipológico/comercial, no como fuente de prestaciones trasladables.
- Documentación interna de proyecto en Google Drive: Product Owner, auditoría AS-IS y criterio técnico de producto.

## Cambios de código

- `templates/page.european-timber-system-components-joints-materials.json`
  - Commit: `4bcf3d774102ec200fc45a6eb6bb6628aa7c6181`
- `snippets/meta-tags.liquid`
  - Commit: `0e588b846250f945dea9cef555cfb89d40dec3a2`
  - SEO title: `Sistema europeo: componentes, uniones y materiales`
  - Meta description: `Perfiles de madera, uniones, anclajes, aislamiento, capas de control y acabados: cómo definir la sección real del sistema europeo para cada proyecto.`
- `config/llms.txt`
  - Commit: `653aa64adf11226e88ece746b471119132536900`

## Shopify Admin

Página objetivo:

- GID: `gid://shopify/Page/167408697688`
- Handle: `european-timber-system-components-joints-materials`
- Título: `COMPONENTES, UNIONES Y MATERIALES`
- Estado inicial: publicada, body vacío, `templateSuffix: page`
- Template asignado: `european-timber-system-components-joints-materials`
- Resultado de mutation: sin `userErrors`, página permanece publicada.

## QA

1. JSON válido.
2. Secciones y block_order consistentes.
3. Todos los section types reutilizados existen en el theme.
4. Un único H1, generado por `ie-services-hero`.
5. FAQ reutiliza marcado Schema.org `FAQPage`.
6. Metadata específica por handle.
7. Enlaces internos a hub, guía 01, guía 03, guía 04 y contacto.
8. Sin claims cuantitativos no documentados.
9. Sin equivalencia «sistema europeo = norma europea».
10. Shopify Page enlazada al template específico y publicada.
