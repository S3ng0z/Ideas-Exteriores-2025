# Optimización colección · Casas de entramado ligero

**Fecha:** 2026-10-12  
**Ámbito:** Shopify Theme  
**Rama:** `main`  
**Colección:** `/collections/light-frame-houses`

## Objetivo

Alinear la colección comercial de viviendas de entramado ligero con la arquitectura funcional de Ideas Exteriores: modelo comercial primero, sistema constructivo como capa técnica transversal y presupuesto condicionado a alcance, parcela, logística, montaje y acabados.

## Criterio de arquitectura

- Collection = familia/modelos comparables.
- Product = modelo comercial.
- Page = guía/hub técnico del sistema.
- Entramado Ligero no duplica el catálogo ni convierte la colección en un manual técnico.
- El precio “desde” se presenta como referencia inicial del modelo, no como presupuesto cerrado.
- Se evitan claims absolutos de plazo, ahorro, sostenibilidad, vida útil o cumplimiento normativo.

## Cambios

### 1. Arquitectura visual y de contenido

`templates/collection.light-frame-houses.json` pasa a reutilizar la arquitectura modular de colecciones habitables:

1. `ie-habitable-collection-hero`
2. `ie-habitable-collection-guide`
3. `main-collection`
4. `ie-habitable-collection-cta`

Esto homogeneiza Entramado Ligero con la colección SIP y reduce código específico.

### 2. Hero

- H1: **Casas de entramado ligero**
- Propuesta: comparar modelos por superficie, distribución y precio de partida.
- Secuencia de decisión:
  - seleccionar modelo base;
  - revisar precio “desde” y alcance;
  - validar parcela, accesos, base, acabados y montaje.

### 3. Guía de decisión

La colección introduce tres criterios comerciales:

- MODELO: superficie y distribución.
- ALCANCE: interpretación del precio “desde”.
- PROYECTO: condiciones necesarias antes de cerrar propuesta.

Se enlaza la guía técnica pública:
`/pages/what-is-light-timber-frame-construction`.

### 4. Catálogo

- Rejilla centrada.
- Precio y swatches alineados a la izquierda.
- Espaciado coherente con la colección SIP.
- Se conserva filtrado, ordenación y densidad de rejilla.

### 5. CTA

Se dirige al usuario a revisar la ficha del modelo y, si necesita ayuda, a:

- `/pages/services`
- `/pages/contact-ideas-exteriores`

### 6. SEO

`snippets/meta-tags.liquid` añade metadata específica para la colección:

- Title: **Casas de entramado ligero de madera | Ideas Exteriores**
- Description: **Compara casas de entramado ligero por superficie, distribución y precio de partida. Revisa el alcance del modelo y solicita estudio para tu parcela.**

Se elimina del title la promesa genérica “A MEDIDA”, por no corresponder con el modelo funcional de oferta estandarizada/configurable.

## Base técnica revisada

Se han utilizado como criterio las fuentes aportadas sobre Entramado Ligero y, especialmente, documentación de CTE DB-SE-M, CTE DB-HE, Egoin, Timber Development UK, ARQUIMA y Build-in-Wood.

La colección no convierte esas fuentes en claims comerciales universales. Las prestaciones se atribuyen al proyecto y a la solución completa.

## QA realizado

- JSON del template parseado correctamente.
- Secciones y tipos reutilizados ya existen en el tema y están operativos en la colección SIP.
- Enlace técnico apunta al handle público actual.
- CTA de contacto apunta al handle público actual.
- Override SEO limitado a `collection.handle == 'light-frame-houses'`.
- Cambios escritos directamente en `main`.

## Commits

- Template: `d46131339d283fccb415f81541d10eaf0f169519`
- SEO: `e15efd5f1b7018f418be69ea7d46b06fe634e92b`

## Despliegue

Los cambios están publicados en la rama `main` del repositorio conectado. La verificación HTTP pública puede mostrar contenido anterior mientras Shopify/CDN o el mecanismo de sincronización del tema no haya propagado el último commit; el repositorio no contiene un workflow GitHub Actions de despliegue adicional.
