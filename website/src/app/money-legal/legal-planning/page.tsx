import type { Metadata } from 'next'
import { FileText, AlertCircle, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Legal Planning',
  description: 'Power of attorney, healthcare surrogates, advance directives, wills, and elder law resources for families in the Big Bend region.',
}

const documents = [
  { name: 'Durable Power of Attorney', desc: 'Authorizes a trusted person to make financial and legal decisions on behalf of the person with dementia if they become unable to do so. "Durable" means it remains valid even if the person loses capacity. Must be signed while the person still has legal capacity to do so.', urgent: true },
  { name: 'Healthcare Surrogate Designation', desc: 'Florida\'s equivalent of a healthcare proxy. Names a person to make medical decisions when the individual cannot make them. Different from a POA — this specifically covers medical decisions.' , urgent: true },
  { name: 'Advance Directive / Living Will', desc: 'Documents the person\'s wishes about end-of-life care — including CPR, ventilators, feeding tubes, and artificial nutrition. Should be discussed and completed while the person can meaningfully participate.', urgent: true },
  { name: 'POLST / DNR', desc: 'Physician Orders for Life-Sustaining Treatment — a medical order (not just a legal document) that travels with the patient across care settings. Different from an advance directive; requires a physician signature.', urgent: false },
  { name: 'Will and Trust', desc: 'A will ensures assets are distributed according to the person\'s wishes. A trust can provide additional protections and flexibility. Consider consulting an elder law attorney to determine which is appropriate.', urgent: false },
  { name: 'Guardianship / Conservatorship', desc: 'A last resort when a person loses capacity and did not execute a POA. Requires a court proceeding. Much more expensive and time-consuming than planning ahead with a POA.', urgent: false },
]

export default function LegalPlanningPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[{ label: 'Money & Legal Help', href: '/money-legal' }, { label: 'Legal Planning' }]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Legal Planning</h1>
      <p className="text-lg text-warmgray-500 mb-4 max-w-2xl leading-relaxed">
        Legal documents must be completed while the person with dementia still has legal capacity to sign them. The earlier this is done, the better the options.
      </p>

      <div role="alert" className="p-4 rounded-xl bg-emergency-50 border-l-4 border-emergency-500 mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-emergency-600 shrink-0 mt-0.5" aria-hidden />
        <p className="text-sm text-emergency-800"><strong>Act early.</strong> Once a person with dementia loses legal capacity, power of attorney can no longer be executed — and the only option becomes guardianship, which requires a court order and is far more costly and stressful for the family.</p>
      </div>

      <div className="space-y-3 mb-10">
        {documents.map((doc) => (
          <div key={doc.name} className={`card-base p-5 ${doc.urgent ? 'border-l-4 border-l-warmgray-400' : ''}`}>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-warmgray-700" aria-hidden />
              <h2 className="text-base font-bold text-warmgray-900">{doc.name}</h2>
              {doc.urgent && <span className="badge bg-warmgray-100 text-warmgray-900">Do this first</span>}
            </div>
            <p className="text-sm text-warmgray-500 leading-relaxed">{doc.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
          <h2 className="text-sm font-bold text-warmgray-900 mb-2">Florida Caregiver Toolkit</h2>
          <p className="text-sm text-warmgray-900 mb-3">The DOEA provides a free downloadable guide to caregiving in Florida that includes a section on legal planning, elder law, and financial conversations.</p>
          <a href="https://elderaffairs.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors">
            Download from DOEA <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>
        <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
          <p className="text-sm text-warmgray-600"><strong>Find an elder law attorney:</strong> The Florida Bar Lawyer Referral Service can connect you with elder law attorneys in the Tallahassee area. <a href="https://www.floridabar.org" target="_blank" rel="noopener noreferrer" className="text-warmgray-800 hover:text-warmgray-900 font-medium">floridabar.org</a></p>
        </div>
      </div>
    </article>
  )
}
