/** Shared accessibility helpers for checkout flows. */

type Politeness = "polite" | "assertive";

/** Announce a status message to assistive tech via a live region. */
export function announce(message: string, politeness: Politeness = "polite") {
  if (typeof document === "undefined") return;
  let el = document.getElementById("sorobill-live");
  if (!el) {
    el = document.createElement("div");
    el.id = "sorobill-live";
    el.setAttribute("role", "status");
    el.className = "sr-only";
    document.body.appendChild(el);
  }
  el.setAttribute("aria-live", politeness);
  // Clear then set so repeated identical messages are still announced.
  el.textContent = "";
  el.textContent = message;
}
