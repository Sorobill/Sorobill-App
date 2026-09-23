/** Smooth-scroll and focus the checkout subscribe section. */
export function focusSubscribeSection() {
  if (typeof document === "undefined") return;
  const el = document.getElementById("subscribe");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (typeof (el as HTMLElement).focus === "function") {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    (el as HTMLElement).focus({ preventScroll: true });
  }
}
