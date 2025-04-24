"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState("")

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

  const recentSearches = [
    {
      symbol: "TWTR",
      name: "Twitter Inc.",
      price: "$63.98",
      change: "+0.23%",
      changeType: "positive",
      chartColor: "blue",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: "$2.84k",
      change: "+0.88%",
      changeType: "positive",
      chartColor: "green",
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      price: "$302.1",
      change: "+0.21%",
      changeType: "positive",
      chartColor: "green",
    },
    {
      symbol: "NIKE",
      name: "Nike, Inc.",
      price: "$169.8",
      change: "-0.32%",
      changeType: "negative",
      chartColor: "yellow",
    },
    {
      symbol: "SPOT",
      name: "Spotify",
      price: "$226.9",
      change: "+0.90%",
      changeType: "positive",
      chartColor: "green",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-[#f5f0fa] z-50 overflow-y-auto">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Search</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full py-2 pl-9 pr-4 bg-white rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            autoFocus
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Search</h3>
          <div className="space-y-3">
            {recentSearches.map((item) => (
              <div key={item.symbol} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer">
                <div className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden">
                  {item.symbol === "TWTR" && (
                    <div className="bg-blue-400 h-full w-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                      </svg>
                    </div>
                  )}
                  {item.symbol === "GOOGL" && (
                    <div className="bg-white h-full w-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path
                          d="M22.18 10.382c0-.81-.069-1.589-.216-2.334H12v4.407h5.736c-.247 1.35-.997 2.5-2.121 3.267v2.688h3.423c2.004-1.848 3.142-4.573 3.142-8.028z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 22c2.864 0 5.263-.947 7.017-2.59l-3.423-2.688c-.95.642-2.172 1.017-3.594 1.017-2.762 0-5.1-1.867-5.94-4.379H2.51v2.77C4.324 19.782 7.924 22 12 22z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.06 13.36c-.22-.642-.345-1.33-.345-2.04s.125-1.398.345-2.04V6.51H2.51C1.855 8.082 1.5 9.828 1.5 11.68c0 1.852.355 3.598 1.01 5.17l3.55-2.77z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.32c1.55 0 2.947.534 4.043 1.576l3.036-3.036C17.062 2.023 14.663 1 12 1 7.924 1 4.324 3.218 2.51 6.87l3.55 2.77c.84-2.512 3.178-4.32 5.94-4.32z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  )}
                  {item.symbol === "MSFT" && (
                    <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
                      <div className="bg-red-500"></div>
                      <div className="bg-green-500"></div>
                      <div className="bg-blue-500"></div>
                      <div className="bg-yellow-500"></div>
                    </div>
                  )}
                  {item.symbol === "NIKE" && (
                    <div className="bg-black h-full w-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                        <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" />
                      </svg>
                    </div>
                  )}
                  {item.symbol === "SPOT" && (
                    <div className="bg-green-500 h-full w-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-sm">{item.symbol}</p>
                      <p className="text-xs text-gray-500">{item.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{item.price}</p>
                      <p className={cn("text-xs", item.changeType === "positive" ? "text-green-500" : "text-red-500")}>
                        {item.change}
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 h-6">
                    <svg viewBox="0 0 100 20" className="h-full w-full">
                      <path
                        d={
                          item.chartColor === "green"
                            ? "M0,10 Q25,5 50,8 T100,5"
                            : item.chartColor === "red"
                              ? "M0,5 Q25,10 50,8 T100,15"
                              : item.chartColor === "blue"
                                ? "M0,10 Q30,15 50,5 T100,10"
                                : "M0,10 Q25,15 50,5 T100,8"
                        }
                        fill="none"
                        stroke={item.changeType === "positive" ? "#10B981" : "#EF4444"}
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
