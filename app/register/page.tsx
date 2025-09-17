import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/layout/header"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Header />
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center bg-leaf-pattern p-4">
        <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Left side - Image */}
          <div className="hidden lg:block lg:w-2/5 relative">
            <img
              alt="Ayurvedic herbs cultivation"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgGygiafQgvClRC_PDf551b5Yv3sPJj2VfnDC3dvmgZKJDSpmnuMg7cXHLgXSxxAU3UijVN3F4hDGFK-86LKPjd3C-XC9fXSpSmIn6iDp1dRdUlUPhMv4oCuvNPMhR9ZAThOBt_vx5bQnSlpDCnRPhxfKwYI_S0WjPBPdnbFYLWO94oDOpExlJ6Cqs9bfS7FfP09usU2lKrc0hBqYW9_m9PWu9G7IwtpvK2YOGqfmP40C__UphXLE9co8WdywQ3mCrbkgr64tSy5W"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex items-center gap-3">
                <svg
                  className="h-8 w-8 text-[#FFC107]"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                </svg>
                <h1 className="text-3xl font-bold">HerbChain</h1>
              </div>
              <p className="mt-3 text-base leading-relaxed">Join the trusted network of herb traceability</p>
            </div>
          </div>

          {/* Right side - Registration form */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="flex items-center gap-3 mb-6 lg:hidden">
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

              <h3 className="text-3xl font-bold text-[#1C1B1F]">Create Account</h3>
              <p className="mt-2 text-[#49454F]">Join the herbal traceability network.</p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First Name"
                      className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last Name"
                      className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email Address"
                    className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="Organization Name"
                    className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer/Collector</SelectItem>
                      <SelectItem value="processor">Processing Facility</SelectItem>
                      <SelectItem value="manufacturer">Manufacturer</SelectItem>
                      <SelectItem value="laboratory">Laboratory</SelectItem>
                      <SelectItem value="regulator">Regulator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    placeholder="Password"
                    className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    placeholder="Confirm Password"
                    className="h-11 bg-[#F9F9F7] border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-[#2E7D32]/30"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-11 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold shadow-sm transition-all duration-300 focus:ring-2 focus:ring-[#FFC107] focus:ring-offset-2"
                  >
                    Create Account
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-[#49454F]">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-[#2E7D32] hover:text-[#FFC107] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
