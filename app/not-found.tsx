import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">eco</span>
          </div>
        </div>

        {/* 404 Error */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-green-800">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist in our herbal supply chain platform. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="/">
              <span className="material-symbols-outlined mr-2">home</span>
              Return to Dashboard
            </Link>
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/login">
                <span className="material-symbols-outlined mr-2">login</span>
                Login
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/analytics">
                <span className="material-symbols-outlined mr-2">analytics</span>
                Analytics
              </Link>
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>Need help? Contact our support team.</p>
          <div className="flex justify-center space-x-4">
            <span className="flex items-center">
              <span className="material-symbols-outlined text-xs mr-1">email</span>
              support@herbchain.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
