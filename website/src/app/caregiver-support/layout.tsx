import SectionSidebar from '@/components/layout/SectionSidebar'
import SectionHero from '@/components/layout/SectionHero'
import { Heart } from 'lucide-react'

const sidebarLinks = [
  { label: 'Overview', href: '/caregiver-support' },
  { label: 'Support Groups', href: '/caregiver-support/support-groups' },
  { label: 'Classes & Education', href: '/caregiver-support/classes' },
  { label: 'Video Library', href: '/caregiver-support/videos' },
  { label: 'Home Safety', href: '/caregiver-support/home-safety' },
  { label: 'Online Communities', href: '/caregiver-support/online' },
  { label: 'Taking Care of Yourself', href: '/caregiver-support/self-care' },
  { label: 'Talking to Your Doctor', href: '/caregiver-support/talking-to-your-doctor' },
]

export default function CaregiverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-header">
      <SectionHero
        icon={Heart}
        label="Caregiver Resources"
        title="For Caregivers"
        description="Support groups, education, self-care, and community connections for family caregivers."
        gradient="bg-gradient-to-b from-warmgray-50/70 to-white"
        iconColor="text-warmgray-700"
      />
      <div className="container-main py-12 md:py-16">
        <div className="flex gap-10">
          <SectionSidebar title="For Caregivers" links={sidebarLinks} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
