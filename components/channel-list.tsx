"use client"

import { useState } from "react"
import ChannelCard from "@/components/channel-card"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

// Sample data - in a real app, this would come from a database
const allChannels = [
  {
    id: 1,
    name: "Tech Insights",
    description: "Latest tech reviews and insights for developers and tech enthusiasts",
    subscribers: 125000,
    tags: ["Technology", "Programming", "Reviews"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 1250,
    donorTier: "gold",
    subscriptionTier: "premium",
  },
  {
    id: 2,
    name: "Gaming Universe",
    description: "Gaming walkthroughs, reviews, and live streams of the latest games",
    subscribers: 450000,
    tags: ["Gaming", "Reviews", "Livestreams"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 3200,
    subscriptionTier: "pro",
  },
  {
    id: 3,
    name: "Cooking Masters",
    description: "Delicious recipes and cooking tutorials for all skill levels",
    subscribers: 890000,
    tags: ["Cooking", "Food", "Tutorials"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 1800,
  },
  {
    id: 4,
    name: "Travel Adventures",
    description: "Explore the world with our travel vlogs and destination guides",
    subscribers: 320000,
    tags: ["Travel", "Vlogs", "Adventure"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 950,
  },
  {
    id: 5,
    name: "Fitness Journey",
    description: "Workout routines, fitness tips, and healthy lifestyle advice",
    subscribers: 560000,
    tags: ["Fitness", "Health", "Lifestyle"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 2100,
    donorTier: "bronze",
  },
  {
    id: 6,
    name: "DIY Projects",
    description: "Creative DIY projects and crafts for your home and lifestyle",
    subscribers: 230000,
    tags: ["DIY", "Crafts", "Home"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 780,
  },
  {
    id: 7,
    name: "Music Vibes",
    description: "Music reviews, tutorials, and original compositions",
    subscribers: 670000,
    tags: ["Music", "Reviews", "Tutorials"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 1500,
    donorTier: "silver",
  },
  {
    id: 8,
    name: "Science Explained",
    description: "Making complex scientific concepts easy to understand",
    subscribers: 420000,
    tags: ["Science", "Education", "Explainers"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 1100,
  },
  {
    id: 9,
    name: "Fashion Forward",
    description: "Latest fashion trends, styling tips, and brand reviews",
    subscribers: 380000,
    tags: ["Fashion", "Style", "Reviews"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 900,
  },
  {
    id: 10,
    name: "Financial Freedom",
    description: "Personal finance advice, investment strategies, and money management",
    subscribers: 290000,
    tags: ["Finance", "Investing", "Money"],
    thumbnail: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=100&width=300",
    online: 850,
  },
]

export default function ChannelList() {
  const searchParams = useSearchParams()
  const [activeTag, setActiveTag] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const channelsPerPage = 5

  // Get search query if any
  const searchQuery = searchParams.get("q")?.toLowerCase() || ""

  // Filter channels based on active tag and search query
  const filteredChannels = allChannels.filter((channel) => {
    const matchesTag = activeTag === "all" || channel.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
    const matchesSearch =
      !searchQuery ||
      channel.name.toLowerCase().includes(searchQuery) ||
      channel.description.toLowerCase().includes(searchQuery) ||
      channel.tags.some((tag) => tag.toLowerCase().includes(searchQuery))

    return matchesTag && matchesSearch
  })

  // Calculate pagination
  const indexOfLastChannel = currentPage * channelsPerPage
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage
  const currentChannels = filteredChannels.slice(indexOfFirstChannel, indexOfLastChannel)
  const totalPages = Math.ceil(filteredChannels.length / channelsPerPage)

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
    setCurrentPage(1) // Reset to first page when changing tags
  }

  // Handle pagination
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-bold mb-2">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : `Channels tagged with "${activeTag === "all" ? "Promote" : activeTag}"`}
        </h2>
        <p className="text-gray-600 mb-4">
          {searchQuery
            ? `Discover YouTube channels matching your search`
            : `Discover and connect with YouTube channels looking to grow their audience`}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${activeTag === "all" ? "bg-red-50" : ""}`}
            onClick={() => handleTagClick("all")}
          >
            All Channels
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${activeTag === "technology" ? "bg-red-50" : ""}`}
            onClick={() => handleTagClick("technology")}
          >
            Technology
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${activeTag === "gaming" ? "bg-red-50" : ""}`}
            onClick={() => handleTagClick("gaming")}
          >
            Gaming
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${activeTag === "education" ? "bg-red-50" : ""}`}
            onClick={() => handleTagClick("education")}
          >
            Education
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${activeTag === "entertainment" ? "bg-red-50" : ""}`}
            onClick={() => handleTagClick("entertainment")}
          >
            Entertainment
          </Button>
        </div>
      </div>

      {currentChannels.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No channels found</h3>
          <p className="text-gray-600">
            {searchQuery
              ? `No channels match your search for "${searchQuery}"`
              : `No channels found with the tag "${activeTag}"`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {currentChannels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="outline"
                size="sm"
                className={currentPage === page ? "bg-red-50" : ""}
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
