import Link from 'next/link'
import { Phone, Mail, ExternalLink, Heart } from 'lucide-react'
import { SITE_NAME, HELPLINE_PHONE, ELDER_HELPLINE, NAV_LINKS } from '@/lib/utils/constants'

const partnerOrgs = [
  { name: "Alzheimer's Project", phone: '(850) 386-2778', url: 'https://alzheimersproject.org' },
  { name: 'TMH Memory Disorder Clinic', phone: '(850) 431-5001', url: 'https://tmh.org' },
  { name: 'FSU REACH', email: 'connect.reach@med.fsu.edu', url: 'https://reach.med.fsu.edu' },
  { name: 'Advantage Aging Solutions', phone: '(850) 488-0055', url: 'https://advantageaging.org' },
  { name: 'Big Bend AHEC', phone: '(850) 224-1177', url: 'https://bigbendahec.org' },
  { name: 'FL Dept. of Elder Affairs', phone: '(850) 414-2000', url: 'https://elderaffairs.org' },
]

const footerLinks = {
  'Get Help': [
    { label: 'Start Here: Warning Signs', href: '/signs-diagnosis' },
    { label: 'Find Care & Services', href: '/care-services' },
    { label: 'Caregiver Support', href: '/caregiver-support' },
    { label: 'Money & Legal Help', href: '/money-legal' },
    { label: 'Emergency Resources', href: '/emergency' },
  ],
  'Find Resources': [
    { label: 'Search Resources', href: '/directory' },
    { label: 'Events & Classes', href: '/events' },
    { label: 'For Professionals', href: '/professionals' },
    { label: 'Downloadable Guides', href: '/signs-diagnosis/toolkit' },
  ],
  'About': [
    { label: 'About This Site', href: '/about' },
    { label: 'Partner Organizations', href: '/about#partners' },
    { label: 'Contact Us', href: '/about#contact' },
    { label: 'Add / Update a Listing', href: '/about#listing' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-warmgray-900 text-warmgray-300 mt-auto" role="contentinfo">
      {/* Emergency help strip */}
      <div className="bg-emergency-700 py-3">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span className="text-emergency-100 font-medium">Need immediate help?</span>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <a href="tel:911" className="font-bold hover:text-emergency-200 transition-colors">911</a>
            <span aria-hidden>·</span>
            <a href="tel:988" className="font-bold hover:text-emergency-200 transition-colors">988 Crisis Line</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded w-fit">
              <video
                src="/brain.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-9 h-9 rounded-xl object-cover"
                aria-hidden={true}
              />
              <div>
                <div className="text-sm font-bold text-white group-hover:text-warmgray-300 transition-colors">Big Bend Brain Health</div>
                <div className="text-xs text-warmgray-500">Memory Care Resources</div>
              </div>
            </Link>
            <p className="text-sm text-warmgray-400 leading-relaxed mb-4">
              A consolidated resource hub for dementia caregiving, memory care, and community support across the Big Bend region of Florida.
            </p>
            <div className="space-y-1.5 text-sm">
              <a href={`tel:+18503862778`} className="flex items-center gap-2 text-warmgray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded">
                <Phone className="w-3.5 h-3.5 shrink-0 text-warmgray-400" aria-hidden />
                {HELPLINE_PHONE} (Helpline)
              </a>
              <a href={`tel:+18009635337`} className="flex items-center gap-2 text-warmgray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded">
                <Phone className="w-3.5 h-3.5 shrink-0 text-warmgray-400" aria-hidden />
                {ELDER_HELPLINE} (Elder Helpline)
              </a>
            </div>
          </div>

          {/* Nav link groups */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-warmgray-500 mb-3">
                {heading}
              </h3>
              <ul className="space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warmgray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner organizations */}
        <div className="mt-10 pt-8 border-t border-warmgray-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-warmgray-500 mb-4">
            Partner Organizations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded"
              >
                <span className="text-warmgray-400 group-hover:text-white transition-colors font-medium leading-snug">
                  {org.name}
                </span>
                {org.phone && (
                  <span className="text-warmgray-600 group-hover:text-warmgray-400 transition-colors">
                    {org.phone}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-warmgray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warmgray-600">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1">
              <span>© {year} {SITE_NAME}.</span>
              <span>Information provided for educational purposes only.</span>
            </div>
            <span className="hidden sm:inline text-warmgray-800" aria-hidden>·</span>
            <span>
              Brain animation by{' '}
              <a
                href="https://iconscout.com/contributors/robin-donvai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-warmgray-400 transition-colors"
              >
                Robin's Pixel
              </a>
              {' '}on{' '}
              <a
                href="https://iconscout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-warmgray-400 transition-colors"
              >
                IconScout
              </a>
            </span>
            <span className="hidden sm:inline text-warmgray-800" aria-hidden>·</span>
            <span>Website created by Emaad Rahmathulla</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about#accessibility" className="hover:text-warmgray-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded">
              Accessibility
            </Link>
            <Link href="/about#privacy" className="hover:text-warmgray-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warmgray-700 rounded">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
