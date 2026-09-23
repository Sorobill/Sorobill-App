import { describe, expect, it } from "vitest";
import { validateApiPlan } from "@/lib/validate-api-plan";

describe("validateApiPlan", () => {
  it("accepts a minimal plan payload", () => {
    const plan = validateApiPlan({
      id: "1",
      name: "Starter",
      amount: 9.99,
      interval: "MONTHLY",
      isActive: true,
    });
    expect(plan.amount).toBe("9.99");
    expect(plan.assetCode).toBe("XLM");
  });

  it("rejects missing id", () => {
    expect(() => validateApiPlan({ name: "x", amount: "1", interval: "daily" })).toThrow(/missing id/i);
  });
});
