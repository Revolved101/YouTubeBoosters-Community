import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ChangePasswordForm from "@/components/change-password-form"

export default function SecuritySettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Security Settings</h1>
        <p className="text-gray-600">Manage your account security and password</p>
      </div>

      <div className="grid gap-6">
        <ChangePasswordForm />

        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">
              Two-factor authentication is currently not enabled for your account. Enable this feature to add an extra
              layer of security.
            </p>
            <p className="text-sm text-gray-500">This feature will be available soon.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Login Sessions</CardTitle>
            <CardDescription>Manage your active login sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">You can view and manage all devices where you're currently logged in.</p>
            <p className="text-sm text-gray-500">This feature will be available soon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
