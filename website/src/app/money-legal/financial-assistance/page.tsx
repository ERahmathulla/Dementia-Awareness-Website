import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Financial Assistance Programs',
  description: 'EHEAP energy assistance, caregiver stipends, Medicare, Medicaid, VA benefits, SSDI, food and housing assistance for older adults.',
}

const programs = [
  { name: 'EHEAP — Emergency Home Energy Assistance for the Elderly', desc: 'Provides home energy emergency help for low-income households with someone 60 or older. Covers utility shutoff prevention, deposits, and emergency energy-related repairs.', org: 'Advantage Aging Solutions', phone: '(850) 488-0055', color: 'amber' },
  { name: 'HCE Caregiver Stipend', desc: 'Home Care for the Elderly provides a monthly stipend to primary caregivers to support the elder\'s housing, food, doctor visits, and health maintenance costs. Contact the Elder Helpline for eligibility.', org: 'Advantage Aging / Elder Helpline', phone: '866-467-4624', color: 'lavender' },
  { name: 'Medicare', desc: 'Federal health insurance for adults 65+ and eligible people with disabilities. Covers hospitalizations, doctor visits, and some home health. Does not cover most long-term care. Contact SHINE for free counseling on Medicare coverage and plan options.', org: 'Federal — SHINE counseling available locally', phone: '(850) 488-0055', color: 'healthblue' },
  { name: 'Medicaid', desc: 'State/federal health and long-term care coverage for low-income individuals. Florida Medicaid can fund home care, adult day programs, and nursing facility care for eligible people with dementia. Begin through the Elder Helpline.', org: 'Elder Helpline intake', phone: '1-800-963-5337', color: 'teal' },
  { name: 'Veterans Benefits (VA)', desc: 'Veterans with dementia may be eligible for Aid & Attendance benefits, which provide a monthly payment to help cover care costs. The VA also offers caregiver support programs. Contact the local VA or a Veterans Service Officer for a free benefits review.', org: 'U.S. Department of Veterans Affairs', phone: '1-800-827-1000', color: 'sage' },
  { name: 'Social Security Disability (SSDI)', desc: 'People with early-onset dementia (under 65) who can no longer work may qualify for SSDI. Alzheimer\'s disease is an SSA Compassionate Allowance condition, which can speed approval.', org: 'Social Security Administration', phone: '1-800-772-1213', color: 'warmgray' },
]

const colorMap: Record<string, string> = {
  amber: 'bg-warmgray-100 text-warmgray-800', lavender: 'bg-warmgray-100 text-warmgray-800',
  healthblue: 'bg-warmgray-100 text-warmgray-800', teal: 'bg-warmgray-100 text-warmgray-800',
  sage: 'bg-warmgray-100 text-warmgray-800', warmgray: 'bg-warmgray-100 text-warmgray-800',
}

export default function FinancialAssistancePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[{ label: 'Money & Legal Help', href: '/money-legal' }, { label: 'Financial Assistance' }]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Financial Assistance Programs</h1>
      <p className="text-lg text-warmgray-500 mb-8 max-w-2xl leading-relaxed">
        Multiple federal and state programs can help cover the cost of care, utilities, food, and housing. Many families leave significant benefits unclaimed simply because they don't know they exist.
      </p>
      <div className="space-y-4">
        {programs.map((p) => (
          <div key={p.name} className="card-base p-5">
            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
              <h2 className="text-base font-bold text-warmgray-900">{p.name}</h2>
              <span className={`badge shrink-0 ${colorMap[p.color]}`}>{p.org}</span>
            </div>
            <p className="text-sm text-warmgray-500 leading-relaxed mb-3">{p.desc}</p>
            <a href={`tel:${p.phone.replace(/\D/g,'')}`} className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              <Phone className="w-3.5 h-3.5" aria-hidden />{p.phone}
            </a>
          </div>
        ))}
      </div>
    </article>
  )
}
