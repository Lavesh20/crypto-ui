import ProfileTabs from "@/components/profile-tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Pencil } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 max-w-5xl mx-auto">
      <ProfileTabs />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
              <Image
                src="/photo-frame.png?height=128&width=128"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white">
              <Pencil className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="yourName">Your Name</Label>
              <Input id="yourName" className="mt-1 bg-[#f8f0ff]" defaultValue="Charlene Reed" />
            </div>
            <div>
              <Label htmlFor="userName">User Name</Label>
              <Input id="userName" className="mt-1 bg-[#f8f0ff]" defaultValue="Charlene Reed" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" className="mt-1 bg-[#f8f0ff]" defaultValue="charlenereed@gmail.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="mt-1 bg-[#f8f0ff]" defaultValue="**********" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Select defaultValue="1995-01-25">
                <SelectTrigger className="mt-1 bg-[#f8f0ff]">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1995-01-25">25 January 1995</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="address">Present Address</Label>
              <Input id="address" className="mt-1 bg-[#f8f0ff]" defaultValue="San Jose, California, USA" />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800">Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
