import SectionSidebar from '@/components/layout/SectionSidebar'
import SectionHero from '@/components/layout/SectionHero'
import { DollarSign } from 'lucide-react'

const sidebarLinks = [
  { label: 'Overview', href: '/money-legal' },
  { label: 'Medicare & Insurance', href: '/money-legal/medicare' },
  { label: 'Medicaid & Long-Term Funding', href: '/money-legal/medicaid' },
  { label: 'Financial Assistance', href: '/money-legal/financial-assistance' },
  { label: 'Legal Planning', href: '/money-legal/legal-planning' },
]

export default function MoneyLegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-header">
      <SectionHero
        icon={DollarSign}
        label="Financial & Legal"
        title="Money & Legal Help"
        description="Medicare counseling, Medicaid navigation, financial assistance, and legal planning resources."
        gradient="bg-gradient-to-b from-warmgray-50/70 to-white"
        iconColor="text-warmgray-700"
      />
      <div className="container-main py-12 md:py-16">
        <div className="flex gap-10">
          <SectionSidebar title="Money & Legal Help" links={sidebarLinks} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
