import { MapPin, Clock, Users } from 'lucide-react'
import type { RecurringProgram } from '@/sanity/lib/queries'
import { PROGRAM_TYPES } from '@/sanity/options'
import { formatScheduleEntry, programPlace } from '@/lib/utils/schedule'

export default function ProgramCard({ program, titleAs: Title = 'h3' }: { program: RecurringProgram; titleAs?: 'h3' | 'h4' }) {
  const place = programPlace(program)
  return (
    <div className="card-base p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center">
          <Users className="w-4 h-4 text-warmgray-700" aria-hidden />
        </div>
        <span className="badge bg-warmgray-100 text-warmgray-800">Recurring</span>
      </div>
      <Title className="text-sm font-bold text-warmgray-900 mb-1.5">{program.name}</Title>
      <div className="space-y-1 text-xs text-warmgray-500">
        {program.schedule?.map((entry) => (
          <div key={entry._key} className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 shrink-0" aria-hidden />
            {formatScheduleEntry(entry)}
          </div>
        ))}
        {place && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 shrink-0" aria-hidden />
            {place}
          </div>
        )}
      </div>
    </div>
  )
}

const GROUP_TITLES: Record<string, string> = {
  Respite: 'Respite',
  'Support group': 'Support groups',
  Class: 'Classes',
  Other: 'Other programs',
}

// Programs grouped by type, in the Studio's type order
export function WeeklyPrograms({
  programs,
  gridClassName = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
}: { programs: RecurringProgram[]; gridClassName?: string }) {
  const groups = PROGRAM_TYPES
    .map((type) => ({ type, items: programs.filter((p) => p.programType === type) }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.type}>
          <h3 className="text-lg font-bold text-warmgray-900 mb-4">{GROUP_TITLES[group.type] ?? group.type}</h3>
          <div className={gridClassName}>
            {group.items.map((program) => (
              <ProgramCard key={program._id} program={program} titleAs="h4" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProgramsLoadError() {
  return (
    <p className="text-sm text-warmgray-600" role="alert">
      Weekly programs couldn't load right now. Please try again in a few minutes.
    </p>
  )
}
