"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#E5E5E2] px-10 py-4 bg-white">
      <div className="flex items-center gap-3 text-[#111811]">
        <Link href="/" className="flex items-center gap-3">
          <svg className="h-8 w-8 text-[#2C5F2D]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
          <h1 className="text-xl font-bold text-[#111811]">HerbTrace</h1>
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-4 items-center">
        {pathname !== "/login" && pathname !== "/register" && pathname !== "/forgot-password" && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 bg-[#F0F4F0] text-[#111811] hover:bg-[#E5E5E2]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer border-2 border-white shadow-sm">
                  <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFeHcwkQ-K2AA1fY-s8KmJk43-6hctoFKMv0Bh4fckiBAUtahHvkqB-kcxs7wCZ-zBDRs-9suH-p_Ezcs-f6MEwLmMx8gM2TMH1XT02CtZLhGQtzhul-XTsVcDV6MemEbZaepWGQnBxLeESE0cRHAOn4lj6ZfZOPRDJ-GjV17IGV5SNbNeuRHE_wJ7sev83IcxXZv6XC6fcpRLUpPCKbqI_XJVbZalGY2P783NROqqNGNvtrVY_3Y3ep90MH1GzPceyeUgPqlASDs8" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </header>
  )
}
