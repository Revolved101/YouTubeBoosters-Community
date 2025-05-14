"use client"

import type React from "react"

import Link from "next/link"
import { Search, Youtube, Coffee, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginModal from "./login-modal"
import AddChannelModal from "./add-channel-modal"

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isAddChannelModalOpen, setIsAddChannelModalOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleDonate = () => {
    window.open("https://ko-fi.com/revolved101", "_blank")
  }

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Youtube className="h-8 w-8 text-red-600 mr-2" />
            <h1 className="text-2xl font-bold">YTBoard</h1>
          </Link>

          <div className="flex-1 max-w-xl w-full">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search YouTube channels..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Button type="submit" className="sr-only">
                Search
              </Button>
            </form>
          </div>

          <div className="flex gap-2">
            <Link href="/membership">
              <Button variant="outline" className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Premium</span>
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center gap-2 animate-pulse"
              onClick={handleDonate}
            >
              <Coffee className="h-5 w-5" />
              <span>Support Us</span>
            </Button>
            <Button variant="outline" onClick={() => setIsLoginModalOpen(true)}>
              Login
            </Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => setIsAddChannelModalOpen(true)}>
              Add Your Channel
            </Button>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      <AddChannelModal isOpen={isAddChannelModalOpen} onClose={() => setIsAddChannelModalOpen(false)} />
    </header>
  )
}
