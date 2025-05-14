"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { TrendingUp, Users, Youtube, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30days")

  // Mock data - in a real app, this would come from a database or analytics service
  const channelData = [
    { date: "Jan", submissions: 12, approvals: 10, rejections: 2 },
    { date: "Feb", submissions: 18, approvals: 15, rejections: 3 },
    { date: "Mar", submissions: 15, approvals: 12, rejections: 3 },
    { date: "Apr", submissions: 22, approvals: 18, rejections: 4 },
    { date: "May", submissions: 28, approvals: 24, rejections: 4 },
    { date: "Jun", submissions: 35, approvals: 30, rejections: 5 },
    { date: "Jul", submissions: 42, approvals: 36, rejections: 6 },
  ]

  const userData = [
    { date: "Jan", signups: 45, active: 40 },
    { date: "Feb", signups: 52, active: 48 },
    { date: "Mar", signups: 49, active: 45 },
    { date: "Apr", signups: 63, active: 58 },
    { date: "May", signups: 75, active: 68 },
    { date: "Jun", signups: 82, active: 75 },
    { date: "Jul", signups: 95, active: 88 },
  ]

  const categoryData = [
    { name: "Technology", value: 35 },
    { name: "Gaming", value: 25 },
    { name: "Education", value: 15 },
    { name: "Entertainment", value: 10 },
    { name: "Music", value: 8 },
    { name: "Other", value: 7 },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-600">Track platform performance and user engagement</p>
      </div>

      <div className="flex justify-end mb-6">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Youtube className="h-5 w-5 mr-2 text-red-500" />
              Total Channels
            </CardTitle>
            <CardDescription>All time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">156</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>12% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              Total Users
            </CardTitle>
            <CardDescription>All time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">423</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>8% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
              Approval Rate
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <div className="flex items-center text-sm text-red-600 mt-1">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              <span>3% decrease</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="channels" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="channels">Channel Analytics</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="channels">
          <Card>
            <CardHeader>
              <CardTitle>Channel Activity</CardTitle>
              <CardDescription>Channel submissions, approvals, and rejections over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <BarChart
                  data={channelData}
                  index="date"
                  categories={["submissions", "approvals", "rejections"]}
                  colors={["blue", "green", "red"]}
                  valueFormatter={(value) => `${value} channels`}
                  yAxisWidth={40}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>New user signups and active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <LineChart
                  data={userData}
                  index="date"
                  categories={["signups", "active"]}
                  colors={["blue", "green"]}
                  valueFormatter={(value) => `${value} users`}
                  yAxisWidth={40}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Channel Categories</CardTitle>
              <CardDescription>Distribution of channels by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <PieChart data={categoryData} index="name" category="value" valueFormatter={(value) => `${value}%`} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
