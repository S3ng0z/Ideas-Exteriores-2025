# Consolidación: montaje, durabilidad y sostenibilidad del entramado ligero

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme + Shopify Admin (Pages / Navigation / URL redirects)  
**Rama:** `main`  
**Estado:** implementado y migrado.

## Decisión de arquitectura

Se consolida en una sola intención técnica la información de montaje, durabilidad/mantenimiento y sostenibilidad del entramado ligero.

- **URL canónica conservada:** `/pages/light-timber-building-maintenance-durability`
- **Page GID:** `gid://shopify/Page/150542319960`
- **Título:** «MONTAJE, DURABILIDAD Y SOSTENIBILIDAD»
- **Template suffix:** `light-timber-building-maintenance-durability`
- **Template:** `templates/page.light-timber-building-maintenance-durability.json`

La página deja de utilizar `page.generic` como presentación principal. El nuevo template reutiliza el sistema editorial de `/pages/services` y de las páginas consolidadas de entramado ligero: hero, cards visuales, proceso, criterios, FAQ y CTA.

## Contenido consolidado

La landing resultante integra, sin concatenar las tres páginas antiguas:

1. Preparación de parcela, base y logística.
2. Montaje, aplomado, arriostramiento, forjados y cubierta.
3. Coordinación de instalaciones y cierre de la envolvente.
4. Control de humedad, inspección preventiva y mantenimiento.
5. Reparaciones localizadas y criterios de vida útil.
6. Origen responsable de la madera, carbono biogénico y ciclo de vida.
7. FAQ técnica y CTA hacia asesoramiento.

Se reutilizan assets existentes de las tres páginas para mantener continuidad visual.

## Páginas retiradas

- `/pages/light-timber-building-installation-steps`
  - Page GID eliminado: `gid://shopify/Page/150540321112`
- `/pages/light-timber-building-sustainability-carbon-footprint`
  - Page GID eliminado: `gid://shopify/Page/150542713176`

## Redirecciones SEO

| Origen | Destino | Tipo | Redirect GID |
|---|---|---|---|
| `/pages/light-timber-building-installation-steps` | `/pages/light-timber-building-maintenance-durability` | 301 | `gid://shopify/UrlRedirect/1437441917272` |
| `/pages/light-timber-building-sustainability-carbon-footprint` | `/pages/light-timber-building-maintenance-durability` | 301 | `gid://shopify/UrlRedirect/1437441950040` |

## Navegación

En `Main menu > SISTEMAS CONSTRUCTIVOS > ENTRAMADO LIGERO`:

- se elimina «FASES DEL MONTAJE PASO A PASO»;
- se elimina «IMPACTO AMBIENTAL Y HUELLA DE CO₂»;
- «CUIDADOS, REPARACIONES Y VIDA ÚTIL» pasa a «MONTAJE, DURABILIDAD Y SOSTENIBILIDAD».

La navegación de Entramado Ligero queda reducida a cuatro páginas principales.

## SEO y enlazado interno

Se añade metadata específica en `snippets/meta-tags.liquid`:

- **SEO title:** «Montaje y durabilidad del entramado ligero de madera»
- **Meta description:** «Guía sobre montaje, mantenimiento, reparaciones y sostenibilidad del entramado ligero: control de humedad, vida útil, carbono y ciclo de vida.»

También se añade enlace interno hacia la landing consolidada desde `page.light-timber-building-system-overview.json`.

## Criterio de claims

Se eliminan del nuevo contenido las promesas universales de plazo, vida útil o reducción de CO₂. Los plazos dependen del proyecto; la durabilidad depende de diseño, exposición, ejecución y mantenimiento; y el carbono se presenta dentro del análisis de ciclo de vida, sin equiparar madera con neutralidad climática automática.

## Commits principales

- `551a1c61fa0253bc7e6f0ff79832834c34730f6f` — template consolidado.
- `92a1ba548caaaa092720328635fc181cbc0ce92a` — metadata SEO.
- `ae54ca5f98a09edf50619f1ad8bfb880facdc148` — enlazado interno desde la guía general.

## Reversión

Para revertir completamente la migración sería necesario:

1. restaurar las dos Pages eliminadas;
2. retirar los dos redirects;
3. restaurar las entradas de menú;
4. devolver el título y template suffix de la página canónica;
5. revertir los commits de theme asociados.
