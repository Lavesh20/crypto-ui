"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function AddMoney() {
  const [amount, setAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const quickAmounts = [
    { value: "10", label: "$10" },
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "500", label: "$500" },
  ]

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: (
        <div className="h-6 w-6 rounded-md bg-blue-100 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-600"
          >
            <path
              d="M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "upi",
      name: "UPI",
      icon: (
        <div className="h-6 w-6 rounded-md bg-green-100 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600"
          >
            <path
              d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: (
        <div className="h-6 w-6 rounded-md bg-purple-100 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-purple-600"
          >
            <path
              d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: "crypto",
      name: "Crypto Wallet",
      icon: (
        <div className="h-6 w-6 rounded-md bg-orange-100 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-600"
          >
            <path
              d="M9.5 2L16.5 9H13.5V13H16.5L9.5 20V2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
  ]

  const handleQuickAmountSelect = (value: string) => {
    setSelectedAmount(value)
    setAmount(value)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
    setSelectedAmount(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0fa]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Add Money</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-4 pr-10 bg-gray-100 rounded-full text-sm w-[200px] focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-gray-500 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                1
              </span>
            </Button>
          </div>
          <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
            <img src="/photo-frame.png?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" className="text-purple-700 p-0 h-auto flex items-center gap-1 hover:bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              <span>Add Money</span>
            </Button>
          </div>

          {/* Balance Card */}
          <Card className="bg-[#4b0082] text-white mb-6 border-0">
            <CardContent className="p-4 md:p-6">
              <div>
                <p className="text-sm opacity-80">Current Balance</p>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">$2,458.65</h2>
              </div>
            </CardContent>
          </Card>

          {/* Quick Select Amount */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Quick Select Amount</p>
            <div className="grid grid-cols-2 gap-3">
              {quickAmounts.map((item) => (
                <button
                  key={item.value}
                  className={cn(
                    "py-3 rounded-md text-center transition-colors",
                    selectedAmount === item.value
                      ? "bg-purple-200 text-purple-700"
                      : "bg-[#f8f4fc] text-gray-700 hover:bg-purple-100",
                  )}
                  onClick={() => handleQuickAmountSelect(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Custom Amount</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="pl-8 bg-[#f8f4fc] border-0 focus-visible:ring-purple-500"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Select Payment Method */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Select Payment Method</p>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-md transition-colors",
                    selectedMethod === method.id
                      ? "bg-purple-100 border border-purple-200"
                      : "bg-[#f8f4fc] hover:bg-purple-50",
                  )}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-center gap-3">
                    {method.icon}
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Add Money Button */}
          <Button
            className="w-full bg-[#4b0082] hover:bg-[#5c1a99] text-white py-6"
            disabled={!amount || !selectedMethod}
          >
            Add Money
          </Button>
        </div>
      </main>
    </div>
  )
}
