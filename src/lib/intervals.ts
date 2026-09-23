export const BILLING_INTERVALS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
] as const;

export type BillingIntervalValue = (typeof BILLING_INTERVALS)[number]["value"];

const ALLOWED = new Set<string>(BILLING_INTERVALS.map((i) => i.value));

/** Normalize API/UI interval strings to a known billing interval. */
export function parseBillingInterval(raw: string, fallback: BillingIntervalValue = "monthly"): BillingIntervalValue {
  const v = raw.trim().toLowerCase();
  if (ALLOWED.has(v)) return v as BillingIntervalValue;
  return fallback;
}
