# Pay components

Checkout-related UI under `src/components`.

| Component | File | Role |
|---|---|---|
| `PayHero` | `pay-hero.tsx` | Full-bleed brand + plan summary + CTA to `#subscribe` |
| `PayLayoutShell` | `pay-layout-shell.tsx` | Checkout page chrome |
| `WalletButton` | `wallet-button.tsx` | Freighter connect / address chip |
| `LoadingState` / `ErrorState` / `EmptyState` | `states.tsx` | Async UI |
| `BrandMark` | `brand-mark.tsx` | Logo wordmark |
| `PlanShareLink` | `plan-share-link.tsx` | Copy merchant share URL |

## Design constraints

- Brand-first hero; avoid card clutter in the first viewport.
- Teal-on-slate atmosphere; see [DESIGN_CHECKOUT.md](./DESIGN_CHECKOUT.md).
- Announce status changes with `announce()` during approve/subscribe.
