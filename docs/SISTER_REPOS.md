# Sister repos

Sorobill is a three-repo system:

| Repo | Role |
|---|---|
| [Sorobill-Contract](https://github.com/Sorobill/Sorobill-Contract) | Soroban subscription + billing contracts, DEPLOYMENTS.md |
| [Sorobill-Backend](https://github.com/Sorobill/Sorobill-Backend) | REST API, indexer, billing runner, Postgres |
| [Sorobill-App](https://github.com/Sorobill/Sorobill-App) | Merchant dashboard + public checkout (this repo) |

## Integration points

- App reads `NEXT_PUBLIC_SUBSCRIPTION_CONTRACT_ID` from contract deployments
- App calls Backend `NEXT_PUBLIC_API_URL` (default `http://localhost:3001/api/v1`)
- Checkout share links use `NEXT_PUBLIC_APP_URL` (`https://sorobill-app.vercel.app` in production)

Keep IDs and network (Testnet) aligned across all three for live demos.
