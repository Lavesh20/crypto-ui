// import { Button } from "@/components/ui/button"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { cn } from "@/lib/utils"
// import { ArrowLeft, ListFilter } from "lucide-react"

// export default function TransactionHistoryPage() {
//   const transactions = [
//     {
//       id: 1,
//       date: "2024-05-10 14:30:22",
//       type: "Deposit",
//       pair: "USDT",
//       amount: "+5,000.00",
//       fee: "0.00",
//       status: "Completed",
//     },
//     {
//       id: 2,
//       date: "2024-05-10 14:25:15",
//       type: "Buy",
//       pair: "BTC/USDT",
//       amount: "+0.15 BTC",
//       fee: "7.50",
//       status: "Filled",
//     },
//     {
//       id: 3,
//       date: "2024-05-09 09:12:45",
//       type: "Withdrawal",
//       pair: "ETH",
//       amount: "-2.50 ETH",
//       fee: "0.005",
//       status: "Pending",
//     },
//     {
//       id: 4,
//       date: "2024-05-08 22:05:33",
//       type: "Sell",
//       pair: "SOL/USDT",
//       amount: "-50.00 SOL",
//       fee: "3.20",
//       status: "Completed",
//     },
//     {
//       id: 5,
//       date: "2024-05-08 11:40:18",
//       type: "Futures PNL",
//       pair: "BTC-PERP",
//       amount: "+120.50 USDT",
//       fee: "0.00",
//       status: "Completed",
//     },
//   ]

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Completed":
//         return "bg-green-100 text-green-800"
//       case "Filled":
//         return "bg-yellow-100 text-yellow-800"
//       case "Pending":
//         return "bg-blue-100 text-blue-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <div className="bg-white min-h-screen pt-24 max-w-5xl mx-auto">
//       {/* Fixed Header */}
//       <header className="sm:fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 mt-2 border-b">
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon" className="text-gray-500">
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <h1 className="text-lg font-semibold">Transaction History</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="py-2 px-4 pr-10 bg-white rounded-full text-sm w-[200px] focus:outline-none"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//               {/* search icon */}
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="relative">
//             <Button variant="ghost" size="icon" className="text-gray-500 relative">
//               {/* bell icon */}
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                 1
//               </span>
//             </Button>
//           </div>
//           <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
//             <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
//           </div>
//         </div>
//       </header>

//       {/* Content Area */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6 px-4 sm:px-6">
//         <h2 className="text-lg font-medium">Transaction History Table</h2>
//         <Button variant="outline" className="bg-purple-700 text-white hover:bg-purple-800 w-full sm:w-auto">
//           <ListFilter className="w-4 h-4 mr-2" />
//           Status Badges
//         </Button>
//       </div>

//       <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-6">
//         <div className="inline-block min-w-full align-middle">
//           <Table>
//             <TableHeader className="bg-white">
//               <TableRow>
//                 <TableHead className="w-12">
//                   <input type="checkbox" className="rounded" />
//                 </TableHead>
//                 <TableHead>Date & Time</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Pair</TableHead>
//                 <TableHead>Amount</TableHead>
//                 <TableHead>Fee</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {transactions.map((transaction) => (
//                 <TableRow key={transaction.id}>
//                   <TableCell>
//                     <input type="checkbox" className="rounded" />
//                   </TableCell>
//                   <TableCell className="whitespace-nowrap">{transaction.date}</TableCell>
//                   <TableCell>{transaction.type}</TableCell>
//                   <TableCell>{transaction.pair}</TableCell>
//                   <TableCell>{transaction.amount}</TableCell>
//                   <TableCell>{transaction.fee}</TableCell>
//                   <TableCell>
//                     <span
//                       className={cn("px-2 py-1 rounded-full text-xs font-medium", getStatusColor(transaction.status))}
//                     >
//                       {transaction.status}
//                     </span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState } from "react"
import { ArrowLeft, Bell, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/sidebar"
import { SearchOverlay } from "@/components/search-overlay"
import { NotificationsOverlay } from "@/components/notification-overlay"


export default function TransactionHistory() {
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const transactions = [
    {
      id: "1",
      date: "2024-05-10 14:30:22",
      type: "Deposit",
      pair: "USDT",
      amount: "+5,000.00",
      fee: "0.00",
      status: "Completed",
    },
    {
      id: "2",
      date: "2024-05-10 14:25:15",
      type: "Buy",
      pair: "BTC/USDT",
      amount: "+0.15 BTC",
      fee: "7.50",
      status: "Filled",
    },
    {
      id: "3",
      date: "2024-05-09 09:12:45",
      type: "Withdrawal",
      pair: "ETH",
      amount: "-2.50 ETH",
      fee: "0.005",
      status: "Pending",
    },
    {
      id: "4",
      date: "2024-05-08 22:05:33",
      type: "Sell",
      pair: "SOL/USDT",
      amount: "-50.00 SOL",
      fee: "3.20",
      status: "Completed",
    },
    {
      id: "5",
      date: "2024-05-08 11:40:18",
      type: "Futures PNL",
      pair: "BTC-PERP",
      amount: "+120.50 USDT",
      fee: "0.00",
      status: "Completed",
    },
  ]

  const handleSelectAll = () => {
    if (selectedTransactions.length === transactions.length) {
      setSelectedTransactions([])
    } else {
      setSelectedTransactions(transactions.map((tx) => tx.id))
    }
  }

  const handleSelect = (id: string) => {
    if (selectedTransactions.includes(id)) {
      setSelectedTransactions(selectedTransactions.filter((txId) => txId !== id))
    } else {
      setSelectedTransactions([...selectedTransactions, id])
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Filled":
        return "bg-yellow-100 text-yellow-800"
      case "Pending":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex min-h-screen bg-[#f5f0fa]">
      <Sidebar />
      <div className="flex-1 ml-12">
        <header className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-500 md:hidden">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold">Transaction History</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-9 pr-4 bg-gray-100 rounded-full text-sm w-[200px] focus:outline-none"
              />
            </div>
            <Button variant="ghost" size="icon"  className="relative">
              <Bell className="h-5 w-5 text-gray-500" onClick={() => setNotificationsOpen(true)} />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                1
              </span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
            <img src="/photo-frame.png?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
              <div className="h-full w-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Transaction History Table</h2>
              <Button className="bg-purple-800 hover:bg-purple-900 text-white text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4">
                <span className="hidden sm:inline">Status Badges</span>
                <span className="sm:hidden">Status</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left w-10">
                      <Checkbox
                        checked={selectedTransactions.length === transactions.length && transactions.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="p-3 text-left font-medium text-gray-600">Date & Time</th>
                    <th className="p-3 text-left font-medium text-gray-600">Type</th>
                    <th className="p-3 text-left font-medium text-gray-600">Pair</th>
                    <th className="p-3 text-left font-medium text-gray-600">Amount</th>
                    <th className="p-3 text-left font-medium text-gray-600">Fee</th>
                    <th className="p-3 text-left font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <Checkbox
                          checked={selectedTransactions.includes(transaction.id)}
                          onCheckedChange={() => handleSelect(transaction.id)}
                        />
                      </td>
                      <td className="p-3 font-medium">{transaction.date}</td>
                      <td className="p-3">{transaction.type}</td>
                      <td className="p-3">{transaction.pair}</td>
                      <td className="p-3">{transaction.amount}</td>
                      <td className="p-3">{transaction.fee}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        
      </div>
      
    </div>
  )
}
