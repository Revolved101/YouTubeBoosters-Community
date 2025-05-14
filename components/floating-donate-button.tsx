"use client"

import { useState, useEffect } from "react"
import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDonate = () => {
    window.open("https://ko-fi.com/revolved101", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2 shadow-lg rounded-full px-6 animate-pulse"
        onClick={handleDonate}
      >
        <Coffee className="h-5 w-5" />
        <span>Support Us</span>
      </Button>
    </div>
  )
}
