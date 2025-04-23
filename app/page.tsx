import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">A-Crypto Authentication Screens</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/auth/login"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-center transition-colors"
          >
            Login Page
          </Link>
          <Link
            href="/auth/signup"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-center transition-colors"
          >
            Sign Up Page
          </Link>
          <Link
            href="/auth/verify"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-center transition-colors"
          >
            Verify Email Page
          </Link>
          <Link
            href="/auth/success"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-center transition-colors"
          >
            Success Page
          </Link>
        </div>
      </main>
    </div>
  )
}
