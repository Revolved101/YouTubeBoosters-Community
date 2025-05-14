"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddChannelModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddChannelModal({ isOpen, onClose }: AddChannelModalProps) {
  const [channelUrl, setChannelUrl] = useState("")
  const [channelName, setChannelName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would submit to a backend
      console.log("Channel submission:", {
        channelUrl,
        channelName,
        description,
        category,
        tags: tags.split(",").map((tag) => tag.trim()),
      })

      setTimeout(() => {
        alert("Your channel has been submitted for review! In a real application, this would be saved to a database.")
        setIsSubmitting(false)
        onClose()
      }, 1000)
    } catch (error) {
      console.error("Error submitting channel:", error)
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Add Your YouTube Channel</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="channel-url">YouTube Channel URL</Label>
              <Input
                id="channel-url"
                type="url"
                placeholder="https://www.youtube.com/c/yourchannel"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="channel-name">Channel Name</Label>
              <Input
                id="channel-name"
                type="text"
                placeholder="Your Channel Name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Channel Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your channel content and what viewers can expect..."
                className="min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Primary Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="cooking">Cooking</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="diy">DIY & Crafts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                type="text"
                placeholder="gaming, tutorials, reviews"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">Add up to 5 tags that describe your channel content</p>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Channel"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
