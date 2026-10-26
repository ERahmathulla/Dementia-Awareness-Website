import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Getting a Diagnosis',
  description: 'When to seek a memory evaluation, how to get a referral, and what to expect at the TMH Memory Disorder Clinic.',
}

const steps = [
  { title: 'Talk to your primary care doctor first', desc: 'Describe the changes you\'ve noticed. Bring the Memory & Behavior Changes Checklist from the toolkit. Your PCP can order initial tests and refer you to a specialist.' },
  { title: 'Request a referral to the Memory Disorder Clinic', desc: 'Ask for a referral to TMH Physician Partners – Neurology, or self-refer. The clinic schedules once records are received.' },
  { title: 'Gather records before the first visit', desc: 'Prior medical records, medication lists, and your completed toolkit documents. The clinic\'s team reviews these before your appointment.' },
  { title: 'Attend the comprehensive evaluation', desc: 'Expect 3–4 hours. A neurologist, neuropsychologist, and social worker will each meet with the patient and (if present) a family member.' },
  { title: 'Receive your individualized care plan', desc: 'The team provides a diagnosis (if possible), medication review, and referrals to community partners — including services on this site.' },
]

const warningSymptoms = [
  'Word-finding difficulty or trouble following conversations',
  'Confusion about time, dates, or familiar places',
  'Trouble with familiar tasks (cooking, finances, driving)',
  'Repeatedly misplacing objects',
  'Getting lost in familiar places',
  'Poor judgment or decision-making',
  'Personality or mood changes noticed by family',
]

export default function GettingEvaluated() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'Getting Evaluated' },
      ]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Getting a Diagnosis</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        A proper diagnosis is the foundation for good care planning. Here's what to expect when seeking an evaluation in the Big Bend region.
      </p>

      {/* TMH MDC highlight */}
      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-10">
        <h2 className="text-base font-bold text-warmgray-900 mb-3">TMH Memory Disorder Clinic</h2>
        <p className="text-sm text-warmgray-800 mb-4">
          One of only 17 state-designated Memory Disorder Clinics in Florida, funded by DOEA under the Alzheimer's Disease Initiative. Services include neurological evaluation, neuropsychological testing, medication review, psychosocial assessment, and referral to community partners.
        </p>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2 text-warmgray-800">
            <Phone className="w-4 h-4 shrink-0" aria-hidden />
            <a href="tel:+18504315001" className="font-semibold hover:text-warmgray-900 transition-colors">(850) 431-5001</a>
            <span className="text-warmgray-600">· Social work: option 7</span>
          </div>
          <div className="flex items-center gap-2 text-warmgray-800">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden />
            1300 Miccosukee Rd, Tallahassee, FL 32308
          </div>
        </div>
        <p className="text-xs text-warmgray-700">
          <strong>Self-referral accepted.</strong> You do not need a doctor's referral to contact the clinic, but records are needed to schedule.
        </p>
      </div>

      {/* When to seek evaluation */}
      <section className="mb-10" aria-labelledby="when-heading">
        <h2 id="when-heading" className="text-xl font-bold text-warmgray-900 mb-4">When to seek an evaluation</h2>
        <p className="text-sm text-warmgray-500 mb-4">Consider scheduling an evaluation if you or a family member has noticed any of the following over weeks or months:</p>
        <ul className="space-y-2" role="list">
          {warningSymptoms.map((s) => (
            <li key={s} className="flex items-center gap-2.5 text-sm text-warmgray-700">
              <CheckCircle className="w-4 h-4 text-warmgray-600 shrink-0" aria-hidden />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-10" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-xl font-bold text-warmgray-900 mb-5">The evaluation process: step by step</h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-warmgray-100 text-warmgray-900 text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-semibold text-warmgray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-warmgray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm font-semibold text-warmgray-900 mb-2">Ready for the first appointment?</p>
        <p className="text-sm text-warmgray-900 mb-4">Download the free doctor-visit toolkit to prepare for the evaluation.</p>
        <Link href="/signs-diagnosis/toolkit" className="btn-primary text-sm">
          <ArrowRight className="w-4 h-4" aria-hidden /> Get the free toolkit
        </Link>
      </div>
    </article>
  )
}
