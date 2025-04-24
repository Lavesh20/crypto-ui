// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { cn } from "@/lib/utils"
// import { Maximize2, RefreshCw, Trash2 } from "lucide-react"

// import Image from "next/image"
// export default function FuturesTradingPage() {
//   const [activeTimeframe, setActiveTimeframe] = useState("15m")
//   const [activeSide, setActiveSide] = useState("buy")
//   const [activePercentage, setActivePercentage] = useState(0)

//   const timeframes = [
//     { value: "1m", label: "1m" },
//     { value: "5m", label: "5m" },
//     { value: "15m", label: "15m" },
//     { value: "1h", label: "1h" },
//     { value: "4h", label: "4h" },
//     { value: "1d", label: "1d" },
//   ]

//   const percentages = [25, 50, 75, 100]

//   const orderBook = [
//     { price: "48,235.00", amount: "0.4521", total: "21,805.23", type: "sell" },
//     { price: "48,234.50", amount: "0.2314", total: "11,502.37", type: "sell" },
//     { price: "48,234.00", amount: "0.6837", total: "32,953.46", type: "buy" },
//     { price: "48,233.90", amount: "0.8645", total: "41,144.91", type: "buy" },
//     { price: "48,233.00", amount: "0.8645", total: "41,144.91", type: "buy" },
//   ]

//   const recentTrades = [
//     { price: "48,234.00", amount: "0.4521", total: "21,805.23", time: "12:45:23" },
//     { price: "48,234.50", amount: "0.2314", total: "11,502.37", time: "12:45:21" },
//     { price: "48,234.00", amount: "0.6837", total: "32,953.46", time: "12:45:19" },
//     { price: "48,233.90", amount: "0.8645", total: "41,144.91", time: "12:45:17" },
//   ]

//   const positions = [
//     {
//       id: 1,
//       symbol: "Bitcoin (BTC)",
//       size: "$68,420.50",
//       entryPrice: "+2.34%",
//       markPrice: "$1.34T",
//       liqPrice: "$32.5B",
//       margin: "$32.5B",
//       pnl: "$32.5B",
//       isPositive: true,
//     },
//     {
//       id: 2,
//       symbol: "Ethereum (ETH)",
//       size: "$3,720.25",
//       entryPrice: "-1.12%",
//       markPrice: "$446.7B",
//       liqPrice: "$18.2B",
//       margin: "$18.2B",
//       pnl: "$18.2B",
//       isPositive: false,
//     },
//     {
//       id: 3,
//       symbol: "Solana (SOL)",
//       size: "$172.90",
//       entryPrice: "+5.67%",
//       markPrice: "$76.8B",
//       liqPrice: "$3.4B",
//       margin: "$3.4B",
//       pnl: "$3.4B",
//       isPositive: true,
//     },
//     {
//       id: 4,
//       symbol: "XRP (XRP)",
//       size: "$0.52",
//       entryPrice: "+0.78%",
//       markPrice: "$28.3B",
//       liqPrice: "$1.2B",
//       margin: "$1.2B",
//       pnl: "$1.2B",
//       isPositive: true,
//     },
//     {
//       id: 5,
//       symbol: "Cardano (ADA)",
//       size: "$0.45",
//       entryPrice: "-0.92%",
//       markPrice: "$15.9B",
//       liqPrice: "$0.8B",
//       margin: "$0.8B",
//       pnl: "$0.8B",
//       isPositive: false,
//     },
//   ]

//   return (
//     <div className="p-4 max-w-full">
//       <div className="grid grid-cols-1 gap-4">
//         {/* Trading Chart Section */}
//         <div className="bg-white rounded-lg overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-0">
//             {/* Chart Area */}
//             <div className="p-4 border-b lg:border-b-0 lg:border-r">
//               {/* Trading Pair and Price */}
//               <div className="flex flex-wrap items-center gap-3 mb-4">
//                 <h2 className="text-lg font-bold">BTC/USDT</h2>
//                 <span className="text-lg font-bold">$48,234.50</span>
//                 <span className="text-green-500 text-sm">+2.45%</span>

//                 <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
//                   <div>
//                     <span className="block">24h High:</span>
//                     <span className="font-medium text-black">$48,950</span>
//                   </div>
//                   <div>
//                     <span className="block">24h Low:</span>
//                     <span className="font-medium text-black">$47,120</span>
//                   </div>
//                   <div>
//                     <span className="block">24h Volume:</span>
//                     <span className="font-medium text-black">$1.2B</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeframe Selector */}
//               <div className="flex mb-4 overflow-x-auto">
//                 {timeframes.map((timeframe) => (
//                   <button
//                     key={timeframe.value}
//                     className={cn(
//                       "px-3 py-1 text-sm rounded-md mr-1",
//                       activeTimeframe === timeframe.value
//                         ? "bg-purple-700 text-white"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                     )}
//                     onClick={() => setActiveTimeframe(timeframe.value)}
//                   >
//                     {timeframe.label}
//                   </button>
//                 ))}

//                 <div className="ml-auto flex items-center gap-2">
//                   <button className="p-1 text-gray-500 hover:text-gray-700">
//                     <RefreshCw className="w-4 h-4" />
//                   </button>
//                   <button className="p-1 text-gray-500 hover:text-gray-700">
//                     <Maximize2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Chart Placeholder */}
//               <div className="h-[400px] bg-white border rounded-md relative">
//   <Image
//     src="chart.png" // Replace with your actual chart image path
//     alt="Bitcoin Trading Chart"
//     fill
//     priority
//     className="rounded-md object-cover"
//     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//   />
// </div>
//             </div>

//             {/* Trading Form */}
//             <div className="p-4">
//               {/* Buy/Sell Tabs */}
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 <button
//                   className={cn(
//                     "py-2 rounded-md font-medium",
//                     activeSide === "buy" ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                   )}
//                   onClick={() => setActiveSide("buy")}
//                 >
//                   Buy
//                 </button>
//                 <button
//                   className={cn(
//                     "py-2 rounded-md font-medium",
//                     activeSide === "sell"
//                       ? "bg-purple-100 text-purple-700"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                   )}
//                   onClick={() => setActiveSide("sell")}
//                 >
//                   Sell
//                 </button>
//               </div>

//               {/* Price Input */}
//               <div className="mb-4">
//                 <label className="block text-sm text-gray-500 mb-1">Price</label>
//                 <div className="relative">
//                   <Input className="pr-16 bg-[#f8f0ff]" defaultValue="48234.5" />
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">USDT</div>
//                 </div>
//               </div>

//               {/* Amount Input */}
//               <div className="mb-4">
//                 <label className="block text-sm text-gray-500 mb-1">Amount</label>
//                 <div className="relative">
//                   <Input className="pr-16 bg-[#f8f0ff]" defaultValue="0.00" />
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">BTC</div>
//                 </div>
//               </div>

//               {/* Percentage Selector */}
//               <div className="grid grid-cols-4 gap-2 mb-6">
//                 {percentages.map((percentage) => (
//                   <button
//                     key={percentage}
//                     className={cn(
//                       "py-1 text-sm rounded-md",
//                       activePercentage === percentage
//                         ? "bg-purple-100 text-purple-700"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                     )}
//                     onClick={() => setActivePercentage(percentage)}
//                   >
//                     {percentage}%
//                   </button>
//                 ))}
//               </div>

//               {/* Buy/Sell Button */}
//               <Button
//                 className={cn(
//                   "w-full py-6 text-white font-medium",
//                   activeSide === "buy"
//                     ? "bg-purple-700 hover:bg-purple-800"
//                     : "bg-purple-100 text-purple-700 hover:bg-purple-200",
//                 )}
//               >
//                 {activeSide === "buy" ? "Buy BTC" : "Sell BTC"}
//               </Button>

//               {/* Leverage Slider */}
//               <div className="mt-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm text-gray-500">Leverage: 10x</span>
//                   <span className="text-sm text-gray-500">100x</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full mb-4">
//                   <div className="h-full w-[10%] bg-purple-700 rounded-full"></div>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                   <div>
//                     <div className="text-gray-500">Next funding in:</div>
//                     <div className="font-medium text-yellow-500">00:24:16</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-gray-500">Est. rate:</div>
//                     <div className="font-medium text-green-500">+0.0124%</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Book and Recent Trades */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Order Book */}
//           <div className="bg-white rounded-lg p-4">
//             <h3 className="font-medium mb-4">Order Book</h3>
//             <div className="grid grid-cols-3 text-sm text-gray-500 mb-2">
//               <div>Price</div>
//               <div>Amount</div>
//               <div>Total</div>
//             </div>
//             <div className="space-y-1">
//               {orderBook.map((order, index) => (
//                 <div key={index} className="grid grid-cols-3 text-sm">
//                   <div className={order.type === "sell" ? "text-red-500" : "text-green-500"}>{order.price}</div>
//                   <div>{order.amount}</div>
//                   <div>{order.total}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Trades */}
//           <div className="bg-white rounded-lg p-4">
//             <h3 className="font-medium mb-4">Recent Trades</h3>
//             <div className="grid grid-cols-4 text-sm text-gray-500 mb-2">
//               <div>Price</div>
//               <div>Amount</div>
//               <div>Total</div>
//               <div>Time</div>
//             </div>
//             <div className="space-y-1">
//               {recentTrades.map((trade, index) => (
//                 <div key={index} className="grid grid-cols-4 text-sm">
//                   <div className={index % 2 === 0 ? "text-green-500" : "text-red-500"}>{trade.price}</div>
//                   <div>{trade.amount}</div>
//                   <div>{trade.total}</div>
//                   <div>{trade.time}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Positions */}
//         <div className="bg-white rounded-lg p-4">
//           <div className="flex items-center mb-4">
//             <h3 className="font-medium">Positions</h3>
//             <span className="ml-2 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">(2)</span>
//           </div>

//           <div className="overflow-x-auto -mx-4 sm:mx-0">
//             <div className="inline-block min-w-full align-middle px-4 sm:px-0">
//               <Table>
//                 <TableHeader className="bg-gray-100">
//                   <TableRow>
//                     <TableHead className="w-12">
//                       <input type="checkbox" className="rounded" />
//                     </TableHead>
//                     <TableHead>Symbol</TableHead>
//                     <TableHead>Size</TableHead>
//                     <TableHead>Entry Price</TableHead>
//                     <TableHead>Mark Price</TableHead>
//                     <TableHead>Liq.Price</TableHead>
//                     <TableHead>Margin</TableHead>
//                     <TableHead>PNL(ROE%)</TableHead>
//                     <TableHead className="w-20">Action</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {positions.map((position) => (
//                     <TableRow key={position.id}>
//                       <TableCell>
//                         <input type="checkbox" className="rounded" />
//                       </TableCell>
//                       <TableCell className="whitespace-nowrap">{position.symbol}</TableCell>
//                       <TableCell>{position.size}</TableCell>
//                       <TableCell className={position.isPositive ? "text-green-500" : "text-red-500"}>
//                         {position.entryPrice}
//                       </TableCell>
//                       <TableCell>{position.markPrice}</TableCell>
//                       <TableCell>{position.liqPrice}</TableCell>
//                       <TableCell>{position.margin}</TableCell>
//                       <TableCell>{position.pnl}</TableCell>
//                       <TableCell>
//                         <div className="flex gap-2">
//                           <button className="p-1 bg-blue-100 text-blue-700 rounded">
//                             <input type="checkbox" className="rounded" checked readOnly />
//                           </button>
//                           <button className="p-1 bg-red-100 text-red-700 rounded">
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { cn } from "@/lib/utils"
// import { Maximize2, RefreshCw, Trash2, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react"

// import Image from "next/image"
// export default function FuturesTradingPage() {
//   const [activeTimeframe, setActiveTimeframe] = useState("15m")
//   const [activeSide, setActiveSide] = useState("buy")
//   const [activePercentage, setActivePercentage] = useState(0)
//   const [expandedOrderBook, setExpandedOrderBook] = useState(true)
//   const [expandedTrades, setExpandedTrades] = useState(true)
//   const [expandedPositions, setExpandedPositions] = useState(true)

//   const timeframes = [
//     { value: "1m", label: "1m" },
//     { value: "5m", label: "5m" },
//     { value: "15m", label: "15m" },
//     { value: "1h", label: "1h" },
//     { value: "4h", label: "4h" },
//     { value: "1d", label: "1d" },
//   ]

//   const percentages = [25, 50, 75, 100]

//   const orderBook = [
//     { price: "48,235.00", amount: "0.4521", total: "21,805.23", type: "sell" },
//     { price: "48,234.50", amount: "0.2314", total: "11,502.37", type: "sell" },
//     { price: "48,234.00", amount: "0.6837", total: "32,953.46", type: "buy" },
//     { price: "48,233.90", amount: "0.8645", total: "41,144.91", type: "buy" },
//     { price: "48,233.00", amount: "0.8645", total: "41,144.91", type: "buy" },
//   ]

//   const recentTrades = [
//     { price: "48,234.00", amount: "0.4521", total: "21,805.23", time: "12:45:23" },
//     { price: "48,234.50", amount: "0.2314", total: "11,502.37", time: "12:45:21" },
//     { price: "48,234.00", amount: "0.6837", total: "32,953.46", time: "12:45:19" },
//     { price: "48,233.90", amount: "0.8645", total: "41,144.91", time: "12:45:17" },
//   ]

//   const positions = [
//     {
//       id: 1,
//       symbol: "Bitcoin (BTC)",
//       size: "$68,420.50",
//       entryPrice: "+2.34%",
//       markPrice: "$1.34T",
//       liqPrice: "$32.5B",
//       margin: "$32.5B",
//       pnl: "$32.5B",
//       isPositive: true,
//     },
//     {
//       id: 2,
//       symbol: "Ethereum (ETH)",
//       size: "$3,720.25",
//       entryPrice: "-1.12%",
//       markPrice: "$446.7B",
//       liqPrice: "$18.2B",
//       margin: "$18.2B",
//       pnl: "$18.2B",
//       isPositive: false,
//     },
//     {
//       id: 3,
//       symbol: "Solana (SOL)",
//       size: "$172.90",
//       entryPrice: "+5.67%",
//       markPrice: "$76.8B",
//       liqPrice: "$3.4B",
//       margin: "$3.4B",
//       pnl: "$3.4B",
//       isPositive: true,
//     },
//     {
//       id: 4,
//       symbol: "XRP (XRP)",
//       size: "$0.52",
//       entryPrice: "+0.78%",
//       markPrice: "$28.3B",
//       liqPrice: "$1.2B",
//       margin: "$1.2B",
//       pnl: "$1.2B",
//       isPositive: true,
//     },
//     {
//       id: 5,
//       symbol: "Cardano (ADA)",
//       size: "$0.45",
//       entryPrice: "-0.92%",
//       markPrice: "$15.9B",
//       liqPrice: "$0.8B",
//       margin: "$0.8B",
//       pnl: "$0.8B",
//       isPositive: false,
//     },
//   ]

//   const toggleSection = (section : any) => {
//     switch(section) {
//       case 'orderBook':
//         setExpandedOrderBook(!expandedOrderBook);
//         break;
//       case 'trades':
//         setExpandedTrades(!expandedTrades);
//         break;
//       case 'positions':
//         setExpandedPositions(!expandedPositions);
//         break;
//     }
//   }

//   return (
//     <div className="p-2 sm:p-4 max-w-full ml-7 bg-purple-100">
//       <header className=" top-0 z-10 flex items-center justify-between p-2 sm:p-4 bg-white border-b ">
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon" className="text-gray-500">
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <h1 className="text-lg font-semibold">Future Trading Page</h1>
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
//             <img src="/photo-frame.png?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
//           </div>
//         </div>
//       </header>
//       <div className="grid grid-cols-1 gap-4 mt-6">
//         {/* Trading Chart Section */}
//         <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-0">
//             {/* Chart Area */}
//             <div className="p-2 sm:p-4 border-b lg:border-b-0 lg:border-r">
//               {/* Trading Pair and Price */}
//               <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-4">
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-lg font-bold">BTC/USDT</h2>
//                   <span className="text-lg font-bold">$48,234.50</span>
//                   <span className="text-green-500 text-sm">+2.45%</span>
//                 </div>

//                 <div className="w-full sm:w-auto sm:ml-auto flex flex-wrap justify-between sm:justify-end gap-3 mt-2 sm:mt-0 text-xs sm:text-sm text-gray-500">
//                   <div>
//                     <span className="block">24h High:</span>
//                     <span className="font-medium text-black">$48,950</span>
//                   </div>
//                   <div>
//                     <span className="block">24h Low:</span>
//                     <span className="font-medium text-black">$47,120</span>
//                   </div>
//                   <div>
//                     <span className="block">24h Volume:</span>
//                     <span className="font-medium text-black">$1.2B</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeframe Selector */}
//               <div className="flex mb-4 overflow-x-auto scrollbar-hide">
//                 {timeframes.map((timeframe) => (
//                   <button
//                     key={timeframe.value}
//                     className={cn(
//                       "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md mr-1",
//                       activeTimeframe === timeframe.value
//                         ? "bg-purple-700 text-white"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                     )}
//                     onClick={() => setActiveTimeframe(timeframe.value)}
//                   >
//                     {timeframe.label}
//                   </button>
//                 ))}

//                 <div className="ml-auto flex items-center gap-2">
//                   <button className="p-1 text-gray-500 hover:text-gray-700">
//                     <RefreshCw className="w-4 h-4" />
//                   </button>
//                   <button className="p-1 text-gray-500 hover:text-gray-700">
//                     <Maximize2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Chart Placeholder */}
//               <div className="h-[250px] sm:h-[300px] md:h-[400px] bg-white border rounded-md relative">
//                 <Image
//                   src="chart.png" // Replace with your actual chart image path
//                   alt="Bitcoin Trading Chart"
//                   fill
//                   priority
//                   className="rounded-md object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>
//             </div>

//             {/* Trading Form */}
//             <div className="p-3 sm:p-4">
//               {/* Buy/Sell Tabs */}
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 <button
//                   className={cn(
//                     "py-2 rounded-md font-medium text-sm",
//                     activeSide === "buy" ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                   )}
//                   onClick={() => setActiveSide("buy")}
//                 >
//                   Buy
//                 </button>
//                 <button
//                   className={cn(
//                     "py-2 rounded-md font-medium text-sm",
//                     activeSide === "sell"
//                       ? "bg-purple-100 text-purple-700"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                   )}
//                   onClick={() => setActiveSide("sell")}
//                 >
//                   Sell
//                 </button>
//               </div>

//               {/* Price Input */}
//               <div className="mb-3">
//                 <label className="block text-xs sm:text-sm text-gray-500 mb-1">Price</label>
//                 <div className="relative">
//                   <Input className="pr-16 bg-[#f8f0ff] text-sm h-9 sm:h-10" defaultValue="48234.5" />
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm">USDT</div>
//                 </div>
//               </div>

//               {/* Amount Input */}
//               <div className="mb-3">
//                 <label className="block text-xs sm:text-sm text-gray-500 mb-1">Amount</label>
//                 <div className="relative">
//                   <Input className="pr-16 bg-[#f8f0ff] text-sm h-9 sm:h-10" defaultValue="0.00" />
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm">BTC</div>
//                 </div>
//               </div>

//               {/* Percentage Selector */}
//               <div className="grid grid-cols-4 gap-2 mb-4 sm:mb-6">
//                 {percentages.map((percentage) => (
//                   <button
//                     key={percentage}
//                     className={cn(
//                       "py-1 text-xs sm:text-sm rounded-md",
//                       activePercentage === percentage
//                         ? "bg-purple-100 text-purple-700"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200",
//                     )}
//                     onClick={() => setActivePercentage(percentage)}
//                   >
//                     {percentage}%
//                   </button>
//                 ))}
//               </div>

//               {/* Buy/Sell Button */}
//               <Button
//                 className={cn(
//                   "w-full py-4 sm:py-6 text-white font-medium text-sm sm:text-base",
//                   activeSide === "buy"
//                     ? "bg-purple-700 hover:bg-purple-800"
//                     : "bg-purple-100 text-purple-700 hover:bg-purple-200",
//                 )}
//               >
//                 {activeSide === "buy" ? "Buy BTC" : "Sell BTC"}
//               </Button>

//               {/* Leverage Slider */}
//               <div className="mt-4 sm:mt-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-xs sm:text-sm text-gray-500">Leverage: 10x</span>
//                   <span className="text-xs sm:text-sm text-gray-500">100x</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full mb-4">
//                   <div className="h-full w-[10%] bg-purple-700 rounded-full"></div>
//                 </div>

//                 <div className="flex justify-between text-xs sm:text-sm">
//                   <div>
//                     <div className="text-gray-500">Next funding in:</div>
//                     <div className="font-medium text-yellow-500">00:24:16</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-gray-500">Est. rate:</div>
//                     <div className="font-medium text-green-500">+0.0124%</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Book and Recent Trades */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Order Book */}
//           <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
//             <div className="flex justify-between items-center mb-3 sm:mb-4">
//               <h3 className="font-medium text-sm sm:text-base">Order Book</h3>
//               <button 
//                 onClick={() => toggleSection('orderBook')}
//                 className="text-gray-500 hover:text-gray-700 md:hidden"
//               >
//                 {expandedOrderBook ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </button>
//             </div>
            
//             {(expandedOrderBook || window.innerWidth >= 768) && (
//               <>
//                 <div className="grid grid-cols-3 text-xs sm:text-sm text-gray-500 mb-2">
//                   <div>Price</div>
//                   <div>Amount</div>
//                   <div>Total</div>
//                 </div>
//                 <div className="space-y-1">
//                   {orderBook.map((order, index) => (
//                     <div key={index} className="grid grid-cols-3 text-xs sm:text-sm">
//                       <div className={order.type === "sell" ? "text-red-500" : "text-green-500"}>{order.price}</div>
//                       <div>{order.amount}</div>
//                       <div>{order.total}</div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Recent Trades */}
//           <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
//             <div className="flex justify-between items-center mb-3 sm:mb-4">
//               <h3 className="font-medium text-sm sm:text-base">Recent Trades</h3>
//               <button 
//                 onClick={() => toggleSection('trades')} 
//                 className="text-gray-500 hover:text-gray-700 md:hidden"
//               >
//                 {expandedTrades ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </button>
//             </div>
            
//             {(expandedTrades || window.innerWidth >= 768) && (
//               <>
//                 <div className="grid grid-cols-4 text-xs sm:text-sm text-gray-500 mb-2">
//                   <div>Price</div>
//                   <div>Amount</div>
//                   <div>Total</div>
//                   <div>Time</div>
//                 </div>
//                 <div className="space-y-1">
//                   {recentTrades.map((trade, index) => (
//                     <div key={index} className="grid grid-cols-4 text-xs sm:text-sm">
//                       <div className={index % 2 === 0 ? "text-green-500" : "text-red-500"}>{trade.price}</div>
//                       <div>{trade.amount}</div>
//                       <div>{trade.total}</div>
//                       <div>{trade.time}</div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Positions */}
//         <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
//           <div className="flex justify-between items-center mb-3 sm:mb-4">
//             <div className="flex items-center">
//               <h3 className="font-medium text-sm sm:text-base">Positions</h3>
//               <span className="ml-2 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">(2)</span>
//             </div>
//             <button 
//               onClick={() => toggleSection('positions')}
//               className="text-gray-500 hover:text-gray-700 md:hidden"
//             >
//               {expandedPositions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//             </button>
//           </div>

//           {(expandedPositions || window.innerWidth >= 768) && (
//             <div className="overflow-x-auto -mx-3 sm:-mx-4">
//               <div className="inline-block min-w-full align-middle px-3 sm:px-4">
//                 <div className="overflow-hidden">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th scope="col" className="py-2 pl-2 pr-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           <input type="checkbox" className="rounded h-3 w-3" />
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Symbol
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Size
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Entry
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Mark
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Liq.
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Margin
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           PNL
//                         </th>
//                         <th scope="col" className="py-2 px-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {positions.map((position) => (
//                         <tr key={position.id}>
//                           <td className="py-2 pl-2 pr-1 whitespace-nowrap text-xs">
//                             <input type="checkbox" className="rounded h-3 w-3" />
//                           </td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs font-medium">{position.symbol}</td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs">{position.size}</td>
//                           <td className={`py-2 px-1 whitespace-nowrap text-xs ${position.isPositive ? "text-green-500" : "text-red-500"}`}>
//                             {position.entryPrice}
//                           </td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs">{position.markPrice}</td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs">{position.liqPrice}</td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs">{position.margin}</td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs">{position.pnl}</td>
//                           <td className="py-2 px-1 whitespace-nowrap text-xs text-right">
//                             <div className="flex gap-1 justify-end">
//                               <button className="p-1 bg-blue-100 text-blue-700 rounded">
//                                 <input type="checkbox" className="rounded h-3 w-3" checked readOnly />
//                               </button>
//                               <button className="p-1 bg-red-100 text-red-700 rounded">
//                                 <Trash2 className="w-3 h-3" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Maximize2, RefreshCw, Trash2, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react"

import Image from "next/image"
export default function FuturesTradingPage() {
  const [activeTimeframe, setActiveTimeframe] = useState("15m")
  const [activeSide, setActiveSide] = useState("buy")
  const [activePercentage, setActivePercentage] = useState(0)
  const [expandedOrderBook, setExpandedOrderBook] = useState(true)
  const [expandedTrades, setExpandedTrades] = useState(true)
  const [expandedPositions, setExpandedPositions] = useState(true)

  const timeframes = [
    { value: "1m", label: "1m" },
    { value: "5m", label: "5m" },
    { value: "15m", label: "15m" },
    { value: "1h", label: "1h" },
    { value: "4h", label: "4h" },
    { value: "1d", label: "1d" },
  ]

  const percentages = [25, 50, 75, 100]

  const orderBook = [
    { price: "48,235.00", amount: "0.4521", total: "21,805.23", type: "sell" },
    { price: "48,234.50", amount: "0.2314", total: "11,502.37", type: "sell" },
    { price: "48,234.00", amount: "0.6837", total: "32,953.46", type: "buy" },
    { price: "48,233.90", amount: "0.8645", total: "41,144.91", type: "buy" },
    { price: "48,233.00", amount: "0.8645", total: "41,144.91", type: "buy" },
  ]

  const recentTrades = [
    { price: "48,234.00", amount: "0.4521", total: "21,805.23", time: "12:45:23" },
    { price: "48,234.50", amount: "0.2314", total: "11,502.37", time: "12:45:21" },
    { price: "48,234.00", amount: "0.6837", total: "32,953.46", time: "12:45:19" },
    { price: "48,233.90", amount: "0.8645", total: "41,144.91", time: "12:45:17" },
  ]

  const positions = [
    {
      id: 1,
      symbol: "Bitcoin (BTC)",
      size: "$68,420.50",
      entryPrice: "+2.34%",
      markPrice: "$1.34T",
      liqPrice: "$32.5B",
      margin: "$32.5B",
      pnl: "$32.5B",
      isPositive: true,
    },
    {
      id: 2,
      symbol: "Ethereum (ETH)",
      size: "$3,720.25",
      entryPrice: "-1.12%",
      markPrice: "$446.7B",
      liqPrice: "$18.2B",
      margin: "$18.2B",
      pnl: "$18.2B",
      isPositive: false,
    },
    {
      id: 3,
      symbol: "Solana (SOL)",
      size: "$172.90",
      entryPrice: "+5.67%",
      markPrice: "$76.8B",
      liqPrice: "$3.4B",
      margin: "$3.4B",
      pnl: "$3.4B",
      isPositive: true,
    },
    {
      id: 4,
      symbol: "XRP (XRP)",
      size: "$0.52",
      entryPrice: "+0.78%",
      markPrice: "$28.3B",
      liqPrice: "$1.2B",
      margin: "$1.2B",
      pnl: "$1.2B",
      isPositive: true,
    },
    {
      id: 5,
      symbol: "Cardano (ADA)",
      size: "$0.45",
      entryPrice: "-0.92%",
      markPrice: "$15.9B",
      liqPrice: "$0.8B",
      margin: "$0.8B",
      pnl: "$0.8B",
      isPositive: false,
    },
  ]

  const toggleSection = (section : any) => {
    switch(section) {
      case 'orderBook':
        setExpandedOrderBook(!expandedOrderBook);
        break;
      case 'trades':
        setExpandedTrades(!expandedTrades);
        break;
      case 'positions':
        setExpandedPositions(!expandedPositions);
        break;
    }
  }

  return (
    <div className="p-2 sm:p-4 max-w-full ml-7 bg-purple-100">
      <header className="sticky top-0 z-50 flex items-center justify-between p-2 sm:p-4 bg-white border-b shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Future Trading Page</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-4 pr-10 bg-white rounded-full text-sm w-[200px] focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {/* search icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-gray-500 relative">
              {/* bell icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                1
              </span>
            </Button>
          </div>
          <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
            <img src="/photo-frame.png?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {/* Trading Chart Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-0">
            {/* Chart Area */}
            <div className="p-2 sm:p-4 border-b lg:border-b-0 lg:border-r">
              {/* Trading Pair and Price */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold">BTC/USDT</h2>
                  <span className="text-lg font-bold">$48,234.50</span>
                  <span className="text-green-500 text-sm">+2.45%</span>
                </div>

                <div className="w-full sm:w-auto sm:ml-auto flex flex-wrap justify-between sm:justify-end gap-3 mt-2 sm:mt-0 text-xs sm:text-sm text-gray-500">
                  <div>
                    <span className="block">24h High:</span>
                    <span className="font-medium text-black">$48,950</span>
                  </div>
                  <div>
                    <span className="block">24h Low:</span>
                    <span className="font-medium text-black">$47,120</span>
                  </div>
                  <div>
                    <span className="block">24h Volume:</span>
                    <span className="font-medium text-black">$1.2B</span>
                  </div>
                </div>
              </div>

              {/* Timeframe Selector */}
              <div className="flex mb-4 overflow-x-auto scrollbar-hide">
                {timeframes.map((timeframe) => (
                  <button
                    key={timeframe.value}
                    className={cn(
                      "px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md mr-1",
                      activeTimeframe === timeframe.value
                        ? "bg-purple-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    )}
                    onClick={() => setActiveTimeframe(timeframe.value)}
                  >
                    {timeframe.label}
                  </button>
                ))}

                <div className="ml-auto flex items-center gap-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-[250px] sm:h-[300px] md:h-[400px] bg-white border rounded-md relative">
                <Image
                  src="chart.png" // Replace with your actual chart image path
                  alt="Bitcoin Trading Chart"
                  fill
                  priority
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Trading Form */}
            <div className="p-3 sm:p-4">
              {/* Buy/Sell Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  className={cn(
                    "py-2 rounded-md font-medium text-sm",
                    activeSide === "buy" ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  )}
                  onClick={() => setActiveSide("buy")}
                >
                  Buy
                </button>
                <button
                  className={cn(
                    "py-2 rounded-md font-medium text-sm",
                    activeSide === "sell"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  )}
                  onClick={() => setActiveSide("sell")}
                >
                  Sell
                </button>
              </div>

              {/* Price Input */}
              <div className="mb-3">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">Price</label>
                <div className="relative">
                  <Input className="pr-16 bg-[#f8f0ff] text-sm h-9 sm:h-10" defaultValue="48234.5" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm">USDT</div>
                </div>
              </div>

              {/* Amount Input */}
              <div className="mb-3">
                <label className="block text-xs sm:text-sm text-gray-500 mb-1">Amount</label>
                <div className="relative">
                  <Input className="pr-16 bg-[#f8f0ff] text-sm h-9 sm:h-10" defaultValue="0.00" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm">BTC</div>
                </div>
              </div>

              {/* Percentage Selector */}
              <div className="grid grid-cols-4 gap-2 mb-4 sm:mb-6">
                {percentages.map((percentage) => (
                  <button
                    key={percentage}
                    className={cn(
                      "py-1 text-xs sm:text-sm rounded-md",
                      activePercentage === percentage
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    )}
                    onClick={() => setActivePercentage(percentage)}
                  >
                    {percentage}%
                  </button>
                ))}
              </div>

              {/* Buy/Sell Button */}
              <Button
                className={cn(
                  "w-full py-4 sm:py-6 text-white font-medium text-sm sm:text-base",
                  activeSide === "buy"
                    ? "bg-purple-700 hover:bg-purple-800"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200",
                )}
              >
                {activeSide === "buy" ? "Buy BTC" : "Sell BTC"}
              </Button>

              {/* Leverage Slider */}
              <div className="mt-4 sm:mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-gray-500">Leverage: 10x</span>
                  <span className="text-xs sm:text-sm text-gray-500">100x</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div className="h-full w-[10%] bg-purple-700 rounded-full"></div>
                </div>

                <div className="flex justify-between text-xs sm:text-sm">
                  <div>
                    <div className="text-gray-500">Next funding in:</div>
                    <div className="font-medium text-yellow-500">00:24:16</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500">Est. rate:</div>
                    <div className="font-medium text-green-500">+0.0124%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Book and Recent Trades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Order Book */}
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="font-medium text-sm sm:text-base">Order Book</h3>
              <button 
                onClick={() => toggleSection('orderBook')}
                className="text-gray-500 hover:text-gray-700 md:hidden"
              >
                {expandedOrderBook ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            
            {(expandedOrderBook || window.innerWidth >= 768) && (
              <>
                <div className="grid grid-cols-3 text-xs sm:text-sm text-gray-500 mb-2">
                  <div>Price</div>
                  <div>Amount</div>
                  <div>Total</div>
                </div>
                <div className="space-y-1">
                  {orderBook.map((order, index) => (
                    <div key={index} className="grid grid-cols-3 text-xs sm:text-sm">
                      <div className={order.type === "sell" ? "text-red-500" : "text-green-500"}>{order.price}</div>
                      <div>{order.amount}</div>
                      <div>{order.total}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Recent Trades */}
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="font-medium text-sm sm:text-base">Recent Trades</h3>
              <button 
                onClick={() => toggleSection('trades')} 
                className="text-gray-500 hover:text-gray-700 md:hidden"
              >
                {expandedTrades ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            
            {(expandedTrades || window.innerWidth >= 768) && (
              <>
                <div className="grid grid-cols-4 text-xs sm:text-sm text-gray-500 mb-2">
                  <div>Price</div>
                  <div>Amount</div>
                  <div>Total</div>
                  <div>Time</div>
                </div>
                <div className="space-y-1">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="grid grid-cols-4 text-xs sm:text-sm">
                      <div className={index % 2 === 0 ? "text-green-500" : "text-red-500"}>{trade.price}</div>
                      <div>{trade.amount}</div>
                      <div>{trade.total}</div>
                      <div>{trade.time}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Positions */}
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <div className="flex items-center">
              <h3 className="font-medium text-sm sm:text-base">Positions</h3>
              <span className="ml-2 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">(2)</span>
            </div>
            <button 
              onClick={() => toggleSection('positions')}
              className="text-gray-500 hover:text-gray-700 md:hidden"
            >
              {expandedPositions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {(expandedPositions || window.innerWidth >= 768) && (
            <div className="overflow-x-auto -mx-3 sm:-mx-4">
              <div className="inline-block min-w-full align-middle px-3 sm:px-4">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="py-2 pl-2 pr-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input type="checkbox" className="rounded h-3 w-3" />
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Symbol
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Entry
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Mark
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Liq.
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Margin
                        </th>
                        <th scope="col" className="py-2 px-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PNL
                        </th>
                        <th scope="col" className="py-2 px-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {positions.map((position) => (
                        <tr key={position.id}>
                          <td className="py-2 pl-2 pr-1 whitespace-nowrap text-xs">
                            <input type="checkbox" className="rounded h-3 w-3" />
                          </td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs font-medium">{position.symbol}</td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs">{position.size}</td>
                          <td className={`py-2 px-1 whitespace-nowrap text-xs ${position.isPositive ? "text-green-500" : "text-red-500"}`}>
                            {position.entryPrice}
                          </td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs">{position.markPrice}</td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs">{position.liqPrice}</td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs">{position.margin}</td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs">{position.pnl}</td>
                          <td className="py-2 px-1 whitespace-nowrap text-xs text-right">
                            <div className="flex gap-1 justify-end">
                              <button className="p-1 bg-blue-100 text-blue-700 rounded">
                                <input type="checkbox" className="rounded h-3 w-3" checked readOnly />
                              </button>
                              <button className="p-1 bg-red-100 text-red-700 rounded">
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}