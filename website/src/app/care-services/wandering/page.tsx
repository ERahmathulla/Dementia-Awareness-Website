import type { Metadata } from 'next'
import { Phone, AlertCircle, ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Wandering & Missing Persons',
  description: 'Silver Alert, Scent Evidence K9 kits, prevention strategies, and what to do if a person with dementia goes missing.',
}

export default function WanderingPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Find Care & Services', href: '/care-services' },
        { label: 'Wandering & Missing Persons' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Wandering & Missing Persons</h1>
      <p className="text-lg text-warmgray-500 mb-8 max-w-2xl leading-relaxed">
        Wandering affects up to 60% of people with dementia. Advance planning is the most effective safety measure — by the time someone wanders, it's too late to put systems in place.
      </p>

      <div role="alert" className="p-5 rounded-2xl bg-emergency-50 border-l-4 border-emergency-500 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-emergency-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-bold text-emergency-900 mb-1">If someone is missing right now</p>
            <p className="text-sm text-emergency-800">Call <a href="tel:911" className="font-bold underline">911</a> immediately. Tell the dispatcher the person has dementia and provide a recent photo description and last known location. Ask law enforcement to file a <strong>Silver Alert</strong>.</p>
          </div>
        </div>
      </div>

      <section className="mb-8" aria-labelledby="proactive-heading">
        <h2 id="proactive-heading" className="text-xl font-bold text-warmgray-900 mb-4">Proactive steps (do these now)</h2>
        <div className="space-y-4">
          <div className="card-base p-5">
            <h3 className="text-base font-bold text-warmgray-900 mb-1">Scent Evidence K9 — Free Scent Preservation Kit</h3>
            <p className="text-sm text-warmgray-500 mb-3">A DCCI partner program. A scent preservation kit stores a scent sample that trained K9 teams can use to locate a missing person. Takes 5 minutes to complete. <strong>Get the kit before you need it.</strong></p>
            <a href="mailto:DCCI@elderaffairs.org" className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">Request a kit: DCCI@elderaffairs.org</a>
          </div>
          <div className="card-base p-5">
            <h3 className="text-base font-bold text-warmgray-900 mb-1">Silver Alert Registration (Florida)</h3>
            <p className="text-sm text-warmgray-500 mb-3">Florida's Silver Alert system is activated when a cognitively impaired adult is reported missing to law enforcement. It does not require advance registration — file the report with local police or the sheriff's office and ask them to activate a Silver Alert.</p>
            <a href="https://www.fdle.state.fl.us" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              Florida Dept. of Law Enforcement <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="prevention-heading">
        <h2 id="prevention-heading" className="text-xl font-bold text-warmgray-900 mb-4">Prevention strategies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Install door alarms or chimes on exterior doors', 'Place locks high or low — out of typical eye level', 'Use door camouflage (paint doors to blend with walls)', 'Place a large STOP sign on exit doors', 'Enroll in a medical ID bracelet program', 'Keep recent photos updated — including what they typically wear', 'Inform neighbors to call you if they see the person outside alone', 'Reduce triggers: restlessness, searching for something, anxiety'].map((tip) => (
            <div key={tip} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-warmgray-100 text-sm text-warmgray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-warmgray-400 mt-1.5 shrink-0" aria-hidden />
              {tip}
            </div>
          ))}
        </div>
      </section>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm font-semibold text-warmgray-900 mb-2">Free wandering video</p>
        <p className="text-sm text-warmgray-900 mb-2">The Alzheimer's Project video library includes a dedicated "Wandering" video with practical guidance. FSU REACH also hosts crisis-intervention videos on dementia emergencies.</p>
        <a href="https://alzheimersproject.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors">
          Visit Alzheimer's Project video library <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </div>
    </article>
  )
}
