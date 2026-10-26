import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Video, Shield, Globe, Heart, MessageCircle, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'For Caregivers',
  description: 'Support groups, education, video resources, and self-care guidance for dementia caregivers in the Big Bend region.',
}

const subPages = [
  {
    icon: Users,
    href: '/caregiver-support/support-groups',
    title: 'Support Groups',
    description: 'Free local support groups across Leon, Jefferson, and surrounding counties — no RSVP needed.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    icon: BookOpen,
    href: '/caregiver-support/classes',
    title: 'Classes & Education',
    description: 'Powerful Tools for Caregivers (6-week course), ACTS 2 faith-based program, and more.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    icon: Video,
    href: '/caregiver-support/videos',
    title: 'Video Library',
    description: 'On-demand how-to videos: agitation, wandering, sleep, dressing, family dynamics, and more.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    icon: Shield,
    href: '/caregiver-support/home-safety',
    title: 'Home Safety',
    description: 'Free local fire safety services, kitchen safety tips, and help with wandering.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    icon: Globe,
    href: '/caregiver-support/online',
    title: 'Online Communities',
    description: 'ALZConnected, Family Caregiver Alliance, Caregiving.com — connect from home.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
  {
    icon: Heart,
    href: '/caregiver-support/self-care',
    title: 'Taking Care of Yourself',
    description: 'Burnout prevention, caregiver identity, TCARE support, and wellness programs.',
    accent: 'bg-emergency-100 text-emergency-700',
  },
  {
    icon: MessageCircle,
    href: '/caregiver-support/talking-to-your-doctor',
    title: 'Talking to Your Doctor',
    description: 'How to communicate with the care team and get the support you need.',
    accent: 'bg-warmgray-100 text-warmgray-800',
  },
]

export default function CaregiverPage() {
  return (
    <article>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200 mb-10">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-warmgray-700 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-warmgray-900 mb-0.5">All support groups listed here are free and no RSVP is required.</p>
            <p className="text-sm text-warmgray-800">
              Questions? Call the <strong>Alzheimer's Project</strong> at{' '}
              <a href="tel:+18503862778" className="font-semibold underline hover:text-warmgray-900 transition-colors">(850) 386-2778</a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subPages.map((page) => {
          const Icon = page.icon
          return (
            <Link
              key={page.href}
              href={page.href}
              className="group flex gap-4 p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 focus-visible:ring-offset-2"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${page.accent}`}>
                <Icon className="w-5 h-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-warmgray-900 mb-1 group-hover:text-warmgray-900 transition-colors">
                  {page.title}
                </h2>
                <p className="text-sm text-warmgray-500 leading-relaxed">{page.description}</p>
                <div className="mt-2.5 flex items-center gap-1 text-xs font-medium text-warmgray-800 group-hover:gap-2 transition-all">
                  Open <ArrowRight className="w-3 h-3" aria-hidden />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
