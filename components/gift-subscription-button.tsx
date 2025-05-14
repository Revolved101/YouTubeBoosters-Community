"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import { useRouter } from "next/navigation"

interface GiftSubscriptionButtonProps {
  channelId: number | string
  channelName: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}

export default function GiftSubscriptionButton({
  channelId,
  channelName,
  variant = "default",
  size = "default",
}: GiftSubscriptionButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleGiftClick = () => {
    setIsLoading(true)

    // In a real app, you might want to store the selected channel in a state or URL parameter
    // For now, we'll just navigate to the membership page
    setTimeout(() => {
      router.push(`/membership?gift=true&channelId=${channelId}&channelName=${encodeURIComponent(channelName)}`)
    }, 500)
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${variant === "default" ? "bg-purple-600 hover:bg-purple-700" : ""}`}
      onClick={handleGiftClick}
      disabled={isLoading}
    >
      <Gift className="h-4 w-4 mr-2" />
      {isLoading ? "Loading..." : "Gift Premium"}
    </Button>
  )
}
