import { MapPin, Clock, ExternalLink } from 'lucide-react'
import type { SiteEvent } from '@/sanity/lib/queries'
import { LOCAL_COUNTIES } from '@/sanity/options'

const TIME_ZONE = 'America/New_York'

function fmt(iso: string, options: Intl.DateTimeFormatOptions) {
  return new Date(iso).toLocaleString('en-US', { timeZone: TIME_ZONE, ...options })
}

function whenText(start: string, end?: string) {
  const day = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' } as const
  const time = { hour: 'numeric', minute: '2-digit' } as const
  const startText = `${fmt(start, day)} · ${fmt(start, time)}`
  if (!end) return startText
  const sameDay = fmt(start, { dateStyle: 'short' }) === fmt(end, { dateStyle: 'short' })
  return sameDay ? `${startText}–${fmt(end, time)}` : `${startText} – ${fmt(end, day)} · ${fmt(end, time)}`
}

export default function EventCard({ event }: { event: SiteEvent }) {
  const place = [event.locationName, event.address].filter(Boolean).join(', ')
  const countyLabel = (LOCAL_COUNTIES as readonly string[]).includes(event.county) ? `${event.county} County` : event.county

  return (
    <div className="card-base p-5 flex gap-4">
      <div className="flex flex-col items-center justify-center w-14 h-14 bg-warmgray-100 rounded-xl shrink-0 text-center">
        <span className="text-xs font-bold text-warmgray-800 uppercase leading-none">
          {fmt(event.start, { month: 'short' })}
        </span>
        <span className="text-xl font-bold text-warmgray-900 leading-tight">
          {fmt(event.start, { day: 'numeric' })}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-warmgray-900 mb-1">{event.title}</h3>
        <div className="space-y-1 text-sm text-warmgray-500">
          <div className="flex items-start gap-1.5">
            <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden />
            <span>{whenText(event.start, event.end)}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden />
            <span>{place ? `${place} (${countyLabel})` : countyLabel}</span>
          </div>
        </div>
        {event.description && (
          <p className="text-sm text-warmgray-600 leading-relaxed mt-2">{event.description}</p>
        )}
        {(event.organizer || event.cost) && (
          <p className="text-xs text-warmgray-500 mt-2">
            {[event.organizer && `Hosted by ${event.organizer}`, event.cost && `Cost: ${event.cost}`].filter(Boolean).join(' · ')}
          </p>
        )}
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-warmgray-900 hover:text-warmgray-900 transition-colors mt-3"
          >
            Register or learn more <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        )}
      </div>
    </div>
  )
}

export function NoUpcomingEvents() {
  return (
    <p className="text-sm text-warmgray-600">
      No upcoming events right now. Check back soon, or call the Alzheimer's Project at{' '}
      <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a> for local programs.
    </p>
  )
}

export function EventsLoadError() {
  return (
    <p className="text-sm text-warmgray-600" role="alert">
      Events couldn't load right now. Please try again in a few minutes, or call the Alzheimer's Project at{' '}
      <a href="tel:+18503862778" className="font-semibold text-warmgray-800 underline">(850) 386-2778</a>.
    </p>
  )
}
