"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-8">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-white font-semibold text-xl">
          A-Crypto
        </Link>
      </div>

      {/* Center Navigation */}
      <nav className="hidden md:flex flex-1 justify-center space-x-6">
        <Link
          href="/"
          className={cn(
            "text-white text-sm hover:opacity-80 transition-opacity",
            pathname === "/" && "border-b-2 border-white pb-1"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-white text-sm hover:opacity-80 transition-opacity",
            pathname === "/about" && "border-b-2 border-white pb-1"
          )}
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-white text-sm hover:opacity-80 transition-opacity",
            pathname === "/contact" && "border-b-2 border-white pb-1"
          )}
        >
          Contact Us
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex-1 flex justify-end items-center space-x-2">
        <Link
          href="/signin"
          className="text-white text-sm bg-purple-700/40 hover:bg-purple-700/60 px-4 py-1.5 rounded-full transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="text-white text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors"
        >
          Register
        </Link>
      </div>
    </header>
  )
}
