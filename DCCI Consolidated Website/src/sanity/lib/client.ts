import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Public dataset: reads need no token.
export const client = createClient({ projectId, dataset, apiVersion, useCdn: true })

// Published edits show on the site within about a minute, no redeploy needed.
export function sanityFetch<T>(query: string, params: QueryParams = {}) {
  return client.fetch<T>(query, params, { next: { revalidate: 60 } })
}
