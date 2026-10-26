import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, AlertCircle, Phone, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Taking Care of Yourself',
  description: 'Burnout prevention, caregiver wellness, and self-care resources for dementia caregivers in the Big Bend region.',
}

const warningSignsBurnout = [
  'Feeling overwhelmed or constantly worried',
  'Feeling tired most of the time, even after sleeping',
  'Getting sick more often than usual',
  'Feeling resentful, sad, or irritable',
  'Losing interest in activities you used to enjoy',
  'Feeling like caregiving has taken over your identity',
  'Neglecting your own health appointments or medications',
  'Withdrawing from friends, family, or other relationships',
]

const programs = [
  {
    name: 'TCARE (Tailored Caregiver Assessment and Referral)',
    org: 'Advantage Aging Solutions',
    phone: '(850) 488-0055',
    desc: 'Caregiver-burnout support built around "identity discrepancy" — a structured approach that identifies when caregiving has consumed your sense of self and connects you to targeted support to restore balance.',
    color: 'lavender',
  },
  {
    name: 'Respite Care',
    org: 'Alzheimer\'s Project / DOEA ADI',
    phone: '(850) 386-2778',
    desc: 'A break from caregiving. Social Clubs (day programs), in-home volunteer respite, and emergency respite options are all available — often at no cost.',
    link: '/care-services/respite',
    color: 'teal',
  },
  {
    name: 'Support Groups',
    org: 'Alzheimer\'s Project',
    phone: '(850) 386-2778',
    desc: 'Talking with other caregivers who understand what you\'re going through is one of the most effective tools for reducing burnout. All groups are free and require no RSVP.',
    link: '/caregiver-support/support-groups',
    color: 'sage',
  },
  {
    name: 'Powerful Tools for Caregivers',
    org: 'Multiple providers',
    desc: 'The 6-week course specifically includes a full session on caregiver self-care and stress reduction. See Classes & Education for enrollment.',
    link: '/caregiver-support/classes',
    color: 'healthblue',
  },
]

const colorMap: Record<string, string> = {
  lavender: 'bg-warmgray-100 text-warmgray-800',
  teal: 'bg-warmgray-100 text-warmgray-800',
  sage: 'bg-warmgray-100 text-warmgray-800',
  healthblue: 'bg-warmgray-100 text-warmgray-800',
}

export default function SelfCarePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Taking Care of Yourself' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Taking Care of Yourself</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Caregiver burnout is real, common, and serious. Taking care of yourself isn't selfish — it's what allows you to keep taking care of your loved one.
      </p>

      {/* Burnout warning signs */}
      <section className="mb-10" aria-labelledby="burnout-heading">
        <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-warmgray-700" aria-hidden />
            <h2 id="burnout-heading" className="text-base font-bold text-warmgray-900">Signs of caregiver burnout</h2>
          </div>
          <p className="text-sm text-warmgray-700 mb-4">
            If you recognize several of these, reach out for help — the programs below are designed specifically for this.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
            {warningSignsBurnout.map((sign) => (
              <li key={sign} className="flex items-start gap-2 text-sm text-warmgray-900">
                <div className="w-1.5 h-1.5 rounded-full bg-warmgray-500 shrink-0 mt-1.5" aria-hidden />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs */}
      <section className="mb-10" aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="text-xl font-bold text-warmgray-900 mb-5">Support programs for caregivers</h2>
        <div className="space-y-4">
          {programs.map((program) => (
            <div key={program.name} className="card-base p-5">
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${colorMap[program.color]}`}>
                  <Heart className="w-4 h-4" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-warmgray-900 mb-0.5">{program.name}</h3>
                  <p className="text-xs text-warmgray-400 mb-2">{program.org}</p>
                  <p className="text-sm text-warmgray-600 leading-relaxed mb-3">{program.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {program.phone && (
                      <a href={`tel:${program.phone.replace(/\D/g,'')}`}
                        className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
                        <Phone className="w-3.5 h-3.5" aria-hidden />
                        {program.phone}
                      </a>
                    )}
                    {program.link && (
                      <Link href={program.link}
                        className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
                        Learn more →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crisis note */}
      <div className="p-5 rounded-2xl bg-emergency-50 border border-emergency-200">
        <p className="text-sm text-emergency-800">
          <strong>If you're in crisis:</strong> The <strong>988 Suicide & Crisis Lifeline</strong> (call or text <a href="tel:988" className="font-bold underline">988</a>) is available 24/7 for anyone in emotional distress, including overwhelmed caregivers. You can also call <strong>211 Big Bend</strong> (dial <a href="tel:211" className="font-bold underline">211</a>) for 24-hour crisis counseling.
        </p>
      </div>
    </article>
  )
}
