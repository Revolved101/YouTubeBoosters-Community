"use client"

import { useState } from "react"
import { Coffee, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DonationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <Coffee className="h-5 w-5 mr-2 flex-shrink-0" />
            <p className="text-sm sm:text-base">
              Support YTBoard and get your channel featured! Donors receive exclusive benefits.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/donate">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-amber-600 hover:bg-amber-50 border-2 border-white hover:border-amber-200 font-medium shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                aria-label="Learn more about donor benefits"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white border-2 border-amber-700 hover:border-amber-800 shadow-md"
              onClick={() => window.open("https://ko-fi.com/revolved101", "_blank")}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
