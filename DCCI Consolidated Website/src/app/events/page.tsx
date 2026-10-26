import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Users } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import EventCard, { EventsLoadError, NoUpcomingEvents } from '@/components/events/EventCard'
import { getUpcomingEvents } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Events & Classes',
  description: 'Upcoming dementia education events, support group schedules, and conferences in the Big Bend region.',
}

export const revalidate = 60

export default async function EventsPage() {
  const events = await getUpcomingEvents()

  const recurringGroups = [
    { name: 'Mindful Moments (Early-Stage)', schedule: '2nd & 4th Thursday, 10–11:30am', location: "St. Paul's UMC, Tallahassee" },
    { name: 'Evening Support Group', schedule: '2nd & 4th Tuesday, 6–7:30pm', location: 'Immanuel Baptist Church, Tallahassee' },
    { name: 'Luncheon Support Group', schedule: '1st & 3rd Tuesday, 11:30am–1pm', location: "St. Paul's UMC, Tallahassee" },
    { name: 'Morning Support Group', schedule: '2nd & 4th Friday, 10–11:30am', location: 'Westminster Oaks, Tallahassee' },
    { name: 'Jefferson Co. Support Group', schedule: 'Last Monday monthly, 12–1pm', location: 'CowHaus Coffee, Monticello' },
  ]

  return (
    <div className="pt-header">
      <div className="bg-gradient-to-b from-warmgray-50 to-white border-b border-warmgray-100 py-10">
        <div className="container-main">
          <Breadcrumbs crumbs={[{ label: 'Events & Stay Connected' }]} />
          <h1 className="text-3xl font-bold text-warmgray-900 mb-2">Events & Classes</h1>
          <p className="text-warmgray-500 max-w-xl">
            Support groups, education classes, and community events from all partner organizations.
          </p>
        </div>
      </div>

      <div className="container-main py-10">
        {/* Recurring support groups */}
        <section className="mb-12" aria-labelledby="recurring-heading">
          <h2 id="recurring-heading" className="text-2xl font-bold text-warmgray-900 mb-2">
            Recurring Support Groups
          </h2>
          <p className="text-sm text-warmgray-500 mb-6">
            All groups are free, facilitated by Alzheimer's Project, and require no RSVP.
            Call <a href="tel:+18503862778" className="text-warmgray-800 font-medium hover:text-warmgray-900">(850) 386-2778</a> to confirm times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recurringGroups.map((group) => (
              <div key={group.name} className="card-base p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-warmgray-700" aria-hidden />
                  </div>
                  <span className="badge bg-warmgray-100 text-warmgray-800">Recurring</span>
                </div>
                <h3 className="text-sm font-bold text-warmgray-900 mb-1.5">{group.name}</h3>
                <div className="space-y-1 text-xs text-warmgray-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 shrink-0" aria-hidden />
                    {group.schedule}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 shrink-0" aria-hidden />
                    {group.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming events from Sanity */}
        <section aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className="text-2xl font-bold text-warmgray-900 mb-6">
            Upcoming Events
          </h2>
          {events === null ? (
            <EventsLoadError />
          ) : events.length > 0 ? (
            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <NoUpcomingEvents />
          )}
        </section>
      </div>
    </div>
  )
}
