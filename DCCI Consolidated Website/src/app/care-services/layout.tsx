import SectionSidebar from '@/components/layout/SectionSidebar'
import SectionHero from '@/components/layout/SectionHero'
import { Home } from 'lucide-react'

const sidebarLinks = [
  { label: 'Overview', href: '/care-services' },
  { label: 'Respite & Adult Day', href: '/care-services/respite' },
  { label: 'In-Home Services', href: '/care-services/in-home' },
  { label: 'Long-Term Care Options', href: '/care-services/long-term-care' },
  { label: 'Wandering & Missing Persons', href: '/care-services/wandering' },
  { label: 'Transportation & Driving', href: '/care-services/transportation' },
]

export default function CareServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-header">
      <SectionHero
        icon={Home}
        label="Care Services"
        title="Find Care & Services"
        description="Respite, in-home help, long-term care, and transportation resources."
        gradient="bg-gradient-to-b from-warmgray-50/70 to-white"
        iconColor="text-warmgray-700"
      />
      <div className="container-main py-12 md:py-16">
        <div className="flex gap-10">
          <SectionSidebar title="Find Care & Services" links={sidebarLinks} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
