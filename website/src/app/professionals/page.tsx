import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Users, ExternalLink, ArrowRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Professionals & Volunteers',
  description: 'Mandatory ADRD training, volunteer opportunities, student programs, and dementia-friendly community resources for professionals in the Big Bend region.',
}

const trainingItems = [
  {
    title: 'DOEA Mandatory ADRD Training',
    desc: 'Required by Florida law (§430.5025 F.S.) for staff and volunteers in licensed care settings. 1-hour base course + 2–4 additional hours depending on setting. 4 CE hours/year for specialized memory-care settings.',
    link: 'https://elderaffairs.org',
    linkLabel: 'DOEA training portal',
    badge: 'Required',
  },
  {
    title: "Alzheimer's Project Volunteer Training",
    desc: 'AmeriCorps and Legacy Corps for Veterans & Military Families. 10+ hours dementia-specific training, living allowance, loan forbearance, and education award. 1-year, 450-hour service commitment.',
    link: 'https://alzheimersproject.org',
    linkLabel: "Alzheimer's Project volunteer page",
    badge: 'Volunteer',
  },
  {
    title: 'Big Bend AHEC Scholars Program',
    desc: 'Interprofessional health-professions student training in primary care and patient care competencies.',
    link: 'https://bigbendahec.org',
    linkLabel: 'AHEC Scholars',
    badge: 'Students',
  },
  {
    title: 'FSU REACH For Professionals',
    desc: 'Trainings and resources to improve care for older adult patients, including dementia-friendly transportation training and driving resources for healthcare professionals.',
    link: 'https://reach.med.fsu.edu',
    linkLabel: 'FSU REACH professional resources',
    badge: 'Training',
  },
  {
    title: 'SHINE / SMP Volunteer Training',
    desc: 'Become a Medicare counseling volunteer (SHINE) or Senior Medicare Patrol fraud-prevention volunteer. Free training through Advantage Aging Solutions.',
    link: 'https://advantageaging.org',
    linkLabel: 'Advantage Aging volunteer page',
    badge: 'Volunteer',
  },
]

const badgeColors: Record<string, string> = {
  Required: 'bg-emergency-100 text-emergency-700',
  Volunteer: 'bg-warmgray-100 text-warmgray-800',
  Students: 'bg-warmgray-100 text-warmgray-800',
  Training: 'bg-warmgray-100 text-warmgray-800',
}

export default function ProfessionalsPage() {
  return (
    <div className="pt-header">
      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-12">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">For Professionals & Volunteers</h1>
          <p className="text-warmgray-500 max-w-xl">
            Training requirements, volunteer opportunities, student programs, and dementia-friendly community resources.
          </p>
        </div>
      </div>

      <div className="container-main py-10 space-y-12">
        {/* Training */}
        <section aria-labelledby="training-heading">
          <h2 id="training-heading" className="text-2xl font-bold text-warmgray-900 mb-2 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-warmgray-800" aria-hidden />
            Training & Certification
          </h2>
          <p className="text-sm text-warmgray-500 mb-6">
            Florida requires ADRD training for all staff and volunteers in licensed care settings. Links go directly to the training providers.
          </p>
          <div className="space-y-4">
            {trainingItems.map((item) => (
              <div key={item.title} className="card-base p-5">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="text-base font-bold text-warmgray-900">{item.title}</h3>
                  <span className={`badge ${badgeColors[item.badge] || 'bg-warmgray-100 text-warmgray-600'}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-warmgray-500 mb-3">{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded">
                  {item.linkLabel} <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Dementia-friendly community */}
        <section aria-labelledby="dcci-heading">
          <h2 id="dcci-heading" className="text-2xl font-bold text-warmgray-900 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-warmgray-800" aria-hidden />
            Dementia-Friendly Community
          </h2>
          <div className="p-6 rounded-2xl bg-warmgray-50 border border-warmgray-200">
            <h3 className="text-lg font-bold text-warmgray-900 mb-2">Dementia Care & Cure Initiative (DCCI)</h3>
            <p className="text-sm text-warmgray-900 mb-4">
              The Florida DOEA's DCCI builds "dementia-caring communities" through local Task Forces and free dementia-sensitivity trainings for businesses, organizations, and faith communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:DCCI@elderaffairs.org" className="btn-primary text-sm">
                <Shield className="w-4 h-4" aria-hidden />
                Request sensitivity training
              </a>
              <a href="https://elderaffairs.org" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                DOEA website <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
