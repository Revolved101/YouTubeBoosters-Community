import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Users, Clock, AlertTriangle, CheckCircle, TrendingUp, Activity } from "lucide-react"

export default function AdminDashboardPage() {
  // Mock data - in a real app, this would come from a database
  const stats = {
    pendingChannels: 12,
    approvedChannels: 156,
    rejectedChannels: 8,
    totalUsers: 423,
    newUsersToday: 15,
    activeUsers: 87,
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your YouTube channel directory.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Clock className="h-5 w-5 mr-2 text-amber-500" />
              Pending Channels
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.pendingChannels}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              Approved Channels
            </CardTitle>
            <CardDescription>Live on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.approvedChannels}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              Rejected Channels
            </CardTitle>
            <CardDescription>Not meeting guidelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.rejectedChannels}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              Total Users
            </CardTitle>
            <CardDescription>Registered accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalUsers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
              New Users Today
            </CardTitle>
            <CardDescription>Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.newUsersToday}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Activity className="h-5 w-5 mr-2 text-cyan-500" />
              Active Users
            </CardTitle>
            <CardDescription>Currently online</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.activeUsers}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Channel Submissions</CardTitle>
            <CardDescription>Latest channels awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <Youtube className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">Gaming Channel {i}</div>
                      <div className="text-sm text-gray-500">Submitted 2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={`/admin/channels/${i}`} className="text-sm text-blue-600 hover:underline">
                      Review
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent User Registrations</CardTitle>
            <CardDescription>Latest users who joined the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">User {i}</div>
                      <div className="text-sm text-gray-500">Joined 3 hours ago</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={`/admin/users/${i}`} className="text-sm text-blue-600 hover:underline">
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
