"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Coffee,
  Star,
  Zap,
  BarChart,
  Users,
  Bell,
  Award,
  MessageSquare,
  ShieldCheck,
  Palette,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Support YTBoard</h1>
            <p className="text-xl text-gray-600 mb-6">Help us grow the YouTube creator community by becoming a donor</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2"
              onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
            >
              <Coffee className="h-5 w-5" />
              <span>Donate on Ko-fi</span>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ko-fi Support"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-3">Why Support YTBoard?</h2>
                <p className="text-gray-700 mb-4">
                  YTBoard is dedicated to helping YouTube creators grow their audience and connect with viewers. Your
                  support helps us maintain and improve our platform, while giving your channel the visibility it
                  deserves.
                </p>
                <p className="text-gray-700">
                  Every donation directly supports our mission to create the best YouTube channel discovery platform,
                  while giving your channel exclusive benefits and increased visibility.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2"
                onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
              >
                <Coffee className="h-5 w-5" />
                <span>Support Us on Ko-fi</span>
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Donor Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Bronze Tier */}
            <Card className="border-amber-600 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <Star className="h-5 w-5 mr-2 fill-white" /> Bronze
                  </CardTitle>
                  <span className="text-2xl font-bold">$5</span>
                </div>
                <CardDescription className="text-amber-100">Monthly</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Featured Creator badge on your channel listing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority channel approval</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ad-free browsing experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly giveaway entry</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
                >
                  Become a Bronze Donor
                </Button>
              </CardFooter>
            </Card>

            {/* Silver Tier */}
            <Card className="border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <Star className="h-5 w-5 mr-2 fill-gray-800" /> Silver
                  </CardTitle>
                  <span className="text-2xl font-bold">$10</span>
                </div>
                <CardDescription className="text-gray-600">Monthly</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Silver Featured Creator badge</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All Bronze tier benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom channel banner design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to exclusive Discord community</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gray-400 hover:bg-gray-500 text-gray-800"
                  onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
                >
                  Become a Silver Donor
                </Button>
              </CardFooter>
            </Card>

            {/* Gold Tier */}
            <Card className="border-yellow-400 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-800">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <Star className="h-5 w-5 mr-2 fill-gray-800" /> Gold
                  </CardTitle>
                  <span className="text-2xl font-bold">$25</span>
                </div>
                <CardDescription className="text-gray-700">Monthly</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gold Featured Creator badge with animation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All Silver tier benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Top featured placement on homepage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly channel analytics report</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Social media shoutout</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority support via direct contact</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800"
                  onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
                >
                  Become a Gold Donor
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 text-center">All Donor Benefits Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Star className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">1. Featured Placement</h3>
                  <p className="text-gray-600">
                    Donor channels are highlighted at the top of the directory and homepage, giving you maximum
                    visibility to potential subscribers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Zap className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">2. Priority Approval</h3>
                  <p className="text-gray-600">
                    We'll fast-track your channel submission approval or updates, so you can get listed quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Palette className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">3. Custom Channel Banner</h3>
                  <p className="text-gray-600">
                    Silver and Gold donors receive a custom-made banner or thumbnail design to make your channel stand
                    out.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <BarChart className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">4. Analytics & Insights</h3>
                  <p className="text-gray-600">
                    Gold donors receive monthly channel insights including views, engagement tips, and SEO suggestions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">5. Exclusive Discord Community</h3>
                  <p className="text-gray-600">
                    Silver and Gold donors get access to our VIP Discord section with tips, collaboration opportunities,
                    and direct support.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">6. Ad-Free Experience</h3>
                  <p className="text-gray-600">All donors enjoy an ad-free browsing experience on YTBoard.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">7. Social Media Promotion</h3>
                  <p className="text-gray-600">
                    Gold donors receive shoutouts and promotion on our social media channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Bell className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">8. Early Access to Features</h3>
                  <p className="text-gray-600">
                    Donors get to beta test new site features and tools before they're released to the public.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Zap className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">9. Priority Support</h3>
                  <p className="text-gray-600">
                    Gold donors receive direct contact information for faster support and assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Award className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">10. Monthly Giveaways</h3>
                  <p className="text-gray-600">
                    All donors are automatically entered into our monthly giveaways for YouTube gear, custom thumbnails,
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">How do I become a donor?</h3>
                <p className="text-gray-600">
                  Simply click on any "Donate" button on our site to be directed to our Ko-fi page where you can make a
                  donation. After donating, your channel will automatically receive donor benefits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">How long do donor benefits last?</h3>
                <p className="text-gray-600">
                  Donor benefits are active for the duration of your monthly subscription. You can cancel anytime, but
                  benefits will end when your subscription period is over.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">How do I claim my custom channel banner?</h3>
                <p className="text-gray-600">
                  Silver and Gold donors will receive an email with instructions on how to request their custom channel
                  banner design within 48 hours of becoming a donor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">When are the monthly giveaways held?</h3>
                <p className="text-gray-600">
                  Giveaways are held on the last Friday of each month. Winners are announced on our Discord server and
                  contacted directly.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Have questions about donor benefits?{" "}
              <Link href="/contact" className="text-red-600 hover:underline">
                Contact us
              </Link>
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2"
              onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
            >
              <Coffee className="h-5 w-5" />
              <span>Support Us on Ko-fi</span>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
