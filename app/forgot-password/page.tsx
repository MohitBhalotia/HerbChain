import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/layout/header"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Header />
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center bg-leaf-pattern p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg
                  className="h-10 w-10 text-[#2E7D32]"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                </svg>
                <h1 className="text-2xl font-bold text-[#1C1B1F]">HerbChain</h1>
              </div>

              <h2 className="text-3xl font-bold text-[#1C1B1F]">Reset Password</h2>
              <p className="mt-2 text-[#49454F]">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  className="h-12 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-lg font-semibold shadow-sm transition-all duration-300 focus:ring-2 focus:ring-[#FFC107] focus:ring-offset-2"
                >
                  Send Reset Link
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-sm text-[#49454F]">
                Remember your password?{" "}
                <Link href="/login" className="font-medium text-[#2E7D32] hover:text-[#FFC107] hover:underline">
                  Sign in
                </Link>
              </p>

              <p className="text-sm text-[#49454F]">
                Don't have an account?{" "}
                <Link href="/register" className="font-medium text-[#2E7D32] hover:text-[#FFC107] hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
