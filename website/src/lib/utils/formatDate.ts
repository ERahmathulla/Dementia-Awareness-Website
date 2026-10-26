export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const defaults: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('en-US', { ...defaults, ...options })
}

export function formatShortDate(dateString: string): string {
  return formatDate(dateString, { month: 'short', day: 'numeric', year: 'numeric' })
}

export function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export function formatDateRange(start: string, end?: string): string {
  const startDate = formatDate(start)
  if (!end) return startDate
  const endDate = formatDate(end)
  return `${startDate} – ${endDate}`
}

export function groupByMonth(items: Array<{ startDate: string }>): Record<string, typeof items> {
  return items.reduce((groups, item) => {
    const month = new Date(item.startDate).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
    if (!groups[month]) groups[month] = []
    groups[month].push(item)
    return groups
  }, {} as Record<string, typeof items>)
}
