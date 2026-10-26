import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, FileDown, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Talking to Your Doctor',
  description: 'How to communicate effectively with healthcare providers about dementia care, get referrals, and advocate for your loved one.',
}

const tips = [
  {
    heading: 'Bring a written summary of changes',
    body: 'Doctors have limited time. A one-page written list of specific changes you\'ve observed — with examples and approximate timing — is far more useful than trying to recall everything during the appointment.',
  },
  {
    heading: 'Bring another person if possible',
    body: 'A second set of ears helps. One person can listen and take notes while the other talks to the doctor. Ask the doctor if it\'s okay to record the conversation on your phone.',
  },
  {
    heading: 'Ask for written instructions',
    body: 'Always ask for written discharge instructions, medication changes, and referral details. Don\'t leave without understanding the next steps.',
  },
  {
    heading: 'Use the free doctor-visit toolkit',
    body: 'The toolkit includes a medication list, a questions sheet, and a behavior observation guide — all designed to make appointments more productive.',
  },
  {
    heading: 'Ask specifically for a Memory Disorder Clinic referral',
    body: 'Many PCPs won\'t automatically refer to a specialist. If you feel a more thorough evaluation is needed, ask directly: "Can you refer us to the TMH Memory Disorder Clinic or a neurologist?"',
  },
  {
    heading: 'Discuss driving and safety early',
    body: 'Conversations about driving cessation are easier to have before a crisis occurs. Ask the doctor to address driving directly with the patient — it often carries more weight coming from a medical professional.',
  },
]

const questions = [
  'What is your diagnosis, or what conditions are being ruled out?',
  'What tests or evaluations do you recommend next?',
  'What medications are being prescribed, and what are the side effects?',
  'Are there non-medication interventions we should try?',
  'When should we follow up, and what should prompt us to call sooner?',
  'Can you refer us to a memory specialist or the TMH Memory Disorder Clinic?',
  'What community resources do you recommend for caregivers?',
  'Is it safe for my loved one to continue driving?',
  'What should we plan for as the disease progresses?',
]

export default function TalkingToYourDoctorPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Talking to Your Doctor' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Talking to Your Doctor</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Short appointments and communication gaps are common frustrations for caregivers. These strategies help you make the most of every visit and advocate effectively for your loved one.
      </p>

      {/* Tips */}
      <section className="mb-10" aria-labelledby="tips-heading">
        <h2 id="tips-heading" className="text-xl font-bold text-warmgray-900 mb-5">Before and during the appointment</h2>
        <div className="space-y-3">
          {tips.map((tip, i) => (
            <div key={tip.heading} className="flex gap-4 p-4 rounded-xl bg-white border border-warmgray-100 shadow-card">
              <div className="w-8 h-8 rounded-full bg-warmgray-100 text-warmgray-900 text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-sm font-bold text-warmgray-900 mb-1">{tip.heading}</h3>
                <p className="text-sm text-warmgray-500 leading-relaxed">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Questions to ask */}
      <section className="mb-10" aria-labelledby="questions-heading">
        <h2 id="questions-heading" className="text-xl font-bold text-warmgray-900 mb-4">Questions to ask your doctor</h2>
        <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
          <ul className="space-y-2" role="list">
            {questions.map((q) => (
              <li key={q} className="flex items-start gap-2.5 text-sm text-warmgray-900">
                <MessageCircle className="w-4 h-4 text-warmgray-700 shrink-0 mt-0.5" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FSU REACH resource */}
      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-6">
        <p className="text-sm text-warmgray-700 mb-2">
          <strong>FSU REACH</strong> offers a free guide: <em>"How To Talk With Your Healthcare Provider"</em> — practical tips on communicating with providers to get the care you want.
        </p>
        <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
          View FSU REACH resources →
        </a>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/signs-diagnosis/toolkit" className="btn-primary text-sm">
          <FileDown className="w-4 h-4" aria-hidden />
          Get the free doctor-visit toolkit
        </Link>
        <Link href="/signs-diagnosis/getting-evaluated" className="btn-secondary text-sm">
          Getting a diagnosis <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
