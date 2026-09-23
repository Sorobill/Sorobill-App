import type { ApiPlan } from "@/lib/plan-mapper";

/** Narrow unknown JSON into an ApiPlan or throw a readable error. */
export function validateApiPlan(data: unknown, context = "plan"): ApiPlan {
  if (!data || typeof data !== "object") {
    throw new Error(`Invalid ${context} response: expected an object`);
  }
  const row = data as Record<string, unknown>;
  if (typeof row.id !== "string" || !row.id.trim()) {
    throw new Error(`Invalid ${context} response: missing id`);
  }
  if (typeof row.name !== "string") {
    throw new Error(`Invalid ${context} response: missing name`);
  }
  if (typeof row.amount !== "string" && typeof row.amount !== "number") {
    throw new Error(`Invalid ${context} response: missing amount`);
  }
  if (typeof row.interval !== "string") {
    throw new Error(`Invalid ${context} response: missing interval`);
  }
  return {
    id: row.id,
    name: row.name,
    description: typeof row.description === "string" ? row.description : null,
    amount: String(row.amount),
    assetCode: typeof row.assetCode === "string" ? row.assetCode : "XLM",
    assetIssuer: typeof row.assetIssuer === "string" ? row.assetIssuer : null,
    interval: row.interval,
    intervalCount: typeof row.intervalCount === "number" ? row.intervalCount : undefined,
    trialDays: typeof row.trialDays === "number" ? row.trialDays : undefined,
    isActive: Boolean(row.isActive),
    merchantAddress: typeof row.merchantAddress === "string" ? row.merchantAddress : null,
    contractPlanId: typeof row.contractPlanId === "number" ? row.contractPlanId : null,
    createdAt: typeof row.createdAt === "string" ? row.createdAt : new Date().toISOString(),
    updatedAt: typeof row.updatedAt === "string" ? row.updatedAt : undefined,
  };
}
