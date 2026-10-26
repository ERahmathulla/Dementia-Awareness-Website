'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { Search, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useSearchStore } from '@/store/searchStore'
import { useSiteSearch } from '@/lib/hooks/useSiteSearch'
import { useLiveSearch } from '@/lib/hooks/useLiveSearch'
import SearchResults, { LiveResultGroups, ResultGroupHeading } from './SearchResults'

export default function SearchOverlay() {
  const { isOpen, close, query, setQuery } = useSearchStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const activeQuery = isOpen ? query : ''
  const { status, results, total } = useSiteSearch(activeQuery, 5)
  const live = useLiveSearch(activeQuery)
  const fullSearchHref = query.trim() ? `/directory?q=${encodeURIComponent(query.trim())}` : '/directory'
  // Previous results stay visible while the next search runs
  const hasAny = results.length > 0 || live.events.length + live.programs.length > 0
  const nothingFound = (status === 'ready' || status === 'unavailable') && live.status === 'ready' && !hasAny

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) close()
        else useSearchStore.getState().open()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(fullSearchHref)
      close()
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && close()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-backdrop-in" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-[10vh] z-50 w-full max-w-xl -translate-x-1/2',
            'bg-white rounded-2xl shadow-overlay',
            'data-[state=open]:animate-scale-in focus:outline-none'
          )}
        >
          <Dialog.Title className="sr-only">Search resources</Dialog.Title>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-warmgray-100">
              <Search className="w-5 h-5 text-warmgray-400 shrink-0" aria-hidden />
              <input
                ref={inputRef}
                autoFocus
                type="search"
                placeholder="Search resources…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-warmgray-900 placeholder:text-warmgray-400 text-base outline-none"
                aria-label="Search"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')}
                  className="p-1 rounded text-warmgray-400 hover:text-warmgray-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700"
                  aria-label="Clear search">
                  <X className="w-4 h-4" aria-hidden />
                </button>
              )}
              <kbd className="hidden sm:flex items-center px-1.5 py-0.5 text-xs text-warmgray-500 border border-warmgray-200 rounded">Esc</kbd>
            </div>

            {query.trim() && hasAny ? (
              <div className="max-h-[60vh] overflow-y-auto" aria-live="polite">
                <LiveResultGroups events={live.events} programs={live.programs} onSelect={close} compact />
                {results.length > 0 && (
                  <section>
                    <ResultGroupHeading compact>Pages</ResultGroupHeading>
                    <SearchResults status={status} results={results} onSelect={close} compact />
                  </section>
                )}
                {total > results.length && (
                  <div className="px-4 py-3 border-t border-warmgray-100">
                    <button type="submit" className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
                      See all {total} page results <ArrowRight className="w-4 h-4" aria-hidden />
                    </button>
                  </div>
                )}
              </div>
            ) : query.trim() && nothingFound ? (
              <div className="px-4 py-6" aria-live="polite"><SearchResults status={status} results={results} /></div>
            ) : (
              <div className="px-4 py-6 text-center">
                <Search className="w-8 h-8 text-warmgray-200 mx-auto mb-3" aria-hidden />
                <p className="text-sm text-warmgray-500">
                  {query.trim() ? 'Searching…' : 'Type to search every page on the site.'}
                </p>
              </div>
            )}
          </form>

          <div className="px-4 py-2.5 border-t border-warmgray-100 flex items-center justify-between text-xs text-warmgray-400">
            <span className="flex items-center gap-1">
              <kbd className="text-xs border border-warmgray-200 rounded px-1 py-0.5">↵</kbd> all results
            </span>
            <Link href={fullSearchHref} className="text-warmgray-800 hover:text-warmgray-900 transition-colors" onClick={close}>
              Open Search Resources →
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
