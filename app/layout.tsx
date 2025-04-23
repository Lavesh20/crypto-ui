
// import "@/app/globals.css"
// import type { ReactNode } from "react"
// import { Providers } from "./providers"

// export const metadata = {
//   generator: "v0.dev",
// }

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   )
// }



"use client"

import "@/app/globals.css"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { Providers } from "./providers"
import Sidebar from "@/components/sidebar"
 // Import your Sidebar component

// List of routes that should not show the sidebar (auth pages)
const authRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password", "/auth/signup", "/auth/verify-email", "/auth/success", "/about" , "/contact"]

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()  // Get the current pathname
  const isAuthPage = authRoutes.includes(pathname) // Check if it's an auth page

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {isAuthPage ? (
            // No sidebar on auth pages
            <main className="min-h-screen">{children}</main>
          ) : (
            // Show sidebar for non-auth pages
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 overflow-y-auto p-4">{children}</main>
            </div>
          )}
        </Providers>
      </body>
    </html>
  )
}
