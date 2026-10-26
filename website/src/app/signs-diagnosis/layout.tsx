import SectionSidebar from '@/components/layout/SectionSidebar'
import SectionHero from '@/components/layout/SectionHero'
import { Search } from 'lucide-react'

const sidebarLinks = [
  { label: 'Overview', href: '/signs-diagnosis' },
  { label: '10 Early Signs & Warning Guide', href: '/signs-diagnosis/warning-signs' },
  { label: 'Types of Dementia', href: '/signs-diagnosis/types-of-dementia' },
  { label: 'Disease Stages', href: '/signs-diagnosis/disease-stages' },
  { label: 'Getting Evaluated', href: '/signs-diagnosis/getting-evaluated' },
  { label: 'Free Toolkit', href: '/signs-diagnosis/toolkit' },
]

export default function SignsDiagnosisLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-header">
      <SectionHero
        icon={Search}
        label="Signs & Diagnosis"
        title="Start Here: Signs & Diagnosis"
        description="Understand memory changes, learn the warning signs, and find your path to an evaluation."
        gradient="bg-gradient-to-b from-warmgray-50/80 to-white"
        iconColor="text-warmgray-800"
      />
      <div className="container-main py-12 md:py-16">
        <div className="flex gap-10">
          <SectionSidebar title="Signs & Diagnosis" links={sidebarLinks} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
