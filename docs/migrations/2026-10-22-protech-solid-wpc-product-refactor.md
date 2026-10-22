# ProTech Solid · auditoría y actualización de ficha

**Fecha:** 2026-10-22  
**Producto:** `gid://shopify/Product/15458603598168`  
**Handle:** `wpc-solid-decking-heavy-duty`  
**Referencia catálogo:** CAT-068  
**Plantilla de arquitectura existente:** `templates/product.wpc-decking.json`

## Arquitectura

La plantilla compartida WPC del repositorio dispone de hero, ficha y galería, comparación OUTDOOR CORE / CLEAN / SELECT, proceso y recomendaciones. Se reutiliza, sin duplicar componentes, CSS ni fragmentar la familia WPC. El contenido específico se mantiene en Shopify Product.

## Cambio realizado en Shopify Product

- Título: **ProTech Solid | Tarima exterior WPC maciza**
- Descripción HTML revisada, semántica y sin CSS inline: propuesta de valor, especificaciones verificables y condicionadas, pautas de instalación y mantenimiento y alcance de las tres modalidades comerciales.
- Se retienen handle, imágenes, estado ACTIVE y variante.
- Variante: **33,76 €**, correspondiente a 27,90 € + IVA 21 %, por redondeo.

## Precios de referencia del catálogo, no desplegados como opciones

- OUTDOOR CORE: 27,90 € antes de IVA → 33,76 € IVA incluido.
- OUTDOOR CLEAN: 89,90 € antes de IVA → 108,78 € IVA incluido.
- OUTDOOR SELECT: 149,00 € antes de IVA → 180,29 € IVA incluido.

Los precios de CLEAN y SELECT **no se han publicado en metafields**, porque la conexión disponible no soporta edición de esos metafields. Se debe verificar además la unidad real de venta antes de activar un carrito basado en m²/tabla/caja. No debe comunicarse como €/m² sin evidencia documental.

## Limitaciones de despliegue

La conexión disponible permite editar producto/variante, pero no asignar `templateSuffix`, modificar metafields ni desplegar tema activo Shopify. El commit en `main` documenta la decisión, **no acredita publicación de nueva plantilla en el tema activo**. Verificar que el producto usa `wpc-decking` y que esa plantilla está publicada en el tema activo antes de dar por finalizada la homogeneización visual.

## QA y rollback

La actualización de Shopify devolvió estado ACTIVE, título y precio esperados. Para revertir contenido y título, restaurar el snapshot previo de Shopify; conservar precio de 33,76 € salvo decisión de pricing. Mantener la descripción libre de afirmaciones técnicas no documentadas, especialmente cargas, clase antideslizante, resistencia y garantías.
