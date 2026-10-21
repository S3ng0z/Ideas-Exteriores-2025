# Comparativa de sistemas constructivos · 2026-10-21

## Objetivo

Refactorizar la página legacy `/pages/light-frame-vs-sip-panels` para convertirla en la comparativa canónica de los tres sistemas que comercializa Ideas Exteriores:

- Sistema europeo.
- Entramado ligero.
- Paneles SIP.

Nueva URL canónica: `/pages/timber-construction-systems-comparison`.

## Fuentes revisadas

- Documentación de negocio, arquitectura Shopify, UX/UI, SEO y criterio técnico almacenada en la carpeta de Drive del proyecto.
- Catálogo maestro unificado y estado Shopify real.
- Hub `/pages/timber-building-systems`.
- Hubs y guías técnicas de sistema europeo, entramado ligero y paneles SIP.
- Sistema visual de `/pages/services`.
- Página legacy y su HTML almacenado en Shopify Page.

## Decisiones

1. Sustituir la plantilla genérica por una plantilla OS 2.0 dedicada.
2. Reutilizar `ie-services-hero`, `ie-services-cards` e `ie-services-cta` para conservar lenguaje visual, tipografía y responsive del proyecto.
3. Añadir una sección específica `ie-timber-systems-comparison` con CSS encapsulado.
4. Evitar rankings absolutos, porcentajes arbitrarios y claims genéricos de CTE, hermeticidad, aislamiento, rapidez o coste.
5. Tratar «sistema europeo» como denominación comercial de Ideas Exteriores, no como norma, certificación o categoría universal.
6. Comparar economía por coste total y alcance de suministro, no por precio aislado por m².
7. Mantener accesos directos a las fichas y guías técnicas de los tres sistemas.
8. Cambiar el handle con redirección automática desde la URL antigua para conservar enlaces y señales SEO.

## Archivos

- `templates/page.timber-construction-systems-comparison.json`
- `sections/ie-timber-systems-comparison.liquid`
- `assets/ie-timber-comparison-page.css`
- `snippets/meta-tags.liquid`
- `config/llms.txt`

## SEO

- H1: `Sistema europeo vs entramado ligero vs paneles SIP`
- SEO title: `Sistemas constructivos de madera: comparativa | Ideas Exteriores`
- Meta description: `Compara sistema europeo, entramado ligero y paneles SIP. Descubre sus diferencias, ventajas y aplicaciones para elegir tu proyecto de madera.`

## Validación técnica y Shopify

- Un solo H1, renderizado por `ie-services-hero`.
- Contenido principal en secciones nativas OS 2.0; el HTML legacy de `page.body` deja de formar parte del render.
- Tabla accesible con encabezados semánticos y contenedor horizontal en móvil.
- CSS scoped; no se introducen overrides globales.
- Sin JavaScript adicional.
- Enlaces internos apuntan a handles técnicos actuales.
- La adecuación al CTE y las prestaciones finales quedan explícitamente condicionadas a composición, documentación y proyecto.
