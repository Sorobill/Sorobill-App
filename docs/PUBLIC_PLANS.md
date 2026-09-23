# Public plans

`/plans` is the discovery surface for merchant plans.

## Behavior

- Lists active plans from the API or mock fixtures
- Each card links into `/pay/{id}` via `planPayUrl`
- Merchants can copy the same URL from the dashboard with `PlanShareLink`

## Empty state

When no plans exist, show a calm empty message — do not invent fake revenue stats on this page.

## Related

- [ROUTES.md](./ROUTES.md)
- [SHARE_LINKS.md](./SHARE_LINKS.md)
- Hook: `useLivePlans`
