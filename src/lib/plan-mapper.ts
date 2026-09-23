import type { Plan, SupportedAsset } from "@/types";
import { parseBillingInterval } from "@/lib/intervals";

/** Backend plan row (Prisma / API). */
export interface ApiPlan {
  id: string;
  name: string;
  description?: string | null;
  amount: string;
  assetCode: string;
  assetIssuer?: string | null;
  interval: string;
  intervalCount?: number;
  trialDays?: number;
  isActive: boolean;
  merchantAddress?: string | null;
  contractPlanId?: number | null;
  createdAt: string;
  updatedAt?: string;
}

export function mapApiPlan(p: ApiPlan, subscriberCount = 0): Plan {
  return {
    id: p.id,
    merchantId: p.merchantAddress ?? "",
    name: p.name,
    description: p.description ?? "",
    price: p.amount,
    asset: (p.assetCode || "XLM") as SupportedAsset,
    interval: parseBillingInterval(p.interval),
    trialDays: p.trialDays ?? 0,
    isActive: p.isActive,
    createdAt: p.createdAt,
    subscriberCount,
  };
}
