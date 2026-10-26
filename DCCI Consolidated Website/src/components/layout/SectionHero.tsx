import { cn } from '@/lib/utils/cn'
import { type LucideIcon } from 'lucide-react'

interface SectionHeroProps {
  icon: LucideIcon
  label: string
  title: string
  description: string
  gradient: string
  iconColor: string
}

export default function SectionHero({
  icon: Icon,
  label,
  title,
  description,
  gradient,
  iconColor,
}: SectionHeroProps) {
  return (
    <div className={cn('border-b border-warmgray-100 py-12 md:py-16', gradient)} data-pagefind-ignore>
      <div className="container-main">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-white/60 backdrop-blur-sm border border-white/80">
          <Icon className={cn('w-3.5 h-3.5', iconColor)} aria-hidden />
          <span className={iconColor}>{label}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-warmgray-900 mb-3 tracking-tight">{title}</h1>
        <p className="text-lg text-warmgray-500 max-w-2xl font-light">{description}</p>
      </div>
    </div>
  )
}
