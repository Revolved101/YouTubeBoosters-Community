import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Eye, Calendar, Share2, Flag } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GiftSubscriptionButton from "@/components/gift-subscription-button"

// Sample channel data - in a real app, this would come from a database
const getChannelById = (id: string) => {
  const channels = [
    {
      id: 1,
      name: "Tech Insights",
      description:
        "Latest tech reviews and insights for developers and tech enthusiasts. We cover everything from the newest gadgets to programming tutorials and industry news. Join us to stay updated with the fast-paced world of technology.",
      subscribers: 125000,
      tags: ["Technology", "Programming", "Reviews"],
      thumbnail: "/placeholder.svg?height=120&width=120",
      banner: "/placeholder.svg?height=300&width=1200",
      online: 1250,
      videos: 342,
      joined: "Jan 2018",
      about:
        "Tech Insights is your go-to channel for all things technology. Our team of experts brings you in-depth reviews, tutorials, and news about the latest in tech. Whether you're a developer, a gadget enthusiast, or just curious about technology, we've got content for you.\n\nWe post new videos every Tuesday and Friday, covering topics like programming languages, frameworks, hardware reviews, and tech industry analysis.",
    },
    {
      id: 2,
      name: "Gaming Universe",
      description:
        "Gaming walkthroughs, reviews, and live streams of the latest games. Join our community of gamers for tips, tricks, and entertaining gameplay.",
      subscribers: 450000,
      tags: ["Gaming", "Reviews", "Livestreams"],
      thumbnail: "/placeholder.svg?height=120&width=120",
      banner: "/placeholder.svg?height=300&width=1200",
      online: 3200,
      videos: 567,
      joined: "Mar 2016",
      about:
        "Gaming Universe is a community-focused channel dedicated to all aspects of gaming. From AAA titles to indie gems, we cover it all with gameplay, reviews, and live streams. Our team of passionate gamers brings you the latest news, tips, and entertaining content.\n\nWe stream live every weekend and post new videos throughout the week. Join our Discord community to connect with other gamers and participate in our events!",
    },
  ]

  return channels.find((channel) => channel.id === Number.parseInt(id)) || channels[0]
}

export default function ChannelPage({ params }: { params: { id: string } }) {
  const channel = getChannelById(params.id)
  const isSubscribed = false

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-red-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to channels
        </Link>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Banner */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-gray-100 to-gray-200">
            <Image
              src={channel.banner || "/placeholder.svg"}
              alt={`${channel.name} banner`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Channel Info */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative -mt-20 md:-mt-16">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white overflow-hidden bg-white">
                  <Image
                    src={channel.thumbnail || "/placeholder.svg"}
                    alt={channel.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{channel.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{channel.subscribers.toLocaleString()} subscribers</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{channel.videos} videos</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Joined {channel.joined}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className={isSubscribed ? "bg-gray-600 hover:bg-gray-700" : "bg-red-600 hover:bg-red-700"}>
                      {isSubscribed ? "Subscribed" : "Subscribe"}
                    </Button>
                    <GiftSubscriptionButton channelId={channel.id} channelName={channel.name} variant="outline" />
                    <Button variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {channel.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="about" className="mt-8">
              <TabsList className="w-full max-w-md">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{channel.about}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Links</h2>
                    <div className="flex flex-wrap gap-3">
                      <Link href="#" className="text-red-600 hover:underline">
                        Official Website
                      </Link>
                      <Link href="#" className="text-red-600 hover:underline">
                        Twitter
                      </Link>
                      <Link href="#" className="text-red-600 hover:underline">
                        Instagram
                      </Link>
                      <Link href="#" className="text-red-600 hover:underline">
                        Discord
                      </Link>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Button variant="outline" size="sm" className="text-gray-600">
                      <Flag className="h-4 w-4 mr-2" />
                      Report Channel
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <div className="text-center py-10 text-gray-500">
                  <p>Videos would be displayed here in a real application</p>
                </div>
              </TabsContent>

              <TabsContent value="playlists" className="mt-6">
                <div className="text-center py-10 text-gray-500">
                  <p>Playlists would be displayed here in a real application</p>
                </div>
              </TabsContent>

              <TabsContent value="community" className="mt-6">
                <div className="text-center py-10 text-gray-500">
                  <p>Community posts would be displayed here in a real application</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
