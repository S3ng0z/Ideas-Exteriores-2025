# Consolidación «Comparar y elegir» · 2026-10-21

## Objetivo
Establecer tres páginas estratégicas sin competir por una cuarta página legacy.

## Arquitectura aplicada en el menú principal de Shopify
Sistemas constructivos:
- Sistema europeo
- Entramado ligero
- Paneles SIP
- Comparar y elegir
  1. /pages/timber-construction-systems-comparison
  2. /pages/choose-timber-construction-system
  3. /pages/how-to-choose-timber-construction-system

El elemento «Comparar y elegir» enlaza a la primera guía y contiene los tres subenlaces.

## URL legacy consolidada
Se eliminó de Shopify la página duplicada /pages/light-frame-vs-sip-comparison (Page gid://shopify/Page/155467645272).
Se creó UrlRedirect gid://shopify/UrlRedirect/1442975449432:
- path: /pages/light-frame-vs-sip-comparison
- target: /pages/timber-construction-systems-comparison

## Validación
Relectura de Shopify Admin confirma:
- Menú main-menu y tres niveles correctos.
- La página antigua ya no existe.
- El redirect existe y tiene destino canónico.
- Las tres páginas de destino están publicadas.
No se modifica código de plantillas ni de estilos en esta operación. Las guías ya se desplegaron previamente en el tema MAIN.
