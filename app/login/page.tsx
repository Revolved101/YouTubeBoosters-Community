import type { Metadata } from "next"
import LoginForm from "@/components/login-form"
import { Youtube } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Login - YTBoard",
  description: "Sign in to your YTBoard account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 text-center">
        <Link href="/" className="flex items-center justify-center mb-2">
          <Youtube className="h-10 w-10 text-red-600" />
        </Link>
        <h1 className="text-3xl font-bold">YTBoard</h1>
        <p className="text-gray-600">Discover and promote YouTube channels</p>
      </div>

      <LoginForm />
    </div>
  )
}
