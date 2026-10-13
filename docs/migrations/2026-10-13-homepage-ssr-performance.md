# Homepage SSR performance refactor

Date: 2026-10-13

## Problem

The live homepage ships legacy copy in the server-rendered HTML and then loads four deferred scripts
(`ie-home-hero.js`, `ie-home-solutions.js`, `ie-home-benefits.js`, `ie-home-criteria.js`).
Those scripts wait for DOM readiness, locate the corresponding blocks, replace visible copy with
`innerHTML` / `textContent`, and add presentation classes. This creates a two-phase render:
customers can see the old page first and the intended page second.

## Architecture decision

The homepage template is the single source of truth for customer-visible copy. The final content that
customers already see after JavaScript runs is rendered directly by Shopify in `templates/index.json`.
Presentation CSS targets stable section and text-block IDs emitted by the theme. The four compatibility
scripts remain in the repository for rollback/history but are no longer requested by the homepage.

## Invariants

- No customer-visible wording is intentionally changed.
- Hero media, navigation, products, links, prices and section order are unchanged.
- The live visual state is rendered on first paint instead of being reconstructed after DOMContentLoaded.
- Shopify Theme Editor block IDs remain the styling anchors, avoiding a second client-side pass.

## Expected performance effect

- Removes four homepage JavaScript requests.
- Removes four DOM scans, retry timers and text rewrites.
- Eliminates the primary flash/re-render described as the homepage loading twice.
- Reduces layout-shift risk because the final heading/body geometry exists in the initial HTML.

## Rollback

Re-enable the four script tags in `layout/theme.liquid` and revert the homepage/CSS changes in the same
commit if a Theme Editor regression is observed.
