# Política de privacidad nativa · 18/10/2026

## Decisión de arquitectura
- La URL canónica se mantiene en Shopify: `/policies/privacy-policy`.
- El contenido legal se gestiona mediante `ShopPolicy` / `PRIVACY_POLICY`; no se duplica en una Page, snippet o Custom Liquid.
- El tema solo controla la presentación. `layout/theme.liquid` carga `assets/ie-privacy-policy.css` exclusivamente cuando `request.page_type == 'policy'` y la ruta coincide con `shop.privacy_policy.url`.
- El footer conserva `shop.policies`, por lo que el enlace nativo sigue sincronizado con Shopify.

## Criterio de negocio y privacidad
La política se adapta al recorrido real de Ideas Exteriores: consulta y presupuesto contextualizado, datos de modelo/configuración, medidas o superficie, provincia/código postal y emplazamiento cuando sea necesario, fotografías/planos, suministro/instalación, pedido, pago, entrega, montaje, garantía y posventa.

No se declaran como activos proveedores analíticos o publicitarios no verificados. Las tecnologías no esenciales quedan condicionadas al consentimiento y a la configuración real de la tienda.

## Marco validado
- RGPD: información, bases jurídicas, destinatarios, transferencias, conservación y derechos.
- LOPDGDD.
- LSSI: comunicaciones comerciales y tecnologías de almacenamiento/acceso.
- Shopify: Merchant = responsable general de los datos de clientes; Shopify presta la plataforma y documenta transferencias internacionales y subencargados.
- Benchmark sectorial: Balticasa, Steel Home España y The Concrete Home, usando únicamente patrones de transparencia y no su redacción.

## Presentación
Sistema visual coherente con `/pages/services`:
- Source Serif 4 para títulos y Manrope para lectura.
- Paleta `#1f231e`, `#566236`, `#f9f8f6`, `#efeee9`.
- Ancho de lectura de 980 px, jerarquía editorial, primera capa destacada, enlaces accesibles y responsive específico por debajo de 750 px.
- Sin navegación transversal añadida a la política.

## QA / aceptación
1. Un único H1 generado por la política nativa.
2. HTML de contenido sin scripts ni estilos embebidos.
3. CSS aislado a la URL de privacidad.
4. Lectura móvil sin texto justificado, tablas ni desbordamiento horizontal.
5. Footer y checkout siguen apuntando a la política nativa.
6. Revisar primera capa en cada formulario de captación y separar el consentimiento comercial del tratamiento necesario para responder una consulta.
7. Auditar el banner/CMP y la política de cookies contra las tecnologías realmente instaladas; la política de privacidad no sustituye esa comprobación.
8. La redacción debe mantenerse alineada con proveedores, flujos y plazos reales; cualquier cambio material requiere actualizar la política.

## Rollback
Revertir el commit del tema y restaurar la versión anterior de `PRIVACY_POLICY` desde el historial/backup administrativo si fuese necesario.
