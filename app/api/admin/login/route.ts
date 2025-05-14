import { NextResponse } from "next/server"
import { verifyCredentials } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Verify credentials
    const user = await verifyCredentials(email, password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Check if user is an admin
    if (user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized. Admin access required." }, { status: 403 })
    }

    // Set a session cookie
    cookies().set({
      name: "admin_session",
      value: JSON.stringify({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      }),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 })
  }
}
