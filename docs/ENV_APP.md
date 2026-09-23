# App environment variables

| Variable | Purpose | Production tip |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Absolute app origin for share links | `https://sorobill-app.vercel.app` |
| `NEXT_PUBLIC_API_URL` | Backend API base | Point at deployed backend |
| `NEXT_PUBLIC_USE_MOCK` | `false` = live API | Must be `false` for real demos |
| `NEXT_PUBLIC_APP_NAME` | Product name string | Default `Sorobill` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` \| `mainnet` | Testnet for demos |
| `NEXT_PUBLIC_STELLAR_RPC_URL` | Soroban RPC | Testnet RPC default in code |
| `NEXT_PUBLIC_STELLAR_HORIZON_URL` | Horizon | Testnet Horizon default |
| `NEXT_PUBLIC_STELLAR_PASSPHRASE` | Network passphrase | SDF Testnet default |
| `NEXT_PUBLIC_SUBSCRIPTION_CONTRACT_ID` | Main subscription contract | From DEPLOYMENTS.md |
| `NEXT_PUBLIC_BILLING_CONTRACT_ID` | Billing helper contract | Optional depending on deploy |
| `NEXT_PUBLIC_TOKEN_CONTRACT_ID` | SAC / token contract | For approve + pay |
| `NEXT_PUBLIC_WEBHOOK_SECRET` | Client-side webhook tooling | Prefer server-only secrets long-term |

Copy from `.env.example`. Do **not** change production `NEXT_PUBLIC_APP_URL` away from the Vercel app URL when shipping demos.
