"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Youtube, BarChart, ClipboardList, Settings, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Channel Management",
      href: "/admin/channels",
      icon: Youtube,
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart,
    },
    {
      name: "Audit Logs",
      href: "/admin/audit-logs",
      icon: ClipboardList,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      subItems: [
        {
          name: "General",
          href: "/admin/settings",
        },
        {
          name: "Security",
          href: "/admin/settings/security",
        },
      ],
    },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-60px)] sticky top-[60px] hidden md:block">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          const isSubActive = item.subItems?.some((subItem) => pathname === subItem.href)

          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive || isSubActive ? "bg-red-50 text-red-700 font-medium" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive || isSubActive ? "text-red-600" : "text-gray-500")} />
                <span>{item.name}</span>
                {(isActive || isSubActive) && <ChevronRight className="h-4 w-4 ml-auto" />}
              </Link>

              {/* Render sub-items if they exist and parent is active */}
              {item.subItems && (isActive || isSubActive) && (
                <div className="ml-9 mt-1 space-y-1">
                  {item.subItems.map((subItem) => {
                    const isSubItemActive = pathname === subItem.href
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "flex items-center text-sm py-1.5 px-3 rounded-md transition-colors",
                          isSubItemActive
                            ? "text-red-700 font-medium"
                            : "text-gray-600 hover:text-red-600 hover:bg-red-50",
                        )}
                      >
                        {subItem.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
