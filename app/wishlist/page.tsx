// import { Button } from "@/components/ui/button"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { ListFilter, Check, Trash, ArrowLeft } from "lucide-react"

// export default function WishlistPage() {
//   const cryptoAssets = [
//     {
//       id: 1,
//       asset: "Bitcoin (BTC)",
//       price: "$68,420.50",
//       change: "+2.34%",
//       marketCap: "$1.34T",
//       volume: "$32.5B",
//       isPositive: true,
//     },
//     {
//       id: 2,
//       asset: "Ethereum (ETH)",
//       price: "$3,720.25",
//       change: "-1.12%",
//       marketCap: "$446.7B",
//       volume: "$18.2B",
//       isPositive: false,
//     },
//     {
//       id: 3,
//       asset: "Solana (SOL)",
//       price: "$172.90",
//       change: "+5.67%",
//       marketCap: "$76.8B",
//       volume: "$3.4B",
//       isPositive: true,
//     },
//     {
//       id: 4,
//       asset: "XRP (XRP)",
//       price: "$0.52",
//       change: "+0.78%",
//       marketCap: "$28.3B",
//       volume: "$1.2B",
//       isPositive: true,
//     },
//     {
//       id: 5,
//       asset: "Cardano (ADA)",
//       price: "$0.45",
//       change: "-0.92%",
//       marketCap: "$15.9B",
//       volume: "$0.8B",
//       isPositive: false,
//     },
//   ]

//   return (
//     <div className=" rounded-lg p-4 sm:p-6 max-w-5xl mx-auto bg-white">
//       <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 mt-4 border-b ">
//               <div className="flex items-center gap-2 ">
//                 <Button variant="ghost" size="icon" className="text-gray-500">
//                   <ArrowLeft className="h-5 w-5" />
//                 </Button>
//                 <h1 className="text-lg font-semibold ml-4">Wishlist</h1>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="py-2 px-4 pr-10 bg-white rounded-full text-sm w-[200px] focus:outline-none"
//                   />
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     {/* search icon */}
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path
//                         d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <Button variant="ghost" size="icon" className="text-gray-500 relative">
//                     {/* bell icon */}
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path
//                         d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                       1
//                     </span>
//                   </Button>
//                 </div>
//                 <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
//                   <img src="/photo-frame.png?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
//                 </div>
//               </div>
//             </header>
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6 mt-14">
//         <h2 className="text-lg font-medium">Watchlist Table</h2>
//         <Button variant="outline" className="bg-purple-700 text-white hover:bg-purple-800 w-full sm:w-auto">
//           <ListFilter className="w-4 h-4 mr-2" />
//           Status
//         </Button>
//       </div>

//       <div className="overflow-x-auto -mx-4 sm:mx-0">
//         <div className="inline-block min-w-full align-middle px-4 sm:px-0">
//           <Table>
//             <TableHeader className="bg-gray-100">
//               <TableRow>
//                 <TableHead className="w-12">
//                   <input type="checkbox" className="rounded" />
//                 </TableHead>
//                 <TableHead>Asset</TableHead>
//                 <TableHead>Price (USD)</TableHead>
//                 <TableHead>24h Change</TableHead>
//                 <TableHead>Market Cap</TableHead>
//                 <TableHead>24h Volume</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {cryptoAssets.map((asset) => (
//                 <TableRow key={asset.id}>
//                   <TableCell>
//                     <input type="checkbox" className="rounded" />
//                   </TableCell>
//                   <TableCell className="whitespace-nowrap">{asset.asset}</TableCell>
//                   <TableCell>{asset.price}</TableCell>
//                   <TableCell className={asset.isPositive ? "text-green-500" : "text-red-500"}>
//                     {asset.isPositive ? "▲" : "▼"} {asset.change}
//                   </TableCell>
//                   <TableCell>{asset.marketCap}</TableCell>
//                   <TableCell>{asset.volume}</TableCell>
//                   <TableCell>
//                     <div className="flex gap-2">
//                       <button className="p-1 bg-blue-100 text-blue-700 rounded">
//                         <Check className="w-4 h-4" />
//                       </button>
//                       <button className="p-1 bg-red-100 text-red-700 rounded">
//                         <Trash className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { ArrowLeft, Bell, ChevronDown, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/sidebar"


export default function Wishlist() {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])

  const assets = [
    {
      id: "btc",
      name: "Bitcoin (BTC)",
      price: "$68,420.50",
      change: "+3.34%",
      changeType: "positive",
      marketCap: "$1.34T",
      volume: "$32.5B",
    },
    {
      id: "eth",
      name: "Ethereum (ETH)",
      price: "$3,720.25",
      change: "-1.12%",
      changeType: "negative",
      marketCap: "$446.7B",
      volume: "$18.2B",
    },
    {
      id: "sol",
      name: "Solana (SOL)",
      price: "$172.90",
      change: "+5.67%",
      changeType: "positive",
      marketCap: "$76.8B",
      volume: "$3.4B",
    },
    {
      id: "xrp",
      name: "XRP (XRP)",
      price: "$0.52",
      change: "+0.78%",
      changeType: "positive",
      marketCap: "$28.3B",
      volume: "$1.2B",
    },
    {
      id: "ada",
      name: "Cardano (ADA)",
      price: "$0.45",
      change: "-0.92%",
      changeType: "negative",
      marketCap: "$15.9B",
      volume: "$0.8B",
    },
  ]

  const handleSelectAll = () => {
    if (selectedAssets.length === assets.length) {
      setSelectedAssets([])
    } else {
      setSelectedAssets(assets.map((asset) => asset.id))
    }
  }

  const handleSelect = (id: string) => {
    if (selectedAssets.includes(id)) {
      setSelectedAssets(selectedAssets.filter((assetId) => assetId !== id))
    } else {
      setSelectedAssets([...selectedAssets, id])
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
            <h1 className="text-lg font-semibold">Wishlist</h1>
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
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-500" />
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
              <h2 className="text-lg font-semibold">Watchlist Table</h2>
              <Button className="bg-purple-800 hover:bg-purple-900 text-white text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4">
                <span className="hidden sm:inline">Status</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left w-10">
                      <Checkbox
                        checked={selectedAssets.length === assets.length && assets.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="p-3 text-left font-medium text-gray-600">Asset</th>
                    <th className="p-3 text-left font-medium text-gray-600">Price (USD)</th>
                    <th className="p-3 text-left font-medium text-gray-600">24h Change</th>
                    <th className="p-3 text-left font-medium text-gray-600">Market Cap</th>
                    <th className="p-3 text-left font-medium text-gray-600">24h Volume</th>
                    <th className="p-3 text-left font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <Checkbox
                          checked={selectedAssets.includes(asset.id)}
                          onCheckedChange={() => handleSelect(asset.id)}
                        />
                      </td>
                      <td className="p-3 font-medium">{asset.name}</td>
                      <td className="p-3">{asset.price}</td>
                      <td className="p-3">
                        <span
                          className={`flex items-center ${asset.changeType === "positive" ? "text-green-500" : "text-red-500"}`}
                        >
                          {asset.changeType === "positive" ? (
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 5L12 19M12 5L19 12M12 5L5 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 19L12 5M12 19L19 12M12 19L5 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {asset.change}
                        </span>
                      </td>
                      <td className="p-3">{asset.marketCap}</td>
                      <td className="p-3">{asset.volume}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Checkbox defaultChecked />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
