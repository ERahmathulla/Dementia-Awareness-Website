'use client'

import Link from 'next/link'
import { Phone, AlertCircle } from 'lucide-react'
import { ELDER_HELPLINE, ELDER_HELPLINE_LOCAL, SENIOR_LEGAL_HELPLINE } from '@/lib/utils/constants'

export default function HelpBar() {
  return (
    <div
      className="bg-warmgray-950 text-white z-50 sticky top-0 border-b border-purple-900/30"
      style={{ height: 'var(--helpbar-height)' }}
      role="banner"
    >
      <div className="container-main h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap text-warmgray-100">
            <Phone className="w-3 h-3 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Need help?</span>
          </div>

          <a
            href="tel:+18664674624"
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-warmgray-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call Elder Helpline at 1-866-467-4624"
          >
            <span className="hidden sm:inline text-warmgray-200">Elder Helpline:</span>
            {ELDER_HELPLINE_LOCAL}
          </a>

          <span className="text-warmgray-700 hidden sm:inline" aria-hidden>·</span>

          <a
            href={`tel:+18888957873`}
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-warmgray-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call Florida Senior Legal Helpline at 1-888-895-7873"
          >
            <span className="hidden sm:inline text-warmgray-200">Florida Senior Legal Helpline:</span>
            {SENIOR_LEGAL_HELPLINE}
          </a>

          <span className="text-warmgray-700 hidden sm:inline" aria-hidden>·</span>

          <a
            href={`tel:+18009635337`}
            className="flex items-center gap-1 text-xs font-semibold text-white hover:text-warmgray-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call Florida Department of Elder Affairs at 1-800-963-5337"
          >
            <span className="hidden sm:inline text-warmgray-200">Florida Dept. of Elder Affairs:</span>
            {ELDER_HELPLINE}
          </a>

          <span className="text-warmgray-700 hidden md:inline" aria-hidden>·</span>

          <a
            href="tel:911"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-emergency-300 hover:text-emergency-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call 911 for emergencies"
          >
            Emergency: 911
          </a>

          <a
            href="tel:988"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-white hover:text-warmgray-200 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            aria-label="Call or text 988 for mental health crisis support"
          >
            Crisis: 988
          </a>
        </div>

        <Link
          href="/emergency"
          className="flex items-center gap-1.5 text-xs font-semibold bg-emergency-600 hover:bg-emergency-700 text-white px-3 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Emergency resources page"
        >
          <AlertCircle className="w-3 h-3" aria-hidden />
          <span>Emergency</span>
        </Link>
      </div>
    </div>
  )
}
