// Subscription plan definitions
export const SUBSCRIPTION_PLANS = {
  BASIC: {
    id: "basic",
    name: "Basic",
    price: 0,
    features: ["Channel listing", "Basic analytics", "Standard search placement"],
    isDefault: true,
  },
  PRO: {
    id: "pro",
    name: "Pro",
    price: 4.99,
    monthlyPrice: 4.99,
    yearlyPrice: 49.99, // ~2 months free
    features: [
      "Enhanced channel visibility",
      "Custom channel banner",
      "Priority search placement",
      "Advanced analytics",
      "Remove ads",
    ],
  },
  PREMIUM: {
    id: "premium",
    name: "Premium",
    price: 9.99,
    monthlyPrice: 9.99,
    yearlyPrice: 99.99, // ~2 months free
    features: [
      "Featured placement on homepage",
      "Verified badge",
      "Promotional notifications",
      "All Pro features",
      "Priority support",
    ],
  },
}

// Gift subscription durations
export const GIFT_DURATIONS = [
  { id: "1month", name: "1 Month", months: 1 },
  { id: "3months", name: "3 Months", months: 3, discount: 0.1 }, // 10% discount
  { id: "6months", name: "6 Months", months: 6, discount: 0.15 }, // 15% discount
  { id: "12months", name: "1 Year", months: 12, discount: 0.2 }, // 20% discount
]

// Calculate gift price based on monthly price and duration
export function calculateGiftPrice(planId: string, durationId: string): number {
  const plan = Object.values(SUBSCRIPTION_PLANS).find((p) => p.id === planId)
  const duration = GIFT_DURATIONS.find((d) => d.id === durationId)

  if (!plan || !duration || !plan.monthlyPrice) {
    return 0
  }

  const basePrice = plan.monthlyPrice * duration.months
  const discount = duration.discount || 0

  return Number.parseFloat((basePrice * (1 - discount)).toFixed(2))
}
