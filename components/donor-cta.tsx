"use client"

import { Coffee, Star, Zap, BarChart, Users, Bell, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DonorCta() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Become a Donor</h2>
        <p className="text-amber-100">Support YTBoard and get exclusive benefits for your YouTube channel</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <Star className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Featured Placement</h3>
              <p className="text-sm text-gray-600">Get highlighted at the top of the directory</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <Zap className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Priority Approval</h3>
              <p className="text-sm text-gray-600">Fast-track your channel submission</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <BarChart className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Analytics & Insights</h3>
              <p className="text-sm text-gray-600">Get channel growth recommendations</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <Users className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Exclusive Community</h3>
              <p className="text-sm text-gray-600">Join our VIP Discord section</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <Bell className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Early Access</h3>
              <p className="text-sm text-gray-600">Test new features before release</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Monthly Giveaways</h3>
              <p className="text-sm text-gray-600">Win YouTube gear and more</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2"
            onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
          >
            <Coffee className="h-5 w-5" />
            <span>Donate on Ko-fi</span>
          </Button>

          <Link href="/donate">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-amber-600 hover:bg-amber-50 border-2 border-amber-500 hover:border-amber-600 font-medium shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
            >
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
