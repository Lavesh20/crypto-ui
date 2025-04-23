"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function ProfileTabs() {
  const pathname = usePathname()

  const tabs = [
    { name: "Edit Profile", href: "/settings/profile" },
    { name: "Bank Details", href: "/settings/profile/bank-details" },
    { name: "Security", href: "/settings/profile/security" },
  ]

  return (
    <div className="border-b mb-4 sm:mb-6 overflow-x-auto">
      <div className="flex space-x-4 sm:space-x-8 min-w-max">
        {tabs.map((tab) => {
          const isActive =
            (tab.href === "/settings/profile" && pathname === "/settings/profile") ||
            (tab.href !== "/settings/profile" && pathname.includes(tab.href))

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "py-3 sm:py-4 text-xs sm:text-sm font-medium relative whitespace-nowrap",
                isActive ? "text-purple-700" : "text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.name}
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-700" />}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
