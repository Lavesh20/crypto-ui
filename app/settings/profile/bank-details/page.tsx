import ProfileTabs from "@/components/profile-tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash, Plus } from "lucide-react"

export default function BankDetailsPage() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 max-w-5xl mx-auto">
      <ProfileTabs />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-lg font-medium">Bank Name</h2>
        <div className="flex gap-2 items-center">
          <button className="p-2 text-purple-700">
            <Pencil className="w-5 h-5" />
          </button>
          <button className="p-2 text-red-500">
            <Trash className="w-5 h-5" />
          </button>
          <Button className="bg-white text-purple-700 border border-purple-700 hover:bg-purple-50 flex items-center gap-1 text-sm sm:text-base">
            <Plus className="w-4 h-4" />
            <span className="hidden xs:inline">Add Bank Details</span>
            <span className="xs:hidden">Add</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Label htmlFor="bankName">Bank Name</Label>
          <Input id="bankName" className="mt-1 bg-[#f8f0ff]" defaultValue="HDFC Bank" />
        </div>
        <div>
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input id="accountNumber" className="mt-1 bg-[#f8f0ff]" defaultValue="**** **** **** 5678" />
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <Label htmlFor="ifscCode">IFSC/SWIFT Code</Label>
        <Input id="ifscCode" className="mt-1 bg-[#f8f0ff]" defaultValue="HDFC0001234" />
      </div>

      <div className="flex justify-end mt-6 sm:mt-8">
        <Button className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800">Save</Button>
      </div>
    </div>
  )
}
