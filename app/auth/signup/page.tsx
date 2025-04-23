"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import AuthLayout from "@/components/auth-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = "/auth/verify"
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign up for free</h1>
          <p className="text-sm text-gray-500 mt-1">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john.lennon@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="pt-4 flex space-x-4">
            <Link
              href="#"
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
