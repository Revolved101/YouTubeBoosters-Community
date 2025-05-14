import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { passwordResetTokens } from "../forgot-password/route"

// Mock user database - in a real app, this would be in a database
const USERS = [
  {
    id: "user-1",
    email: "test@example.com",
    password: "123456",
    role: "user",
    name: "Test User",
  },
  {
    id: "admin-1",
    email: "revolved101@gmail.com",
    password: "Anything@2025",
    role: "admin",
    name: "Admin User",
  },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Find user by email
    const user = USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Check if this is a temporary password login
    let isTemporaryPassword = false
    let resetToken = ""

    // Check all reset tokens for this email
    for (const [token, data] of passwordResetTokens.entries()) {
      if (data.email.toLowerCase() === email.toLowerCase() && data.tempPassword === password) {
        isTemporaryPassword = true
        resetToken = token
        break
      }
    }

    // If not a temporary password, check against regular password
    if (!isTemporaryPassword && user.password !== password) {
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
    return NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, role: user.role, name: user.name },
      isTemporaryPassword,
      resetToken,
      redirectTo: isTemporaryPassword
        ? `/reset-password?token=${resetToken}`
        : user.role === "admin"
          ? "/admin/dashboard"
          : "/dashboard",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
