"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, ExternalLink, Users, Calendar, Tag } from "lucide-react"

// Mock channel data - in a real app, this would come from a database
const getChannelById = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Tech Insights",
    description:
      "Latest tech reviews and insights for developers and tech enthusiasts. We cover everything from the newest gadgets to programming tutorials and industry news. Join us to stay updated with the fast-paced world of technology.",
    owner: "John Smith",
    email: "john@example.com",
    status: "pending",
    subscribers: 125000,
    tags: ["Technology", "Programming", "Reviews"],
    thumbnail: "/placeholder.svg?height=120&width=120",
    banner: "/placeholder.svg?height=300&width=1200",
    youtubeUrl: "https://youtube.com/c/techinsights",
    submittedAt: "2023-05-15T10:30:00Z",
    history: [
      {
        action: "Submitted",
        date: "2023-05-15T10:30:00Z",
        by: "John Smith",
      },
    ],
  }
}

export default function AdminChannelDetailPage({ params }: { params: { id: string } }) {
  const channel = getChannelById(params.id)
  const [feedbackText, setFeedbackText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  // Format subscriber count
  const formatSubscribers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return null
    }
  }

  const handleApprove = async () => {
    setIsSubmitting(true)
    // In a real app, this would be an API call
    console.log("Approving channel:", channel.id, "with feedback:", feedbackText)

    // Simulate API call
    setTimeout(() => {
      alert("Channel approved successfully!")
      setIsSubmitting(false)
    }, 1000)
  }

  const handleReject = async () => {
    setIsSubmitting(true)
    // In a real app, this would be an API call
    console.log("Rejecting channel:", channel.id, "with feedback:", feedbackText)

    // Simulate API call
    setTimeout(() => {
      alert("Channel rejected successfully!")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/channels" className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to channels
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">{channel.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Submitted by {channel.owner}</span>
              {getStatusBadge(channel.status)}
            </div>
          </div>
          {channel.status === "pending" && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
                onClick={handleApprove}
                disabled={isSubmitting}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button
                variant="outline"
                className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
                onClick={handleReject}
                disabled={isSubmitting}
              >
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Channel Details</CardTitle>
              <CardDescription>Review the channel information before making a decision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative h-48 md:h-64 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md overflow-hidden">
                <Image
                  src={channel.banner || "/placeholder.svg"}
                  alt={`${channel.name} banner`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={channel.thumbnail || "/placeholder.svg"}
                    alt={channel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{channel.name}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{formatSubscribers(channel.subscribers)} subscribers</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Submitted on {formatDate(channel.submittedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{channel.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {channel.tags.map((tag) => (
                    <div key={tag} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <Tag className="h-3 w-3 mr-1 text-gray-500" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">YouTube URL</h3>
                <a
                  href={channel.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  {channel.youtubeUrl}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Review Decision</CardTitle>
              <CardDescription>Provide feedback for the channel owner</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter feedback for the channel owner (optional)"
                className="min-h-[100px]"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-500">
                {channel.status === "pending" ? (
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                    This channel is awaiting review
                  </div>
                ) : channel.status === "approved" ? (
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    This channel has been approved
                  </div>
                ) : (
                  <div className="flex items-center">
                    <XCircle className="h-4 w-4 mr-1 text-red-500" />
                    This channel has been rejected
                  </div>
                )}
              </div>
              {channel.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
                    onClick={handleApprove}
                    disabled={isSubmitting}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
                    onClick={handleReject}
                    disabled={isSubmitting}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Owner Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Name</div>
                  <div className="font-medium">{channel.owner}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">{channel.email}</div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View User Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Channel History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {channel.history.map((event, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4 pb-4">
                    <div className="font-medium">{event.action}</div>
                    <div className="text-sm text-gray-500">
                      {formatDate(event.date)} by {event.by}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
