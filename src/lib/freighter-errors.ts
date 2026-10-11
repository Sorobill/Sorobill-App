/** Map Freighter / wallet failures to actionable copy. */
export const FREIGHTER_INSTALL_URL = "https://www.freighter.app/";

export function isWrongNetworkError(err: unknown): boolean {
  const raw =
    err instanceof Error
      ? err.message
      : typeof err === "string"
        ? err
        : "";
  return /wrong network|network mismatch|switch to testnet|unsupported network/i.test(raw);
}

export function isFreighterMissingError(err: unknown): boolean {
  const raw =
    err instanceof Error
      ? err.message
      : typeof err === "string"
        ? err
        : "";
  return /not found|not installed|missing extension|freighter not detected/i.test(raw);
}

export function freighterUserMessage(err: unknown): string {
  const raw =
    err instanceof Error
      ? err.message
      : typeof err === "string"
        ? err
        : "Failed to connect wallet";
  const lower = raw.toLowerCase();
  if (lower.includes("not found") || lower.includes("not installed") || lower.includes("missing")) {
    return "Freighter wallet not found. Install the Freighter browser extension, then refresh this page.";
  }
  if (lower.includes("wrong network") || lower.includes("network mismatch")) {
    return "Freighter is on the wrong network. Switch Freighter to Testnet for checkout.";
  }
  if (lower.includes("rejected") || lower.includes("denied") || lower.includes("user")) {
    return "Wallet request was rejected. Unlock Freighter and approve access to continue.";
  }
  if (lower.includes("network")) {
    return ${raw} Switch Freighter to Testnet for demos.;
  }
  if (lower.includes("bad union switch") || lower.includes("union switch")) {
    return "Wallet/SDK protocol mismatch. Refresh the page, reconnect Freighter on Testnet, and try again.";
  }
  if (lower.includes("not currently connected") || lower.includes("not allowed")) {
    return "Allow sorobill-app.vercel.app in Freighter, then reconnect and try again.";
  }
  return raw;
}