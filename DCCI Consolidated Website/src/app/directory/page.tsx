import type { Metadata } from 'next'
import DirectoryClient from './DirectoryClient'
import { getDirectory } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Resource Directory',
  description: 'Search and filter all dementia caregiving resources in the Big Bend region by category, county, and language.',
}

export const revalidate = 60

export default async function DirectoryPage() {
  const data = await getDirectory()
  return (
    <DirectoryClient
      listings={data?.listings ?? []}
      categories={data?.categories ?? []}
      loadError={!data}
    />
  )
}
