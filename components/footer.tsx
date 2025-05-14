import Link from "next/link"
import { Youtube, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Youtube className="h-6 w-6 text-red-600 mr-2" />
              <span className="font-bold">YTBoard</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">The YouTube channel discovery platform</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="/about" className="text-gray-600 hover:text-red-600">
              About
            </Link>
            <Link href="/donate" className="text-amber-600 hover:text-amber-700 flex items-center font-medium">
              <Coffee className="h-4 w-4 mr-1" /> Donate
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-red-600">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-red-600">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600">
              Contact
            </Link>
          </div>

          <div>
            <a
              href="https://ko-fi.com/revolved101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <Coffee className="h-5 w-5 mr-1" />
              <span>Support on Ko-fi</span>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YTBoard. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
