"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Info } from "lucide-react"

// Mock audit log data - in a real app, this would come from a database
const mockAuditLogs = [
  {
    id: 1,
    action: "channel_approved",
    description: "Channel 'Tech Insights' was approved",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-15T10:35:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 2,
    action: "channel_rejected",
    description: "Channel 'Gaming World' was rejected",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-15T11:20:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 3,
    action: "user_role_changed",
    description: "User 'Sarah Johnson' role changed from 'user' to 'moderator'",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-14T14:45:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 4,
    action: "user_suspended",
    description: "User 'David Wilson' was suspended",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-13T16:35:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 5,
    action: "settings_updated",
    description: "Site settings were updated",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-12T09:15:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 6,
    action: "channel_approved",
    description: "Channel 'Cooking Masters' was approved",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-11T13:25:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 7,
    action: "user_role_changed",
    description: "User 'Emily Davis' role changed from 'user' to 'moderator'",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-10T15:50:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 8,
    action: "channel_rejected",
    description: "Channel 'Travel Vlogs' was rejected",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-09T11:10:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 9,
    action: "user_suspended",
    description: "User 'Robert Taylor' was suspended",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-08T14:30:00Z",
    ip: "192.168.1.1",
  },
  {
    id: 10,
    action: "settings_updated",
    description: "Email notification settings were updated",
    user: "Admin User",
    userEmail: "revolved101@gmail.com",
    timestamp: "2023-05-07T10:20:00Z",
    ip: "192.168.1.1",
  },
]

export default function AdminAuditLogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [actionFilter, setActionFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter audit logs based on search query and action filter
  const filteredLogs = mockAuditLogs.filter((log) => {
    const matchesSearch =
      searchQuery === "" ||
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesAction = actionFilter === "all" || log.action === actionFilter

    return matchesSearch && matchesAction
  })

  // Paginate logs
  const indexOfLastLog = currentPage * itemsPerPage
  const indexOfFirstLog = indexOfLastLog - itemsPerPage
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog)
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage)

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  // Get action badge
  const getActionBadge = (action: string) => {
    switch (action) {
      case "channel_approved":
        return <Badge className="bg-green-100 text-green-800">Channel Approved</Badge>
      case "channel_rejected":
        return <Badge className="bg-red-100 text-red-800">Channel Rejected</Badge>
      case "user_role_changed":
        return <Badge className="bg-blue-100 text-blue-800">Role Changed</Badge>
      case "user_suspended":
        return <Badge className="bg-amber-100 text-amber-800">User Suspended</Badge>
      case "settings_updated":
        return <Badge className="bg-purple-100 text-purple-800">Settings Updated</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{action}</Badge>
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Audit Logs</h1>
        <p className="text-gray-600">Track all administrative actions on the platform</p>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search logs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={actionFilter} onValueChange={setActionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="channel_approved">Channel Approved</SelectItem>
                  <SelectItem value="channel_rejected">Channel Rejected</SelectItem>
                  <SelectItem value="user_role_changed">Role Changed</SelectItem>
                  <SelectItem value="user_suspended">User Suspended</SelectItem>
                  <SelectItem value="settings_updated">Settings Updated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{getActionBadge(log.action)}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell>
                    <div>{log.user}</div>
                    <div className="text-xs text-gray-500">{log.userEmail}</div>
                  </TableCell>
                  <TableCell>{formatDate(log.timestamp)}</TableCell>
                  <TableCell>{log.ip}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {currentLogs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No audit logs found matching your criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="p-4 border-t">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(page)
                      }}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  )
}
