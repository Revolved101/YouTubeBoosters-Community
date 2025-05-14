import { compare } from "bcryptjs"

// Admin user data - in a real app, this would be stored in a database
export const ADMIN_USER = {
  id: "admin-1",
  email: "revolved101@gmail.com",
  // This would be a hashed password in a real application
  // The plain text password is 'Anything@2025'
  hashedPassword: "$2a$10$8DgEV8oE5LHVvXV9t.5lXeUUgkm4mX.nC5/5hVMcmGgqvkxKpFzfS",
  role: "admin" as const,
  name: "Admin User",
  createdAt: new Date("2023-01-01"),
}

// Mock user database - in a real app, this would be in a database
const USERS = [
  {
    id: "user-1",
    email: "test@example.com",
    // This would be a hashed password in a real application
    // The plain text password is '123456'
    hashedPassword: "$2a$10$8DgEV8oE5LHVvXV9t.5lXeUUgkm4mX.nC5/5hVMcmGgqvkxKpFzfS",
    role: "user" as const,
    name: "Test User",
    createdAt: new Date("2023-01-01"),
  },
  ADMIN_USER,
]

// User roles and their permissions
export const ROLES = {
  admin: {
    canApproveChannels: true,
    canManageUsers: true,
    canAccessAnalytics: true,
    canAccessAuditLogs: true,
    canManageSettings: true,
  },
  moderator: {
    canApproveChannels: true,
    canManageUsers: false,
    canAccessAnalytics: false,
    canAccessAuditLogs: true,
    canManageSettings: false,
  },
  user: {
    canApproveChannels: false,
    canManageUsers: false,
    canAccessAnalytics: false,
    canAccessAuditLogs: false,
    canManageSettings: false,
  },
}

export type Role = keyof typeof ROLES
export type Permission = keyof (typeof ROLES)["admin"]

// Function to verify user credentials
export async function verifyCredentials(email: string, password: string) {
  // Find user by email
  const user = USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())

  if (!user) {
    return null
  }

  const passwordMatches = await compare(password, user.hashedPassword)
  if (!passwordMatches) {
    return null
  }

  // Return user without the password
  const { hashedPassword, ...userWithoutPassword } = user
  return userWithoutPassword
}

// Function to check if a user has a specific permission
export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLES[role][permission] === true
}

// Function to log admin action
export async function logAdminAction(userId: string, action: string, details: Record<string, any>) {
  // In a real app, you would save this to a database
  const logEntry = {
    userId,
    action,
    details,
    timestamp: new Date(),
  }

  console.log("Admin action logged:", logEntry)
  return logEntry
}
