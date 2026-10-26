import { NextResponse, type NextRequest } from 'next/server'
import { searchSiteContent } from '@/sanity/lib/queries'
import { countyLabel, formatEventWhen, formatScheduleEntry, programPageUrl, programPlace } from '@/lib/utils/schedule'
import type { LiveSearchResponse } from '@/lib/hooks/useLiveSearch'

// Live search over Sanity content (upcoming events and weekly programs).
// Page text is searched separately in the browser with the build-time Pagefind index.
export async function GET(request: NextRequest) {
  const query = (request.nextUrl.searchParams.get('q') ?? '').trim().slice(0, 100)
  const empty: LiveSearchResponse = { events: [], programs: [] }
  if (!query) return NextResponse.json(empty)

  try {
    const { events, programs } = await searchSiteContent(query)
    const response: LiveSearchResponse = {
      events: events.map((event) => ({
        id: event._id,
        title: event.title,
        url: `/events#event-${event._id}`,
        detail: [formatEventWhen(event.start, event.end), [event.locationName, countyLabel(event.county)].filter(Boolean).join(', ')]
          .join(' · '),
      })),
      programs: programs.map((program) => ({
        id: program._id,
        title: program.name,
        url: programPageUrl(program),
        detail: [...(program.schedule ?? []).map(formatScheduleEntry), programPlace(program)].filter(Boolean).join(' · '),
        badge: program.programType,
      })),
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error('Live search: Sanity request failed', error)
    return NextResponse.json({ ...empty, error: true })
  }
}
