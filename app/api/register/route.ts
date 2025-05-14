import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { cookies } from "next/headers"

// In a real app, this would be a database operation
export async function POST(request: Request) {
  try {
    const { email, password, username } = await request.json()

    // Validate input
    if (!email || !password || !username) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if email is already in use (in a real app, this would query a database)
    // This is just a placeholder implementation
    if (email === "test@example.com" || email === "revolved101@gmail.com") {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 })
    }

    // Hash the password
    const hashedPassword = await hash(password, 10)

    // Create a new user (in a real app, this would save to a database)
    const newUser = {
      id: `user-${Date.now()}`,
      email,
      username,
      hashedPassword,
      role: "user",
      createdAt: new Date(),
    }

    console.log("New user registered:", { ...newUser, hashedPassword: "[REDACTED]" })

    // Set session cookie
    cookies().set({
      name: "user_session",
      value: JSON.stringify({
        userId: newUser.id,
        email: newUser.email,
        role: "user",
        name: newUser.username,
      }),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    })

    // Return success without exposing the hashed password
    const { hashedPassword: _, ...userWithoutPassword } = newUser
    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      redirectTo: "/dashboard",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 })
  }
}
