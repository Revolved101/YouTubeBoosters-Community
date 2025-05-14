"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Search, Filter, Eye, CheckCircle, XCircle } from "lucide-react"

// Mock channel data - in a real app, this would come from a database
const mockChannels = [
  {
    id: 1,
    name: "Tech Insights",
    owner: "John Smith",
    email: "john@example.com",
    status: "approved",
    subscribers: 125000,
    submittedAt: "2023-05-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Gaming Universe",
    owner: "Sarah Johnson",
    email: "sarah@example.com",
    status: "approved",
    subscribers: 450000,
    submittedAt: "2023-05-14T14:20:00Z",
  },
  {
    id: 3,
    name: "Cooking Masters",
    owner: "Michael Brown",
    email: "michael@example.com",
    status: "pending",
    subscribers: 890000,
    submittedAt: "2023-05-16T09:15:00Z",
  },
  {
    id: 4,
    name: "Travel Adventures",
    owner: "Emily Davis",
    email: "emily@example.com",
    status: "pending",
    subscribers: 320000,
    submittedAt: "2023-05-16T11:45:00Z",
  },
  {
    id: 5,
    name: "Fitness Journey",
    owner: "David Wilson",
    email: "david@example.com",
    status: "rejected",
    subscribers: 560000,
    submittedAt: "2023-05-13T16:30:00Z",
  },
  {
    id: 6,
    name: "DIY Projects",
    owner: "Jennifer Lee",
    email: "jennifer@example.com",
    status: "pending",
    subscribers: 230000,
    submittedAt: "2023-05-17T08:20:00Z",
  },
  {
    id: 7,
    name: "Music Vibes",
    owner: "Robert Taylor",
    email: "robert@example.com",
    status: "approved",
    subscribers: 670000,
    submittedAt: "2023-05-12T13:10:00Z",
  },
  {
    id: 8,
    name: "Science Explained",
    owner: "Lisa Anderson",
    email: "lisa@example.com",
    status: "pending",
    subscribers: 420000,
    submittedAt: "2023-05-17T10:05:00Z",
  },
  {
    id: 9,
    name: "Fashion Forward",
    owner: "Kevin Martin",
    email: "kevin@example.com",
    status: "approved",
    subscribers: 380000,
    submittedAt: "2023-05-11T15:40:00Z",
  },
  {
    id: 10,
    name: "Financial Freedom",
    owner: "Amanda Clark",
    email: "amanda@example.com",
    status: "rejected",
    subscribers: 290000,
    submittedAt: "2023-05-14T09:30:00Z",
  },
]

export default function AdminChannelsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter channels based on search query and status filter
  const filteredChannels = mockChannels.filter((channel) => {
    const matchesSearch =
      searchQuery === "" ||
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || channel.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Paginate channels
  const indexOfLastChannel = currentPage * itemsPerPage
  const indexOfFirstChannel = indexOfLastChannel - itemsPerPage
  const currentChannels = filteredChannels.slice(indexOfFirstChannel, indexOfLastChannel)
  const totalPages = Math.ceil(filteredChannels.length / itemsPerPage)

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  // Format subscriber count
  const formatSubscribers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return null
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Channel Management</h1>
        <p className="text-gray-600">Review and manage YouTube channel submissions</p>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search channels..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Channel Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subscribers</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentChannels.map((channel) => (
                <TableRow key={channel.id}>
                  <TableCell className="font-medium">{channel.name}</TableCell>
                  <TableCell>
                    <div>{channel.owner}</div>
                    <div className="text-xs text-gray-500">{channel.email}</div>
                  </TableCell>
                  <TableCell>{getStatusBadge(channel.status)}</TableCell>
                  <TableCell>{formatSubscribers(channel.subscribers)}</TableCell>
                  <TableCell>{formatDate(channel.submittedAt)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/channels/${channel.id}`}>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </Link>
                      {channel.status === "pending" && (
                        <>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">Approve</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-600">
                            <XCircle className="h-4 w-4" />
                            <span className="sr-only">Reject</span>
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {currentChannels.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No channels found matching your criteria
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
