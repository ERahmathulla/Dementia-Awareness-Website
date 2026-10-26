import type { Metadata } from 'next'
import { Phone, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Long-Term Care Options',
  description: 'PACE, SMMC-LTC, CARES assessment, and navigating long-term care options in Florida for people with dementia.',
}

const programs = [
  {
    name: 'Statewide Medicaid Managed Long-Term Care (SMMC-LTC)',
    desc: 'Florida\'s Medicaid managed care program for people who need nursing-facility level of care but want to remain in the community. Covers home health, personal care, adult day, transportation, and more. Accessed through the Elder Helpline / ADRC.',
    phone: '1-800-963-5337',
    color: 'lavender',
  },
  {
    name: 'Program of All-Inclusive Care for the Elderly (PACE)',
    desc: 'A comprehensive care program for people who are 55+ and certified to need nursing-home level care. PACE provides all medical, social, and long-term care services in one coordinated program — often allowing people to remain at home. Eligibility determined through CARES assessment.',
    phone: '1-800-963-5337',
    color: 'teal',
  },
  {
    name: 'CARES — Comprehensive Assessment & Review for Long-Term Care Services',
    desc: 'A federally mandated assessment determining whether someone is eligible for Medicaid-funded nursing-facility care or home/community-based services. Required before enrolling in SMMC-LTC or PACE. Conducted by the DOEA\'s contracted assessors.',
    phone: '1-800-963-5337',
    color: 'healthblue',
  },
  {
    name: 'Aging & Disability Resource Centers (ADRC)',
    desc: 'The statewide "no wrong door" system for long-term care navigation. Any older adult, person with a disability, or caregiver can call for help understanding options — regardless of income or diagnosis. Same as the Elder Helpline.',
    phone: '1-800-963-5337',
    color: 'sage',
  },
]

const colorMap: Record<string, string> = {
  lavender: 'bg-warmgray-100 text-warmgray-900 border-warmgray-200',
  teal: 'bg-warmgray-100 text-warmgray-800 border-warmgray-200',
  healthblue: 'bg-warmgray-100 text-warmgray-800 border-warmgray-200',
  sage: 'bg-warmgray-100 text-warmgray-800 border-warmgray-200',
}

export default function LongTermCarePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Find Care & Services', href: '/care-services' },
        { label: 'Long-Term Care Options' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Long-Term Care Options</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        When in-home care is no longer enough, or when full-time support is needed, these programs provide a structured path to the right level of care — often funded through Medicaid.
      </p>

      <div className="space-y-4 mb-10">
        {programs.map((p) => {
          const [bg, text, border] = colorMap[p.color].split(' ')
          return (
            <div key={p.name} className={`rounded-2xl border p-5 ${bg} ${border}`}>
              <h2 className={`text-base font-bold mb-2 ${text}`}>{p.name}</h2>
              <p className="text-sm text-warmgray-700 leading-relaxed mb-3">{p.desc}</p>
              <a href={`tel:${p.phone.replace(/\D/g,'')}`}
                className="flex items-center gap-1.5 text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors">
                <Phone className="w-3.5 h-3.5" aria-hidden />
                {p.phone} — Elder Helpline
              </a>
            </div>
          )
        })}
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm text-warmgray-600 mb-3">
          <strong>Not sure where to start?</strong> The Florida Long-Term Care Ombudsman Program advocates for residents of nursing homes, ALFs, and adult family care homes. They can help you understand a loved one's rights and navigate facility options.
        </p>
        <a href="https://elderaffairs.org" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
          Florida Dept. of Elder Affairs — Long-Term Care <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </div>
    </article>
  )
}
