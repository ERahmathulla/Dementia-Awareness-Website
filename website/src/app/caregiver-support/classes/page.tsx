import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Phone, ExternalLink, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Classes & Caregiver Education',
  description: 'Powerful Tools for Caregivers, ACTS 2 faith-based program, and other structured education courses in the Big Bend region.',
}

type Provider = { name: string; phone?: string; url?: string; note?: string }
type Course = { name: string; type: string; desc: string; weeks: string[]; providers: Provider[]; badge: string; badgeColor: string }

const courses: Course[] = [
  {
    name: 'Powerful Tools for Caregivers (PTC)',
    type: '6-week course',
    desc: 'Nationally recognized evidence-based program that builds caregiving skills and self-care habits. Available from multiple Big Bend providers.',
    weeks: [
      'Week 1: Taking Care of You',
      'Week 2: Reducing Personal Stress',
      'Week 3: Communicating Feelings & Needs',
      'Week 4: Communicating in Challenging Situations',
      'Week 5: Learning from Our Emotions',
      'Week 6: Mastering Caregiving Decisions',
    ],
    providers: [
      { name: "Alzheimer's Project", phone: '(850) 386-2778', url: 'https://alzheimersproject.org' },
      { name: 'TMH Memory Disorder Clinic', phone: '(850) 431-5001', note: 'Free — contact the MDC social worker' },
      { name: 'Big Bend AHEC', phone: '(850) 224-1177', url: 'https://bigbendahec.org' },
    ],
    badge: 'Evidence-Based',
    badgeColor: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    name: 'ACTS 2 — African-American Alzheimer\'s Caregiver Training & Support',
    type: 'Faith-based program',
    desc: 'Skills-building support for distressed family caregivers of older adults with dementia, rooted in faith community traditions.',
    weeks: [],
    providers: [
      { name: 'acts2project.org', url: 'https://acts2project.org' },
      { name: 'FSU REACH', url: 'https://reach.med.fsu.edu' },
    ],
    badge: 'Faith-Based',
    badgeColor: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    name: 'Caregiver Community Workshops',
    type: 'Periodic events',
    desc: 'Expert-speaker educational events and resource fairs hosted periodically by the Alzheimer\'s Project and partner organizations.',
    weeks: [],
    providers: [
      { name: "Alzheimer's Project", phone: '(850) 386-2778', url: 'https://alzheimersproject.org' },
    ],
    badge: 'Community',
    badgeColor: 'bg-warmgray-100 text-warmgray-800',
  },
]

export default function ClassesPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Classes & Education' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Classes & Caregiver Education</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Structured programs that build practical caregiving skills, reduce stress, and help you feel more confident in your role.
      </p>

      <div className="space-y-5 mb-10">
        {courses.map((course) => (
          <div key={course.name} className="card-base p-6">
            <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
              <div>
                <h2 className="text-lg font-bold text-warmgray-900 mb-0.5">{course.name}</h2>
                <span className="text-sm text-warmgray-500">{course.type}</span>
              </div>
              <span className={`badge shrink-0 ${course.badgeColor}`}>{course.badge}</span>
            </div>

            <p className="text-sm text-warmgray-600 leading-relaxed mb-4">{course.desc}</p>

            {course.weeks.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-2">Course outline</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {course.weeks.map((week) => (
                    <div key={week} className="flex items-start gap-2 text-sm text-warmgray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-warmgray-400 shrink-0 mt-1.5" aria-hidden />
                      {week}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-2">Where to sign up</h3>
              <div className="flex flex-wrap gap-3">
                {course.providers.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 text-sm">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
                        {p.name} <ExternalLink className="w-3 h-3" aria-hidden />
                      </a>
                    ) : (
                      <span className="font-medium text-warmgray-700">{p.name}</span>
                    )}
                    {p.phone && (
                      <a href={`tel:${p.phone.replace(/\D/g,'')}`} className="text-warmgray-500 hover:text-warmgray-800 transition-colors">
                        {p.phone}
                      </a>
                    )}
                    {p.note && <span className="text-warmgray-400 text-xs">({p.note})</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-warmgray-800 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-warmgray-900 mb-1">Not sure which program is right for you?</p>
            <p className="text-sm text-warmgray-900 mb-3">
              Each program above lists who to contact about eligibility and the next available session.
            </p>
            <Link href="/events" className="text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors flex items-center gap-1">
              See upcoming class dates <ArrowRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
