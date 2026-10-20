# Contacto nativo · retirada de Powerful Form Builder de la página de contacto

Fecha: 2026-10-20  
Página: /pages/contact-ideas-exteriores  
Rama objetivo: main

## Decisión

La página de contacto deja de depender de Powerful Form Builder y utiliza el formulario de contacto nativo de Shopify mediante form 'contact'. La decisión sigue el criterio native-first documentado para formularios corporativos simples y evita mantener una app de terceros como requisito para una capacidad que Shopify ya cubre de forma suficiente.

Powerful Form Builder no se desactiva globalmente en este cambio porque existen otros templates que todavía contienen bloques de la app. Desactivar el app embed o retirar la aplicación en este mismo despliegue podría romper formularios ajenos a la página de contacto. La migración de esos consumidores debe tratarse por separado.

## Criterio de negocio y UX

La referencia visual de Index Wood se utiliza únicamente como patrón de jerarquía: información de contacto a la izquierda y un formulario dominante, blanco, delimitado y de lectura inmediata a la derecha. La identidad visual sigue siendo la de Ideas Exteriores: Source Serif 4 + Manrope, Forest #566236, fondo Bone y bordes rectos.

Se reduce la fricción frente al formulario anterior y se conservan únicamente datos útiles para clasificación y respuesta:

- motivo de la consulta;
- referencia opcional de modelo, presupuesto, pedido o factura;
- nombre y email;
- teléfono y ubicación opcionales;
- mensaje;
- aceptación de la política de privacidad;
- origen de la consulta.

Los enlaces que llegan con parámetros como producto, modelo, servicio o referencia precargan el campo Referencia mediante JavaScript progresivo. Si JavaScript no está disponible, el formulario sigue funcionando completamente con Shopify.

## Arquitectura

- templates/page.contact.json: plantilla OS 2.0 sin app block.
- sections/ie-contact-form.liquid: composición editorial + formulario nativo.
- snippets/ie-contact-native-form.liquid: contrato de campos y submit Shopify.
- assets/ie-contact-form.js: mejora progresiva para conservar contexto URL y evitar doble envío.
- assets/ie-contact-page.css: estilos encapsulados; no modifica componentes globales.

No se introduce endpoint propio, CRM, almacenamiento paralelo ni PII en analítica. Shopify sigue siendo el receptor del formulario corporativo. Si en el futuro el presupuesto necesita lógica condicional, adjuntos, routing o persistencia estructurada de configuración, deberá evolucionar a un quote engine/Lead Adapter específico en lugar de volver a convertir el formulario general en un configurador.

## Validación de arquitectura

- Native-first: conforme.
- Dependencia de app para contacto general: eliminada.
- Progressive enhancement: conforme; JavaScript no es requisito para enviar.
- Accesibilidad: labels persistentes, required semántico, estados role=status/alert, foco visible y orden de encabezados H1 → H2.
- Responsive: dos columnas en escritorio y una columna en móvil.
- Privacidad: no se añade tracking de PII; se enlaza la política y se registra el origen dentro del lead.
- Rendimiento: una dependencia JS local mínima y sin librerías externas.
- Scope: no se altera el app embed global ni otros templates que todavía usan Powerful Form Builder.

## QA de publicación

1. Verificar que /pages/contact-ideas-exteriores usa el template contact.
2. Abrir la página en escritorio y móvil y comprobar que el formulario aparece sin ningún bloque de Powerful Form Builder.
3. Enviar una consulta de prueba y confirmar recepción en el canal configurado por Shopify.
4. Probar error de email y campos required.
5. Probar una URL con ?producto=poolhouse-oasis-plus y confirmar que Referencia se precarga.
6. Confirmar que el enlace de privacidad resuelve correctamente.
7. Revisar que el app de Powerful Form Builder sigue operativo únicamente donde aún existan consumidores pendientes de migración.

## Rollback

Revertir este commit restaura el app block y la composición anterior de page.contact.json. No hay migración de datos ni cambios en Shopify Admin que requieran rollback adicional.
