# Directorio comercial /collections · 17-10-2026

## Alcance
- Reemplaza solo `templates/list-collections.json` por `sections/ie-collections-directory.liquid`.
- CSS dedicado `assets/ie-collections-page.css`; sin dependencias JS ni overrides globales.
- Sigue los documentos 01, 03 y 05 del proyecto: territorio → familia → modelo.
- Referencia visual: `/pages/services`; fondo Bone, Ink, Forest, titulares Source Serif 4 e interfaz Manrope.

## Decisiones de negocio y arquitectura
- Shopify Collection sigue siendo la fuente de verdad de cada familia; imágenes y descripciones llegan de la colección, con fallback a primera imagen del producto.
- Se eligen explícitamente once colecciones publicadas del catálogo consultado el 17-10-2026, bajo Exterior y Habitables. «Home page» queda fuera por ser técnica, sin eliminarla ni modificarla.
- Estructuras queda como ruta informativa/consulta, nunca como oferta no verificada.
- Se evita insertar productos repetidos, precios sin contexto, promesas técnicas y "compra directa" indiscriminada.
- La página usa un solo H1, H2 por territorio, H3 por colección, imágenes diferidas, navegación de anclas y foco visible.
- El breadcrumb existente se reutiliza. No se altera el esquema de producto ni el contenido de colecciones individuales.

## Control de calidad antes de integración
- Validar JSON del template, schema JSON de section, referencias de assets, handles elegidos y enlaces internos.
- Comprobar Liquid con Shopify Theme Check si se dispone de CLI/CI; verificar móvil, tablet, desktop, enlaces y LCP tras sincronizar a un tema de prueba.
- Confirmar publicación del tema real de la tienda: un merge de GitHub no garantiza sincronización con Shopify.
- Evaluar metadata de `/collections`, indexabilidad, canonicals y tracking en una fase posterior.

## Reversión
Restaurar `templates/list-collections.json` del commit anterior; los assets/section nuevos pueden permanecer sin uso o eliminarse después.

## Dependencias
La carga visible de imágenes depende de que las colecciones tengan imagen o productos con foto. El valor comercial de los textos descriptivos depende de la calidad editorial en Shopify Admin.
