import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicaid & Long-Term Care Funding',
  description: 'CARES eligibility assessment, SMMC-LTC, and PACE program for long-term care funding in Florida.',
}

export default function MedicaidPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[{ label: 'Money & Legal Help', href: '/money-legal' }, { label: 'Medicaid & Long-Term Funding' }]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Medicaid & Long-Term Care Funding</h1>
      <p className="text-lg text-warmgray-500 mb-8 max-w-2xl leading-relaxed">
        Florida Medicaid can fund home care, adult day programs, and nursing-facility care for eligible individuals. Understanding the pathway is the first step.
      </p>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-8">
        <p className="text-sm text-warmgray-900"><strong>Start here:</strong> Call the Elder Helpline at <a href="tel:+18009635337" className="font-semibold underline">1-800-963-5337</a> to begin the Medicaid long-term care process. They will determine the right pathway and schedule a CARES assessment if needed.</p>
      </div>

      <div className="space-y-4 mb-10">
        {[
          { name: 'CARES Assessment', sub: 'Comprehensive Assessment & Review for Long-Term Care Services', desc: 'A federally mandated functional assessment to determine whether someone qualifies for Medicaid-funded nursing-facility level of care or home/community-based services. Required before enrolling in SMMC-LTC or PACE. Completed by DOEA-contracted assessors in your home.', color: 'bg-warmgray-50 border-warmgray-200' },
          { name: 'SMMC-LTC', sub: 'Statewide Medicaid Managed Long-Term Care', desc: 'Florida\'s managed care program for Medicaid-eligible individuals who qualify for nursing-facility level of care but prefer to remain at home or in the community. Covers personal care, home health, adult day, transportation, and more. Must complete CARES assessment first.', color: 'bg-warmgray-50 border-warmgray-200' },
          { name: 'PACE', sub: 'Program of All-Inclusive Care for the Elderly', desc: 'An all-in-one Medicare and Medicaid program for adults 55+ who qualify for nursing-home level of care. PACE coordinates and pays for all medical, long-term care, and social services — often allowing participants to remain at home. Limited availability; contact the Elder Helpline for PACE sites.', color: 'bg-warmgray-50 border-warmgray-200' },
        ].map((p) => (
          <div key={p.name} className={`rounded-2xl border p-5 ${p.color}`}>
            <h2 className="text-base font-bold text-warmgray-900 mb-0.5">{p.name}</h2>
            <p className="text-xs text-warmgray-400 mb-3">{p.sub}</p>
            <p className="text-sm text-warmgray-700 leading-relaxed mb-3">{p.desc}</p>
            <a href="tel:+18009635337" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors"><Phone className="w-3.5 h-3.5" aria-hidden />1-800-963-5337 — Elder Helpline</a>
          </div>
        ))}
      </div>

      <p className="text-sm text-warmgray-400">
        For more on long-term care facility options, see <Link href="/care-services/long-term-care" className="text-warmgray-800 hover:text-warmgray-900 font-medium transition-colors">Long-Term Care Options →</Link>
      </p>
    </article>
  )
}
