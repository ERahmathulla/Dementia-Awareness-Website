import type { Metadata } from 'next'
import { Phone, Shield, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Medicare & Health Insurance',
  description: 'Free SHINE Medicare counseling, SMP fraud prevention, and ACA Marketplace navigators in the Big Bend region.',
}

export default function MedicarePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[{ label: 'Money & Legal Help', href: '/money-legal' }, { label: 'Medicare & Insurance' }]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Medicare & Health Insurance</h1>
      <p className="text-lg text-warmgray-500 mb-8 max-w-2xl leading-relaxed">
        Free, unbiased counseling is available to help you understand Medicare, choose the right plan, and avoid fraud.
      </p>

      <div className="space-y-4 mb-10">
        <div className="card-base p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-warmgray-100 flex items-center justify-center shrink-0"><Shield className="w-4.5 h-4.5 text-warmgray-700" aria-hidden /></div>
            <div>
              <h2 className="text-base font-bold text-warmgray-900">SHINE — Serving Health Insurance Needs of Elders</h2>
              <p className="text-xs text-warmgray-400">Advantage Aging Solutions / Florida DOEA</p>
            </div>
          </div>
          <p className="text-sm text-warmgray-500 mb-3 leading-relaxed">Free, unbiased Medicare and health-insurance counseling provided by trained volunteers. Help with plan selection, understanding benefits, billing disputes, low-income subsidy applications, and more. No sales pitch — ever.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18504880055" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors"><Phone className="w-3.5 h-3.5" aria-hidden />(850) 488-0055</a>
            <a href="https://floridashine.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">floridashine.org <ExternalLink className="w-3.5 h-3.5" aria-hidden /></a>
          </div>
        </div>

        <div className="card-base p-5">
          <h2 className="text-base font-bold text-warmgray-900 mb-2">SMP — Senior Medicare Patrol</h2>
          <p className="text-sm text-warmgray-500 mb-3 leading-relaxed">Helps seniors prevent, detect, and report Medicare and Medicaid fraud, errors, and abuse. SMP volunteers provide free education and counseling. Report suspected fraud through the SMP hotline.</p>
          <a href="tel:+18504880055" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors"><Phone className="w-3.5 h-3.5" aria-hidden />(850) 488-0055 — Advantage Aging</a>
        </div>

        <div className="card-base p-5">
          <h2 className="text-base font-bold text-warmgray-900 mb-2">ACA Marketplace Navigators</h2>
          <p className="text-sm text-warmgray-500 mb-3 leading-relaxed">Big Bend AHEC provides free outreach and enrollment help for the Affordable Care Act Health Insurance Marketplace — for individuals and families who are not yet Medicare-eligible. Appointment scheduling available.</p>
          <a href="tel:+18502241177" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors"><Phone className="w-3.5 h-3.5" aria-hidden />(850) 224-1177 — Big Bend AHEC</a>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 text-sm text-warmgray-600">
        <strong>Medicare open enrollment</strong> runs October 15–December 7 each year. Contact SHINE before and during this period to review your plan options at no cost.
      </div>
    </article>
  )
}
