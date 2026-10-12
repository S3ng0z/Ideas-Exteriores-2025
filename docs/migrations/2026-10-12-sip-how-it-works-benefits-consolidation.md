# Consolidación Paneles SIP: qué es y cómo funciona + ventajas

Fecha: 2026-10-12. Rama: main.

## Arquitectura

Se conserva la página Shopify `/pages/structural-insulated-panel-system-how-it-works` (gid://shopify/Page/150461383000), con título «PANELES SIP: QUÉ SON, CÓMO FUNCIONAN Y VENTAJAS» y template `page.structural-insulated-panel-system-how-it-works.json`. La nueva landing reutiliza secciones del sistema visual Services: hero, tarjetas, proceso, ventajas, criterios, FAQ y CTA. Evita promesas absolutas de ahorro, plazos o aislamiento.

Se elimina la página `/pages/structural-insulated-panel-advantages-vs-traditional-building` (gid://shopify/Page/150461743448). Se añade URL redirect desde esta ruta al destino conservado (gid://shopify/UrlRedirect/1437445259608). Se elimina del menú PANELES SIP la entrada «VENTAJAS FRENTE A LA OBRA TRADICIONAL» y se cambia el título de la primera a «QUÉ ES Y CÓMO FUNCIONA».

## Archivos

- `templates/page.structural-insulated-panel-system-how-it-works.json`: contenido editorial integrado.
- `snippets/meta-tags.liquid`: SEO title y meta description específicos para la URL conservada.

## Verificaciones

Consultas Shopify Admin sin errores: Page conservada publicada y con templateSuffix correcto; secundaria eliminada; redirect registrado; template nuevo presente en el theme de rol MAIN. Se recomienda inspección visual adicional en escritorio y móvil, y comprobación de respuesta HTTP 301 y canonical público.
