/** Ensure a route or form plan id is present and trimmed. */
export function assertPlanId(id: string): string {
  const trimmed = id.trim();
  if (!trimmed) {
    throw new Error("Missing plan id. Open a valid /pay/{planId} share link and try again.");
  }
  if (trimmed.length > 128) {
    throw new Error("Plan id is too long. Check the share link and try again.");
  }
  return trimmed;
}
