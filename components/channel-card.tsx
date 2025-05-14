"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import SubscriptionBadge from "@/components/subscription-badge"

interface Channel {
  id: number
  name: string
  description: string
  subscribers: number
  tags: string[]
  thumbnail: string
  banner: string
  online: number
  donorTier?: string
  subscriptionTier?: "pro" | "premium" | null
}

interface ChannelCardProps {
  channel: Channel
}

export default function ChannelCard({ channel }: ChannelCardProps) {
  const { toast } = useToast()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscriberCount, setSubscriberCount] = useState(channel.subscribers)

  const formatSubscribers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const handleSubscribe = () => {
    if (isSubscribed) {
      setIsSubscribed(false)
      setSubscriberCount((prev) => prev - 1)
      toast({
        title: "Unsubscribed",
        description: `You have unsubscribed from ${channel.name}`,
      })
    } else {
      setIsSubscribed(true)
      setSubscriberCount((prev) => prev + 1)
      toast({
        title: "Subscribed!",
        description: `You are now subscribed to ${channel.name}`,
      })
    }
  }

  const getDonorBorder = () => {
    if (!channel.donorTier) return "border-gray-200"

    switch (channel.donorTier) {
      case "gold":
        return "border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
      case "silver":
        return "border-gray-300 shadow-[0_0_8px_rgba(192,192,192,0.5)]"
      case "bronze":
        return "border-amber-600 shadow-[0_0_6px_rgba(205,127,50,0.5)]"
      default:
        return "border-gray-200"
    }
  }

  return (
    <div
      className={`bg-white rounded-lg shadow overflow-hidden border ${getDonorBorder()} hover:border-red-300 transition-colors`}
    >
      <div className="relative h-24 bg-gradient-to-r from-gray-100 to-gray-200">
        <Image
          src={channel.banner || "/placeholder.svg"}
          alt={`${channel.name} banner`}
          fill
          className="object-cover"
        />

        {channel.donorTier && (
          <div className="absolute top-2 right-2">
            {channel.donorTier === "gold" && (
              <Badge className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black">
                <Star className="h-3 w-3 mr-1 fill-current" /> Gold Donor
              </Badge>
            )}
            {channel.donorTier === "silver" && (
              <Badge className="bg-gradient-to-r from-gray-300 to-gray-400 text-black">
                <Star className="h-3 w-3 mr-1 fill-current" /> Silver Donor
              </Badge>
            )}
            {channel.donorTier === "bronze" && (
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <Star className="h-3 w-3 mr-1 fill-current" /> Bronze Donor
              </Badge>
            )}
          </div>
        )}

        {channel.subscriptionTier && (
          <div className="absolute top-2 left-2">
            <SubscriptionBadge tier={channel.subscriptionTier} />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex">
          <div className="relative -mt-12 mr-4">
            <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden bg-white">
              <Image
                src={channel.thumbnail || "/placeholder.svg"}
                alt={channel.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-lg font-bold truncate">{channel.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{formatSubscribers(subscriberCount)} subscribers</span>
                </div>
                <Button
                  size="sm"
                  className={isSubscribed ? "bg-gray-600 hover:bg-gray-700" : "bg-red-600 hover:bg-red-700"}
                  onClick={handleSubscribe}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
            </div>

            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{channel.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {channel.tags.map((tag) => (
                <Link href={`/tags/${tag.toLowerCase()}`} key={tag}>
                  <Badge variant="outline" className="bg-gray-50 hover:bg-red-50 cursor-pointer">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-green-600 flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                {channel.online} viewers online
              </div>

              <Link
                href={`/channel/${channel.id}`}
                className="text-sm text-gray-600 hover:text-red-600 flex items-center"
              >
                View Channel <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
