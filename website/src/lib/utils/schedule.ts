import type { RecurringProgram, ScheduleEntry } from '@/sanity/lib/queries'
import { LOCAL_COUNTIES } from '@/sanity/options'

// Weekly program times are stored as 24-hour "HH:MM" and shown like "10–11:30am" or "11:30am–1pm"
function clock(value: string) {
  const [h, m] = value.split(':').map(Number)
  return { text: `${h % 12 || 12}${m ? `:${String(m).padStart(2, '0')}` : ''}`, period: h < 12 ? 'am' : 'pm' }
}

export function formatTimeRange(start: string, end: string) {
  const s = clock(start)
  const e = clock(end)
  return s.period === e.period ? `${s.text}–${e.text}${e.period}` : `${s.text}${s.period}–${e.text}${e.period}`
}

// "Every Monday", "2nd & 4th Thursday", or "Last Monday of each month"
export function formatDays(entry: ScheduleEntry) {
  if (!entry.weeks?.length) return `Every ${entry.day}`
  const days = `${entry.weeks.join(' & ')} ${entry.day}`
  return entry.weeks.length === 1 ? `${days} of each month` : days
}

export function formatScheduleEntry(entry: ScheduleEntry) {
  return `${formatDays(entry)}, ${formatTimeRange(entry.startTime, entry.endTime)}`
}

export function programPlace(program: RecurringProgram) {
  return [program.locationName, program.address].filter(Boolean).join(', ')
}

export function countyLabel(county: string) {
  return (LOCAL_COUNTIES as readonly string[]).includes(county) ? `${county} County` : county
}

// Where each program type is listed on the site
export function programPageUrl(program: Pick<RecurringProgram, '_id' | 'programType'>) {
  if (program.programType === 'Respite') return '/care-services/respite#social-clubs-heading'
  if (program.programType === 'Support group') return `/caregiver-support/support-groups#${program._id}`
  return '/events#weekly-programs'
}

const EVENT_TIME_ZONE = 'America/New_York'

function fmt(iso: string, options: Intl.DateTimeFormatOptions) {
  return new Date(iso).toLocaleString('en-US', { timeZone: EVENT_TIME_ZONE, ...options })
}

export function formatEventDay(iso: string, options: Intl.DateTimeFormatOptions) {
  return fmt(iso, options)
}

// "Saturday, June 20, 2026 · 9:00 AM–4:00 PM" in Florida time
export function formatEventWhen(start: string, end?: string) {
  const day = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' } as const
  const time = { hour: 'numeric', minute: '2-digit' } as const
  const startText = `${fmt(start, day)} · ${fmt(start, time)}`
  if (!end) return startText
  const sameDay = fmt(start, { dateStyle: 'short' }) === fmt(end, { dateStyle: 'short' })
  return sameDay ? `${startText}–${fmt(end, time)}` : `${startText} – ${fmt(end, day)} · ${fmt(end, time)}`
}
