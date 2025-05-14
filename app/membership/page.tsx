import type { Metadata } from "next"
import MembershipPlans from "@/components/membership/membership-plans"
import GiftSubscription from "@/components/membership/gift-subscription"
import MembershipBenefits from "@/components/membership/membership-benefits"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "YTBoard Premium Membership",
  description: "Upgrade your YouTube channel with YTBoard premium features",
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">YTBoard Premium</h1>
            <p className="text-xl text-gray-600">Boost your YouTube channel's visibility and grow your audience</p>
          </div>

          <MembershipPlans />

          <div className="my-16">
            <GiftSubscription />
          </div>

          <div className="my-16">
            <MembershipBenefits />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
