'use client'

import { useEffect, useState } from 'react'

// Site search runs in the browser against the static Pagefind index that
// scripts/build-search-index.mjs writes to /pagefind at build time.

export interface SiteSearchResult {
  id: string
  url: string
  title: string
  section?: string
  excerpt: string
}

interface PagefindSubResult {
  title: string
  url: string
  excerpt: string
  locations: number[]
}

interface PagefindResultData {
  url: string
  content: string
  excerpt: string
  meta: { title?: string }
  sub_results?: PagefindSubResult[]
}

// Pagefind falls back to loose matches for words it doesn't know (e.g. "Israel" matching "is"),
// so keep only pages where every search word starts a word on the page. Simple plural/verb
// endings are trimmed so "caregivers" still finds "caregiver".
function searchWords(query: string) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}\p{N}]/gu, ''))
    .filter(Boolean)
    .map((w) => (w.length > 4 ? w.replace(/(ing|ed|es|s)$/, '') : w))
}

function containsAllWords(content: string, words: string[]) {
  const text = content.toLowerCase()
  return words.every((word) => new RegExp(`(^|[^\\p{L}\\p{N}])${word}`, 'u').test(text))
}

// The site is small, so every candidate page can be checked
const MAX_CANDIDATES = 100

interface PagefindModule {
  options: (options: Record<string, unknown>) => Promise<void>
  init: () => Promise<void>
  debouncedSearch: (
    query: string,
    options?: Record<string, unknown>,
    debounceMs?: number,
  ) => Promise<{ results: { data: () => Promise<PagefindResultData> }[] } | null>
}

let pagefindPromise: Promise<PagefindModule> | null = null

function loadPagefind() {
  if (!pagefindPromise) {
    const url = '/pagefind/pagefind.js'
    pagefindPromise = import(/* webpackIgnore: true */ url).then(async (pagefind: PagefindModule) => {
      await pagefind.options({ excerptLength: 24 })
      await pagefind.init()
      return pagefind
    })
    pagefindPromise.catch(() => {
      pagefindPromise = null
    })
  }
  return pagefindPromise
}

function toResult(data: PagefindResultData): SiteSearchResult {
  const title = data.meta.title || data.url
  // Link to the section with the most matches, when the page has headings with anchors
  const best = [...(data.sub_results ?? [])].sort((a, b) => b.locations.length - a.locations.length)[0]
  const section = best && best.url.includes('#') && best.title !== title ? best.title : undefined
  return {
    id: best?.url ?? data.url,
    url: section ? best.url : data.url,
    title,
    section,
    excerpt: best?.excerpt ?? data.excerpt,
  }
}

export type SiteSearchStatus = 'idle' | 'loading' | 'ready' | 'unavailable'

export function useSiteSearch(query: string, limit = 20) {
  const [state, setState] = useState<{ status: SiteSearchStatus; results: SiteSearchResult[]; total: number }>({
    status: 'idle',
    results: [],
    total: 0,
  })

  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setState({ status: 'idle', results: [], total: 0 })
      return
    }
    let cancelled = false
    setState((s) => ({ ...s, status: 'loading' }))
    loadPagefind()
      .then(async (pagefind) => {
        const search = await pagefind.debouncedSearch(q, {}, 150)
        if (!search || cancelled) return // a newer search replaced this one
        const data = await Promise.all(search.results.slice(0, MAX_CANDIDATES).map((r) => r.data()))
        const words = searchWords(q)
        const matches = data.filter((d) => containsAllWords(d.content, words))
        if (!cancelled) setState({ status: 'ready', results: matches.slice(0, limit).map(toResult), total: matches.length })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'unavailable', results: [], total: 0 })
      })
    return () => {
      cancelled = true
    }
  }, [query, limit])

  return state
}
