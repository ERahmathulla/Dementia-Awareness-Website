import { defineQuery } from 'next-sanity'
import { sanityFetch } from './client'

export interface DirectoryCategory {
  _id: string
  title: string
  slug: string | null
}

export interface DirectoryListing {
  _id: string
  name: string
  summary: string
  details?: string
  category?: { title: string; slug: string | null } | null
  countiesServed?: string[]
  address?: string
  city?: string
  phone?: string
  website?: string
  email?: string
  cost?: string
  eligibility?: string
  languages?: string[]
  lastVerified?: string
}

export interface SiteEvent {
  _id: string
  title: string
  start: string
  end?: string
  county: string
  locationName?: string
  address?: string
  description?: string
  registrationUrl?: string
  organizer?: string
  cost?: string
}

// editorNotes is deliberately left out: it is never shown on the site.
export const DIRECTORY_QUERY = defineQuery(`{
  "listings": *[_type == "listing" && hidden != true] | order(name asc) {
    _id, name, summary, details, countiesServed, address, city, phone, website, email,
    cost, eligibility, languages, lastVerified,
    "category": category->{ title, "slug": slug.current }
  },
  "categories": *[_type == "category"] | order(order asc, title asc) { _id, title, "slug": slug.current }
}`)

export const UPCOMING_EVENTS_QUERY = defineQuery(`*[
  _type == "event" && hidden != true
  && dateTime(coalesce(end, start)) >= dateTime($now)
  && (!defined($county) || county == $county)
] | order(start asc) {
  _id, title, start, end, county, locationName, address, description, registrationUrl, organizer, cost
}`)

export async function getDirectory() {
  try {
    return await sanityFetch<{ listings: DirectoryListing[]; categories: DirectoryCategory[] }>(DIRECTORY_QUERY)
  } catch (error) {
    console.error('Failed to load directory from Sanity', error)
    return null
  }
}

// Upcoming = not yet ended (or not yet started, when there is no end time).
// `now` is rounded to the minute so the Sanity CDN can cache the query.
export async function getUpcomingEvents(county?: string) {
  const now = new Date(Math.floor(Date.now() / 60_000) * 60_000).toISOString()
  try {
    return await sanityFetch<SiteEvent[]>(UPCOMING_EVENTS_QUERY, { now, county: county ?? null })
  } catch (error) {
    console.error('Failed to load events from Sanity', error)
    return null
  }
}
