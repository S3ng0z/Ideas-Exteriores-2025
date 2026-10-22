# ProTech Tiles · refactorización de producto y PVP

**Fecha:** 2026-10-22  
**Rama:** `main`  
**Producto:** `gid://shopify/Product/15458593636696`  
**Handle:** `diy-click-deck-tiles`

## Arquitectura
Se sustituye la plantilla legacy `desk` por `product.decking-tiles`, reutilizable para loseta modular. Comparte sections y CSS con las fichas decking/WPC, pero evita asumir lamas, rastreles, clips o equivalencia €/m².

## Hallazgos
El catálogo maestro clasifica el producto en WPC, mientras la descripción Shopify legacy afirma polipropileno 30×30×≈2 cm. El SKU actual `DECK_WPC_STANDARD_21X140` tampoco acredita una loseta 30×30. Por tanto, se eliminan composición, dimensiones y prestaciones no reconciliadas y se publica una descripción neutral hasta validar ficha de proveedor.

## PVP
Los importes 19,90 / 39,90 / 79,00 € se convierten a PVP final con IVA incluido manteniendo equivalencia económica:
- OUTDOOR CORE: **24,08 €**
- OUTDOOR CLEAN: **48,28 €**
- OUTDOOR SELECT: **95,59 €**

No se presenta ninguno como €/m² hasta validar unidad comercial y cobertura.

## Shopify objetivo
- Template: `decking-tiles`
- Product type: `Loseta modular exterior`
- SEO: `ProTech Tiles | Loseta modular para exterior`
- Variante: 24,08 €
- Metafields: 24,08 / 48,28 / 95,59 €
- Descripción semántica sin CSS, H1 duplicado, referencias a terceros ni botones de contacto embebidos.

## Pendientes técnicos
Validar referencia/SKU proveedor, material, dimensiones, espesor, unidad de venta, cobertura, soporte/drenaje, resbaladicidad si aplica, UV, garantía, stock, embalaje y logística.

## Rollback
Restaurar template `desk`, descripción/SEO anteriores, variante 19,90 € y metafields 19,90 / 39,90 / 79,00 €.
