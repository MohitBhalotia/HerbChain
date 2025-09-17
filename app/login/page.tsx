import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/layout/header"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Header />
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center bg-leaf-pattern p-4">
        <div className="flex w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Left side - Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <img
              alt="Ayurvedic herbs and spices"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgGygiafQgvClRC_PDf551b5Yv3sPJj2VfnDC3dvmgZKJDSpmnuMg7cXHLgXSxxAU3UijVN3F4hDGFK-86LKPjd3C-XC9fXSpSmIn6iDp1dRdUlUPhMv4oCuvNPMhR9ZAThOBt_vx5bQnSlpDCnRPhxfKwYI_S0WjPBPdnbFYLWO94oDOpExlJ6Cqs9bfS7FfP09usU2lKrc0hBqYW9_m9PWu9G7IwtpvK2YOGqfmP40C__UphXLE9co8WdywQ3mCrbkgr64tSy5W"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <div className="flex items-center gap-4">
                <svg
                  className="h-10 w-10 text-[#FFC107]"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                </svg>
                <h1 className="text-4xl font-bold">HerbChain</h1>
              </div>
              <p className="mt-4 max-w-md text-lg leading-relaxed">
                Ensuring the purity and provenance of Ayurvedic herbs, from soil to soul.
              </p>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="flex items-center gap-3 mb-6 md:hidden">
                <svg
                  className="h-8 w-8 text-[#2E7D32]"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                </svg>
                <h2 className="text-2xl font-bold text-[#1C1B1F]">HerbChain</h2>
              </div>

              <h3 className="text-3xl font-bold text-[#1C1B1F]">Welcome Back</h3>
              <p className="mt-2 text-[#49454F]">Login to access the traceability dashboard.</p>

              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="sr-only">
                    Username or Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Username or Email"
                    className="h-12 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="sr-only">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="h-12 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-[#2E7D32] hover:text-[#FFC107] hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-lg font-semibold shadow-sm transition-all duration-300 focus:ring-2 focus:ring-[#FFC107] focus:ring-offset-2"
                  >
                    Login
                  </Button>
                </div>
              </form>

              <p className="mt-8 text-center text-sm text-[#49454F]">
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
