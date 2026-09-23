import type { Plan } from "@/types";
import { formatAssetAmount, formatInterval } from "@/lib/format";

export function planPriceLabel(plan: Pick<Plan, "price" | "asset" | "interval">): string {
  return `${formatAssetAmount(plan.price, plan.asset)} / ${formatInterval(plan.interval)}`;
}

export function planTrialLabel(trialDays: number): string | null {
  if (!trialDays || trialDays <= 0) return null;
  if (trialDays === 1) return "1-day free trial";
  return `${trialDays}-day free trial`;
}
