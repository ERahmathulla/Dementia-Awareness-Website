'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="pt-header min-h-[60vh] flex items-center">
      <div className="container-narrow text-center py-16">
        <div className="w-16 h-16 rounded-2xl bg-emergency-100 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-emergency-600" aria-hidden />
        </div>
        <h1 className="text-3xl font-bold text-warmgray-900 mb-3">Something went wrong</h1>
        <p className="text-warmgray-500 mb-8 max-w-md mx-auto">
          We encountered an error loading this page. Try refreshing, or call the helpline if you need immediate help.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button onClick={reset} className="btn-primary">
            <RefreshCw className="w-4 h-4" aria-hidden />
            Try again
          </button>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
        <p className="text-sm text-warmgray-400 mt-6">
          Helpline: <a href="tel:+18503862778" className="text-warmgray-800 hover:text-warmgray-900 font-medium">(850) 386-2778</a>
        </p>
      </div>
    </div>
  )
}
