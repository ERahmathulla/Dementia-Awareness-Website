import type { Metadata } from 'next'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Types of Dementia',
  description: "Learn about different types of dementia including Alzheimer's, vascular, Lewy body, and frontotemporal dementia.",
}

const types = [
  { name: "Alzheimer's Disease", pct: '60–80%', desc: "The most common cause of dementia. Characterized by plaques and tangles in the brain that damage nerve cells. Typically begins with memory loss and progresses to language, problem-solving, and eventually physical difficulties.", symptoms: ["Progressive memory loss", "Confusion about time and place", "Language and communication difficulties", "Behavioral and personality changes"] },
  { name: 'Vascular Dementia', pct: '10%', desc: 'Caused by conditions that block or reduce blood flow to the brain, often following a stroke. Symptoms depend on which part of the brain is affected.', symptoms: ["Sudden changes after a stroke or series of mini-strokes", "Problems with planning, organizing, judgment", "Memory loss", "Slowed thinking"] },
  { name: 'Lewy Body Dementia', pct: '~10%', desc: 'Caused by abnormal protein deposits (Lewy bodies) in the brain. Includes both dementia with Lewy bodies and Parkinson\'s disease dementia.', symptoms: ["Visual hallucinations early in the disease", "Movement problems similar to Parkinson's", "Sleep disturbances (acting out dreams)", "Significant fluctuations in alertness"] },
  { name: 'Frontotemporal Dementia (FTD)', pct: '5–10%', desc: 'Affects the frontal and temporal lobes. More common in people under 65. Affects behavior, personality, and language more than memory in the early stages.', symptoms: ["Dramatic personality changes", "Inappropriate social behavior", "Language difficulties", "Lack of empathy or insight"] },
  { name: "Parkinson's Disease Dementia", pct: 'Varies', desc: "Develops in people who have had Parkinson's disease. Not everyone with Parkinson's develops dementia, but the risk increases significantly over time.", symptoms: ["Thinking and memory problems", "Visual hallucinations", "Movement difficulties (tremor, rigidity)", "Sleep problems"] },
  { name: 'Mixed Dementia', pct: 'Common', desc: "More than one type of dementia occurs simultaneously, most often Alzheimer's combined with vascular dementia. Researchers believe mixed dementia may be more common than previously recognized.", symptoms: ["Combination of symptoms from multiple types", "Often diagnosed after age 80", "Accelerated decline"] },
  { name: 'Early-Onset Dementia', pct: '~5%', desc: 'Any type of dementia diagnosed under age 65. More likely to be genetic (early-onset Alzheimer\'s) or FTD. Unique challenges around employment, younger families, and insurance.', symptoms: ["Same as the underlying type", "Often misdiagnosed initially", "Special considerations for younger adults"] },
]

export default function TypesOfDementia() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'Signs & Diagnosis', href: '/signs-diagnosis' },
        { label: 'Types of Dementia' },
      ]} />
      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Types of Dementia</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        "Dementia" is an umbrella term for a group of symptoms — not a single disease. Here are the most common types seen in the Big Bend region.
      </p>

      <div className="space-y-4">
        {types.map((type) => (
          <details key={type.name} className="group rounded-2xl bg-white border border-warmgray-100 shadow-card overflow-hidden">
            <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none hover:bg-warmgray-50 transition-colors">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-bold text-warmgray-900">{type.name}</h2>
                <span className="badge bg-warmgray-100 text-warmgray-900">{type.pct} of cases</span>
              </div>
              <span className="text-warmgray-400 transition-transform duration-200 group-open:rotate-180" aria-hidden>▾</span>
            </summary>
            <div className="px-5 pb-5 border-t border-warmgray-100 pt-4">
              <p className="text-sm text-warmgray-600 leading-relaxed mb-3">{type.desc}</p>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-2">Common Symptoms</h3>
              <ul className="space-y-1" role="list">
                {type.symptoms.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-warmgray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-warmgray-400 shrink-0" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <p className="text-xs text-warmgray-400 mt-6">Sources: Alzheimer's Association · TMH Memory Disorder Clinic · Alzheimer's Project "Understanding Dementia"</p>
    </article>
  )
}
