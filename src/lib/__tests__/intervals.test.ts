import { describe, expect, it } from "vitest";
import { parseBillingInterval } from "@/lib/intervals";

describe("parseBillingInterval", () => {
  it("normalizes casing", () => {
    expect(parseBillingInterval("MONTHLY")).toBe("monthly");
    expect(parseBillingInterval("Weekly")).toBe("weekly");
  });

  it("falls back for unknown values", () => {
    expect(parseBillingInterval("biweekly")).toBe("monthly");
    expect(parseBillingInterval("x", "yearly")).toBe("yearly");
  });
});
