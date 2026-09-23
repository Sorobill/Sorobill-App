import { env } from "@/lib/env";

/** Human label for the configured Stellar network. */
export function networkLabel(): string {
  return env.stellar.network === "mainnet" ? "Mainnet" : "Testnet";
}

/** Short hint shown near wallet CTAs. */
export function networkHint(): string {
  return env.stellar.network === "mainnet"
    ? "Freighter must be on Mainnet"
    : "Freighter must be on Testnet";
}
