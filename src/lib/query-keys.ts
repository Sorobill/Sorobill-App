/** Central React Query key factory. */
export const queryKeys = {
  payPlan: (id: string) => ["pay-plan", id] as const,
  publicPlans: ["public-plans"] as const,
  merchantPlans: ["merchant-plans"] as const,
  subscribers: ["subscribers"] as const,
  billingHistory: (subscriptionId?: string) =>
    subscriptionId ? (["billing", subscriptionId] as const) : (["billing"] as const),
  merchantStats: ["merchant-stats"] as const,
  revenue: ["revenue"] as const,
} as const;
