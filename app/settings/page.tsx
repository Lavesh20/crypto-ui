import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function SettingsPage() {
  const settingsOptions = [
    {
      title: "Profile Management",
      description: "Manage your personal information and account details",
      href: "/settings/profile",
    },
    {
      title: "Security",
      description: "Update your password and security settings",
      href: "/settings/profile/security",
    },
    {
      title: "Bank Details",
      description: "Manage your linked bank accounts",
      href: "/settings/profile/bank-details",
    },
    {
      title: "Notifications",
      description: "Configure your notification preferences",
      href: "/settings/notifications",
    },
    {
      title: "Privacy",
      description: "Manage your privacy settings",
      href: "/settings/privacy",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-purple-100">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid gap-4">
        {settingsOptions.map((option, index) => (
          <Link key={index} href={option.href}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h2 className="font-medium">{option.title}</h2>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
