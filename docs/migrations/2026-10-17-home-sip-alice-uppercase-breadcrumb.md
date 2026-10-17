# HOME-SIP ALICE · breadcrumb en mayúsculas

Fecha: 2026-10-17.

**Petición:** aplicar mayúsculas a los cuatro niveles resaltados en el breadcrumb: PRODUCTOS / VIVIENDAS EN MADERA / CASAS CON PANEL SIP / HOME-SIP ALICE. Se conserva «Inicio» fuera de la zona señalada.

**Implementación:**
- Se añade el parámetro opcional `uppercase_labels` al snippet compartido `snippets/ie-breadcrumb.liquid`. Se aplica después de resolver los metafields del producto y los fallbacks; por tanto, afecta también a los rótulos provenientes de metafields.
- `sections/ie-sip-product-hero.liquid` pasa `uppercase_labels: true` sólo para ID Shopify `15218578587992`. El resto de modelos SIP y demás páginas conserva su comportamiento anterior.
- El H1 se mantiene «HOME-SIP ALICE», y el `BreadcrumbList` JSON-LD hereda las mismas etiquetas mostradas.
- Sin cambios en los enlaces, URL, datos Shopify, precios, variantes, descripciones ni CSS.

**QA:** comprobar los cuatro rótulos en HTML y JSON-LD, la ruta enlazable, y la sincronización de archivos entre GitHub main y Theme MAIN Shopify. Revertir este commit para rollback.
