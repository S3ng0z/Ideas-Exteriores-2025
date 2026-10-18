# Proyectos en madera · refactor de galería (2026-10-18)

**Página:** `/pages/wood-project-gallery` · Shopify Page ID `gid://shopify/Page/150718447960`

## Auditoría
- La página publicada usa `templateSuffix=gallery` y conserva el cuerpo heredado `<div id="enap-gallery-93891"></div>`.
- La plantilla `page.gallery.json` delegaba prácticamente toda la experiencia a Essential Grid Gallery y mostraba la galería como pieza aislada.
- La arquitectura interna define PROYECTOS como evidencia ejecutada relacionada con familia/modelo/sistema, no como un segundo catálogo.
- El diseño funcional pide normalizar la galería por tipología/sistema/producto relacionado y convertir el portfolio en prueba enlazada al catálogo.
- Se conservan las imágenes y filtros existentes del app para no duplicar ni perder activos.

## Cambios
- `templates/page.gallery.json`: nueva composición editorial y comercial, manteniendo intacto el bloque de Essential Grid y su `eg_grid_metakey=1`.
- `sections/ie-project-gallery-guide.liquid`: sección reutilizable para contextualizar la evidencia y enlazar a familias/sistemas verificados.
- `assets/ie-project-gallery-page.css`: estilos scoped, responsive y coherentes con el sistema visual de `/pages/services`.
- El hero reutiliza `ie-services-hero`; el cierre reutiliza `ie-services-cta`.
- Se eliminan de esta plantilla el breadcrumb/H1 redundante y los bloques desactivados; el hero ya renderiza breadcrumb y un único H1.
- Rutas verificadas: casas de entramado ligero, casas SIP, pérgolas, porches, cenadores, tarima natural, tarima WPC y hub de sistemas.
- No se modifican productos, colecciones, precios, inventario ni contenido visual del app.

## Arquitectura y CRO
- Flujo: PROYECTOS → evidencia visual → familia/sistema relacionado → catálogo/información técnica → presupuesto.
- La fotografía se presenta como referencia, no como promesa de precio, prestaciones o alcance contractual.
- El CTA final solicita tipología, medidas, ubicación y referencia visual, mejorando el contexto comercial del lead.
- La solución es incremental: cuando exista el metaobject `project`, esta landing podrá sustituir progresivamente el app por cards estructuradas sin cambiar el rol de la URL.

## QA
- Template JSON parseable y schema de sección parseable.
- Un único H1 en la composición propia.
- Sin JavaScript nuevo y sin dependencias adicionales.
- Navegación por teclado y foco visible en enlaces.
- Responsive: 4/3 columnas en escritorio según instancia, 2 en tablet y 1 en móvil.
- Essential Grid permanece como fuente visual; validar sus filtros y lightbox en navegador real tras sincronización.
- No se afirman mejoras de SEO, conversión o Core Web Vitals hasta medir rendering y datos reales.

## Reversión
- Restaurar la versión anterior de `templates/page.gallery.json`.
- Los dos archivos nuevos son aislados y pueden permanecer sin efecto si la plantilla deja de referenciarlos.
- El cuerpo de Page y el handle `wood-project-gallery` no se alteran.
