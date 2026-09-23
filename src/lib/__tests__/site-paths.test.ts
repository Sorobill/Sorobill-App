import { describe, expect, it } from "vitest";
import { paths } from "@/lib/site-paths";

describe("paths", () => {
  it("encodes pay ids", () => {
    expect(paths.pay("a b")).toBe("/pay/a%20b");
  });

  it("exposes dashboard routes", () => {
    expect(paths.dashboardPlans).toBe("/dashboard/plans");
    expect(paths.webhooks).toBe("/webhooks");
  });
});
