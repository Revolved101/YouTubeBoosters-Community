import { Badge } from "@/components/ui/badge"
import { Star, Award } from "lucide-react"

interface SubscriptionBadgeProps {
  tier: "pro" | "premium" | null
  className?: string
}

export default function SubscriptionBadge({ tier, className = "" }: SubscriptionBadgeProps) {
  if (!tier) return null

  if (tier === "premium") {
    return (
      <Badge className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium ${className}`}>
        <Award className="h-3 w-3 mr-1 fill-current" /> Premium
      </Badge>
    )
  }

  if (tier === "pro") {
    return (
      <Badge className={`bg-gradient-to-r from-blue-400 to-blue-500 text-white font-medium ${className}`}>
        <Star className="h-3 w-3 mr-1 fill-current" /> Pro
      </Badge>
    )
  }

  return null
}
