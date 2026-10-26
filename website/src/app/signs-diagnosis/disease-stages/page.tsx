import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disease Stages & What to Expect',
  description: 'Early, middle, and late stage descriptions for dementia — what changes, what stays the same, and how to plan ahead.',
}

const stages = [
  {
    stage: 'Early Stage',
    tagline: 'Mild changes, high independence',
    color: 'sage',
    items: [
      'Memory lapses — forgetting names, recent events, or where items were placed',
      'Getting lost in familiar places occasionally',
      'Trouble with complex tasks like managing finances',
      'Word-finding difficulties in conversation',
      'The person is usually still able to drive, work, and live independently with some support',
      'Good time to plan legally and financially, set up advance directives, and join an early-stage support group',
    ],
  },
  {
    stage: 'Middle Stage',
    tagline: 'Increasing assistance needed',
    color: 'amber',
    items: [
      'Significant memory loss — may not recognize familiar people',
      'Confusion about time and place becomes frequent',
      'Needs help with daily tasks: bathing, dressing, eating',
      'Wandering and getting lost becomes a real safety concern',
      'Behavioral changes: agitation, sundowning, sleep disturbances',
      'This is often the longest and most challenging stage for caregivers — respite care becomes essential',
    ],
  },
  {
    stage: 'Late Stage',
    tagline: 'Full-time care required',
    color: 'emergency',
    items: [
      'Severe memory loss — may no longer recognize family members',
      'Limited communication; may only use words or sounds',
      'Full assistance needed for all daily activities',
      'Increased vulnerability to infections (especially pneumonia)',
      'Loss of mobility; may be bedridden in the final months',
      'Focus shifts to comfort, dignity, and hospice care',
    ],
  },
]

const colorMap: Record<string, { border: string; bg: string; badge: string; title: string; dot: string }> = {
  sage: { border: 'border-warmgray-200', bg: 'bg-warmgray-50', badge: 'bg-warmgray-100 text-warmgray-800', title: 'text-warmgray-900', dot: 'bg-warmgray-600' },
  amber: { border: 'border-warmgray-200', bg: 'bg-warmgray-50', badge: 'bg-warmgray-100 text-warmgray-800', title: 'text-warmgray-900', dot: 'bg-warmgray-600' },
  emergency: { border: 'border-emergency-200', bg: 'bg-emergency-50', badge: 'bg-emergency-100 text-emergency-700', title: 'text-emergency-900', dot: 'bg-emergency-400' },
}

export default function DiseaseStages() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'Disease Stages' },
      ]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Disease Stages & What to Expect</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Dementia progresses through three broad stages. Every person's experience is different, but understanding the general arc helps families plan ahead and connect to the right support at the right time.
      </p>

      <div className="space-y-5 mb-10">
        {stages.map((stage) => {
          const colors = colorMap[stage.color]
          return (
            <div key={stage.stage} className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden`}>
              <div className="flex items-center gap-3 px-5 py-4">
                <span className={`badge ${colors.badge} text-sm font-semibold`}>{stage.stage}</span>
                <span className={`text-sm ${colors.title} font-medium`}>{stage.tagline}</span>
              </div>
              <div className="px-5 pb-5">
                <ul className="space-y-2" role="list">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-warmgray-700">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm font-semibold text-warmgray-900 mb-1">Get personalized guidance for where you are now</p>
        <p className="text-sm text-warmgray-900 mb-4">The TMH Memory Disorder Clinic social worker and the Alzheimer's Project helpline can help you understand what to expect and which services are right for your situation.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/signs-diagnosis/getting-evaluated" className="btn-primary text-sm">Get evaluated</Link>
          <Link href="/care-services/respite" className="btn-secondary text-sm">Find respite care</Link>
        </div>
      </div>
    </article>
  )
}
