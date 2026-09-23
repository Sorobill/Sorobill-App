import { describe, expect, it } from "vitest";
import { planPriceLabel, planTrialLabel } from "@/lib/format-plan";

describe("planPriceLabel", () => {
  it("combines amount and interval", () => {
    expect(planPriceLabel({ price: "9.99", asset: "USDC", interval: "monthly" })).toMatch(/USDC/);
    expect(planPriceLabel({ price: "9.99", asset: "USDC", interval: "monthly" })).toMatch(/Monthly/);
  });
});

describe("planTrialLabel", () => {
  it("returns null for zero/negative", () => {
    expect(planTrialLabel(0)).toBeNull();
    expect(planTrialLabel(-1)).toBeNull();
  });

  it("pluralizes days", () => {
    expect(planTrialLabel(1)).toBe("1-day free trial");
    expect(planTrialLabel(14)).toBe("14-day free trial");
  });
});
