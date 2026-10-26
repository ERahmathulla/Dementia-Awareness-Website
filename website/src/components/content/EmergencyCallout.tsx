import Link from 'next/link'
import { AlertCircle, Phone } from 'lucide-react'
import { EMERGENCY_NUMBERS } from '@/lib/utils/constants'
import { cn } from '@/lib/utils/cn'

interface EmergencyCalloutProps {
  compact?: boolean
}

export default function EmergencyCallout({ compact = false }: EmergencyCalloutProps) {
  if (compact) {
    return (
      <div role="alert" className="flex items-center gap-3 p-4 rounded-xl bg-emergency-50 border-l-4 border-emergency-500">
        <AlertCircle className="w-5 h-5 text-emergency-600 shrink-0" aria-hidden />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-emergency-800">In an emergency?</p>
          <p className="text-xs text-emergency-700 mt-0.5">Call 911 · Crisis line: 988 · Big Bend: <a href="tel:211" className="underline font-medium">211</a></p>
        </div>
        <Link href="/emergency" className="text-xs font-semibold text-emergency-700 hover:text-emergency-900 transition-colors shrink-0">
          Full list →
        </Link>
      </div>
    )
  }

  return (
    <div role="alert" className="rounded-2xl bg-emergency-50 border border-emergency-200 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 bg-emergency-600 text-white">
        <AlertCircle className="w-5 h-5 shrink-0" aria-hidden />
        <h2 className="font-semibold">Emergency & Crisis Numbers</h2>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {EMERGENCY_NUMBERS.map((item) => (
          <a
            key={item.number}
            href={`tel:${item.number.replace(/\D/g, '')}`}
            className="flex items-start gap-3 p-3 rounded-lg bg-white border border-emergency-100 hover:border-emergency-300 hover:bg-emergency-50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emergency-500"
          >
            <Phone className="w-4 h-4 text-emergency-500 shrink-0 mt-0.5" aria-hidden />
            <div>
              <div className="text-sm font-semibold text-warmgray-900 group-hover:text-emergency-700 transition-colors">{item.number}</div>
              <div className="text-xs text-warmgray-600 font-medium">{item.label}</div>
              <div className="text-xs text-warmgray-400 mt-0.5">{item.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
