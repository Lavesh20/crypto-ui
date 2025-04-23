
// // "use client"

// // import Link from "next/link"
// // import { useState } from "react"
// // import { cn } from "@/lib/utils"
// // import { Home, Clock, Wallet, BarChart2, Settings, LogOut, Menu, LayoutGrid, X } from "lucide-react"

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false)

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen)
// //   }

// //   const links = [
// //     { href: "/", icon: Home, label: "Home" },
// //     { href: "/transaction-history", icon: Clock, label: "History" },
// //     { href: "/wallet", icon: Wallet, label: "Wallet" },
// //     { href: "/wishlist", icon: LayoutGrid, label: "Wishlist" },
// //     { href: "/futures-trading", icon: BarChart2, label: "Trading" },
// //     { href: "/settings", icon: Settings, label: "Settings" },
// //   ]

// //   return (
// //     <>
// //       {/* Mobile menu button */}
// //       <button
// //         className="fixed bottom-4 right-4 z-50 md:hidden bg-purple-700 text-white p-3 rounded-full shadow-lg"
// //         onClick={toggleSidebar}
// //       >
// //         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //       </button>

// //       {/* Overlay */}
// //       {isOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
// //       )}

// //       {/* Desktop Sidebar */}
// //       <div
// //         className={cn(
// //           "fixed inset-y-0 left-0 z-50 w-16 bg-white flex flex-col items-center py-6 border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
// //           "hidden md:flex" // Hide on mobile
// //         )}
// //       >
// //         <div className="w-8 h-8 bg-purple-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
// //           A
// //         </div>
// //         <nav className="flex flex-col items-center gap-6 flex-1">
// //           {links.map((link, index) => (
// //             <Link
// //               key={index}
// //               href={link.href}
// //               className="p-2 text-gray-400 hover:text-purple-700"
// //               title={link.label}
// //             >
// //               <link.icon className="w-6 h-6" />
// //             </Link>
// //           ))}
// //         </nav>
// //         <button className="p-2 text-gray-400 hover:text-purple-700 mt-auto">
// //           <LogOut className="w-6 h-6" />
// //         </button>
// //       </div>

// //       {/* Mobile Bottom Nav */}
// //       <div
// //         className={cn(
// //           "fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center py-2 px-4 transition-transform duration-300 ease-in-out md:hidden",
// //           isOpen ? "translate-y-0" : "translate-y-full"
// //         )}
// //       >
// //         <div className="flex justify-around items-center w-full">
// //           {links.map((link, index) => (
// //             <Link
// //               key={index}
// //               href={link.href}
// //               className="flex flex-col items-center p-2 text-gray-400 hover:text-purple-700"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               <link.icon className="w-5 h-5" />
// //               <span className="text-xs mt-1">{link.label}</span>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// "use client"

// import Link from "next/link"
// import { cn } from "@/lib/utils"
// import { Home, Clock, Wallet, BarChart2, Settings, LogOut, LayoutGrid } from "lucide-react"

// export default function Sidebar() {
//   const links = [
//     { href: "/", icon: Home, label: "Home" },
//     { href: "/transaction-history", icon: Clock, label: "History" },
//     { href: "/wallet", icon: Wallet, label: "Wallet" },
//     { href: "/wishlist", icon: LayoutGrid, label: "Wishlist" },
//     { href: "/futures-trading", icon: BarChart2, label: "Trading" },
//     { href: "/settings", icon: Settings, label: "Settings" },
//   ]

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div
//         className="fixed inset-y-0 left-0 z-50 w-16 bg-white  flex-col items-center py-6 border-r hidden md:flex"
//       >
//         <div className="w-8 h-8 bg-purple-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
//           A
//         </div>
//         <nav className="flex flex-col items-center gap-6 flex-1">
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="p-2 text-gray-400 hover:text-purple-700"
//               title={link.label}
//             >
//               <link.icon className="w-6 h-6" />
//             </Link>
//           ))}
//         </nav>
//         <button className="p-2 text-gray-400 hover:text-purple-700 mt-auto">
//           <LogOut className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Mobile Bottom Nav - Always visible */}
//       <div
//         className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center py-2 px-4 md:hidden"
//       >
//         <div className="flex justify-around items-center w-full">
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="flex flex-col items-center p-2 text-gray-400 hover:text-purple-700"
//             >
//               <link.icon className="w-5 h-5" />
//               <span className="text-xs mt-1">{link.label}</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// "use client"

// import Link from "next/link"
// import { cn } from "@/lib/utils"
// import { Home, Clock, Wallet, BarChart2, Settings, LogOut, LayoutGrid  , Plus , LayoutDashboard } from "lucide-react"

// export default function Sidebar() {
//   const links = [
//     { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
//     { href: "/wallet/add-money", icon: Plus, label: "Add-Money" },
//     { href: "/transaction-history", icon: Clock, label: "History" },
//     { href: "/wallet", icon: Wallet, label: "Wallet" },
//     { href: "/wishlist", icon: LayoutGrid, label: "Wishlist" },
//     { href: "/futures-trading", icon: BarChart2, label: "Trading" },
//     { href: "/settings", icon: Settings, label: "Settings" },
//   ]

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div
//         className="fixed inset-y-0 left-0 z-50 w-16 bg-white mt-2  flex-col items-center py-6 border-r hidden md:flex"
//       >
//         <div className="w-8 h-8 bg-purple-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
//           A
//         </div>
//         <nav className="flex flex-col items-center gap-6 flex-1">
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="p-2 text-gray-400 hover:text-purple-700"
//               title={link.label}
//             >
//               <link.icon className="w-6 h-6" />
//             </Link>
//           ))}
//         </nav>
//         <button className="p-2 text-gray-400 hover:text-purple-700 mt-auto">
//           <LogOut className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Mobile Bottom Nav - Always visible */}
//       <div
//         className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-between items-center py-1 px-1 md:hidden overflow-x-auto"
//       >
//         {links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.href}
//             className="flex flex-col items-center justify-center p-1 text-gray-400 hover:text-purple-700 min-w-0 flex-shrink-0"
//           >
//             <link.icon className="w-4 h-4" />
//             <span className="text-[10px] mt-1 truncate w-full text-center">{link.label}</span>
//           </Link>
//         ))}
//         <button className="flex flex-col items-center justify-center p-1 text-gray-400 hover:text-purple-700 min-w-0 flex-shrink-0">
//           <LogOut className="w-4 h-4" />
//           <span className="text-[10px] mt-1 truncate w-full text-center">Logout</span>
//         </button>
//       </div>
//     </>
//   )
// }


"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Clock, Wallet, BarChart2, Settings, LogOut, LayoutGrid, Plus, LayoutDashboard } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  // List of paths where Sidebar should not be shown
  const excludedPaths = ["/auth/login", "/auth/signup" , "/auth/verify", "/auth/success" , "/"]

  // Don't render the sidebar on excluded paths
  if (excludedPaths.includes(pathname)) {
    return null
  }

  const links = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/wallet/add-money", icon: Plus, label: "Add-Money" },
    { href: "/transaction-history", icon: Clock, label: "History" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/wishlist", icon: LayoutGrid, label: "Wishlist" },
    { href: "/futures-trading", icon: BarChart2, label: "Trading" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-16 bg-white mt-2 flex-col items-center py-6 border-r hidden md:flex">
        <div className="w-8 h-8 bg-purple-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
          A
        </div>
        <nav className="flex flex-col items-center gap-6 flex-1">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-2 text-gray-400 hover:text-purple-700"
              title={link.label}
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </nav>
        <button className="p-2 text-gray-400 hover:text-purple-700 mt-auto">
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-between items-center py-1 px-1 md:hidden overflow-x-auto">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex flex-col items-center justify-center p-1 text-gray-400 hover:text-purple-700 min-w-0 flex-shrink-0"
          >
            <link.icon className="w-4 h-4" />
            <span className="text-[10px] mt-1 truncate w-full text-center">{link.label}</span>
          </Link>
        ))}
        <button className="flex flex-col items-center justify-center p-1 text-gray-400 hover:text-purple-700 min-w-0 flex-shrink-0">
          <LogOut className="w-4 h-4" />
          <span className="text-[10px] mt-1 truncate w-full text-center">Logout</span>
        </button>
      </div>
    </>
  )
}
