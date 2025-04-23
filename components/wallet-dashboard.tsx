"use client"

import { useState } from "react"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ChevronDown, CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function WalletDashboard() {
  const [currency, setCurrency] = useState("USD")
  const [timeFilter, setTimeFilter] = useState("This Month")
  const [typeFilter, setTypeFilter] = useState("All Types")

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0fa]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Wallet Management</h1>
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
          {/* Balance Card */}
          <Card className="bg-[#4b0082] text-white mb-6 border-0">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm opacity-80">Total Balance</p>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1">$24,562.00</h2>
                </div>
                <div className="flex items-center gap-1 bg-[#5c1a99] rounded-md px-3 py-1.5 text-sm">
                  <span>{currency}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button className="bg-[#5c1a99] hover:bg-[#6b2ba8] text-white rounded-md flex items-center gap-2 px-3 md:px-4 py-2 h-9 text-xs md:text-sm">
                  <span>Add Money</span>
                </Button>
                <Button className="bg-[#5c1a99] hover:bg-[#6b2ba8] text-white rounded-md flex items-center gap-2 px-3 md:px-4 py-2 h-9 text-xs md:text-sm">
                  <ArrowRight className="h-4 w-4" />
                  <span>Transfer</span>
                </Button>
                <Button className="bg-[#5c1a99] hover:bg-[#6b2ba8] text-white rounded-md flex items-center gap-2 px-3 md:px-4 py-2 h-9 text-xs md:text-sm">
                  <ArrowDown className="h-4 w-4" />
                  <span>Withdraw</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <div className="bg-[#f8f4fc] rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <h3 className="font-semibold">Recent Transactions</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-xs md:text-sm h-8 px-2 md:px-3 rounded-md bg-white"
                >
                  <span>{typeFilter}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-xs md:text-sm h-8 px-2 md:px-3 rounded-md bg-white"
                >
                  <span>{timeFilter}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <ArrowDown className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Received from John</p>
                    <p className="text-xs text-gray-500">Mar 15, 2025</p>
                  </div>
                </div>
                <span className="text-green-500 font-medium">+$850.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <ArrowUp className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Netflix Subscription</p>
                    <p className="text-xs text-gray-500">Mar 14, 2025</p>
                  </div>
                </div>
                <span className="text-red-500 font-medium">-$13.99</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Linked Cards */}
            <div className="bg-[#f8f4fc] rounded-lg p-4">
              <h3 className="font-semibold mb-4">Linked Cards</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-purple-900 flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Visa ending in 4242</p>
                      <p className="text-xs text-gray-500">Expires 08/25</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full mt-4 border border-dashed border-gray-300 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
              >
                <span className="mr-2">+</span> Add New Card
              </Button>
            </div>

            {/* Crypto Wallets */}
            <div className="bg-[#f8f4fc] rounded-lg p-4">
              <h3 className="font-semibold mb-4">Crypto Wallets</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-orange-500 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
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
                    <div>
                      <p className="font-medium text-sm">Bitcoin Wallet</p>
                      <p className="text-xs text-gray-500">0.0234 BTC</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full mt-4 border border-dashed border-gray-300 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
              >
                <span className="mr-2">+</span> Add New Wallet
              </Button>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-[#f8f4fc] rounded-lg p-4 mt-6">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-purple-100 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">Secure your account with 2FA</p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-purple-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-700"
                    >
                      <path
                        d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Change PIN</p>
                    <p className="text-xs text-gray-500">Update your security PIN</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-purple-700 hover:text-purple-800 hover:bg-purple-50 px-3 py-1 h-8"
                >
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
