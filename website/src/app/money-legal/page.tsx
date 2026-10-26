import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, DollarSign, FileText, CreditCard } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Money & Legal Help',
  description: 'Medicare counseling, Medicaid navigation, financial assistance programs, and legal planning resources for families in the Big Bend region.',
}

const subPages = [
  { icon: Shield, href: '/money-legal/medicare', title: 'Medicare & Health Insurance',
    description: 'Free SHINE counseling from trained volunteers, SMP Medicare fraud prevention, and ACA Marketplace navigators.', accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: DollarSign, href: '/money-legal/medicaid', title: 'Medicaid & Long-Term Care Funding',
    description: 'CARES eligibility assessment, SMMC-LTC enrollment, PACE program, and ADRC navigation.', accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: CreditCard, href: '/money-legal/financial-assistance', title: 'Financial Assistance Programs',
    description: 'EHEAP energy help, HCE caregiver stipend, Medicare, Medicaid, VA benefits, SSDI, food, and housing assistance.', accent: 'bg-warmgray-100 text-warmgray-800' },
  { icon: FileText, href: '/money-legal/legal-planning', title: 'Legal Planning',
    description: 'Power of attorney, healthcare surrogates, advance directives, wills, elder law, and the Florida Caregiver Toolkit.', accent: 'bg-warmgray-100 text-warmgray-800' },
]

export default function MoneyLegalPage() {
  return (
    <article>
      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-10">
        <p className="text-sm text-warmgray-900">
          <strong>Free SHINE counseling:</strong> Volunteer counselors can help you understand Medicare and insurance options at no cost. Call Advantage Aging Solutions at <a href="tel:+18504880055" className="font-semibold underline">850-488-0055</a>.
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
