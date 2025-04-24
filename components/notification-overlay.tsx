"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotificationsOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationsOverlay({ isOpen, onClose }: NotificationsOverlayProps) {
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "read">("all")

  // Close on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const notifications = [
    {
      id: 1,
      type: "Deposit",
      amount: "0.00045BTC",
      status: "successful",
      time: "12:25 am",
      date: "Today",
    },
    {
      id: 2,
      type: "Transfer",
      amount: "0.00045BTC",
      status: "successful",
      time: "1:20 am",
      date: "Today",
    },
    {
      id: 3,
      type: "Deposit",
      amount: "0.00045BTC",
      status: "successful",
      time: "12:25 am",
      date: "Today",
    },
    {
      id: 4,
      type: "Deposit",
      amount: "2,000USDT",
      status: "successful",
      time: "1:20 am",
      date: "Yesterday",
    },
    {
      id: 5,
      type: "Transfer",
      amount: "0.00045BTC",
      status: "successful",
      time: "1:20 am",
      date: "Yesterday",
    },
    {
      id: 6,
      type: "Deposit",
      amount: "2,000USDT",
      status: "successful",
      time: "1:20 am",
      date: "27 August 2022",
    },
    {
      id: 7,
      type: "Transfer",
      amount: "0.00045BTC",
      status: "successful",
      time: "1:20 am",
      date: "27 August 2022",
    },
  ]

  // Group notifications by date
  const groupedNotifications = notifications.reduce(
    (acc, notification) => {
      if (!acc[notification.date]) {
        acc[notification.date] = []
      }
      acc[notification.date].push(notification)
      return acc
    },
    {} as Record<string, typeof notifications>,
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-[#f5f0fa] z-50 overflow-y-auto">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Notifications</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium",
              activeTab === "all" ? "bg-purple-700 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
            )}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium",
              activeTab === "unread" ? "bg-purple-700 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
            )}
          >
            Unread
          </button>
          <button
            onClick={() => setActiveTab("read")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium",
              activeTab === "read" ? "bg-purple-700 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
            )}
          >
            Read
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">All Notifications</h3>
          <button className="text-xs text-purple-700 font-medium">Mark all as read</button>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedNotifications).map(([date, items]) => (
            <div key={date}>
              <h4 className="text-sm font-medium mb-2">{date}</h4>
              <div className="space-y-3">
                {items.map((notification) => (
                  <div key={notification.id} className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-start">
                      <div className="h-2 w-2 mt-1.5 rounded-full bg-purple-700 mr-2"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-sm text-purple-700">{notification.type}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.type === "Deposit"
                            ? `Your deposit of ${notification.amount} was ${notification.status}.`
                            : `Your Transfer of ${notification.amount} was ${notification.status}.`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
