import type { Metadata } from "next"
import AdminLoginForm from "@/components/admin/login-form"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Login - YTBoard",
  description: "Sign in to access the YTBoard admin dashboard",
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <Shield className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold">YTBoard Admin</h1>
        <p className="text-gray-600">Channel management system</p>
      </div>

      <AdminLoginForm />
    </div>
  )
}
