import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import Image from "next/image"
interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background image - replace the URL with your actual image path */}
      <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{
    backgroundImage: "url('/SignInPage(1).png')",
  }}
></div>
      {/* Floating cryptocurrency icons (faded) */}
      <div className="absolute left-16 top-32 w-24 h-24 rounded-full bg-pink-200/30 z-10"></div>
      <div className="absolute right-16 top-32 w-24 h-24 rounded-full bg-blue-200/40 z-10">
        <div className="absolute inset-0 flex items-center justify-center text-blue-400/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.2 11V9.5a2.5 2.5 0 0 1 2.5-2.5h14.6a2.5 2.5 0 0 1 2.5 2.5V11"></path>
            <path d="M12 12v10"></path>
            <path d="m16 15-4-3-4 3"></path>
            <path d="M12 2v7"></path>
          </svg>
        </div>
      </div>
      <div className="absolute left-24 bottom-32 w-32 h-32 rounded-full bg-yellow-100/30 z-10"></div>
      <div className="absolute right-24 bottom-32 w-20 h-20 rounded-full bg-purple-100/30 z-10"></div>

      {/* Header */}
      <header className="relative z-20 p-4 flex justify-between items-center">
        <Link href="#" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
            <ArrowLeft size={18} />
          </div>
          <span className="ml-2 text-sm font-medium">Back</span>
        </Link>
        <div className="text-purple-600 font-semibold">A-Crypto</div>
      </header>

      {/* Main content */}
      <main className="relative z-20 flex justify-center items-center px-4 pt-8 pb-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">{children}</div>
      </main>
    </div>
  )
}
