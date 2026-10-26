import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: '10 Early Signs & Warning Sign Guide',
  description: 'Each of the 10 early signs of dementia explained, with a plain-language comparison of normal aging vs. potential warning signs for each domain.',
}

const signs = [
  {
    num: 1,
    title: 'Memory loss that disrupts daily life',
    desc: 'Forgetting recently learned information, important dates or events, asking the same questions over and over, and relying on memory aids or family members for things they used to handle on their own.',
    category: 'Memory',
    normal: 'Occasionally forgetting a name or appointment, but remembering it later',
    warning: 'Forgetting recently learned information, repeatedly asking the same question',
  },
  {
    num: 2,
    title: 'Challenges in planning or solving problems',
    desc: 'Trouble following a plan or working with numbers, following a familiar recipe, keeping track of monthly bills, or concentrating and taking longer to do things than before.',
    category: 'Problem-Solving',
    normal: 'Making occasional errors when managing finances',
    warning: 'Difficulty following a familiar recipe, or losing track of monthly bills',
  },
  {
    num: 3,
    title: 'Difficulty completing familiar tasks',
    desc: 'Having trouble driving to a familiar location, managing a budget at work, or remembering the rules of a favorite game.',
    category: 'Familiar Tasks',
    normal: 'Occasionally needing help with settings on a microwave or recording a TV show',
    warning: 'Trouble driving to a familiar location, managing a budget at work, or remembering the rules of a favorite game',
  },
  {
    num: 4,
    title: 'Confusion with time or place',
    desc: "Losing track of dates, seasons and the passage of time. Having trouble understanding something if it's not happening immediately. Forgetting where they are or how they got there.",
    category: 'Time & Place',
    normal: 'Getting confused about the day of the week but figuring it out later',
    warning: 'Losing track of dates, seasons, or the passage of time',
  },
  {
    num: 5,
    title: 'Trouble understanding visual images and spatial relationships',
    desc: "For some people, having vision problems is a sign of Alzheimer's. They may have difficulty reading, judging distance and determining color or contrast.",
    category: 'Vision & Spatial',
    normal: 'Vision changes related to cataracts',
    warning: 'Difficulty reading, judging distance, or recognizing colors',
  },
  {
    num: 6,
    title: 'New problems with words in speaking or writing',
    desc: 'Having trouble following or joining a conversation. Stopping in the middle of a conversation with no idea how to continue, or repeating themselves. Trouble finding the right word or calling things by the wrong name.',
    category: 'Language',
    normal: 'Sometimes having trouble finding the right word',
    warning: 'Stopping mid-sentence, repeating self, or calling things by wrong names',
  },
  {
    num: 7,
    title: 'Misplacing things and losing the ability to retrace steps',
    desc: 'Putting things in unusual places. Losing things and being unable to go back over their steps to find them again. Sometimes accusing others of stealing.',
    category: 'Misplacing Things',
    normal: 'Misplacing things and retracing steps to find them',
    warning: 'Putting objects in unusual places and being unable to retrace steps',
  },
  {
    num: 8,
    title: 'Decreased or poor judgment',
    desc: 'Experiencing changes in judgment or decision-making. May pay less attention to grooming or keeping themselves clean. May give large amounts of money to telemarketers.',
    category: 'Judgment',
    normal: 'Making a questionable decision occasionally',
    warning: 'Reduced ability to manage money, personal hygiene, or safety',
  },
  {
    num: 9,
    title: 'Withdrawal from work or social activities',
    desc: "Removing themselves from hobbies, social activities, work projects, or sports. Trouble keeping up with a favorite sports team or completing a favorite hobby.",
    category: 'Social Withdrawal',
    normal: 'Tiring of housework and wanting more time away from social obligations',
    warning: 'Withdrawing from social activities, hobbies, or work projects',
  },
  {
    num: 10,
    title: 'Changes in mood and personality',
    desc: 'Becoming confused, suspicious, depressed, fearful or anxious. Easily upset at home, at work, with friends, or in places where they are out of their comfort zone.',
    category: 'Mood & Personality',
    normal: 'Feeling weary of work, family, or social obligations',
    warning: 'Increased confusion, suspicion, depression, fear, or anxiety',
  },
]

export default function WarningSigns() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: '10 Early Signs & Warning Guide' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">
        10 Early Signs & Warning Sign Guide
      </h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Below are the 10 domains where dementia commonly shows early warning signs. Each domain includes a plain-language explanation followed by a side-by-side comparison of what&apos;s normal versus what may be worth discussing with a doctor.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8 p-4 bg-warmgray-50 rounded-xl border border-warmgray-200 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-warmgray-700" aria-hidden />
          <span className="text-warmgray-700 font-medium">Normal aging</span>
        </div>
        <div className="flex items-center gap-2">
          <XCircle className="w-4 h-4 text-emergency-500" aria-hidden />
          <span className="text-warmgray-700 font-medium">Potential warning sign — worth discussing with a doctor</span>
        </div>
      </div>

      <div className="space-y-5 mb-10">
        {signs.map((sign) => (
          <div key={sign.num} className="rounded-2xl border border-warmgray-100 overflow-hidden bg-white shadow-card">
            {/* Sign header */}
            <div className="flex items-start gap-4 p-5 pb-4">
              <div className="w-10 h-10 rounded-full bg-warmgray-100 text-warmgray-900 font-bold text-sm flex items-center justify-center shrink-0">
                {sign.num}
              </div>
              <div>
                <h2 className="text-base font-bold text-warmgray-900 mb-1.5">{sign.title}</h2>
                <p className="text-sm text-warmgray-500 leading-relaxed">{sign.desc}</p>
              </div>
            </div>

            {/* Comparison row */}
            <div className="border-t border-warmgray-100">
              <div className="px-5 py-2 bg-warmgray-50 border-b border-warmgray-100">
                <span className="text-xs font-semibold uppercase tracking-wide text-warmgray-500">
                  {sign.category}: Normal Aging vs. Warning Sign
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-start gap-3 p-4 border-b md:border-b-0 md:border-r border-warmgray-100">
                  <CheckCircle className="w-5 h-5 text-warmgray-600 shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm text-warmgray-700 leading-relaxed">{sign.normal}</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emergency-50/30">
                  <XCircle className="w-5 h-5 text-emergency-500 shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm text-warmgray-700 leading-relaxed">{sign.warning}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA block */}
      <div className="p-6 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-6">
        <h2 className="text-lg font-bold text-warmgray-900 mb-2">
          Noticing some of these warning signs?
        </h2>
        <p className="text-sm text-warmgray-900 mb-5 leading-relaxed">
          The next step is talking to a doctor. Download our free toolkit with checklists and questions to bring to your appointment, or call the helpline to speak with someone now.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/signs-diagnosis/toolkit" className="btn-primary text-sm">
            <ArrowRight className="w-4 h-4" aria-hidden />
            Get the free toolkit
          </Link>
          <a href="tel:+18503862778" className="btn-secondary text-sm">
            <Phone className="w-4 h-4" aria-hidden />
            Call (850) 386-2778
          </a>
        </div>
      </div>

      <p className="text-xs text-warmgray-400">
        Source: Kramer ES, Johnson MN, Winslow B. &ldquo;Evaluation of Suspected Dementia.&rdquo; <em>Am Fam Physician.</em> American Academy of Family Physicians (AAFP).
      </p>
    </article>
  )
}
