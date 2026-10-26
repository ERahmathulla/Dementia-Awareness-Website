import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, AlertTriangle, ShieldAlert, Navigation, MessageSquare } from 'lucide-react'
import EmergencyCallout from '@/components/content/EmergencyCallout'

export const metadata: Metadata = {
  title: 'Emergency & Safety Resources',
  description: 'Crisis phone numbers, elder abuse reporting, wandering resources, and emergency preparedness for people with dementia in the Big Bend region.',
}

const sections = [
  {
    icon: AlertTriangle,
    title: 'A person is missing or wandering',
    color: 'emergency',
    items: [
      { label: 'Call 911', desc: 'Report immediately. Describe what they were wearing and last known location.' },
      { label: 'File a Silver Alert (FDLE)', desc: 'Florida\'s program for missing cognitively-impaired adults. Ask law enforcement to file.' },
      { label: 'Scent Evidence K9', desc: 'The DCCI has partnered with Scent Evidence K9 for proactive scent-preservation kits. Contact DCCI@elderaffairs.org.' },
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Report elder abuse, neglect, or exploitation',
    color: 'amber',
    items: [
      { label: '1-800-96-ABUSE (1-800-962-2873)', desc: 'Florida DCF hotline — anonymous reporting accepted, available 24/7.' },
      { label: 'Long-Term Care Ombudsman', desc: 'Advocacy for residents of nursing homes, ALFs, and other long-term care facilities. Call Advantage Aging: 850-488-0055.' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'Mental health & behavioral crisis',
    color: 'lavender',
    items: [
      { label: '988 Suicide & Crisis Lifeline', desc: 'Call or text 988 — 24/7 mental health crisis support for any emotional or behavioral crisis.' },
      { label: '211 Big Bend', desc: '24-hour emotional support, crisis counseling, and general resource referral. Dial 211 or (850) 617-6333.' },
      { label: 'TMH Social Work', desc: 'Available to all community members, not just patients. (850) 431-5001, option 7.' },
    ],
  },
  {
    icon: Navigation,
    title: 'Disaster preparedness',
    color: 'healthblue',
    items: [
      { label: 'Special Needs Shelters', desc: 'Advantage Aging Solutions coordinates special-needs shelter registration. Call 850-488-0055 to register.' },
      { label: 'Big Bend Healthcare Coalition', desc: 'Regional healthcare disaster preparedness network. bigbendhcc.org · 850-488-6211.' },
      { label: 'Emergency Respite (ADI)', desc: 'Short-notice respite in crisis situations — call the Elder Helpline: 1-800-963-5337.' },
    ],
  },
]

const colorMap: Record<string, { bg: string; border: string; icon: string; heading: string }> = {
  emergency: { bg: 'bg-emergency-50', border: 'border-emergency-200', icon: 'text-emergency-600', heading: 'text-emergency-900' },
  amber: { bg: 'bg-warmgray-50', border: 'border-warmgray-200', icon: 'text-warmgray-800', heading: 'text-warmgray-900' },
  lavender: { bg: 'bg-warmgray-50', border: 'border-warmgray-200', icon: 'text-warmgray-800', heading: 'text-warmgray-900' },
  healthblue: { bg: 'bg-warmgray-50', border: 'border-warmgray-200', icon: 'text-warmgray-800', heading: 'text-warmgray-900' },
}

export default function EmergencyPage() {
  return (
    <div className="pt-header">
      {/* Red hero */}
      <section className="bg-emergency-700 text-white py-10">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-6 h-6" aria-hidden />
            <h1 className="text-2xl md:text-3xl font-bold">Emergency & Safety Resources</h1>
          </div>
          <p className="text-emergency-100 text-lg mb-6 max-w-xl">
            Quick access to crisis numbers and emergency resources for people with dementia and their caregivers.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:911" className="flex items-center gap-2 px-5 py-2.5 bg-white text-emergency-700 font-bold rounded-xl hover:bg-emergency-50 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Phone className="w-4 h-4" aria-hidden />
              Call 911
            </a>
            <a href="tel:988" className="flex items-center gap-2 px-5 py-2.5 bg-emergency-600 text-white font-semibold rounded-xl hover:bg-emergency-500 border border-emergency-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Crisis Line: 988
            </a>
            <a href="tel:211" className="flex items-center gap-2 px-5 py-2.5 bg-emergency-600 text-white font-semibold rounded-xl hover:bg-emergency-500 border border-emergency-400 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Big Bend 211
            </a>
          </div>
        </div>
      </section>

      <div className="container-narrow section-padding">
        {/* Full emergency numbers */}
        <section className="mb-12" aria-labelledby="emergency-numbers-heading">
          <h2 id="emergency-numbers-heading" className="text-2xl font-bold text-warmgray-900 mb-6">
            All Emergency & Crisis Numbers
          </h2>
          <EmergencyCallout />
        </section>

        {/* Situation-specific guidance */}
        <section aria-labelledby="situations-heading">
          <h2 id="situations-heading" className="text-2xl font-bold text-warmgray-900 mb-6">
            Specific Situations
          </h2>
          <div className="space-y-5">
            {sections.map((section) => {
              const Icon = section.icon
              const colors = colorMap[section.color]
              return (
                <div key={section.title} className={`rounded-2xl border ${colors.bg} ${colors.border} overflow-hidden`}>
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-inherit">
                    <Icon className={`w-5 h-5 ${colors.icon}`} aria-hidden />
                    <h3 className={`font-semibold ${colors.heading}`}>{section.title}</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    {section.items.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-warmgray-400 mt-2 shrink-0" aria-hidden />
                        <div>
                          <p className="text-sm font-semibold text-warmgray-900">{item.label}</p>
                          <p className="text-sm text-warmgray-600 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/" className="text-sm text-warmgray-800 hover:text-warmgray-900 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
