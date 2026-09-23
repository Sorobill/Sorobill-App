import { describe, expect, it } from "vitest";
import { isActivePlan } from "@/lib/is-active-plan";

describe("isActivePlan", () => {
  it("requires explicit true", () => {
    expect(isActivePlan({ isActive: true })).toBe(true);
    expect(isActivePlan({ isActive: false })).toBe(false);
  });

  it("treats nullish as inactive", () => {
    expect(isActivePlan(null)).toBe(false);
    expect(isActivePlan(undefined)).toBe(false);
    expect(isActivePlan({})).toBe(false);
  });
});
