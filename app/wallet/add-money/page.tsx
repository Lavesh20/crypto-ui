// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { ArrowLeft, Building, CreditCard, Bitcoin, ChevronRight } from "lucide-react"
// import Link from "next/link"

// export default function AddMoneyPage() {
//   const quickAmounts = [
//     { value: "10", label: "$10" },
//     { value: "50", label: "$50" },
//     { value: "100", label: "$100" },
//     { value: "500", label: "$500" },
//   ]

//   const paymentMethods = [
//     {
//       id: "bank",
//       name: "Bank Transfer",
//       icon: <Building className="h-5 w-5 text-blue-500" />,
//       description: "Transfer from your bank account",
//     },
//     {
//       id: "upi",
//       name: "UPI",
//       icon: (
//         <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//           U
//         </div>
//       ),
//       description: "Pay using UPI",
//     },
//     {
//       id: "card",
//       name: "Credit/Debit Card",
//       icon: <CreditCard className="h-5 w-5 text-purple-500" />,
//       description: "Pay using credit or debit card",
//     },
//     {
//       id: "crypto",
//       name: "Crypto Wallet",
//       icon: <Bitcoin className="h-5 w-5 text-orange-500" />,
//       description: "Pay using cryptocurrency",
//     },
//   ]

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <div className="mb-6">
//         <Link href="/wallet" className="flex items-center text-purple-700 font-medium">
//           <ArrowLeft className="h-4 w-4 mr-1" />
//           Add Money
//         </Link>
//       </div>

//       {/* Current Balance */}
//       <Card className="bg-purple-900 text-white mb-6">
//         <CardContent className="p-6">
//           <p className="text-sm text-purple-200 mb-1">Current Balance</p>
//           <h2 className="text-3xl font-bold">$2,458.65</h2>
//         </CardContent>
//       </Card>

//       {/* Quick Select Amount */}
//       <div className="mb-6">
//         <h3 className="text-sm text-gray-500 mb-3">Quick Select Amount</h3>
//         <div className="grid grid-cols-2 gap-4">
//           {quickAmounts.map((amount) => (
//             <Button
//               key={amount.value}
//               variant="outline"
//               className="py-6 bg-[#f8f0ff] border-purple-100 text-gray-700 hover:bg-purple-100"
//             >
//               {amount.label}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Custom Amount */}
//       <div className="mb-6">
//         <h3 className="text-sm text-gray-500 mb-3">Custom Amount</h3>
//         <div className="relative">
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</div>
//           <Input className="pl-8 py-6 bg-[#f8f0ff]" placeholder="Enter amount" />
//         </div>
//       </div>

//       {/* Select Payment Method */}
//       <div className="mb-6">
//         <h3 className="text-sm text-gray-500 mb-3">Select Payment Method</h3>
//         <div className="space-y-4">
//           {paymentMethods.map((method) => (
//             <Button
//               key={method.id}
//               variant="outline"
//               className="w-full justify-between bg-[#f8f0ff] border-purple-100 hover:bg-purple-100"
//             >
//               <div className="flex items-center">
//                 <div className="mr-3">{method.icon}</div>
//                 <div className="text-left">
//                   <p className="font-medium">{method.name}</p>
//                 </div>
//               </div>
//               <ChevronRight className="h-5 w-5 text-gray-400" />
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Add Money Button */}
//       <Button className="w-full py-6 bg-purple-700 hover:bg-purple-800 text-white">Add Money</Button>
//     </div>
//   )
// }


import { AddMoney } from "@/components/add-money"


export default function AddMoneyPage() {
  return (
    <div className="flex min-h-screen">
      
      <main className="flex-1 pb-20 md:pb-0">
        <AddMoney />
      </main>
    </div>
  )
}
