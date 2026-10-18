# Consolidación ejecutiva de transporte y logística · 18/10/2026
## Decisión
Un único destino público para la intención de transporte y logística:
- URL canónica: `/pages/transporte-entrega-casas-casetas-madera`.
- URL que se retira: `/pages/secure-shipping-logistics-spain`; mantener redirección permanente 301 hacia la canónica, una vez despublicada Page antigua.
- La segunda URL no aporta una oferta diferenciada ni una intención SEO acreditada.
- Se conserva temporalmente la plantilla antigua en GitHub como recurso reversible, no como landing pública.

## Fuentes y validación de negocio
01 Web Business Brief, 03 Arquitectura + Sitemap (one intent, one landing), 04 Keyword & Search Intent Map, Diseño Técnico Shopify, catálogo maestro 17-10-2026, migraciones 18-10-2026, Shopify Admin y páginas publicadas. España peninsular como prioridad sin compromisos de cobertura no verificados.

## Contratación y rentabilidad
- El precio de producto no incluye por defecto transporte, salvo oferta expresa. Transporte al punto accesible definido y con presupuesto por modelo, carga, ubicación y acceso.
- Descarga, grúa, transbordos, colocación en parcela, montaje, permisos y reprogramaciones solicitadas son extras valorados y aceptados antes de ejecutar.
- Registrar peso, bultos, dimensiones, accesos, restricciones, operador, medios, fecha o plazo, impuestos, personas responsables y documentación de recepción.
- No prometer tarifa ni plazo universales, disponibilidad de vehículo o ausencia de gastos por cambios originados por el cliente.
- Preservar derechos imperativos de consumo en entrega/riesgo conforme al RDL 1/2007, arts. 66 bis y 66 ter; no trasladar costes o riesgos propios injustamente al consumidor.

## Implementación Shopify
`sections/ie-home-delivery.liquid` + CSS encapsulado: copia comercial, características técnicas, FAQ, recepción, CTA; un H1 y enlaces internos hacia el mismo destino. Revisión SEO `snippets/meta-tags.liquid`, `config/llms.txt` y enlaces de condiciones.
## Registro SEO
| old_path | new_path | reason | owner | status |
|---|---|---|---|---|
| /pages/secure-shipping-logistics-spain | /pages/transporte-entrega-casas-casetas-madera | Consolidación sin canibalización | BA / SEO / Shopify | Pendiente de verificar HTTP 301 |
## Gates y rollback
1. Commit `main` y verificar sincronización de cambios en tema publicado.
2. Verificar nueva landing renderizada y crear redirect old → new en Shopify.
3. Despublicar Page antigua y comprobar 301 real, destino 200, canonical y enlaces internos.
4. Comprobar 375, 768 y 1440 px, accesibilidad, Theme Check y revisión jurídica final.
Rollback: revertir commit, publicar Page antigua, eliminar redirección identificada por ID y actualizar metadatos/enlaces.
