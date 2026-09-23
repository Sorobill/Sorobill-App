import { toCsv } from "@/lib/csv";
import type { ApiPlan } from "@/lib/plan-mapper";

export function plansToCsv(plans: ApiPlan[]): string {
  return toCsv(
    plans.map((p) => ({
      id: p.id,
      name: p.name,
      amount: p.amount,
      asset: p.assetCode,
      interval: p.interval,
      trial_days: p.trialDays ?? 0,
      active: p.isActive ? "yes" : "no",
      merchant: p.merchantAddress ?? "",
      contract_plan_id: p.contractPlanId ?? "",
      created_at: p.createdAt,
    }))
  );
}

export function plansCsvFilename(date = new Date()): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `sorobill-plans-${y}-${m}-${d}.csv`;
}
