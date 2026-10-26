import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, FileDown, Phone, AlertCircle } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Signs & Diagnosis',
  description: 'Learn the early warning signs of dementia, understand the difference from normal aging, and get your free doctor-visit toolkit.',
}

const subPages = [
  {
    href: '/signs-diagnosis/warning-signs',
    title: '10 Early Signs & Warning Sign Guide',
    description: 'All 10 dementia warning sign domains explained, each paired with a side-by-side comparison of normal aging vs. what to watch for.',
    icon: AlertCircle,
  },
  {
    href: '/signs-diagnosis/types-of-dementia',
    title: 'Types of Dementia',
    description: "Alzheimer's disease, vascular dementia, Lewy body, frontotemporal, Parkinson's disease dementia, mixed dementia, and early-onset.",
    icon: Search,
  },
  {
    href: '/signs-diagnosis/disease-stages',
    title: 'Disease Stages & What to Expect',
    description: 'Early, middle, and late stage descriptions — what changes, what stays the same, and how to plan ahead.',
    icon: Search,
  },
  {
    href: '/signs-diagnosis/getting-evaluated',
    title: 'Getting a Diagnosis',
    description: 'When to seek evaluation, how to get a referral, what to expect at the TMH Memory Disorder Clinic, and how to find a clinic near you.',
    icon: Phone,
  },
  {
    href: '/signs-diagnosis/toolkit',
    title: 'Free Doctor-Visit Toolkit',
    description: 'Downloadable checklists, caregiver observation guides, medication lists, and questions to bring to your next appointment. Free and printable.',
    icon: FileDown,
    featured: true,
  },
]

export default function SignsDiagnosisPage() {
  return (
    <article>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-10">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-warmgray-800 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-warmgray-900 mb-0.5">Not sure where to start? Call the helpline.</p>
            <p className="text-sm text-warmgray-900">
              The <strong>Alzheimer's Project Helpline</strong> is free and available Mon–Fri, 9am–5pm.{' '}
              <a href="tel:+18503862778" className="font-semibold underline hover:text-warmgray-900 transition-colors">(850) 386-2778</a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subPages.map((page) => {
          const Icon = page.icon
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`group flex flex-col gap-3 p-5 rounded-2xl border-2 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 focus-visible:ring-offset-2 ${
                page.featured
                  ? 'border-warmgray-300 bg-warmgray-50 hover:border-warmgray-400'
                  : 'border-warmgray-100 bg-white shadow-card hover:border-warmgray-200'
              }`}
            >
              <div className={`flex items-center gap-2 ${page.featured ? 'text-warmgray-900' : 'text-warmgray-700'}`}>
                <Icon className="w-4 h-4" aria-hidden />
                {page.featured && (
                  <span className="text-xs font-semibold bg-warmgray-200 text-warmgray-900 px-2 py-0.5 rounded-full">
                    Most popular
                  </span>
                )}
              </div>
              <div>
                <h2 className={`text-base font-bold mb-1.5 group-hover:text-warmgray-900 transition-colors ${
                  page.featured ? 'text-warmgray-900' : 'text-warmgray-900'
                }`}>
                  {page.title}
                </h2>
                <p className="text-sm text-warmgray-500 leading-relaxed">
                  {page.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-warmgray-800 group-hover:gap-2.5 transition-all duration-150">
                Open <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
