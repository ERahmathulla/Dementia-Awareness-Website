import type { Metadata } from 'next'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search Resources',
  description: 'Search every page of Big Bend Brain Health for dementia caregiving resources, services, and support in the Big Bend region.',
}

export default function SearchPage() {
  return <SearchClient />
}
