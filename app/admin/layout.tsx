import type React from "react"
import type { Metadata } from "next"
import AdminHeader from "@/components/admin/layout/admin-header"
import AdminSidebar from "@/components/admin/layout/admin-sidebar"
import { ADMIN_USER } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Admin Dashboard - YTBoard",
  description: "Manage your YouTube channel directory",
}

// This is a mock of authentication - in a real app, this would check session data
const getUser = () => {
  // Remove the password from the admin user
  const { hashedPassword, ...user } = ADMIN_USER
  return user
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // In a real app, this would be fetched from the session
  const user = getUser()

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
