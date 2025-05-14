import ChannelList from "@/components/channel-list"
import FilterSidebar from "@/components/filter-sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeaturedChannels from "@/components/featured-channels"
import DonorCta from "@/components/donor-cta"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Featured Channels Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-2xl font-bold">Featured Creators</h2>
            <p className="text-sm text-gray-600">Channels from our generous donors</p>
          </div>
          <Suspense fallback={<div className="text-center py-10">Loading featured channels...</div>}>
            <FeaturedChannels />
          </Suspense>
        </div>

        <DonorCta />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<div className="text-center py-10">Loading channels...</div>}>
              <ChannelList />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
