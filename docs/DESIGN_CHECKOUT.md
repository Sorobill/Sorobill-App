# Checkout design notes

Pay surfaces should feel like one composition, not a dashboard.

## First viewport

- Dominant teal-on-slate full-bleed panel
- Brand (`Sorobill` / `BrandMark`) as a hero-level signal
- One headline (plan name), one supporting sentence, one CTA group
- CTA scrolls/focuses `#subscribe` — no floating promo chips on the hero

## Typography & color

- Display font for brand; readable body for amount and interval
- Avoid purple-on-white and cream/terracotta clichés
- Keep contrast high for amount + interval text on teal

## After the fold

Subscribe form, wallet connect, and status messages live below the hero. Use `LoadingState` / `ErrorState` for async paths rather than skeleton card grids.
