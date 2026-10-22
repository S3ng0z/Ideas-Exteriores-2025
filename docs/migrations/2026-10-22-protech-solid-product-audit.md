# ProTech Solid · Auditoría y actualización parcial Shopify

Fecha: 2026-10-22. Producto: gid://shopify/Product/15458603598168. Handle: wpc-solid-decking-heavy-duty.

## Catálogo y arquitectura
Referencia CAT-064 / ProTech Solid. El catálogo aporta 27,90 / 89,90 / 149,00 EUR (referencias sin IVA) y advierte que la unidad de venta física no está acreditada. Equivalentes con IVA general 21 %: 33,76 / 108,78 / 180,29 EUR. La variante previamente registrada era 27,90 EUR; no presupone equivalencia con m².

La plantilla compartida `product.decking.json` existe en main, con hero, galería, comparativa CORE/CLEAN/SELECT, proceso y CTA. No se ha confirmado ni aplicado la asignación de templateSuffix al producto mediante Shopify Admin. No afirmar despliegue visual de esa plantilla.

## Cambio ejecutado en Shopify
Se sustituyó descripción legacy (CSS global, H4 y afirmaciones técnicas genéricas) por contenido HTML semántico H2/H3, alcance de paquetes y cautelas técnicas. Se cambió variante de 27,90 a 33,76 EUR, interpretación de PVP con IVA. Se preservaron título, imágenes, handle, disponibilidad y estado ACTIVE.

## Pendientes técnicos antes de cerrar migración
- Configurar metafields de precios basic/standard/passive a 33,76 / 108,78 / 180,29 EUR.
- Asociar templateSuffix decking en Shopify Admin; confirmar sincronización del tema live desde main.
- Confirmar unidades reales, dimensiones, rendimiento, stock, garantía, ensayos y fichas del fabricante.
- Verificar en el front-end que no hay precio sin IVA mezclado con PVP final ni equivalencia por m² no contrastada.

## Rollback Shopify
Restaurar variante a 27,90 EUR y descripción anterior desde el historial de Shopify si fuera necesario. No se han tocado otros productos ni plantillas compartidas.
