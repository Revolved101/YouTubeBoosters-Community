import { NextResponse } from "next/server"
import { cookies } from "next/headers"

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
    const { currentPassword, newPassword } = await request.json()

    // Validate input
    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Current password and new password are required" }, { status: 400 })
    }

    // Get user from session
    const adminSession = cookies().get("admin_session")?.value
    const userSession = cookies().get("user_session")?.value

    if (!adminSession && !userSession) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const session = adminSession ? JSON.parse(adminSession) : JSON.parse(userSession || "{}")
    const userEmail = session.email

    if (!userEmail) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 })
    }

    // Find user by email
    const userIndex = USERS.findIndex((u) => u.email.toLowerCase() === userEmail.toLowerCase())

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Verify current password
    if (USERS[userIndex].password !== currentPassword) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 })
    }

    // Update user password (in a real app, this would update the database)
    USERS[userIndex].password = newPassword

    // Return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Change password error:", error)
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}
