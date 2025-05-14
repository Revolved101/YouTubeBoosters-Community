import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// Define valid credentials for both regular and admin users
const validCredentials = [
  { email: "test@example.com", password: "123456", role: "user", id: "user-1", name: "Test User" },
  { email: "revolved101@gmail.com", password: "Anything@2025", role: "admin", id: "admin-1", name: "Admin User" },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Find user by email (case-insensitive)
    const user = validCredentials.find(
      (cred) => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password,
    )

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Set session cookie
    const sessionData = {
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    }

    cookies().set({
      name: user.role === "admin" ? "admin_session" : "user_session",
      value: JSON.stringify(sessionData),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    })

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      redirectTo: user.role === "admin" ? "/admin/dashboard" : "/dashboard",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
