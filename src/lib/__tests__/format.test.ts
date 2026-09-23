import { describe, expect, it } from "vitest";
import { formatAssetAmount, formatInterval, formatPercent, formatShortAddress } from "@/lib/format";

describe("formatAssetAmount", () => {
  it("formats numeric amounts with asset code", () => {
    expect(formatAssetAmount(9.99, "USDC")).toContain("USDC");
    expect(formatAssetAmount("10", "XLM")).toContain("10");
  });

  it("passes through NaN inputs", () => {
    expect(formatAssetAmount("nope", "XLM")).toBe("nope XLM");
  });
});

describe("formatShortAddress", () => {
  it("truncates long addresses", () => {
    const addr = "GABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
    expect(formatShortAddress(addr, 4)).toMatch(/…/);
  });

  it("returns short addresses unchanged", () => {
    expect(formatShortAddress("ABCD")).toBe("ABCD");
  });

  it("handles empty", () => {
    expect(formatShortAddress("")).toBe("");
  });
});

describe("formatInterval", () => {
  it("maps known intervals", () => {
    expect(formatInterval("MONTHLY")).toBe("Monthly");
    expect(formatInterval("weekly")).toBe("Weekly");
  });
});

describe("formatPercent", () => {
  it("formats fractions as percent", () => {
    expect(formatPercent(0.125)).toBe("12.5%");
  });

  it("handles NaN", () => {
    expect(formatPercent(Number.NaN)).toBe("—");
  });
});
