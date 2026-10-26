'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { SiteSearchResult, SiteSearchStatus } from '@/lib/hooks/useSiteSearch'
import type { LiveSearchItem } from '@/lib/hooks/useLiveSearch'

const groupHeadingClass = 'text-xs font-semibold uppercase tracking-wider text-warmgray-500'

export function ResultGroupHeading({ children, compact }: { children: React.ReactNode; compact?: boolean }) {
  return <h2 className={cn(groupHeadingClass, compact ? 'px-4 pt-3 pb-1' : 'mb-3')}>{children}</h2>
}

// "Events" and "Weekly programs" from Sanity, shown above the page results
export function LiveResultGroups({ events, programs, onSelect, compact }: {
  events: LiveSearchItem[]
  programs: LiveSearchItem[]
  onSelect?: () => void
  compact?: boolean
}) {
  const groups = [
    { label: 'Events', items: events },
    { label: 'Weekly programs', items: programs },
  ].filter((g) => g.items.length > 0)

  return (
    <div className={cn(!compact && 'space-y-8')}>
      {groups.map((group) => (
        <section key={group.label}>
          <ResultGroupHeading compact={compact}>{group.label}</ResultGroupHeading>
          <ul className={cn(compact ? 'divide-y divide-warmgray-100' : 'space-y-3')} role="list">
            {group.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  onClick={onSelect}
                  className={cn(
                    'block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700',
                    compact ? 'px-4 py-3 hover:bg-warmgray-50' : 'card-base p-5 hover:bg-warmgray-50',
                  )}
                >
                  <p className="text-sm font-bold text-warmgray-900">
                    {item.title}
                    {item.badge && <span className="badge bg-warmgray-100 text-warmgray-700 ml-2 align-middle">{item.badge}</span>}
                  </p>
                  <p className="text-sm text-warmgray-500 mt-1 leading-relaxed">{item.detail}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

interface Props {
  status: SiteSearchStatus
  results: SiteSearchResult[]
  onSelect?: () => void
  compact?: boolean
}

// Pagefind excerpts are plain page text with the matched words wrapped in <mark>
const excerptClass = '[&_mark]:bg-warmgray-200 [&_mark]:text-warmgray-900 [&_mark]:rounded-sm [&_mark]:px-0.5'

export default function SearchResults({ status, results, onSelect, compact }: Props) {
  if (status === 'unavailable') {
    return (
      <p className="text-sm text-warmgray-500" role="alert">
        Search isn't available right now. Please try again later, or call the Alzheimer's Project at{' '}
        <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a>.
      </p>
    )
  }

  if (status === 'ready' && results.length === 0) {
    return (
      <p className="text-sm text-warmgray-500">
        No matches. Try different words, or call the Alzheimer's Project at{' '}
        <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a> or the Elder Helpline at{' '}
        <a href="tel:+18009635337" className="font-semibold text-warmgray-800 underline">1-800-963-5337</a>.
      </p>
    )
  }

  return (
    <ul className={cn(compact ? 'divide-y divide-warmgray-100' : 'space-y-3')} role="list">
      {results.map((result) => (
        <li key={result.id}>
          <Link
            href={result.url}
            onClick={onSelect}
            className={cn(
              'block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700',
              compact ? 'px-4 py-3 hover:bg-warmgray-50' : 'card-base p-5 hover:bg-warmgray-50',
            )}
          >
            <p className="text-sm font-bold text-warmgray-900">
              {result.title}
              {result.section && <span className="font-medium text-warmgray-500"> › {result.section}</span>}
            </p>
            <p
              className={cn('text-sm text-warmgray-500 mt-1 leading-relaxed', excerptClass)}
              dangerouslySetInnerHTML={{ __html: result.excerpt }}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
