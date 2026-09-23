"use client";

import { Wallet, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWalletStore } from "@/stores/wallet-store";
import { useFreighter } from "@/hooks/use-freighter";
import { shortenAddress } from "@/lib/utils";

export function WalletButton() {
  const { address, isConnected } = useWalletStore();
  const { connect, disconnect, isConnecting, isAvailable, error } = useFreighter();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="hidden rounded-md bg-teal-500/15 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-400/15 dark:text-teal-200 sm:inline"
          title={address}
          aria-label={`Connected wallet ${shortenAddress(address)}`}
        >
          {shortenAddress(address)}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnect}
          aria-label="Disconnect Freighter wallet"
        >
          <LogOut className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Disconnect</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        size="sm"
        onClick={connect}
        disabled={isConnecting}
        aria-label={isConnecting ? "Connecting to Freighter" : "Connect Freighter wallet"}
        aria-busy={isConnecting}
      >
        {isConnecting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Wallet className="h-4 w-4" aria-hidden />
        )}
        {isConnecting ? "Connecting…" : "Connect Wallet"}
      </Button>
      {error && (
        <p className="max-w-[14rem] text-right text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
      {!isAvailable && !error && (
        <p className="max-w-[14rem] text-right text-xs text-muted-foreground">
          Install Freighter to connect on Testnet
        </p>
      )}
    </div>
  );
}
