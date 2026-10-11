# Consolidación: capas, materiales, espesores y confort térmico

**Fecha:** 2026-10-11  
**Ámbito:** Shopify Admin (Online Store > Pages / Content > Menus / URL redirects)  
**Theme:** Online Store 2.0 · plantilla compartida `page.generic`  
**Estado:** migración de contenido y navegación aplicada en Shopify; registro de arquitectura en Git.

## Decisión de arquitectura

Una intención técnica debe tener una sola página principal para evitar canibalización SEO y duplicación editorial. Conservar:

- **URL canónica**: `/pages/light-timber-building-layers-materials-thickness`
- **Page GID**: `gid://shopify/Page/150540157272`
- **Título**: «CAPAS, MATERIALES, ESPESORES Y CONFORT TÉRMICO»

Retirar la página:

- **URL anterior**: `/pages/light-timber-building-thermal-comfort-energy-savings`
- **Page GID eliminado**: `gid://shopify/Page/150540583256`

## Integración editorial aplicada en el recurso Page

Se conservó el contenido existente de estructura, espesores, aislamiento, tableros, humedad, acabados, uniones y FAQ. Se añadieron bloques editoriales integrados de:

1. Confort térmico y demanda energética en invierno y verano.
2. Hermeticidad y reducción de puentes térmicos.
3. Confort según uso real: vivienda, oficina/estudio, anexo.

Se evitó duplicar la tabla de valores U y se mantuvo el carácter **orientativo y sujeto a proyecto** de los datos térmicos, sin promesas porcentuales de ahorro.

## Menú principal

En `main-menu`, bajo «SISTEMAS CONSTRUCTIVOS > ENTRAMADO LIGERO»:

- Mantener el enlace a la página conservada, con título «CAPAS, MATERIALES, ESPESORES Y CONFORT».
- Retirar la entrada «CONFORT TÉRMICO Y AHORRO DE ENERGÍA» de la página eliminada.

## Redirección SEO

| Origen | Destino | Tipo |
|---|---|---|
| `/pages/light-timber-building-thermal-comfort-energy-savings` | `/pages/light-timber-building-layers-materials-thickness` | 301 |

Shopify URL Redirect ID: `gid://shopify/UrlRedirect/1437326967128`.

**Nota:** Shopify aplica redirecciones sobre rutas no ocupadas por recursos activos; se eliminó la página secundaria antes de crear el redirect.

## Comprobación realizada tras el cambio

- Página destino existente y con el bloque `id="confort-termico"`.
- Página eliminada ausente del listado de páginas Shopify.
- Redirect existente con el origen y destino correctos.
- Menú principal sin la entrada de la página retirada.
- Mutaciones Shopify sin `userErrors`.

## Límites del despliegue

Los textos de ambas páginas eran contenido del recurso **Page** en Shopify Admin, con `templateSuffix: generic`. No existían referencias literales a estos slugs en el código de `main` al auditar el repositorio. **No se debe crear un template específico ni duplicar el HTML en el theme**: el contenido continuará siendo editable en el Admin de Shopify.

Este archivo es el registro de migración en Git, no un mecanismo de sincronización automática con Shopify. Un commit en GitHub por sí solo no actualiza el contenido de Pages, menús o redirects de Shopify.

## QA recomendado en navegador sin caché

- Verificar respuesta HTTP 200 del destino.
- Verificar respuesta HTTP 301 del origen, seguida de 200 en el destino.
- Confirmar un único H1, canonical del destino y ausencia de enlaces internos a la ruta retirada.
- Revisar página y navegación en escritorio y móvil.
- Monitorizar cobertura y clics en Search Console.

## Reversión

La eliminación de la página original no se revierte desde Git: será preciso recrear o restaurar el recurso de Shopify a partir de copia de seguridad, quitar la 301 si se recupera la URL y restituir el menú manualmente. Conservar este registro como mapa de migración.
