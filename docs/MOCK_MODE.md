# Mock mode

Mock mode lets reviewers explore merchant and checkout UI without a running backend or deployed contract.

## Enable / disable

| Value | Behavior |
|---|---|
| `NEXT_PUBLIC_USE_MOCK` unset or not `false` | Mock **on** (default for local demos) |
| `NEXT_PUBLIC_USE_MOCK=false` | Live API + Soroban |

Configured in `src/lib/env.ts` as `env.app.useMock`.

## What is mocked

- Public plan list and single-plan fetch for `/plans` and `/pay/[planId]`
- Demo fixtures from `demoPlans()` / inline pay-page fixtures
- Subscribe on pay page records a demo status string (no Freighter sign)

## What is not mocked

- Freighter connection UI still talks to the real extension when present
- Production builds on Vercel should set `NEXT_PUBLIC_USE_MOCK=false` for live demos

## Switching for a live demo

```bash
# .env.local
NEXT_PUBLIC_USE_MOCK=false
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_SUBSCRIPTION_CONTRACT_ID=<from contract DEPLOYMENTS.md>
```

Then follow [DEMO_SCRIPT.md](./DEMO_SCRIPT.md).
