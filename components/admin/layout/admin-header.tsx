"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, User, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminHeaderProps {
  user: {
    name: string
    email: string
    role: string
  }
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      })
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            <span className="font-bold text-lg">YTBoard Admin</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/admin/dashboard">
              <Button variant={pathname === "/admin/dashboard" ? "default" : "ghost"} size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/channels">
              <Button variant={pathname.startsWith("/admin/channels") ? "default" : "ghost"} size="sm">
                Channels
              </Button>
            </Link>
            <Link href="/admin/users">
              <Button variant={pathname.startsWith("/admin/users") ? "default" : "ghost"} size="sm">
                Users
              </Button>
            </Link>
            <Link href="/admin/analytics">
              <Button variant={pathname.startsWith("/admin/analytics") ? "default" : "ghost"} size="sm">
                Analytics
              </Button>
            </Link>
            <Link href="/admin/audit-logs">
              <Button variant={pathname.startsWith("/admin/audit-logs") ? "default" : "ghost"} size="sm">
                Audit Logs
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button variant={pathname.startsWith("/admin/settings") ? "default" : "ghost"} size="sm">
                Settings
              </Button>
            </Link>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div>
                  <div>{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/admin/profile" className="flex w-full">
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
