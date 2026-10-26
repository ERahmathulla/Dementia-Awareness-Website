import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'
import BrainIcon from '@/components/ui/BrainIcon'

export default function NotFound() {
  return (
    <div className="pt-header min-h-[60vh] flex items-center">
      <div className="container-narrow text-center py-16">
        <div className="w-16 h-16 rounded-2xl bg-warmgray-100 flex items-center justify-center mx-auto mb-6">
          <BrainIcon className="w-8 h-8 text-warmgray-800" />
        </div>
        <h1 className="text-3xl font-bold text-warmgray-900 mb-3">Page not found</h1>
        <p className="text-warmgray-500 mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. Try searching for what you need, or start from the homepage.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Home
          </Link>
          <Link href="/directory" className="btn-secondary">
            <Search className="w-4 h-4" aria-hidden />
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
