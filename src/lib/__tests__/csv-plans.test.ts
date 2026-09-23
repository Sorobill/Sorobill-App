import { describe, expect, it } from "vitest";
import { plansCsvFilename, plansToCsv } from "@/lib/csv-plans";
import type { ApiPlan } from "@/lib/plan-mapper";

const plan: ApiPlan = {
  id: "p1",
  name: "Starter",
  amount: "9.99",
  assetCode: "USDC",
  interval: "MONTHLY",
  isActive: true,
  createdAt: "2026-01-01T00:00:00.000Z",
};

describe("plansToCsv", () => {
  it("includes header and row", () => {
    const csv = plansToCsv([plan]);
    expect(csv).toContain("contract_plan_id");
    expect(csv).toContain("Starter");
  });
});

describe("plansCsvFilename", () => {
  it("uses UTC date stamp", () => {
    expect(plansCsvFilename(new Date("2026-09-23T12:00:00Z"))).toBe("sorobill-plans-2026-09-23.csv");
  });
});
