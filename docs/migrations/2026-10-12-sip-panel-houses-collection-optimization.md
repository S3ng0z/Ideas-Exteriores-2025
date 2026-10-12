# Optimización colección · Casas con panel SIP

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme  
**Rama:** `main`  
**Colección:** `/collections/sip-panel-houses`

## Objetivo

Convertir la colección SIP en una página comercial de decisión —modelos primero, sistema técnico como soporte— y conectarla con el hub formativo ya publicado, evitando claims universales sobre aislamiento, fuego, durabilidad, plazo o sostenibilidad.

## Auditoría AS-IS

La versión pública revisada entraba prácticamente de forma directa en filtros y catálogo, con 9 modelos visibles y sin una introducción comercial/técnica equivalente a las páginas de sistema. Además, el HTML público todavía mostraba acciones de “Añadir” en viviendas SIP de alto ticket.

El repositorio ya excluye `sip-panel-houses` del quick-add en `snippets/product-card.liquid`; por tanto, el desfase corresponde a la plantilla/sincronización que llega al storefront y no requiere reintroducir lógica de carrito.

## Criterio de arquitectura

- Collection = modelos comerciales comparables.
- Product = modelo y alcance concreto.
- Page = conocimiento técnico profundo del sistema.
- Un solo H1.
- Decisión comercial antes del grid.
- Formación técnica, FAQ y CTA después del grid.
- El precio “desde” no se presenta como presupuesto cerrado.
- Las prestaciones se atribuyen a la solución completa y documentada.

## Fuentes revisadas

Se revisó el conjunto funcional, técnico y comercial aportado (30 referencias), priorizando para claims:

1. CTE / Ministerio: DB-SE, DB-SE-M y DB-HE.
2. Documentación de sistema y fabricante: Kingspan TEK.
3. Asociaciones técnicas: Structural Timber Association y SIPA.
4. Detalles de ejecución: SIP Build UK y guías de instalación.
5. Fuentes comerciales españolas: PanelSIP, Bosq Habitat, TC PANSIP, comparadores y guías de precios.

### Conclusiones que se trasladan a la UX

- “SIP” no identifica una única composición: caras, núcleo, espesores, adhesivos, uniones y certificaciones cambian por sistema.
- Valor U, fuego, acústica y resistencia deben corresponder a la solución documentada, no a un claim genérico.
- Juntas, huecos, sellados, agua y ejecución condicionan hermeticidad, humedad y durabilidad.
- En España, usar SIP no sustituye la justificación del CTE que corresponda al edificio.
- Kit, montaje, cubierta, fachada/SATE y llave en mano representan alcances distintos; el precio debe compararse con el mismo perímetro.
- La industrialización puede mejorar previsibilidad y montaje, pero no convierte el tiempo de montaje en plazo total de proyecto.

## Implementación

### 1. Sección handle-aware

Nuevo `sections/ie-sip-collection.liquid` con dos modos:

- `intro`: breadcrumb, H1, propuesta de valor, pasos previos, guía de elección.
- `outro`: navegación a las 4 guías SIP, criterios de validación técnica, FAQ de compra y CTA.

La sección solo renderiza cuando `collection.handle == 'sip-panel-houses'`.

### 2. Compatibilidad con plantilla por defecto

`templates/collection.json` incorpora intro/outro SIP y suprime el breadcrumb/título global para esta colección. Así la optimización no depende de que Shopify tenga asignada la plantilla alternativa.

### 3. Plantilla alternativa

`templates/collection.sip-panel-houses.json` reutiliza la misma sección SIP y conserva la configuración actual del grid.

### 4. Diseño

Nuevo `assets/ie-sip-collection.css`:

- reutiliza los tokens y tipografías del layer habitable;
- 4 recursos técnicos en desktop, 2 en tablet, 1 en mobile;
- criterios en 3 columnas / 1 columna responsive;
- FAQ nativa con `details/summary`;
- foco visible y soporte `prefers-reduced-motion`;
- sin introducir nuevos colores hex de marca.

### 5. SEO

`snippets/meta-tags.liquid` añade metadata específica:

- Title: **Casas con panel SIP: modelos y precios | Ideas Exteriores**
- Description: **Compara casas con panel SIP por superficie, distribución y precio de partida. Revisa alcance, montaje y parcela antes de solicitar un presupuesto.**

Se evita la promesa genérica “máximo aislamiento” en el title.

## QA

- JSON de ambas plantillas validado.
- IDs de `sections` / `order` coherentes.
- Schema de sección válido y restringido a `collection`.
- Tags Liquid de control balanceados.
- Un solo H1 en la sección SIP.
- Enlaces internos alineados con los handles SIP actuales.
- Se conserva el `main-collection` existente de la plantilla alternativa.
- Quick-add SIP confirmado como excluido en el snippet actual del repositorio.
- Cambio preparado como commit atómico sobre el último HEAD de `main`.
