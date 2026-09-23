import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { track } from "@/lib/analytics";

describe("track", () => {
  const listeners = new Set<(e: Event) => void>();

  beforeEach(() => {
    listeners.clear();
    vi.stubGlobal("window", {
      addEventListener: (_: string, fn: (e: Event) => void) => listeners.add(fn),
      removeEventListener: (_: string, fn: (e: Event) => void) => listeners.delete(fn),
      dispatchEvent: (event: Event) => {
        listeners.forEach((fn) => fn(event));
        return true;
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("dispatches custom events in the browser", () => {
    const spy = vi.fn();
    window.addEventListener("sorobill:analytics", spy as EventListener);
    track("checkout.opened", { planId: "p1" });
    expect(spy).toHaveBeenCalled();
    const detail = (spy.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.name).toBe("checkout.opened");
    expect(detail.planId).toBe("p1");
  });

  it("ignores empty event names", () => {
    const spy = vi.fn();
    window.addEventListener("sorobill:analytics", spy as EventListener);
    track("  ");
    expect(spy).not.toHaveBeenCalled();
  });
});
