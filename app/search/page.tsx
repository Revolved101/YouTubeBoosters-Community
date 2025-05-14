import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FilterSidebar from "@/components/filter-sidebar"
import ChannelList from "@/components/channel-list"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<div className="text-center py-10">Searching channels...</div>}>
              <ChannelList />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
