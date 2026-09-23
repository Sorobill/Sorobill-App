import { describe, expect, it } from "vitest";
import { assertPlanId } from "@/lib/assert-plan-id";

describe("assertPlanId", () => {
  it("trims valid ids", () => {
    expect(assertPlanId("  plan_1  ")).toBe("plan_1");
  });

  it("rejects empty", () => {
    expect(() => assertPlanId("")).toThrow(/missing plan id/i);
  });

  it("rejects oversized ids", () => {
    expect(() => assertPlanId("x".repeat(200))).toThrow(/too long/i);
  });
});
