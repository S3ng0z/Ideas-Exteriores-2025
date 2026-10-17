# Home · tres sistemas constructivos (2026-10-17)

## Contexto
Adaptación sobre commit 55ae334dd1a8158ca5d758ad72b2988fe7796579, tras revisión de la home, referencia /pages/services, y documentación de Drive: Web Business Brief, IA/Sitemap, keyword map, Diseño Funcional e identidad visual.

## Cambios
- Hero con copy nativo y CTAs nativos a catálogo y contacto. Sin reemplazo de texto por JavaScript.
- Section OS2.0 `ie-home-systems.liquid` con comparativa de entramado ligero, panel SIP y sistema europeo, en su posición de capa técnica posterior a los tres territorios comerciales.
- Enlaces internos a colecciones existentes y hubs técnicos verificados, sin inventar una colección o precios de sistema europeo.
- Advertencia técnica: el sistema europeo es la denominación comercial de una solución perfil exterior + capa interior. Blockhaus/Blockbau y nórdico/finlandés no son sinónimos técnicos universales.
- Meta description de home actualizada, manteniendo title, canonical y schema existentes.
- CSS independiente scoped, responsive, sin dependencias JS.

## Comprobaciones realizadas
- JSON de plantilla parseable; un H1 nativo en el bloque hero; sección registrada una sola vez en order; CTAs enlazan páginas de catálogo/contacto; los tres hubs tienen plantillas en el repositorio.
- Ausencia de precios inventados, claims absolutos o nuevos Product schemas.

## QA de publicación pendiente
- Validar con Shopify Theme Check / Theme Editor; comprobar sincronización GitHub → tema publicado.
- Confirmar visual en 375 px / 768 px / 1440 px, keyboard navigation y vídeo sobre hero.
- Medir PageSpeed/Lighthouse móvil+escritorio con base y después, Search Console, GA4.
- Confirmar event tracking para clics del hero y enlaces a colecciones/asesoría.

No se afirman ganancias de SEO o Core Web Vitals antes de medir tráfico, rendering real y datos de campo.
