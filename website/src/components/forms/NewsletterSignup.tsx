'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    // Simulate submission — connect to your mailing list provider
    await new Promise(resolve => setTimeout(resolve, 800))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-warmgray-50 border border-warmgray-200">
        <CheckCircle className="w-5 h-5 text-warmgray-700 shrink-0" aria-hidden />
        <p className="text-sm font-medium text-warmgray-900">You're signed up! We'll send resource updates and local event reminders.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Email newsletter sign-up">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmgray-400 pointer-events-none" aria-hidden />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="input-base pl-9 text-sm"
          autoComplete="email"
          disabled={status === 'loading'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || !email}
        className="btn-primary text-sm shrink-0"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
            Signing up…
          </>
        ) : (
          'Get free updates'
        )}
      </button>
    </form>
  )
}
