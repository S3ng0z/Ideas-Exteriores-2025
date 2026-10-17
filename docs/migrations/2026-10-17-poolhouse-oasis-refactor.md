# Poolhouse Oasis+ · Refactor 2026-10-17

## Fuente y arquitectura
Se contrastaron Shopify Admin, el catálogo maestro (fila CAT-070), y los documentos 01 Business Brief, 03 Arquitectura y 05 Modelo de Datos y guía visual. Se conserva SKU vacío, variante única y precio 14.900 EUR sin alteración; el catálogo señala falta de aprobación comercial y técnica.

## Implementación
- Plantilla `product.poolhouse-oasis.json` exclusiva, sección de presentación `ie-poolhouse-oasis.liquid` y CSS encapsulado `ie-poolhouse-oasis.css`.
- Se conserva el bloque original Powerful Form Builder.
- La descripción sigue siendo un campo editable del producto y se representa bajo la composición comercial.
- Se extrajeron CSS/JS de la descripción Shopify (backup original en `docs/backups/2026-10-17-poolhouse-oasis-description-before.html`).
- Imágenes desde Shopify media, precio dinámico `product.price`, breadcrumb existente y CTA WhatsApp con contexto de producto.
- No hay checkout directo ni mensajes de prestaciones garantizadas. Se distingue claramente el alcance de referencia de los extras y de la oferta contractual.

## Riesgos conocidos y validación pendiente
- La pertenencia a colección `frontpage` es un problema de taxonomía; no se reubica a una colección incorrecta.
- No hay dimensión, coste real ni aprobación técnica documentados en la fila CAT-070.
- Es necesario comprobar con el equipo comercial contenido exacto de la configuración básica, IVA, entrega e instalación.
- Validar Theme Check, vistas reales 375/768/1440, formulario de terceros, enlace WhatsApp y estado del tema publicado. Commit en GitHub no acredita publicación Shopify.

## Rollback
Revertir plantilla / sección / CSS y restaurar backup original de descripción mediante Shopify Admin si fuera necesario.
