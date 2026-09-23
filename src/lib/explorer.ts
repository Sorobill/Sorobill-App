import { env } from "@/lib/env";

function explorerNetwork(): "public" | "testnet" {
  return env.stellar.network === "mainnet" ? "public" : "testnet";
}

function requireId(value: string, kind: string): string {
  const v = value.trim();
  if (!v) throw new Error(`Cannot build explorer URL: missing ${kind}`);
  return encodeURIComponent(v);
}

export function stellarExpertTxUrl(hash: string): string {
  return `https://stellar.expert/explorer/${explorerNetwork()}/tx/${requireId(hash, "transaction hash")}`;
}

export function stellarExpertAccountUrl(address: string): string {
  return `https://stellar.expert/explorer/${explorerNetwork()}/account/${requireId(address, "account address")}`;
}

export function stellarExpertContractUrl(contractId: string): string {
  return `https://stellar.expert/explorer/${explorerNetwork()}/contract/${requireId(contractId, "contract id")}`;
}
