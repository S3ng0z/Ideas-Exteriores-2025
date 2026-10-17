# Hotfix de despliegue Shopify · home (2026-10-17)

## Problema verificado
El tema publicado `Ideas-Exteriores-2025/main` conservaba `templates/index.json` de 2026-08-15, pese a que otros archivos Liquid se habían sincronizado desde GitHub. Al subir la misma plantilla a un tema de prueba mediante Shopify Admin GraphQL, Shopify devolvió `FILE_VALIDATION_ERROR: CSS personalizado contiene más de 500 caracteres`, específicamente en `sections.hero_irjTFL.custom_css`.

## Corrección entregada en main
1. Elimina de `templates/index.json` el bloque `custom_css` inválido del hero, redundante con estilos en `assets/ie-home-hero.css`.
2. Mantiene `ie_home_discovery`, `ie_home_systems`, el H1 actualizado y acciones comerciales en una única plantilla Shopify OS2.
3. Introduce `ie_home_sections_native` en el esquema de `sections/hero.liquid` con default false; la plantilla optimizada lo establece true para impedir la doble inserción de secciones desde el fallback Liquid. Si Shopify conserva la plantilla legacy, la inyección del fallback permanece disponible.
4. La copia no publicada de prueba `gid://shopify/OnlineStoreTheme/200118993240` admitió `templates/index.json` sin el CSS inválido, con H1 y ambas secciones presentes, sin errores.

## QA requerido
Confirmar vía Admin GraphQL la fecha de actualización de `templates/index.json` del tema MAIN después del commit; comprobar H1 y secciones sin duplicaciones en HTML público; controlar CLS/LCP, móvil y escritorio. Si GitHub no propaga `templates/index.json` pese a este arreglo, no tratar el merge en main como publicación: usar la copia de pruebas validada y publicarla manualmente desde Shopify, pues la API conectada bloquea cambios directos en temas publicados y `themePublish`.

No se debe afirmar despliegue público hasta verificarlo.