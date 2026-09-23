import { describe, expect, it } from "vitest";
import { mapApiPlan, type ApiPlan } from "@/lib/plan-mapper";

const base: ApiPlan = {
  id: "p1",
  name: "Starter",
  description: null,
  amount: "9.99",
  assetCode: "",
  interval: "MONTHLY",
  isActive: true,
  merchantAddress: null,
  createdAt: "2026-01-01T00:00:00.000Z",
};

describe("mapApiPlan", () => {
  it("maps defaults for nullish fields", () => {
    const plan = mapApiPlan(base, 3);
    expect(plan.price).toBe("9.99");
    expect(plan.asset).toBe("XLM");
    expect(plan.interval).toBe("monthly");
    expect(plan.description).toBe("");
    expect(plan.merchantId).toBe("");
    expect(plan.subscriberCount).toBe(3);
  });

  it("preserves known intervals", () => {
    expect(mapApiPlan({ ...base, interval: "yearly" }).interval).toBe("yearly");
  });
});
