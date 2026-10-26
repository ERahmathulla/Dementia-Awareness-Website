import type { Metadata } from 'next'
import { Car, Phone, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Transportation & Driving',
  description: 'Senior transportation options, driving cessation guidance, and dementia-friendly transit resources in the Big Bend region.',
}

const transportOptions = [
  { name: 'ADI / CCE Transportation Services', desc: 'Transportation to medical appointments and community activities as part of in-home and community service packages. Access through the Elder Helpline.', phone: '866-467-4624' },
  { name: 'Senior Transportation Programs', desc: 'Leon County Transit offers reduced-fare services for seniors. Contact your county transportation department for local options.', phone: null },
  { name: 'Medical Transport', desc: 'Medicaid Non-Emergency Medical Transportation (NEMT) covers rides to Medicaid-covered medical appointments. Request through your managed care plan.', phone: null },
  { name: 'Volunteer Driver Programs', desc: 'Some faith communities and nonprofits provide volunteer driver services for medical appointments. Contact the Alzheimer\'s Project helpline for current local options.', phone: '(850) 386-2778' },
]

export default function TransportationPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Find Care & Services', href: '/care-services' },
        { label: 'Transportation & Driving' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Transportation & Driving</h1>
      <p className="text-lg text-warmgray-500 mb-8 max-w-2xl leading-relaxed">
        Driving cessation is one of the most difficult conversations in dementia care. Planning transportation alternatives early makes the transition less disruptive.
      </p>

      <section className="mb-10" aria-labelledby="driving-heading">
        <h2 id="driving-heading" className="text-xl font-bold text-warmgray-900 mb-4">Driving Cessation</h2>
        <div className="space-y-4">
          <div className="card-base p-5">
            <h3 className="text-base font-bold text-warmgray-900 mb-2">TMH Memory Disorder Clinic — Driving Cessation Counseling</h3>
            <p className="text-sm text-warmgray-500 mb-3">The MDC social work team facilitates difficult "when to stop driving" conversations — with the patient, family, and doctor. Having a medical professional deliver the message often carries more weight than a family conversation alone.</p>
            <a href="tel:+18504315001" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              <Phone className="w-3.5 h-3.5" aria-hidden />(850) 431-5001, option 7
            </a>
          </div>
          <div className="card-base p-5">
            <h3 className="text-base font-bold text-warmgray-900 mb-2">Safe Mobility for Life (Florida DOT)</h3>
            <p className="text-sm text-warmgray-500 mb-3">Florida DOT's program for older driver safety. Includes assessment tools and resources for healthcare professionals, families, and drivers. Linked through FSU REACH.</p>
            <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              FSU REACH driving resources <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>
          <div className="card-base p-5">
            <h3 className="text-base font-bold text-warmgray-900 mb-2">Dementia-Friendly Transportation Training</h3>
            <p className="text-sm text-warmgray-500 mb-3">Short training videos from FSU REACH helping transit operators and family care partners support passengers with dementia — including how to assist with boarding, communication, and disorientation.</p>
            <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              Access training videos <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="transport-options-heading">
        <h2 id="transport-options-heading" className="text-xl font-bold text-warmgray-900 mb-4">Transportation Alternatives</h2>
        <div className="space-y-3">
          {transportOptions.map((opt) => (
            <div key={opt.name} className="flex gap-3 p-4 rounded-xl bg-white border border-warmgray-100 shadow-card">
              <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4 text-warmgray-500" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-bold text-warmgray-900 mb-1">{opt.name}</h3>
                <p className="text-sm text-warmgray-500 leading-relaxed">{opt.desc}</p>
                {opt.phone && (
                  <a href={`tel:${opt.phone.replace(/\D/g,'')}`} className="flex items-center gap-1 mt-1.5 text-xs font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
                    <Phone className="w-3 h-3" aria-hidden />{opt.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
