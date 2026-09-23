import { describe, expect, it, vi } from "vitest";
import { track } from "@/lib/analytics";

describe("track", () => {
  it("dispatches custom events in the browser", () => {
    const spy = vi.fn();
    window.addEventListener("sorobill:analytics", spy as EventListener);
    track("checkout.opened", { planId: "p1" });
    expect(spy).toHaveBeenCalled();
    const detail = (spy.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.name).toBe("checkout.opened");
    expect(detail.planId).toBe("p1");
    window.removeEventListener("sorobill:analytics", spy as EventListener);
  });

  it("ignores empty event names", () => {
    const spy = vi.fn();
    window.addEventListener("sorobill:analytics", spy as EventListener);
    track("  ");
    expect(spy).not.toHaveBeenCalled();
    window.removeEventListener("sorobill:analytics", spy as EventListener);
  });
});
