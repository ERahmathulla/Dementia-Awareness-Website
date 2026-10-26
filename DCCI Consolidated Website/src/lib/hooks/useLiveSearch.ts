'use client'

import { useEffect, useState } from 'react'

// Live results for Sanity-managed content (upcoming events and weekly programs),
// fetched from /api/search at search time so they're never stale.

export interface LiveSearchItem {
  id: string
  title: string
  url: string
  detail: string
  badge?: string
}

export interface LiveSearchResponse {
  events: LiveSearchItem[]
  programs: LiveSearchItem[]
  error?: boolean
}

export type LiveSearchStatus = 'idle' | 'loading' | 'ready'

const EMPTY = { events: [] as LiveSearchItem[], programs: [] as LiveSearchItem[] }

export function useLiveSearch(query: string) {
  const [state, setState] = useState<{ status: LiveSearchStatus } & typeof EMPTY>({ status: 'idle', ...EMPTY })

  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setState({ status: 'idle', ...EMPTY })
      return
    }
    const controller = new AbortController()
    setState((s) => ({ ...s, status: 'loading' }))
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        .then((res) => (res.ok ? (res.json() as Promise<LiveSearchResponse>) : EMPTY))
        .then((data) => setState({ status: 'ready', events: data.events ?? [], programs: data.programs ?? [] }))
        .catch((error: Error) => {
          // If Sanity or the endpoint is unreachable, page results still show
          if (error.name !== 'AbortError') setState({ status: 'ready', ...EMPTY })
        })
    }, 200)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return state
}
