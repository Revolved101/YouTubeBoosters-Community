"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Mock settings data - in a real app, this would come from a database
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "YTBoard",
    siteDescription: "Discover and promote YouTube channels",
    contactEmail: "support@ytboard.com",
    maxChannelsPerUser: "5",
  })

  const [channelSettings, setChannelSettings] = useState({
    requireApproval: true,
    allowEditing: true,
    minSubscribers: "0",
    maxTags: "5",
    bannedKeywords: "spam, scam, adult content",
  })

  const [emailSettings, setEmailSettings] = useState({
    sendWelcomeEmail: true,
    sendApprovalNotifications: true,
    sendRejectionNotifications: true,
    emailFooter: "© YTBoard. All rights reserved.",
  })

  const handleSaveSettings = async () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Site Settings</h1>
        <p className="text-gray-600">Configure your YouTube channel directory</p>
      </div>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">Your settings have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="channels">Channel Settings</TabsTrigger>
          <TabsTrigger value="email">Email Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic site settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input
                  id="site-name"
                  value={generalSettings.siteName}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={generalSettings.siteDescription}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-channels">Maximum Channels Per User</Label>
                <Input
                  id="max-channels"
                  type="number"
                  value={generalSettings.maxChannelsPerUser}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, maxChannelsPerUser: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="channels">
          <Card>
            <CardHeader>
              <CardTitle>Channel Settings</CardTitle>
              <CardDescription>Configure channel submission and approval settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="require-approval">Require Admin Approval</Label>
                <Switch
                  id="require-approval"
                  checked={channelSettings.requireApproval}
                  onCheckedChange={(checked) => setChannelSettings({ ...channelSettings, requireApproval: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="allow-editing">Allow Channel Editing</Label>
                <Switch
                  id="allow-editing"
                  checked={channelSettings.allowEditing}
                  onCheckedChange={(checked) => setChannelSettings({ ...channelSettings, allowEditing: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-subscribers">Minimum Subscribers Required</Label>
                <Input
                  id="min-subscribers"
                  type="number"
                  value={channelSettings.minSubscribers}
                  onChange={(e) => setChannelSettings({ ...channelSettings, minSubscribers: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-tags">Maximum Tags Per Channel</Label>
                <Input
                  id="max-tags"
                  type="number"
                  value={channelSettings.maxTags}
                  onChange={(e) => setChannelSettings({ ...channelSettings, maxTags: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="banned-keywords">Banned Keywords (comma separated)</Label>
                <Textarea
                  id="banned-keywords"
                  value={channelSettings.bannedKeywords}
                  onChange={(e) => setChannelSettings({ ...channelSettings, bannedKeywords: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Notification Settings</CardTitle>
              <CardDescription>Configure email notifications for users and admins</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="welcome-email">Send Welcome Email</Label>
                <Switch
                  id="welcome-email"
                  checked={emailSettings.sendWelcomeEmail}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, sendWelcomeEmail: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="approval-notifications">Send Approval Notifications</Label>
                <Switch
                  id="approval-notifications"
                  checked={emailSettings.sendApprovalNotifications}
                  onCheckedChange={(checked) =>
                    setEmailSettings({ ...emailSettings, sendApprovalNotifications: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="rejection-notifications">Send Rejection Notifications</Label>
                <Switch
                  id="rejection-notifications"
                  checked={emailSettings.sendRejectionNotifications}
                  onCheckedChange={(checked) =>
                    setEmailSettings({ ...emailSettings, sendRejectionNotifications: checked })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-footer">Email Footer Text</Label>
                <Textarea
                  id="email-footer"
                  value={emailSettings.emailFooter}
                  onChange={(e) => setEmailSettings({ ...emailSettings, emailFooter: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex gap-2">
                  <Input id="primary-color" type="color" defaultValue="#ef4444" className="w-16 h-10 p-1" />
                  <Input defaultValue="#ef4444" className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="theme-mode">Default Theme Mode</Label>
                <Select defaultValue="light">
                  <SelectTrigger id="theme-mode">
                    <SelectValue placeholder="Select theme mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-family">Font Family</Label>
                <Select defaultValue="inter">
                  <SelectTrigger id="font-family">
                    <SelectValue placeholder="Select font family" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                    <SelectItem value="montserrat">Montserrat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo-upload">Site Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center">
                    <Save className="h-6 w-6 text-gray-400" />
                  </div>
                  <Button variant="outline">Upload Logo</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
