import { NextResponse } from "next/server"
import { randomBytes } from "crypto"

// In a real app, this would be stored in a database
const passwordResetTokens = new Map<string, { email: string; token: string; expires: Date; tempPassword: string }>()

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

// Function to generate a secure random token
function generateToken(): string {
  return randomBytes(32).toString("hex")
}

// Function to generate a temporary password
function generateTemporaryPassword(): string {
  // Generate a password with at least one uppercase, one lowercase, one number, and one special character
  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ"
  const lower = "abcdefghijkmnopqrstuvwxyz"
  const numbers = "23456789"
  const special = "!@#$%^&*"

  let temp = ""
  temp += upper.charAt(Math.floor(Math.random() * upper.length))
  temp += lower.charAt(Math.floor(Math.random() * lower.length))
  temp += numbers.charAt(Math.floor(Math.random() * numbers.length))
  temp += special.charAt(Math.floor(Math.random() * special.length))

  // Add 4 more random characters
  const allChars = upper + lower + numbers + special
  for (let i = 0; i < 4; i++) {
    temp += allChars.charAt(Math.floor(Math.random() * allChars.length))
  }

  // Shuffle the password
  return temp
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("")
}

// Mock email sending function
async function sendPasswordResetEmail(email: string, tempPassword: string, token: string) {
  // In a real app, this would send an actual email
  console.log(`
    To: ${email}
    Subject: YTBoard Password Reset
    
    You have requested a password reset for your YTBoard account.
    
    Your temporary password is: ${tempPassword}
    
    Please use this temporary password to log in, after which you will be prompted to set a new password.
    
    Alternatively, you can reset your password directly by clicking the link below:
    https://ytboard.com/reset-password?token=${token}
    
    If you did not request this password reset, please ignore this email.
    
    Thank you,
    YTBoard Team
  `)

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return true
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Check if user exists (in a real app, this would query a database)
    const user = USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())

    // Even if user doesn't exist, we don't want to reveal that for security reasons
    // We'll still return a success response to prevent email enumeration attacks
    if (!user) {
      return NextResponse.json({ success: true })
    }

    // Generate token and temporary password
    const token = generateToken()
    const tempPassword = generateTemporaryPassword()

    // Set expiration time (1 hour from now)
    const expires = new Date()
    expires.setHours(expires.getHours() + 1)

    // Store token (in a real app, this would be saved to a database)
    passwordResetTokens.set(token, {
      email: user.email,
      token,
      expires,
      tempPassword,
    })

    // Send password reset email
    await sendPasswordResetEmail(user.email, tempPassword, token)

    // Return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Password reset request error:", error)
    return NextResponse.json({ error: "An error occurred processing your request" }, { status: 500 })
  }
}

// Export the passwordResetTokens map for use in other routes
export { passwordResetTokens }
