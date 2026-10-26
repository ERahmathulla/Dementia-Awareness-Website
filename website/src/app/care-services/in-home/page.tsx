import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'In-Home & Community Services',
  description: 'CCE, HCE, ADI in-home services, meals, and how the Elder Helpline intake works in the Big Bend region.',
}

const programs = [
  {
    name: 'Community Care for the Elderly (CCE)',
    org: 'Advantage Aging Solutions / DOEA',
    desc: 'In-home services to help older adults remain safely at home: respite, shopping assistance, bathing, housekeeping, personal care, chore, counseling, home health aide, therapeutic services, emergency alert response, medical supplies, and transportation. Sliding-scale co-pay may apply.',
    color: 'teal',
  },
  {
    name: 'Home Care for the Elderly (HCE)',
    org: 'Advantage Aging Solutions / DOEA',
    desc: 'A monthly stipend or subsidy to the primary caregiver, used to support the elder\'s housing, food, doctor visits, and health maintenance. Keeps caregivers financially able to continue providing care at home.',
    color: 'lavender',
  },
  {
    name: 'Alzheimer\'s Disease Initiative (ADI) In-Home Services',
    org: 'Advantage Aging Solutions / DOEA',
    desc: 'Specifically for individuals 18+ with an ADRD diagnosis: in-home respite, caregiver training, transportation, and medical equipment/supplies. Intake through the Elder Helpline.',
    color: 'healthblue',
  },
  {
    name: 'Older Americans Act (OAA) Programs',
    org: 'Advantage Aging Solutions / DOEA',
    desc: 'Supportive services, home-delivered meals (Meals on Wheels), congregate dining sites, health and wellness education, and caregiver support programs funded under the federal Older Americans Act.',
    color: 'sage',
  },
]

const colorMap: Record<string, string> = {
  teal: 'bg-warmgray-100 text-warmgray-800',
  lavender: 'bg-warmgray-100 text-warmgray-800',
  healthblue: 'bg-warmgray-100 text-warmgray-800',
  sage: 'bg-warmgray-100 text-warmgray-800',
}

const intakeSteps = [
  'Call the Elder Helpline: 866-467-4624 (local) or 1-800-963-5337 (statewide)',
  'A care coordinator will conduct an intake screening — about 30 minutes by phone',
  'If eligible, a case manager is assigned who visits the home to complete an assessment',
  'Services are authorized based on need and available funding',
  'Service delivery begins — typically within a few weeks of authorization',
]

export default function InHomePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Find Care & Services', href: '/care-services' },
        { label: 'In-Home & Community Services' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">In-Home & Community Services</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        These programs help people with dementia remain safely at home while supporting their caregivers. All are accessed through the Elder Helpline — one call opens the door to all of them.
      </p>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-8">
        <p className="text-sm font-semibold text-warmgray-900 mb-1">Start with the Elder Helpline</p>
        <p className="text-sm text-warmgray-800 mb-3">
          All of the programs below are accessed through a single intake point. You do not need to know which program you need — the care coordinator will help determine eligibility.
        </p>
        <a href="tel:+18664674624" className="flex items-center gap-2 text-sm font-bold text-warmgray-800 hover:text-warmgray-900 transition-colors">
          <Phone className="w-4 h-4" aria-hidden />
          866-467-4624 (local) · 1-800-963-5337 (statewide)
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {programs.map((p) => (
          <div key={p.name} className="card-base p-5">
            <span className={`badge mb-3 ${colorMap[p.color]}`}>{p.org}</span>
            <h2 className="text-base font-bold text-warmgray-900 mb-2">{p.name}</h2>
            <p className="text-sm text-warmgray-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <section aria-labelledby="intake-heading">
        <h2 id="intake-heading" className="text-xl font-bold text-warmgray-900 mb-4">How intake works (Four Steps to Services)</h2>
        <div className="space-y-3">
          {intakeSteps.map((step, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-warmgray-100 shadow-card">
              <div className="w-8 h-8 rounded-full bg-warmgray-100 text-warmgray-900 text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
              <p className="text-sm text-warmgray-700 leading-relaxed self-center">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
