'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'
import SearchResults, { LiveResultGroups, ResultGroupHeading } from '@/components/search/SearchResults'
import { useSiteSearch } from '@/lib/hooks/useSiteSearch'
import { useLiveSearch } from '@/lib/hooks/useLiveSearch'

// Picks up ?q= (e.g. from the header search) on load and on client-side navigation.
// Kept in its own Suspense boundary so the rest of the page still renders on the server.
function QuerySync({ onChange }: { onChange: (q: string) => void }) {
  const q = useSearchParams().get('q') ?? ''
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange
  useEffect(() => {
    onChangeRef.current(q)
  }, [q])
  return null
}

export default function SearchClient() {
  const pathname = usePathname()
  const [query, setQuery] = useState('')
  const queryRef = useRef(query)
  queryRef.current = query
  const { status, results, total } = useSiteSearch(query)
  const live = useLiveSearch(query)
  const liveCount = live.events.length + live.programs.length
  const hasAny = results.length > 0 || liveCount > 0
  const nothingFound = (status === 'ready' || status === 'unavailable') && live.status === 'ready' && !hasAny

  function applyUrlQuery(q: string) {
    // Ignore stale updates from our own replaceState calls while typing
    if (q !== (new URLSearchParams(window.location.search).get('q') ?? '')) return
    if (q !== queryRef.current) setQuery(q)
  }

  function update(q: string) {
    queryRef.current = q
    setQuery(q)
    const params = new URLSearchParams(window.location.search)
    if (q) params.set('q', q)
    else params.delete('q')
    const qs = params.toString()
    window.history.replaceState(null, '', qs ? `${pathname}?${qs}` : pathname)
  }

  return (
    <div className="pt-header">
      <Suspense fallback={null}>
        <QuerySync onChange={applyUrlQuery} />
      </Suspense>

      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-10">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">Search Resources</h1>
          <p className="text-warmgray-500 mb-6 max-w-xl">
            Search every page on this site: support, services, safety, money and legal help, events, and more.
          </p>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmgray-400 pointer-events-none" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => update(e.target.value)}
              placeholder="Try “respite”, “smoke alarm”, or “Medicaid”…"
              className="input-base pl-9 text-sm"
              aria-label="Search resources"
            />
          </form>
        </div>
      </div>

      <div className="container-main py-8 max-w-3xl" aria-live="polite">
        {hasAny ? (
          <div className="space-y-8">
            <LiveResultGroups events={live.events} programs={live.programs} />
            {results.length > 0 && (
              <section>
                <ResultGroupHeading>Pages</ResultGroupHeading>
                <p className="text-sm text-warmgray-500 mb-4">
                  {total} page{total !== 1 ? 's' : ''} found{total > results.length ? `, showing the top ${results.length}` : ''}
                </p>
                <SearchResults status={status} results={results} />
              </section>
            )}
          </div>
        ) : nothingFound ? (
          <SearchResults status={status} results={results} />
        ) : query.trim() ? (
          <p className="text-sm text-warmgray-500">Searching…</p>
        ) : null}
      </div>
    </div>
  )
}
