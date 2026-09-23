import { env } from "@/lib/env";

function appBaseUrl(): string {
  const base = (env.app.url || "http://localhost:3000").replace(/\/$/, "");
  return base;
}

/** Absolute checkout URL for a merchant plan share link. */
export function planPayUrl(planId: string): string {
  const id = planId.trim();
  if (!id) {
    throw new Error("Cannot build pay URL: plan id is empty.");
  }
  return `${appBaseUrl()}/pay/${encodeURIComponent(id)}`;
}

/** Absolute public plans discovery URL. */
export function publicPlansUrl(): string {
  return `${appBaseUrl()}/plans`;
}
