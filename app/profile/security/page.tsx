import ProfileTabs from "@/components/profile-tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SecurityPage() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 max-w-5xl mx-auto">
      <ProfileTabs />

      <h2 className="text-lg font-medium mb-4 sm:mb-6">Change Password</h2>

      <div className="grid gap-4 sm:gap-6 max-w-xl">
        <div>
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" className="mt-1 bg-[#f8f0ff]" defaultValue="**********" />
        </div>

        <div>
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" className="mt-1 bg-[#f8f0ff]" defaultValue="**********" />
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" className="mt-1 bg-[#f8f0ff]" defaultValue="**********" />
        </div>
      </div>

      <div className="flex justify-end mt-6 sm:mt-8">
        <Button className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800">Save</Button>
      </div>
    </div>
  )
}
