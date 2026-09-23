# Analytics

Lightweight first-party analytics without a third-party SDK by default.

## API

`track(event, payload?)` in `src/lib/analytics.ts` dispatches a browser `CustomEvent`:

- Event name: `sorobill:analytics`
- `detail`: `{ name, ...payload, ts }`

## Usage

```ts
import { track } from "@/lib/analytics";
track("checkout.subscribe_clicked", { planId });
```

## Listening

Dashboard or debug tools can `window.addEventListener("sorobill:analytics", handler)`.
Future: forward to PostHog/Segment behind an env flag without changing call sites.

## Privacy

Do not put secrets, full private keys, or PII beyond plan IDs / anonymized addresses in payloads.
