// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ChevronDown, ChevronRight, Plus, ArrowRight, ArrowDown, CreditCard, Bitcoin, Shield, Lock } from "lucide-react"
// import { Switch } from "@/components/ui/switch"

// export default function WalletPage() {
//   const recentTransactions = [
//     {
//       id: 1,
//       type: "received",
//       description: "Received from John",
//       date: "Mar 15, 2025",
//       amount: "+$850.00",
//       isPositive: true,
//     },
//     {
//       id: 2,
//       type: "subscription",
//       description: "Netflix Subscription",
//       date: "Mar 14, 2025",
//       amount: "-$15.99",
//       isPositive: false,
//     },
//   ]

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       {/* Balance Card */}
//       <Card className="bg-purple-900 text-white mb-6">
//         <CardContent className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <p className="text-sm text-purple-200 mb-1">Total Balance</p>
//               <h2 className="text-3xl font-bold">$24,562.00</h2>
//             </div>
//             <Button variant="outline" className="bg-transparent border-white text-white hover:bg-purple-800">
//               USD <ChevronDown className="ml-1 h-4 w-4" />
//             </Button>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <Button className="bg-white text-purple-900 hover:bg-gray-100 flex items-center gap-1">
//               <Plus className="h-4 w-4" />
//               Add Money
//             </Button>
//             <Button
//               variant="outline"
//               className="bg-transparent border-white text-white hover:bg-purple-800 flex items-center gap-1"
//             >
//               <ArrowRight className="h-4 w-4" />
//               Transfer
//             </Button>
//             <Button
//               variant="outline"
//               className="bg-transparent border-white text-white hover:bg-purple-800 flex items-center gap-1"
//             >
//               <ArrowDown className="h-4 w-4" />
//               Withdraw
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Recent Transactions */}
//       <Card className="mb-6 bg-[#f8f0ff]">
//         <CardContent className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-medium">Recent Transactions</h3>
//             <div className="flex gap-2">
//               <Button variant="outline" size="sm" className="text-xs">
//                 All Types <ChevronDown className="ml-1 h-3 w-3" />
//               </Button>
//               <Button variant="outline" size="sm" className="text-xs">
//                 This Month <ChevronDown className="ml-1 h-3 w-3" />
//               </Button>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {recentTransactions.map((transaction) => (
//               <div key={transaction.id} className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                       transaction.type === "received" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
//                     }`}
//                   >
//                     {transaction.type === "received" ? (
//                       <ArrowDown className="h-4 w-4" />
//                     ) : (
//                       <CreditCard className="h-4 w-4" />
//                     )}
//                   </div>
//                   <div>
//                     <p className="font-medium">{transaction.description}</p>
//                     <p className="text-sm text-gray-500">{transaction.date}</p>
//                   </div>
//                 </div>
//                 <span className={transaction.isPositive ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
//                   {transaction.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Cards and Wallets */}
//       <div className="grid md:grid-cols-2 gap-6 mb-6">
//         {/* Linked Cards */}
//         <Card className="bg-[#f8f0ff]">
//           <CardContent className="p-6">
//             <h3 className="font-medium mb-4">Linked Cards</h3>

//             <div className="mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-purple-900 rounded flex items-center justify-center text-white text-xs">
//                   VISA
//                 </div>
//                 <div>
//                   <p className="font-medium">Visa ending in 4242</p>
//                   <p className="text-sm text-gray-500">Expires 09/25</p>
//                 </div>
//               </div>
//               <Button variant="ghost" size="icon">
//                 <ChevronRight className="h-5 w-5" />
//               </Button>
//             </div>

//             <Button variant="outline" className="w-full flex items-center justify-center gap-1">
//               <Plus className="h-4 w-4" />
//               Add New Card
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Crypto Wallets */}
//         <Card className="bg-[#f8f0ff]">
//           <CardContent className="p-6">
//             <h3 className="font-medium mb-4">Crypto Wallets</h3>

//             <div className="mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
//                   <Bitcoin className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Bitcoin Wallet</p>
//                   <p className="text-sm text-gray-500">0.0234 BTC</p>
//                 </div>
//               </div>
//               <Button variant="ghost" size="icon">
//                 <ChevronRight className="h-5 w-5" />
//               </Button>
//             </div>

//             <Button variant="outline" className="w-full flex items-center justify-center gap-1">
//               <Plus className="h-4 w-4" />
//               Add New Wallet
//             </Button>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Security Settings */}
//       <Card className="bg-[#f8f0ff]">
//         <CardContent className="p-6">
//           <h3 className="font-medium mb-4">Security Settings</h3>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
//                   <Shield className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Two-Factor Authentication</p>
//                   <p className="text-sm text-gray-500">Secure your account with 2FA</p>
//                 </div>
//               </div>
//               <Switch />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
//                   <Lock className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Change PIN</p>
//                   <p className="text-sm text-gray-500">Update your security PIN</p>
//                 </div>
//               </div>
//               <Button variant="outline" size="sm">
//                 Change
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



import { WalletDashboard } from "@/components/wallet-dashboard"

export default function WalletPage() {
  return (
    <div className="flex min-h-screen">
      
      <main className="flex-1 pb-20 md:pb-0">
        <WalletDashboard />
      </main>
    </div>
  )
}