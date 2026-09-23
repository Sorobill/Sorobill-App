# UI testing

## Manual

Follow [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) with Freighter on Testnet:

1. Onboarding → create plan
2. Open share link on `/pay/{id}`
3. Approve + subscribe
4. Confirm tx hash and billing history

## Automated

- **Unit** — `npm run test` (Vitest) for pure libs (`format`, `plan-share`, `plan-mapper`, `csv`, `env` helpers)
- **E2E (planned)** — Playwright for `/plans` and `/pay/[id]` happy paths in mock mode

## Commands

```bash
npm run type-check
npm run lint
npm run test
npm run build
```

Prefer testing mappers and formatters over brittle component snapshots.
