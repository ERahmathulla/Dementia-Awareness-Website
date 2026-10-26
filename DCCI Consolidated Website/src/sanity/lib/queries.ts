import { defineQuery } from 'next-sanity'
import { sanityFetch } from './client'

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

export interface ScheduleEntry {
  _key: string
  day: string
  startTime: string
  endTime: string
  weeks?: string[]
}

export interface RecurringProgram {
  _id: string
  name: string
  programType: string
  organization?: string
  description?: string
  schedule?: ScheduleEntry[]
  locationName?: string
  address?: string
  county?: string
  phone?: string
  website?: string
  publicNotes?: string
}

export const UPCOMING_EVENTS_QUERY = defineQuery(`*[
  _type == "event" && hidden != true
  && dateTime(coalesce(end, start)) >= dateTime($now)
  && (!defined($county) || county == $county)
] | order(start asc) {
  _id, title, start, end, county, locationName, address, description, registrationUrl, organizer, cost
}`)

export const RECURRING_PROGRAMS_QUERY = defineQuery(`*[
  _type == "recurringProgram" && hidden != true && programType == $programType
] | order(_createdAt asc) {
  _id, name, programType, organization, description, schedule, locationName, address, county, phone, website, publicNotes
}`)

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

export async function getRecurringPrograms(programType: string) {
  try {
    return await sanityFetch<RecurringProgram[]>(RECURRING_PROGRAMS_QUERY, { programType })
  } catch (error) {
    console.error('Failed to load recurring programs from Sanity', error)
    return null
  }
}
