import Link from "next/link"
import Image from "next/image"
import AuthLayout from "@/components/auth-layout"

export default function SuccessPage() {
  return (
    <AuthLayout>
      <div className="space-y-8 text-center">
        <h1 className="text-2xl font-bold">Yay!</h1>
        <p className="text-gray-600">
          You have successfully registered an account.
          <br />
          You can start trading now.
        </p>

        <div className="py-4 flex justify-center">
          <Image
            src="/garba.png?height=150&width=200"
            alt="Celebration"
            width={200}
            height={150}
            className="h-[150px] w-auto"
          />
        </div>

        <p className="text-gray-600 text-sm">To increase your trading limit, go to the next step.</p>

        <div className="pt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-0 space-y-3 sm:space-y-0">
  <Link
    href="#"
    className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-full text-center transition-colors w-full sm:w-auto"
  >
    Start trading
  </Link>
  <Link
    href="#"
    className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-center transition-colors w-full sm:w-auto"
  >
    Next
  </Link>
</div>

      </div>
    </AuthLayout>
  )
}
