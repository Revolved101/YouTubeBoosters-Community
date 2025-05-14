"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { SUBSCRIPTION_PLANS } from "@/lib/subscription-plans"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const handleSubscribe = (planId: string) => {
    // In a real app, this would open a checkout flow
    alert(`Subscribing to ${planId} plan with ${billingCycle} billing`)
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 mb-6">Select the perfect plan to boost your YouTube channel's growth</p>

        <Tabs defaultValue="monthly" className="w-full max-w-xs mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly" onClick={() => setBillingCycle("monthly")}>
              Monthly
            </TabsTrigger>
            <TabsTrigger value="yearly" onClick={() => setBillingCycle("yearly")}>
              Yearly <span className="ml-1 text-xs text-green-600 font-medium">Save 17%</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(SUBSCRIPTION_PLANS).map((plan) => (
          <Card
            key={plan.id}
            className={`border ${
              plan.id === "premium" ? "border-yellow-400 shadow-lg" : plan.id === "pro" ? "border-blue-300" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                {plan.id === "premium" && <Star className="h-5 w-5 text-yellow-500 mr-2 fill-yellow-500" />}
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.isDefault ? "Free plan" : "Paid subscription"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {plan.price === 0 ? (
                  <div className="text-3xl font-bold">Free</div>
                ) : (
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(2)}
                    </span>
                    <span className="text-gray-500 ml-1">/ month</span>
                  </div>
                )}
                {billingCycle === "yearly" && plan.yearlyPrice && (
                  <div className="text-sm text-gray-500">Billed as ${plan.yearlyPrice} per year</div>
                )}
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.id === "premium"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
                    : plan.id === "pro"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => handleSubscribe(plan.id)}
                disabled={plan.isDefault}
              >
                {plan.isDefault ? "Current Plan" : "Subscribe"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
