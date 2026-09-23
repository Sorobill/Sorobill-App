# Freighter wallet

Sorobill checkout and onboarding use the [Freighter](https://freighter.app) browser extension for Testnet demos.

## Setup

1. Install Freighter from the official site.
2. Switch the network to **Testnet** (not Public/Mainnet).
3. Fund the account with Testnet XLM (Friendbot or faucet).
4. Approve site access when the app calls `requestAccess`.

## App integration

- Hook: `useFreighter` (`src/hooks/use-freighter.ts`)
- Store: `useWalletStore` holds address, connection, and network
- Signing: `signTransaction` / contract helpers in `src/lib/contract.ts`

## Common errors

| Message | Cause | Fix |
|---|---|---|
| Freighter wallet not found | Extension missing or blocked | Install / enable Freighter |
| Could not read Freighter public key | Access denied or locked wallet | Unlock + allow the site |
| Wrong network | Mainnet selected | Switch Freighter to Testnet |
| Simulation / invoke failures | Unfunded or missing trustlines | Fund account; add asset trustline if needed |

## Allowance flow

Before `subscribe`, the pay page may call `invokeApproveToken` so the billing contract can pull recurring amounts. Users must confirm both approve and subscribe prompts in Freighter.
