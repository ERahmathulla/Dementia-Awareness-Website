// Shared option lists used by the Studio schemas and the website.

export const LOCAL_COUNTIES = [
  'Leon', 'Wakulla', 'Gadsden', 'Jefferson', 'Madison', 'Taylor', 'Liberty', 'Franklin', 'Calhoun',
] as const

export const COUNTY_OPTIONS = [...LOCAL_COUNTIES, 'All Big Bend counties', 'Statewide', 'Nationwide / Online']

export const PROGRAM_TYPES = ['Respite', 'Support group', 'Class', 'Other'] as const

export const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

// "Which weeks of the month" for programs like "2nd & 4th Tuesday". Empty means every week.
export const WEEKS_OF_MONTH = ['1st', '2nd', '3rd', '4th', '5th', 'Last'] as const

// 24-hour "HH:MM" value, shown to editors as "9:00 AM"
export function formatClockTime(value: string) {
  const [h, m] = value.split(':').map(Number)
  const hour = h % 12 || 12
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
}

// 6:00 AM to 10:00 PM in 15-minute steps
export const TIME_OPTIONS = Array.from({ length: (22 - 6) * 4 + 1 }, (_, i) => {
  const minutes = 6 * 60 + i * 15
  const value = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
  return { title: formatClockTime(value), value }
})
