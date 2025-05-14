import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Check if the path is for the admin area
  const isAdminPath = path.startsWith("/admin")

  // Skip the login page from authentication check
  const isLoginPage = path === "/admin/login"

  // Get the session cookies
  const adminSession = request.cookies.get("admin_session")?.value
  const userSession = request.cookies.get("user_session")?.value

  // If trying to access admin area (except login) without an admin session, redirect to login
  if (isAdminPath && !isLoginPage && !adminSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If already logged in as admin and trying to access login page, redirect to dashboard
  if (isLoginPage && adminSession) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  return NextResponse.next()
}

// Only run middleware on admin paths
export const config = {
  matcher: "/admin/:path*",
}
