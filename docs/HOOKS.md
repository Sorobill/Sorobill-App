# Hooks

Client hooks under `src/hooks`.

| Hook | Role |
|---|---|
| `useFreighter` | Detect Freighter, connect, disconnect, sign XDR |
| `usePayPlan` | React Query loader for a single checkout plan |
| `useLivePlans` | Public / merchant plan list |
| `useCopy` | Clipboard copy with transient “copied” state |
| `useApiError` | Normalize API/unknown errors for toasts |
| `useSorobill` | Higher-level plan/subscription mutations |

## Conventions

- Prefer React Query for server state (`queryKey` helpers in `src/lib/query-keys.ts`).
- Wallet address and network live in Zustand (`wallet-store`), not in URL.
- Surface Freighter errors as user-readable strings (install / unlock / network).

## Adding a hook

Keep hooks thin: call `lib/` helpers for formatting, mapping, and contract invokes. Export a stable return shape (`data`, `error`, `isLoading`, actions).
