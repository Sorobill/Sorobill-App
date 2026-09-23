# Pay flow

Checkout lives at `/pay/[planId]` and is the subscriber-facing path merchants share.

## Steps

1. Resolve `planId` from the route (trimmed; empty IDs fail early).
2. Load the plan via API (`GET /plans/:id`) or mock fixtures when `NEXT_PUBLIC_USE_MOCK` is enabled.
3. Render `PayHero` with amount, interval, and brand-first layout.
4. Prompt Freighter connect via `WalletButton`.
5. On subscribe: approve token allowance, then invoke on-chain `subscribe` using `contractPlanId`.
6. Surface success with a shortened transaction hash, or an error with retry.

## UI states

| State | Component | Notes |
|---|---|---|
| Loading | `LoadingState` | `role="status"`, label “Loading plan…” |
| Error | `ErrorState` | Title + message + retry |
| Missing | `EmptyState` | Share-link guidance |
| Ready | `PayHero` + subscribe form | Scroll target `#subscribe` |

## Edge cases

- **Plan not found** — API 404 → friendly empty/error state.
- **No `contractPlanId`** — block subscribe with a clear merchant-facing message.
- **Freighter missing** — connect throws install guidance.
- **Mock mode** — records a demo subscription without signing.

See also: [FREIGHTER.md](./FREIGHTER.md), [MOCK_MODE.md](./MOCK_MODE.md), [DEMO_SCRIPT.md](./DEMO_SCRIPT.md).
