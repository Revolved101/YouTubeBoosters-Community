import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/forgot-password-form"
import { Youtube } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Forgot Password - YTBoard",
  description: "Reset your YTBoard account password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 text-center">
        <Link href="/" className="flex items-center justify-center mb-2">
          <Youtube className="h-10 w-10 text-red-600" />
        </Link>
        <h1 className="text-3xl font-bold">YTBoard</h1>
        <p className="text-gray-600">Reset your password</p>
      </div>

      <ForgotPasswordForm />
    </div>
  )
}
