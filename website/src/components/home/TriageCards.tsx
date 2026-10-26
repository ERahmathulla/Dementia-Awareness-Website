import Link from 'next/link'
import { ArrowRight, Search, Heart, AlertCircle, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const cards = [
  {
    icon: Search,
    title: "I've noticed memory changes",
    subtitle: 'Start here',
    description: 'Learn the early warning signs of dementia and get your free doctor-visit toolkit.',
    href: '/signs-diagnosis',
    color: 'lavender',
    cta: 'Learn the signs',
  },
  {
    icon: Heart,
    title: "I'm caring for someone",
    subtitle: 'Caregiver resources',
    description: 'Find local support groups, respite care, education, and services to help you and your loved one.',
    href: '/caregiver-support',
    color: 'teal',
    cta: 'Find support',
  },
  {
    icon: AlertCircle,
    title: 'I need help right now',
    subtitle: 'Emergency & crisis',
    description: 'Immediate phone numbers and crisis resources — available 24 hours a day.',
    href: '/emergency',
    color: 'emergency',
    cta: 'Get immediate help',
    urgent: true,
  },
]

const colorMap = {
  lavender: {
    card: 'border-warmgray-200 hover:border-warmgray-400',
    topAccent: 'border-t-4 border-t-warmgray-800',
    icon: 'bg-warmgray-100 text-warmgray-800',
    subtitle: 'text-warmgray-800 bg-warmgray-50',
    cta: 'text-warmgray-800 hover:text-warmgray-900',
    hover: 'hover:bg-warmgray-50/40',
  },
  teal: {
    card: 'border-warmgray-200 hover:border-warmgray-400',
    topAccent: 'border-t-4 border-t-warmgray-800',
    icon: 'bg-warmgray-100 text-warmgray-800',
    subtitle: 'text-warmgray-800 bg-warmgray-50',
    cta: 'text-warmgray-800 hover:text-warmgray-900',
    hover: 'hover:bg-warmgray-50/40',
  },
  emergency: {
    card: 'border-emergency-200 hover:border-emergency-400',
    topAccent: 'border-t-4 border-t-emergency-500',
    icon: 'bg-emergency-100 text-emergency-600',
    subtitle: 'text-emergency-700 bg-emergency-50',
    cta: 'text-emergency-700 hover:text-emergency-900',
    hover: 'hover:bg-emergency-50/40',
  },
}

export default function TriageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((card) => {
        const colors = colorMap[card.color as keyof typeof colorMap]
        const Icon = card.icon

        return (
          <Link
            key={card.href}
            href={card.href}
            className={cn(
              'group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border-2',
              'shadow-card transition-all duration-250 ease-smooth',
              'hover:shadow-card-hover hover:-translate-y-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 focus-visible:ring-offset-2',
              colors.card,
              colors.topAccent,
              colors.hover
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', colors.icon)}>
                <Icon className="w-5 h-5" aria-hidden />
              </div>
              <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full', colors.subtitle)}>
                {card.subtitle}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-warmgray-900 mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-warmgray-500 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className={cn(
              'flex items-center gap-1.5 text-sm font-semibold transition-all duration-150',
              'group-hover:gap-2.5',
              colors.cta
            )}>
              {card.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
