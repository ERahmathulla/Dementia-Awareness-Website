'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import ResourceCard, { isSpanish } from '@/components/directory/ResourceCard'
import { LOCAL_COUNTIES, REGIONAL_AREAS } from '@/sanity/options'
import type { DirectoryCategory, DirectoryListing } from '@/sanity/lib/queries'

interface Props {
  listings: DirectoryListing[]
  categories: DirectoryCategory[]
  loadError: boolean
}

interface Filters {
  q: string
  category: string
  county: string
  free: boolean
  spanish: boolean
}

const EMPTY_FILTERS: Filters = { q: '', category: '', county: '', free: false, spanish: false }
const REGIONAL: readonly string[] = REGIONAL_AREAS

function fromParams(params: URLSearchParams): Filters {
  return {
    q: params.get('q') ?? '',
    category: params.get('category') ?? '',
    county: (params.get('county') ?? '').toLowerCase(),
    free: params.get('free') === '1',
    spanish: params.get('spanish') === '1',
  }
}

function toQueryString(f: Filters) {
  const params = new URLSearchParams()
  if (f.q) params.set('q', f.q)
  if (f.category) params.set('category', f.category)
  if (f.county) params.set('county', f.county)
  if (f.free) params.set('free', '1')
  if (f.spanish) params.set('spanish', '1')
  return params.toString()
}

// Reports URL changes (e.g. arriving from header search or a county page link).
// Kept in its own Suspense boundary so the listings still render on the server.
function UrlSync({ onChange }: { onChange: (params: URLSearchParams) => void }) {
  const qs = useSearchParams().toString()
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange
  useEffect(() => {
    onChangeRef.current(new URLSearchParams(qs))
  }, [qs])
  return null
}

export default function DirectoryClient({ listings, categories, loadError }: Props) {
  const pathname = usePathname()
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const filtersRef = useRef(filters)
  filtersRef.current = filters

  function applyUrl(params: URLSearchParams) {
    const next = fromParams(params)
    const nextQs = toQueryString(next)
    // Ignore stale updates from our own replaceState calls while typing
    if (nextQs !== toQueryString(fromParams(new URLSearchParams(window.location.search)))) return
    if (nextQs !== toQueryString(filtersRef.current)) setFilters(next)
  }

  function update(patch: Partial<Filters>) {
    const next = { ...filtersRef.current, ...patch }
    filtersRef.current = next
    setFilters(next)
    const qs = toQueryString(next)
    window.history.replaceState(null, '', qs ? `${pathname}?${qs}` : pathname)
  }

  const activeCategory = categories.find((c) => c.slug && c.slug === filters.category)
  const activeCounty = LOCAL_COUNTIES.find((c) => c.toLowerCase() === filters.county)

  const filtered = useMemo(() => {
    const terms = filters.q.toLowerCase().split(/\s+/).filter(Boolean)
    return listings.filter((l) => {
      if (terms.length) {
        const text = [l.name, l.summary, l.details, l.city, l.category?.title].filter(Boolean).join(' ').toLowerCase()
        if (!terms.every((t) => text.includes(t))) return false
      }
      if (activeCategory && l.category?.slug !== activeCategory.slug) return false
      if (activeCounty && !l.countiesServed?.some((c) => c === activeCounty || REGIONAL.includes(c))) return false
      if (filters.free && l.cost !== 'Free') return false
      if (filters.spanish && !l.languages?.some(isSpanish)) return false
      return true
    })
  }, [listings, filters.q, filters.free, filters.spanish, activeCategory, activeCounty])

  const hasFilters = Boolean(filters.q || activeCategory || activeCounty || filters.free || filters.spanish)

  function clearFilters() {
    update(EMPTY_FILTERS)
  }

  return (
    <div className="pt-header">
      <Suspense fallback={null}>
        <UrlSync onChange={applyUrl} />
      </Suspense>

      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-10">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">Resource Directory</h1>
          <p className="text-warmgray-500 mb-6 max-w-xl">
            All dementia caregiving resources in the Big Bend region, searchable by need, county, and language.
          </p>

          {!loadError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmgray-400 pointer-events-none" aria-hidden />
                <input
                  type="search"
                  value={filters.q}
                  onChange={(e) => update({ q: e.target.value })}
                  placeholder="Search resources…"
                  className="input-base pl-9 text-sm"
                  aria-label="Search resources"
                />
              </div>

              <select
                value={activeCategory?.slug ?? ''}
                onChange={(e) => update({ category: e.target.value })}
                className="input-base text-sm"
                aria-label="Filter by category"
              >
                <option value="">All categories</option>
                {categories.filter((c) => c.slug).map((c) => (
                  <option key={c._id} value={c.slug!}>{c.title}</option>
                ))}
              </select>

              <select
                value={activeCounty?.toLowerCase() ?? ''}
                onChange={(e) => update({ county: e.target.value })}
                className="input-base text-sm"
                aria-label="Filter by county"
              >
                <option value="">All counties</option>
                {LOCAL_COUNTIES.map((c) => (
                  <option key={c} value={c.toLowerCase()}>{c} County</option>
                ))}
              </select>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.free}
                    onChange={(e) => update({ free: e.target.checked })}
                    className="w-4 h-4 rounded border-warmgray-300 text-warmgray-800 focus:ring-warmgray-700"
                  />
                  <span className="text-sm text-warmgray-700">Free only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.spanish}
                    onChange={(e) => update({ spanish: e.target.checked })}
                    className="w-4 h-4 rounded border-warmgray-300 text-warmgray-800 focus:ring-warmgray-700"
                  />
                  <span className="text-sm text-warmgray-700">Spanish available</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container-main py-8">
        {loadError ? (
          <div className="text-center py-16" role="alert">
            <h2 className="text-lg font-semibold text-warmgray-700 mb-2">The directory couldn't load right now</h2>
            <p className="text-sm text-warmgray-500 max-w-md mx-auto">
              Please try again in a few minutes, or call the Alzheimer's Project at{' '}
              <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a> or the Elder Helpline at{' '}
              <a href="tel:+18009635337" className="font-semibold text-warmgray-800 underline">1-800-963-5337</a>.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-3 mb-6">
              <p className="text-sm text-warmgray-500" aria-live="polite">
                {filtered.length} resource{filtered.length !== 1 ? 's' : ''}{hasFilters ? ' matching your filters' : ''}
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
                >
                  <X className="w-3.5 h-3.5" aria-hidden />
                  Clear filters
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((listing) => (
                  <ResourceCard key={listing._id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-warmgray-200 mx-auto mb-4" aria-hidden />
                <h2 className="text-lg font-semibold text-warmgray-700 mb-2">No matches.</h2>
                <p className="text-sm text-warmgray-500 mb-6 max-w-md mx-auto">
                  Try clearing filters, or call the Alzheimer's Project at{' '}
                  <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a> or the Elder Helpline at{' '}
                  <a href="tel:+18009635337" className="font-semibold text-warmgray-800 underline">1-800-963-5337</a>.
                </p>
                {hasFilters && (
                  <button type="button" onClick={clearFilters} className="btn-secondary text-sm">Clear filters</button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
