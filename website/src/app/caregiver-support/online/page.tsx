import type { Metadata } from 'next'
import { ExternalLink, Globe } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Online Communities & Remote Support',
  description: 'Online support communities and free virtual resources for dementia caregivers who cannot attend in-person groups.',
}

const communities = [
  {
    name: 'ALZConnected',
    url: 'https://alzconnected.org',
    org: 'Alzheimer\'s Association',
    desc: 'Online peer community for people facing memory-disorder diseases — both caregivers and people living with dementia. Message boards, live chats, and resource sharing.',
    badge: 'Free',
    color: 'lavender',
  },
  {
    name: 'Family Caregiver Alliance',
    url: 'https://caregiver.org',
    org: 'National',
    desc: 'Articles, tips, and condition-specific guides for caregivers. Includes a resource finder, caregiver self-assessment tools, and a helpline at 800-445-8106.',
    badge: 'Free',
    color: 'teal',
  },
  {
    name: 'Caregiving.com',
    url: 'https://caregiving.com',
    org: 'Advantage Aging Solutions',
    desc: 'Multi-faceted online caregiver community with forums, expert Q&A, and peer support. Linked through Advantage Aging Solutions.',
    badge: 'Free',
    color: 'sage',
  },
  {
    name: 'GetSetUp',
    url: 'https://getsetup.io',
    org: 'Advantage Aging Solutions',
    desc: 'Free virtual peer-taught classes for older adults — fitness, nutrition, technology, virtual travel, and more. Use code NorthFlorida for free access.',
    badge: 'Code: NorthFlorida',
    color: 'healthblue',
  },
]

const badgeColors: Record<string, string> = {
  lavender: 'bg-warmgray-100 text-warmgray-800',
  teal: 'bg-warmgray-100 text-warmgray-800',
  sage: 'bg-warmgray-100 text-warmgray-800',
  healthblue: 'bg-warmgray-100 text-warmgray-800',
}

export default function OnlinePage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Online Communities' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Online Communities & Remote Support</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Can't attend in person? These free online communities provide peer support, expert resources, and connection — available any time, from anywhere.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {communities.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 focus-visible:ring-offset-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${badgeColors[c.color]}`}>
                  <Globe className="w-4.5 h-4.5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold text-warmgray-900 group-hover:text-warmgray-900 transition-colors">{c.name}</p>
                  <p className="text-xs text-warmgray-400">{c.org}</p>
                </div>
              </div>
              <span className={`badge shrink-0 ${badgeColors[c.color]}`}>{c.badge}</span>
            </div>
            <p className="text-sm text-warmgray-500 leading-relaxed">{c.desc}</p>
            <div className="flex items-center gap-1 text-xs font-medium text-warmgray-800 group-hover:gap-2 transition-all mt-auto">
              Visit {c.name} <ExternalLink className="w-3 h-3" aria-hidden />
            </div>
          </a>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <p className="text-sm text-warmgray-600">
          <strong>Also available:</strong> The <strong>Alzheimer's Association 24/7 Helpline</strong> at <a href="tel:18002723900" className="text-warmgray-800 font-medium hover:text-warmgray-900">800-272-3900</a> provides round-the-clock disease information and care consultation — any time of day or night.
        </p>
      </div>
    </article>
  )
}
