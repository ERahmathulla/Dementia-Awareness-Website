// Shared option lists used by the Studio schemas and the website filters.

export const LOCAL_COUNTIES = [
  'Leon', 'Wakulla', 'Gadsden', 'Jefferson', 'Madison', 'Taylor', 'Liberty', 'Franklin', 'Calhoun',
] as const

// Listings with these values match every county filter.
export const REGIONAL_AREAS = ['All Big Bend counties', 'Statewide', 'Nationwide / Online'] as const

export const COUNTY_OPTIONS = [...LOCAL_COUNTIES, ...REGIONAL_AREAS]

export const COST_OPTIONS = ['Free', 'Sliding scale', 'Insurance accepted', 'Paid', 'Varies'] as const
