# Política nativa de envío — 18/10/2026

## Arquitectura
URL canónica `/policies/shipping-policy`. La única fuente legal pública es Shopify ShopPolicy (SHIPPING_POLICY), no una nueva Page. `layout/theme.liquid` carga `assets/ie-shipping-policy.css` exclusivamente en la política de envío. Texto completo propuesto y versionado en `docs/migrations/2026-10-18-shipping-policy-body.html`.

## Decisiones de negocio
El suministro no incluye transporte salvo oferta expresa; se cotiza por modelo, dimensiones, ruta, accesos y condiciones de descarga. El estándar, cuando contratado, llega a punto accesible acordado. Grúa, descarga, traslado en parcela, almacenaje, montaje y maniobras extraordinarias son opciones con precio desglosado y aceptación previa. Ningún sobrecoste imputable al proveedor puede transferirse indiscriminadamente al consumidor.

## Fuentes
Business Brief, Arquitectura IA, catálogo maestro (105 registros Shopify, 71 activos), política comercial interna `2026-10-18-delivery-standard-policy.md`; benchmark aportado Caleba, Eurocasetas, Casetas de Jardín 24, Hortum, Balticasa, etc. Referencia legal: RDL 1/2007 arts. 60, 66 bis y 66 ter, y régimen general de consumo.

## Gates
Comprobar que Shopify Admin contiene el texto legal publicado, que la conexión tiene `write_legal_policies` o publicar manualmente; no confundir merge GitHub con publicación ShopPolicy. Validar un solo H1, HTML de Shopify, rutas, responsive 375/768/1440 px, CSS del tema publicado, accesibilidad, checkout e información previa de coste total y plazo. No afirmar entrega universal ni traslado de riesgo anterior a posesión material. Revisar con asesor jurídico antes de publicación definitiva.

## Reversión
Revertir commit CSS/tema y restaurar política previa en Admin. No duplicar texto en snippets o secciones.
