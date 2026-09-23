/** In-app path helpers (relative). Prefer plan-share for absolute URLs. */
export const paths = {
  home: "/",
  plans: "/plans",
  pay: (id: string) => `/pay/${encodeURIComponent(id.trim())}`,
  onboarding: "/onboarding",
  dashboard: "/dashboard",
  dashboardPlans: "/dashboard/plans",
  dashboardSubscribers: "/dashboard/subscribers",
  dashboardAnalytics: "/dashboard/analytics",
  subscriptions: "/subscriptions",
  billing: "/subscriptions/billing",
  webhooks: "/webhooks",
} as const;
