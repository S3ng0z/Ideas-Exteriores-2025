# Consolidación SIP · montaje, durabilidad y sostenibilidad

Fecha: 2026-10-12. Rama: `main`.

## Decisión

URL canónica conservada: `/pages/structural-insulated-panel-manufacturing-and-assembly`; Page ID: `gid://shopify/Page/150464954712`. Título: «MONTAJE, DURABILIDAD Y SOSTENIBILIDAD». Template editorial: `templates/page.structural-insulated-panel-manufacturing-and-assembly.json`.

Se integran ingeniería, fabricación, logística, montaje, protección de juntas, vida útil, inspección, reparación, garantías y criterios ambientales. Diseño reutilizado de `services`: hero, tarjetas, proceso, criterios, FAQ y CTA. Evitar valores absolutos de duración, plazo, neutralidad de carbono y garantías no documentadas.

## Páginas eliminadas

- `/pages/structural-insulated-panel-durability-warranty-maintenance` (Page `gid://shopify/Page/150466527576`).
- `/pages/structural-insulated-panel-sustainable-construction-certifications` (Page `gid://shopify/Page/150466756952`).

Ambas tienen redirección SEO al destino conservado (Shopify Redirect IDs `gid://shopify/UrlRedirect/1437447881048` y `gid://shopify/UrlRedirect/1437447913816`).

## Menú y SEO

En `main-menu > SISTEMAS CONSTRUCTIVOS > PANELES SIP` se conserva el tercer enlace, renombrado «MONTAJE, DURABILIDAD Y SOSTENIBILIDAD»; las dos entradas duplicadas se retiran. El grupo queda en 4 páginas.

`snippets/meta-tags.liquid` define título «Paneles SIP: montaje, durabilidad y sostenibilidad» y descripción «Fabricación y montaje de paneles SIP: fases de obra, vida útil, mantenimiento, garantías y sostenibilidad. Certificaciones, humedad y ciclo de vida.»

## Comprobaciones

Shopify Admin confirmó página conservada publicada con templateSuffix correcto, ambas páginas retiradas ausentes, las dos redirecciones presentes y menú con 4 entradas. Shopify Theme MAIN confirmó existencia del template nuevo. Verificar adicionalmente respuesta HTTP del storefront, render responsive y canonical tras propagación.

## Reversión

Restaurar las páginas de Shopify mediante copia previa, retirar redirects, revertir enlaces del menú y el templateSuffix, revertir los commits correspondientes en GitHub.
