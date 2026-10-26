import type { Metadata } from 'next'
import Link from 'next/link'
import { FileDown, CheckSquare, MessageSquare, Pill, Eye, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Doctor-Visit Toolkit',
  description: 'Free downloadable checklists, caregiver observation guides, medication lists, and questions to bring to your doctor appointment.',
}

const toolkitItems = [
  {
    icon: Eye,
    title: 'Recognizing Memory Changes',
    description: 'Learn what kinds of memory and thinking changes are worth bringing up with a doctor — and how to describe them clearly.',
    color: 'lavender',
    filename: 'recognizing-memory-changes.pdf',
  },
  {
    icon: CheckSquare,
    title: 'Changes You\'ve Noticed',
    description: 'A structured form to document specific changes you\'ve observed over time — memory, language, judgment, daily tasks, and personality.',
    color: 'teal',
    filename: 'changes-youve-noticed.pdf',
  },
  {
    icon: Pill,
    title: 'Medication List',
    description: 'A form to record all current medications, dosages, over-the-counter supplements, and vitamins to bring to the appointment.',
    color: 'sage',
    filename: 'medication-list.pdf',
  },
  {
    icon: MessageSquare,
    title: 'Questions to Discuss with Your Doctor',
    description: 'Pre-written questions about diagnosis, next steps, medication options, community resources, and what to expect.',
    color: 'healthblue',
    filename: 'questions-for-your-doctor.pdf',
  },
]

const colorMap = {
  lavender: 'bg-warmgray-100 text-warmgray-800',
  teal: 'bg-warmgray-100 text-warmgray-800',
  healthblue: 'bg-warmgray-100 text-warmgray-800',
  sage: 'bg-warmgray-100 text-warmgray-800',
}

export default function ToolkitPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'Free Doctor-Visit Toolkit' },
      ]} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-warmgray-100 text-warmgray-900 rounded-full text-xs font-semibold mb-4">
          <FileDown className="w-3 h-3" aria-hidden />
          Free Download
        </div>
        <h1 className="text-3xl font-bold text-warmgray-900 mb-4">
          Free Doctor-Visit Toolkit
        </h1>
        <p className="text-lg text-warmgray-500 leading-relaxed max-w-2xl">
          Bring these four printable documents to your first doctor visit. They help you describe changes clearly, ask the right questions, and make the most of a short appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {toolkitItems.map((item) => {
          const Icon = item.icon
          const colorClass = colorMap[item.color as keyof typeof colorMap]

          return (
            <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
                <Icon className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-semibold text-warmgray-900 mb-1.5">{item.title}</h2>
                <p className="text-sm text-warmgray-500 leading-relaxed mb-3">{item.description}</p>
                <a
                  href={`/toolkit/${item.filename}`}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-warmgray-900 hover:text-warmgray-600 transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" aria-hidden />
                  Download PDF
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Full packet download */}
      <div className="p-6 rounded-2xl bg-warmgray-800 text-white mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-warmgray-700 flex items-center justify-center shrink-0">
            <FileDown className="w-6 h-6" aria-hidden />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Download the full packet</h2>
            <p className="text-warmgray-200 text-sm mb-5 leading-relaxed">
              All four documents combined into one printable PDF — bring it to your appointment or share it with a family member. Free, no email required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/toolkit/visit-complete-packet.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-warmgray-900 font-semibold rounded-xl hover:bg-warmgray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm"
              >
                <FileDown className="w-4 h-4" aria-hidden />
                Download Full Packet (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How to use */}
      <div className="prose prose-warmgray max-w-none">
        <h2>How to use the toolkit</h2>
        <ol>
          <li><strong>Before the appointment:</strong> Fill out the Memory & Behavior Changes Checklist over a few days. Note specific examples you can describe to the doctor.</li>
          <li><strong>If a family member is coming:</strong> Share the Caregiver Observation Guide with them so they can add their observations.</li>
          <li><strong>Fill in the Medication List</strong> as completely as possible — include over-the-counter supplements, vitamins, and all prescription medications.</li>
          <li><strong>Review the Questions to Ask</strong> and check off the ones most relevant to your situation. You don't need to ask all of them.</li>
          <li><strong>Bring all four documents</strong> to the appointment and offer to leave a copy for the doctor's records.</li>
        </ol>
      </div>

      <div className="mt-8 flex justify-end text-sm text-warmgray-400">
        <Link href="/signs-diagnosis/getting-evaluated" className="text-warmgray-800 hover:text-warmgray-900 transition-colors font-medium flex items-center gap-1">
          Next: Getting Evaluated <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
