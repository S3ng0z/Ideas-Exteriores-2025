# Alineación de contenido público · Entramado ligero

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + verificación Shopify Admin  
**Rama:** `main`  
**Estado:** implementado en código; páginas públicas y navegación verificadas en Shopify Admin.

## Objetivo

Homogeneizar las cuatro páginas públicas de Entramado Ligero con la arquitectura editorial de Ideas Exteriores, reforzar rigor técnico y actualizar SEO, enlazado interno y descubrimiento LLM sin crear un catálogo paralelo por sistema constructivo.

## Páginas públicas verificadas

| Página | Page GID | Handle público | Template suffix |
|---|---|---|---|
| Qué es y cómo funciona | `gid://shopify/Page/150539829592` | `what-is-light-timber-frame-construction` | `light-timber-building-system-overview` |
| Estructura, capas y aislamiento | `gid://shopify/Page/150540157272` | `timber-frame-structure-layers-insulation` | `light-timber-building-layers-materials-thickness` |
| Montaje, durabilidad y sostenibilidad | `gid://shopify/Page/150542319960` | `timber-frame-assembly-durability-sustainability` | `light-timber-building-maintenance-durability` |
| Aplicaciones y modelos compatibles | `gid://shopify/Page/150543139160` | `timber-frame-applications-compatible-models` | `light-timber-building-common-applications` |

Los nombres legacy de los templates se conservan deliberadamente para no romper las asignaciones de Page existentes. La URL pública y la intención editorial se gobiernan por los handles actuales.

## Criterio editorial y técnico

La revisión prioriza:

1. CTE DB-SE-M para estructura de madera, humedad y clases de servicio.
2. CTE DB-HE para comportamiento energético del edificio y de su envolvente.
3. Documentación sectorial de entramado ligero, prefabricación, montaje y detalles constructivos.
4. Fuentes europeas de industrialización, ciclo de vida y circularidad.
5. Casos de aplicación como evidencia, evitando extrapolar prestaciones universales.

Se eliminan o evitan claims absolutos de plazo, ahorro, vida útil, sostenibilidad o cumplimiento normativo. El cumplimiento se atribuye al edificio y al proyecto concreto.

## Cambios implementados

### 1. Qué es y cómo funciona

Template: `templates/page.light-timber-building-system-overview.json`

- Se refuerza el papel conjunto de bastidores, tableros, fijaciones, arriostramientos y anclajes.
- Se diferencia clase de servicio de clase de uso.
- Se aclara que el CTE no se cumple por declarar un sistema de forma aislada.

Commit: `8ead4d557eb45998ff02c6bbdd0913098087bf97`.

### 2. Estructura, capas y aislamiento

Template: `templates/page.light-timber-building-layers-materials-thickness.json`

- Se incorpora referencia explícita a DB-HE en transmitancia y puentes térmicos.
- Se refuerza que el comportamiento depende del cerramiento completo, continuidad y puntos singulares.
- Se evita identificar espesor de aislamiento con cumplimiento normativo.

Commit: `f09a9ab8f9197d49a0be501af21151e610ab867c`.

### 3. Montaje, durabilidad y sostenibilidad

Template: `templates/page.light-timber-building-maintenance-durability.json`

- Se añade almacenamiento protegido y control de humedad durante logística/montaje.
- Se refuerza la evaluación ambiental mediante datos equivalentes, EPD y ACV cuando proceda.
- Se mantienen separados origen responsable, carbono biogénico, durabilidad y circularidad.

Commit: `70710064a1b44dab0fef6574514bc46af2963d19`.

### 4. Aplicaciones y modelos compatibles

Template: `templates/page.light-timber-building-common-applications.json`

- La compatibilidad pasa a expresarse como relación técnica declarada, no inferida.
- Se evita convertir Entramado Ligero en un catálogo duplicado de Products.
- Se mejora el enlace de retorno a la guía de sistema.

Commit: `448724ad62f76b95aebfe86e22fe4e9a9bd42df6`.

## SEO, navegación y descubrimiento

- `snippets/meta-tags.liquid`: metadata específica para los cuatro handles públicos actuales.
  - Commit: `0641ca47b63c8ea5d4ed964abb777839d0990834`.
- `config/llms.txt`: se publican las cuatro URLs actuales en ES y EN.
  - Commit: `e1ece47bd71985ca7c0a0c2908febca83e8d0faa`.
- `sections/ie-light-frame-collection.liquid`: la colección enlaza a `/pages/what-is-light-timber-frame-construction`.
  - Commit: `8b9ef292d395354e94311a573bc6dc52a0b17a68`.
- `templates/product.entramado-ligero.json`: el CTA secundario usa la URL pública actual de la guía.
  - Commit: `ec5068cd05994062801d552b0510b03b7d23ea8a`.

## Shopify Admin

No se crean Pages nuevas ni se cambia el `templateSuffix`: las cuatro Pages actuales ya están publicadas y correctamente asociadas a los templates anteriores.

El menú `main-menu` ya contiene las cuatro rutas públicas actuales bajo:

`SISTEMAS CONSTRUCTIVOS > ENTRAMADO LIGERO`

Por tanto no se realiza una mutación de navegación innecesaria.

## Arquitectura

Se mantiene el criterio interno del proyecto:

- una intención dominante por landing;
- Entramado Ligero como sistema técnico transversal;
- Product = modelo comercial;
- Collection = familia comercial;
- Page = guía/hub técnico;
- compatibilidad sistema-modelo como dato/relación, no como duplicación de catálogo.

## QA

Validar tras despliegue:

1. JSON de los cuatro templates.
2. metadata específica por handle.
3. enlaces internos sin rutas públicas legacy.
4. un único H1 por página.
5. navegación móvil y escritorio.
6. canonical hacia el handle público actual.
7. ausencia de claims técnicos absolutos.
8. respuesta 200 de las cuatro URLs públicas.
