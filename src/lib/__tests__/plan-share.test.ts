import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

describe("planPayUrl", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://sorobill-app.vercel.app/");
  });
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("builds absolute pay URLs without trailing slash duplication", async () => {
    const { planPayUrl } = await import("@/lib/plan-share");
    expect(planPayUrl("abc-123")).toBe("https://sorobill-app.vercel.app/pay/abc-123");
  });

  it("rejects empty plan ids", async () => {
    const { planPayUrl } = await import("@/lib/plan-share");
    expect(() => planPayUrl("  ")).toThrow(/plan id is empty/i);
  });

  it("builds public plans URL", async () => {
    const { publicPlansUrl } = await import("@/lib/plan-share");
    expect(publicPlansUrl()).toBe("https://sorobill-app.vercel.app/plans");
  });
});
