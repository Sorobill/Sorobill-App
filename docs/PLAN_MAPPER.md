# Plan mapper

`mapApiPlan` in `src/lib/plan-mapper.ts` converts backend Prisma/API plan rows into the UI `Plan` type.

## Mapping rules

- `amount` → `price` (string decimal)
- `assetCode` → `asset` (default `XLM` when empty)
- `interval` — lowercased; unknown values fall back to `monthly`
- `merchantAddress` → `merchantId` (empty string if null)
- `description` / `trialDays` — nullish coalesced
- `subscriberCount` — optional second argument (default `0`)

## `ApiPlan` fields

Required for checkout: `id`, `name`, `amount`, `assetCode`, `interval`, `isActive`, `createdAt`.
Optional but important for live subscribe: `contractPlanId` (on-chain plan id).

## Tests

Unit-test interval normalization and defaults; see `src/lib/__tests__/` once Vitest is configured.
