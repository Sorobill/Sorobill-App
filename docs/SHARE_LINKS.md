# Share links

Merchants share checkout URLs built by `planPayUrl(planId)` in `src/lib/plan-share.ts`.

## Format

```
{NEXT_PUBLIC_APP_URL}/pay/{planId}
```

Production example: `https://sorobill-app.vercel.app/pay/<id>`

Trailing slashes on the base URL are stripped before joining.

## Also available

- `publicPlansUrl()` → `{base}/plans`

## Copy UX

`PlanShareLink` + `useCopy` show a brief “Copied” confirmation. Prefer absolute URLs so links work outside the app (email, Discord, invoices).
