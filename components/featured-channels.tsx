"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"

// Sample featured channels data - in a real app, this would come from a database
const featuredChannels = [
  {
    id: 1,
    name: "Tech Insights",
    description: "Latest tech reviews and insights for developers and tech enthusiasts",
    subscribers: 125000,
    tags: ["Technology", "Programming"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    donorTier: "gold",
  },
  {
    id: 7,
    name: "Music Vibes",
    description: "Music reviews, tutorials, and original compositions",
    subscribers: 670000,
    tags: ["Music", "Reviews"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    donorTier: "silver",
  },
  {
    id: 5,
    name: "Fitness Journey",
    description: "Workout routines, fitness tips, and healthy lifestyle advice",
    subscribers: 560000,
    tags: ["Fitness", "Health"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    donorTier: "bronze",
  },
]

export default function FeaturedChannels() {
  const [isHovering, setIsHovering] = useState<number | null>(null)

  const getDonorStyles = (tier: string) => {
    switch (tier) {
      case "gold":
        return "shadow-[0_0_15px_rgba(255,215,0,0.7)] border-yellow-400 animate-pulse"
      case "silver":
        return "shadow-[0_0_12px_rgba(192,192,192,0.7)] border-gray-300"
      case "bronze":
        return "shadow-[0_0_10px_rgba(205,127,50,0.7)] border-amber-600"
      default:
        return "border-gray-200"
    }
  }

  const getDonorBadge = (tier: string) => {
    switch (tier) {
      case "gold":
        return (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold">
            <Star className="h-3 w-3 mr-1 fill-current" /> Featured Creator
          </Badge>
        )
      case "silver":
        return (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black font-bold">
            <Star className="h-3 w-3 mr-1 fill-current" /> Featured Creator
          </Badge>
        )
      case "bronze":
        return (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold">
            <Star className="h-3 w-3 mr-1 fill-current" /> Featured Creator
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredChannels.map((channel) => (
        <div
          key={channel.id}
          className={`relative bg-white rounded-lg overflow-hidden border-2 transition-all duration-300 ${getDonorStyles(
            channel.donorTier,
          )} ${isHovering === channel.id ? "transform scale-[1.02]" : ""}`}
          onMouseEnter={() => setIsHovering(channel.id)}
          onMouseLeave={() => setIsHovering(null)}
        >
          {getDonorBadge(channel.donorTier)}

          <div className="relative h-32 bg-gradient-to-r from-gray-100 to-gray-200">
            <Image
              src={channel.banner || "/placeholder.svg"}
              alt={`${channel.name} banner`}
              fill
              className="object-cover"
            />
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

              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold truncate">{channel.name}</h3>
                <p className="text-sm text-gray-600">{channel.subscribers.toLocaleString()} subscribers</p>
              </div>
            </div>

            <p className="mt-3 text-gray-600 text-sm line-clamp-2">{channel.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {channel.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-gray-50">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Subscribe
              </Button>

              <Link
                href={`/channel/${channel.id}`}
                className="text-sm text-gray-600 hover:text-red-600 flex items-center"
              >
                View Channel <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
