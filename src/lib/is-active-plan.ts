import type { Plan } from "@/types";

/** Whether a plan should appear in public discovery / checkout. */
export function isActivePlan(plan: Pick<Plan, "isActive"> | { isActive?: boolean } | null | undefined): boolean {
  if (!plan) return false;
  return plan.isActive === true;
}
