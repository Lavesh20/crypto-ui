"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import AuthLayout from "@/components/auth-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function VerifyEmailPage() {
  const [email, setEmail] = useState("john.lennon@email.com")
  const [timer, setTimer] = useState(45)
  const [code, setCode] = useState(["", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = "/auth/success"
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Verify Email</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              readOnly
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {formatTime(timer)}
            </div>
            <button
              type="button"
              className="text-sm text-purple-600 hover:text-purple-700"
              onClick={() => setTimer(45)}
              disabled={timer > 0}
            >
              Resend Code
            </button>
          </div>

          <div className="flex justify-center space-x-3 py-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="w-12">
                <Input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={code[index]}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-full text-center text-lg font-medium border-b-2 border-gray-300 focus:border-purple-600 rounded-none px-0"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 flex space-x-4">
            <Link
              href="/auth/signup"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-full text-center transition-colors"
            >
              Back
            </Link>
            <Button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full transition-colors"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
