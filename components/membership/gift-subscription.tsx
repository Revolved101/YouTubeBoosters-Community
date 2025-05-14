"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SUBSCRIPTION_PLANS, GIFT_DURATIONS, calculateGiftPrice } from "@/lib/subscription-plans"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function GiftSubscription() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<string>("pro")
  const [selectedDuration, setSelectedDuration] = useState<string>("1month")
  const [giftMessage, setGiftMessage] = useState("")

  // Mock search results - in a real app, this would be an API call
  const searchUsers = () => {
    if (!searchQuery.trim()) return []

    // Mock data
    return [
      { id: 1, name: "Tech Insights", email: "tech@example.com", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Gaming Universe", email: "gaming@example.com", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "Cooking Masters", email: "cooking@example.com", avatar: "/placeholder.svg?height=40&width=40" },
    ].filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  const handleSelectUser = (user: any) => {
    setSelectedUser(user)
    setStep(2)
  }

  const handleProceedToCheckout = () => {
    setStep(3)
  }

  const handlePurchaseGift = () => {
    // In a real app, this would process payment and send the gift
    alert(
      `Gift purchased for ${selectedUser.name}! They will receive a ${
        GIFT_DURATIONS.find((d) => d.id === selectedDuration)?.name
      } subscription to the ${SUBSCRIPTION_PLANS[selectedPlan.toUpperCase()]?.name} plan.`,
    )
  }

  const giftPrice = calculateGiftPrice(selectedPlan, selectedDuration)

  return (
    <Card className="border-2 border-dashed border-gray-200">
      <CardHeader className="text-center">
        <div className="mx-auto bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
          <Gift className="h-6 w-6 text-purple-600" />
        </div>
        <CardTitle className="text-2xl">Gift a Premium Subscription</CardTitle>
        <CardDescription>Support a YouTube creator by gifting them premium features</CardDescription>
      </CardHeader>

      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="search-user">Find a channel or user</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search-user"
                  placeholder="Search by channel name or email"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {searchQuery.trim() !== "" && (
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Search Results</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {searchUsers().length > 0 ? (
                    searchUsers().map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleSelectUser(user)}
                      >
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-gray-500">No users found matching "{searchQuery}"</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && selectedUser && (
          <div className="space-y-6">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-lg">{selectedUser.name}</div>
                <div className="text-sm text-gray-500">{selectedUser.email}</div>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setStep(1)}>
                Change
              </Button>
            </div>

            <Separator />

            <div>
              <Label htmlFor="plan-select" className="block mb-2">
                Select a plan
              </Label>
              <RadioGroup
                id="plan-select"
                value={selectedPlan}
                onValueChange={setSelectedPlan}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {Object.values(SUBSCRIPTION_PLANS)
                  .filter((plan) => !plan.isDefault)
                  .map((plan) => (
                    <div key={plan.id} className="relative">
                      <RadioGroupItem value={plan.id} id={`plan-${plan.id}`} className="peer sr-only" />
                      <Label
                        htmlFor={`plan-${plan.id}`}
                        className="flex flex-col p-4 border-2 rounded-md cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50"
                      >
                        <span className="font-medium">{plan.name}</span>
                        <span className="text-sm text-gray-500">${plan.monthlyPrice}/month</span>
                      </Label>
                    </div>
                  ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="duration-select" className="block mb-2">
                Gift duration
              </Label>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger id="duration-select">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {GIFT_DURATIONS.map((duration) => (
                    <SelectItem key={duration.id} value={duration.id}>
                      {duration.name}
                      {duration.discount && (
                        <span className="ml-2 text-green-600 text-xs">Save {duration.discount * 100}%</span>
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="gift-message" className="block mb-2">
                Gift message (optional)
              </Label>
              <Input
                id="gift-message"
                placeholder="Add a personal message..."
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${giftPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${giftPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {step === 3 && selectedUser && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Gift Summary</h3>
              <p className="text-gray-600">
                You're gifting a {GIFT_DURATIONS.find((d) => d.id === selectedDuration)?.name} subscription to{" "}
                {selectedUser.name}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Recipient</span>
                <span className="font-medium">{selectedUser.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-medium">{SUBSCRIPTION_PLANS[selectedPlan.toUpperCase()]?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{GIFT_DURATIONS.find((d) => d.id === selectedDuration)?.name}</span>
              </div>
              {giftMessage && (
                <div className="pt-2 border-t">
                  <span className="text-gray-600 block mb-1">Your message:</span>
                  <p className="italic text-sm">"{giftMessage}"</p>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${giftPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-500 mb-4">
                The recipient will receive an email notification about your gift.
              </p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        {step === 1 && (
          <Button className="w-full bg-purple-600 hover:bg-purple-700" disabled={!searchQuery.trim()}>
            Find Channel
          </Button>
        )}

        {step === 2 && (
          <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleProceedToCheckout}>
            Continue to Checkout
          </Button>
        )}

        {step === 3 && (
          <div className="w-full space-y-3">
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handlePurchaseGift}>
              Complete Purchase
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setStep(2)}>
              Back to Details
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
