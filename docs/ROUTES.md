# Routes

App Router pages under `src/app`.

| Path | Purpose | Auth / wallet |
|---|---|---|
| `/` | Marketing landing | Public |
| `/plans` | Public plan discovery | Public |
| `/pay/[planId]` | Subscriber checkout | Freighter for subscribe |
| `/onboarding` | Merchant setup | Freighter |
| `/dashboard` | Merchant overview | Merchant session / wallet |
| `/dashboard/plans` | Plan management | Merchant |
| `/dashboard/subscribers` | Subscriber list + exports | Merchant |
| `/dashboard/analytics` | Revenue charts | Merchant |
| `/subscriptions` | Subscriber home | Freighter |
| `/subscriptions/billing` | Billing history | Freighter |
| `/webhooks` | Webhook delivery UI | Merchant |

## Helpers

- Path constants: `src/lib/site-paths.ts`
- Share URLs: `planPayUrl` / `publicPlansUrl` in `src/lib/plan-share.ts`

Production base: `https://sorobill-app.vercel.app` via `NEXT_PUBLIC_APP_URL`.
