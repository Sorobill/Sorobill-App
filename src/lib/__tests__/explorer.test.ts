import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

describe("explorer urls", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_STELLAR_NETWORK", "testnet");
  });
  afterEach(() => vi.unstubAllEnvs());

  it("builds tx urls", async () => {
    const { stellarExpertTxUrl } = await import("@/lib/explorer");
    expect(stellarExpertTxUrl("abc")).toContain("/testnet/tx/abc");
  });

  it("rejects empty hash", async () => {
    const { stellarExpertTxUrl } = await import("@/lib/explorer");
    expect(() => stellarExpertTxUrl(" ")).toThrow(/missing transaction hash/i);
  });
});
