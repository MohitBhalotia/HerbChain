"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarProps {
  type: "processing" | "manufacturer" | "laboratory" | "regulatory"
}

const navigationItems = {
  processing: [
    { name: "Dashboard", href: "/processing-facility", icon: "dashboard" },
    { name: "Batch Intake", href: "/processing-facility/batch-intake", icon: "qr_code_scanner" },
    { name: "Batches", href: "/processing-facility/batches", icon: "inventory_2" },
    { name: "Reports", href: "/processing-facility/reports", icon: "analytics" },
    { name: "Settings", href: "/processing-facility/settings", icon: "settings" },
  ],
  manufacturer: [
    { name: "Dashboard", href: "/manufacturer", icon: "dashboard" },
    { name: "Production", href: "/manufacturer/production", icon: "precision_manufacturing" },
    { name: "Inventory", href: "/manufacturer/inventory", icon: "inventory" },
    { name: "Distribution", href: "/manufacturer/distribution", icon: "local_shipping" },
    { name: "Quality Control", href: "/manufacturer/quality", icon: "verified" },
  ],
  laboratory: [
    { name: "Dashboard", href: "/laboratory", icon: "dashboard" },
    { name: "Sample Testing", href: "/laboratory/testing", icon: "science" },
    { name: "Results", href: "/laboratory/results", icon: "assignment_turned_in" },
    { name: "Certificates", href: "/laboratory/certificates", icon: "workspace_premium" },
    { name: "Equipment", href: "/laboratory/equipment", icon: "biotech" },
  ],
  regulatory: [
    { name: "Dashboard", href: "/regulatory", icon: "dashboard" },
    { name: "Compliance", href: "/regulatory/compliance", icon: "rule" },
    { name: "Audits", href: "/regulatory/audits", icon: "fact_check" },
    { name: "Certifications", href: "/regulatory/certifications", icon: "verified_user" },
    { name: "Reports", href: "/regulatory/reports", icon: "summarize" },
  ],
}

export function Sidebar({ type }: SidebarProps) {
  const pathname = usePathname()
  const items = navigationItems[type]

  return (
    <aside className="flex w-64 flex-col border-r border-solid border-r-[#f0f4f0] bg-white">
      <div className="flex items-center gap-3 p-6">
        <div className="size-8 text-[#17cf17]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#111811] text-xl font-bold leading-tight tracking-[-0.015em]">HerbTrace</h2>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href ? "bg-[#f0f4f0] text-[#17cf17] font-bold" : "text-[#111811] hover:bg-[#f0f4f0]",
            )}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCetvlMNjKv_-l-uFtroj2WpFrYZo0SGPlPHbxr4Hmn8jB0EWtdvcXDfipvV2EBeKs1ozGZhei67WoSBbR4reXVKPbSLxx1NPszG6kGrEpOTkHiqlIX49-RsdJWzZFujR-g74YV5RwfoOI7F6itx_Ph_ddj5Q7iOya4Zxnhux1pnIa7A2mNfm-A1gadwN3Cb61L-17-bNseZGDwZA4nj1Q6F4ay16XMs1fm5l0wuaxWhtYsbz_3PKAm7atRUBErHYUPDb8JW8yQEp_J")',
          }}
        ></div>
      </div>
    </aside>
  )
}
