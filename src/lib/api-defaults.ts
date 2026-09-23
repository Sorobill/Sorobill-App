import { env } from "@/lib/env";

/** Prefer live API unless mock is explicitly enabled. */
export function useLiveApi(): boolean {
  return !env.app.useMock;
}

export function apiBase(): string {
  return env.app.apiUrl.replace(/\/$/, "");
}

/** Default JSON headers for Backend REST calls. */
export function apiHeaders(extra?: HeadersInit): HeadersInit {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(extra ?? {}),
  };
}
