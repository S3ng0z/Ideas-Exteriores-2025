# Homepage first-paint performance refactor

Date: 2026-10-13

## Problem

The live Shopify MAIN theme stores legacy homepage copy in `templates/index.json` and then applies the current customer-visible presentation with four deferred compatibility scripts:

- `ie-home-hero.js`
- `ie-home-solutions.js`
- `ie-home-benefits.js`
- `ie-home-criteria.js`

That architecture creates two visible states: Shopify can paint the legacy copy first, then JavaScript replaces the text and classes after parsing. The customer perceives this as the homepage loading twice.

## Constraint

Customer-visible content must remain unchanged. The Shopify Theme Editor homepage data is intentionally left untouched because it is Admin-managed and the live theme currently does not accept that generated template file reliably through the GitHub synchronization path.

## Architecture decision

The four independent deferred homepage scripts are replaced by one deterministic compatibility runtime, `assets/ie-home-runtime.js`.

The homepage receives an `ie-home-prep` class on the root element. Render-blocking homepage CSS temporarily sets only the affected text blocks to `visibility: hidden`, preserving their layout footprint while preventing legacy copy from flashing.

After `{{ content_for_layout }}` has been parsed, one synchronous homepage-only script runs once, applies the exact same final customer-visible copy and presentation classes that the four legacy scripts produced, and immediately removes `ie-home-prep`.

The old JavaScript assets remain in the repository for rollback/history, but the live layout no longer requests them.

## Invariants

- Navigation, video, imagery, links, products, prices, section ordering and customer-visible wording remain unchanged.
- The final homepage copy is byte-for-byte equivalent in meaning and wording to the existing post-JavaScript presentation.
- No legacy homepage text is intentionally shown during first paint.
- Theme Editor section reloads remain supported through `shopify:section:load`.
- If a transformation throws, the runtime removes the preparation class in `finally`, so content is never left permanently hidden.

## Expected performance effect

- Homepage compatibility JavaScript requests: 4 -> 1.
- Retry timers: removed.
- Repeated document-wide DOM scans: removed in favor of one deterministic pass over four known sections.
- Visible legacy-to-current text replacement: suppressed.
- Reduced layout-shift and perceived "double load" risk.

## Rollback

Restore the four deferred script tags in `layout/theme.liquid`, remove the homepage `ie-home-prep` class and synchronous `ie-home-runtime.js` include, and remove the visibility guard from `ie-home-hero.css`.
