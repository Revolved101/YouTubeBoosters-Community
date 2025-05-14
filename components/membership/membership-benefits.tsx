import { Card, CardContent } from "@/components/ui/card"
import { Star, Zap, TrendingUp, Award, Shield, Bell } from "lucide-react"

export default function MembershipBenefits() {
  const benefits = [
    {
      icon: Star,
      title: "Enhanced Visibility",
      description: "Get featured placement in search results and on the homepage",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Access detailed insights about your channel's performance and audience",
    },
    {
      icon: Award,
      title: "Verified Badge",
      description: "Stand out with a verified badge that builds trust with viewers",
    },
    {
      icon: Shield,
      title: "Ad-Free Experience",
      description: "Enjoy YTBoard without any advertisements or distractions",
    },
    {
      icon: Bell,
      title: "Promotional Notifications",
      description: "Your new videos get promoted to relevant users via notifications",
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "Get faster responses and dedicated help when you need it",
    },
  ]

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Premium Benefits</h2>
        <p className="text-gray-600">Unlock these powerful features to grow your YouTube channel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <benefit.icon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
