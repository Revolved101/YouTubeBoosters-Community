"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import TagList from "@/components/tag-list"
import { useRouter, useSearchParams } from "next/navigation"

// Sample popular tags
const popularTags = [
  "Technology",
  "Gaming",
  "Cooking",
  "Travel",
  "Fitness",
  "DIY",
  "Music",
  "Education",
  "Art",
  "Science",
  "Fashion",
  "Beauty",
  "Sports",
  "Finance",
  "Motivation",
]

export default function FilterSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("subscribers-high")
  const [minSubscribers, setMinSubscribers] = useState("any")

  const handleApplyFilters = () => {
    // Create a new URLSearchParams object based on the current URL search params
    const params = new URLSearchParams(searchParams.toString())

    // Update or add the filter parameters
    if (category !== "all") {
      params.set("category", category)
    } else {
      params.delete("category")
    }

    if (sortBy !== "subscribers-high") {
      params.set("sort", sortBy)
    } else {
      params.delete("sort")
    }

    if (minSubscribers !== "any") {
      params.set("min", minSubscribers)
    } else {
      params.delete("min")
    }

    // Navigate to the new URL with the updated search parameters
    router.push(`/?${params.toString()}`)

    // In a real application, this would trigger a data fetch with the new filters
    alert(`Filters applied! In a real app, this would fetch filtered data from the server.
Category: ${category}
Sort by: ${sortBy}
Min subscribers: ${minSubscribers}`)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
        <TagList tags={popularTags} />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Filter Channels</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="w-full rounded-md border border-gray-300 p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="gaming">Gaming</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="music">Music</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sort By</label>
            <select
              className="w-full rounded-md border border-gray-300 p-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="subscribers-high">Subscribers: High to Low</option>
              <option value="subscribers-low">Subscribers: Low to High</option>
              <option value="recent">Recently Added</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Minimum Subscribers</label>
            <select
              className="w-full rounded-md border border-gray-300 p-2"
              value={minSubscribers}
              onChange={(e) => setMinSubscribers(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="1000">1,000+</option>
              <option value="10000">10,000+</option>
              <option value="100000">100,000+</option>
              <option value="1000000">1,000,000+</option>
            </select>
          </div>

          <Button className="w-full flex items-center justify-center" onClick={handleApplyFilters}>
            <Filter className="h-4 w-4 mr-2" />
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  )
}
