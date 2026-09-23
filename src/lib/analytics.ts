export type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

/** Dispatch a first-party analytics event (`sorobill:analytics`). */
export function track(name: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  if (!name.trim()) return;
  window.dispatchEvent(
    new CustomEvent("sorobill:analytics", {
      detail: { name, ...payload, ts: Date.now() },
    })
  );
}
