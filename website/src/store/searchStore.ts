'use client'

import { create } from 'zustand'

export interface SearchResult {
  _id: string
  _type: 'resource' | 'event' | 'organization'
  title: string
  slug: string
  category?: string
  description?: string
  phone?: string
}

interface SearchState {
  isOpen: boolean
  query: string
  results: SearchResult[]
  isLoading: boolean
  selectedIndex: number
  open: () => void
  close: () => void
  setQuery: (q: string) => void
  setResults: (results: SearchResult[]) => void
  setLoading: (loading: boolean) => void
  setSelectedIndex: (i: number) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  isOpen: false,
  query: '',
  results: [],
  isLoading: false,
  selectedIndex: -1,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, query: '', results: [], selectedIndex: -1 }),
  setQuery: (query) => set({ query, selectedIndex: -1 }),
  setResults: (results) => set({ results }),
  setLoading: (isLoading) => set({ isLoading }),
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
}))
