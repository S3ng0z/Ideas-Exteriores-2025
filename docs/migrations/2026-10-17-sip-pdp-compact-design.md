# SIP PDP · ajuste visual compacto y comercial

Plantilla compartida `casas-sip` sin cambio en HTML ni Liquid. El CSS `ie-sip-product.css` reduce titulares H1/H2, espaciados verticales, tamaño de CTA, titulares secundarios, rellenos de tarjetas BASIC / STANDARD / PASSIVE y sección de proceso. Se mantienen contenido completo, enlaces, estados de revisión y accesibilidad `focus-visible`.

Scope: clases `.ie-sip-pdp` y `body:has(.ie-sip-pdp--hero)`; familias de entramado, servicios y home no se modifican. Valores responsive separados en 989 y 749px.

QA pendiente: comprobar en storefront móvil y desktop altura hero, salto al comparador, títulos de la descripción, alineación de 3 columnas, legibilidad y presentación de avisos. Rollback: revertir el bloque CSS final de este commit.
