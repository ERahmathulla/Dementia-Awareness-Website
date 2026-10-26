import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Calendar, Building2, Navigation, Car, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Find Care & Services',
  description: 'Respite, in-home care, long-term care, safety resources, and transportation for people with dementia in the Big Bend region.',
}

const subPages = [
  { icon: Calendar, href: '/care-services/respite', title: 'Respite & Adult Day Programs',
    description: "Social Club locations across the Big Bend, in-home respite, AmeriCorps volunteer respite for veterans, and ADI emergency respite.", accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: Home, href: '/care-services/in-home', title: 'In-Home & Community Services',
    description: 'CCE, Home Care for the Elderly (HCE), ADI in-home services, OAA meals — how the Elder Helpline intake works.', accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: Building2, href: '/care-services/long-term-care', title: 'Long-Term Care Options',
    description: 'SMMC-LTC Medicaid managed long-term care, PACE, CARES assessment, ADRC navigation.', accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: Navigation, href: '/care-services/wandering', title: 'Wandering & Missing Persons',
    description: 'Silver Alert registration, Scent Evidence K9 scent kits, and what to do if your loved one wanders.', accent: 'bg-emergency-100 text-emergency-600' },
  { icon: Car, href: '/care-services/transportation', title: 'Transportation & Driving',
    description: 'Senior transport options, dementia-friendly transit training, Safe Mobility for Life, and driving cessation guidance.', accent: 'bg-warmgray-100 text-warmgray-800' },
]

export default function CareServicesPage() {
  return (
    <article>
      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-10">
        <p className="text-sm text-warmgray-950">
          <strong>Start with the Elder Helpline:</strong> Call <a href="tel:+18664674624" className="font-semibold underline">866-467-4624</a> or <a href="tel:+18009635337" className="font-semibold underline">1-800-963-5337</a> for intake into most home- and community-based services in this section.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subPages.map((page) => {
          const Icon = page.icon
          return (
            <Link key={page.href} href={page.href}
              className="group flex gap-4 p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 focus-visible:ring-offset-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${page.accent}`}>
                <Icon className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-warmgray-900 mb-1 group-hover:text-warmgray-900 transition-colors">{page.title}</h2>
                <p className="text-sm text-warmgray-500 leading-relaxed">{page.description}</p>
                <div className="mt-2.5 flex items-center gap-1 text-xs font-medium text-warmgray-800 group-hover:gap-2 transition-all">
                  Open <ArrowRight className="w-3 h-3" aria-hidden />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
