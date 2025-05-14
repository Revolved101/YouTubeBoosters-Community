import { NextResponse } from "next/server"
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
    const { token, password } = await request.json()

    // Validate input
    if (!token || !password) {
      return NextResponse.json({ error: "Token and password are required" }, { status: 400 })
    }

    // Check if token exists and is valid
    const resetData = passwordResetTokens.get(token)

    if (!resetData) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 })
    }

    // Check if token is expired
    if (new Date() > resetData.expires) {
      // Remove expired token
      passwordResetTokens.delete(token)
      return NextResponse.json({ error: "Token has expired" }, { status: 400 })
    }

    // Find user by email
    const userIndex = USERS.findIndex((u) => u.email.toLowerCase() === resetData.email.toLowerCase())

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Update user password (in a real app, this would update the database)
    USERS[userIndex].password = password

    // Remove used token
    passwordResetTokens.delete(token)

    // Return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}
