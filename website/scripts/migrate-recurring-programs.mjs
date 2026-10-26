// Migrates the site's recurring program schedules into Sanity as recurringProgram documents:
//   - respite Social Clubs   -> scripts/recurring-programs.ndjson
//   - support groups         -> scripts/support-groups.ndjson
//
//   node scripts/migrate-recurring-programs.mjs
//   npx.cmd sanity dataset import scripts/recurring-programs.ndjson production --replace
//   npx.cmd sanity dataset import scripts/support-groups.ndjson production --replace
//
// Every document has a fixed _id, so re-running an import updates the same
// documents instead of creating duplicates. Note that --replace overwrites any
// edits made in the Studio to these documents, so import only the file you need.

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const slugify = (s) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Fixed creation times keep each page's original order
const createdAt = (minute, i) => new Date(Date.UTC(2026, 9, 26, 0, minute, i)).toISOString()

// From src/app/care-services/respite/page.tsx: "Alzheimer's Project Social Clubs (Day Respite)",
// open 9am–3pm (drop-off after 9, pickup before 3). Contact: (850) 386-2778.
// The page listed each club as "Location (City)".
const socialClubs = [
  { day: 'Monday', locationName: 'Temple Israel', city: 'Tallahassee', county: 'Leon' },
  { day: 'Monday', locationName: 'Lake Ellen Baptist Church', city: 'Crawfordville', county: 'Wakulla' },
  { day: 'Tuesday', locationName: 'Good Shepherd Catholic Church', city: 'Tallahassee', county: 'Leon' },
  { day: 'Wednesday', locationName: 'Immanuel Baptist Church', city: 'Tallahassee', county: 'Leon' },
  { day: 'Friday', locationName: "St. Paul's United Methodist Church", city: 'Tallahassee', county: 'Leon' },
]

const respiteDocs = socialClubs.map((club, i) => ({
  _id: `recurringProgram-social-club-${slugify(club.locationName)}`,
  _type: 'recurringProgram',
  _createdAt: createdAt(0, i),
  name: `Social Club at ${club.locationName}`,
  programType: 'Respite',
  organization: "Alzheimer's Project",
  schedule: [{ _key: slugify(club.day), _type: 'scheduleEntry', day: club.day, startTime: '09:00', endTime: '15:00' }],
  locationName: club.locationName,
  address: club.city,
  county: club.county,
  phone: '(850) 386-2778',
  publicNotes: 'drop-off after 9, pickup before 3',
  hidden: false,
}))

// The same five groups were listed on src/app/caregiver-support/support-groups/page.tsx and in
// "Recurring Support Groups" on src/app/events/page.tsx. These use the Support Groups page's
// fuller names, locations, notes, and badges. All are free, no RSVP, run by the Alzheimer's Project.
const supportGroups = [
  {
    name: 'Mindful Moments (Early-Stage Group)',
    locationName: "St. Paul's United Methodist Church", address: 'Tallahassee, FL', county: 'Leon',
    schedule: { day: 'Thursday', weeks: ['2nd', '4th'], startTime: '10:00', endTime: '11:30' },
    publicNotes: 'For caregivers of persons in early-stage dementia',
    label: 'Specialized',
  },
  {
    name: 'Luncheon Support Group',
    locationName: "St. Paul's UMC – Parlor Room", address: 'Tallahassee, FL', county: 'Leon',
    schedule: { day: 'Tuesday', weeks: ['1st', '3rd'], startTime: '11:30', endTime: '13:00' },
    label: 'General',
  },
  {
    name: 'Evening Support Group',
    locationName: 'Immanuel Baptist Church', address: 'Tallahassee, FL', county: 'Leon',
    schedule: { day: 'Tuesday', weeks: ['2nd', '4th'], startTime: '18:00', endTime: '19:30' },
    publicNotes: 'Evening scheduling for working caregivers',
    label: 'General',
  },
  {
    name: 'Morning Support Group',
    locationName: 'Westminster Oaks – Bertrand Health Center', address: 'Tallahassee, FL', county: 'Leon',
    schedule: { day: 'Friday', weeks: ['2nd', '4th'], startTime: '10:00', endTime: '11:30' },
    label: 'General',
  },
  {
    name: 'Jefferson County Support Group',
    locationName: 'CowHaus Coffee Company', address: 'Monticello, FL', county: 'Jefferson',
    schedule: { day: 'Monday', weeks: ['Last'], startTime: '12:00', endTime: '13:00' },
    publicNotes: 'Serving Jefferson County and surrounding areas',
    label: 'County',
  },
]

const supportGroupDocs = supportGroups.map(({ schedule, ...group }, i) => ({
  _id: `recurringProgram-support-group-${slugify(group.name)}`,
  _type: 'recurringProgram',
  _createdAt: createdAt(1, i),
  ...group,
  programType: 'Support group',
  organization: "Alzheimer's Project",
  schedule: [{ _key: slugify(schedule.day), _type: 'scheduleEntry', ...schedule }],
  phone: '(850) 386-2778',
  hidden: false,
}))

const here = dirname(fileURLToPath(import.meta.url))
const ids = new Set()
for (const [file, docs] of [['recurring-programs.ndjson', respiteDocs], ['support-groups.ndjson', supportGroupDocs]]) {
  for (const d of docs) {
    if (ids.has(d._id)) throw new Error(`Duplicate _id ${d._id}`)
    ids.add(d._id)
  }
  writeFileSync(join(here, file), docs.map((d) => JSON.stringify(d)).join('\n') + '\n')
  console.log(`Wrote scripts/${file}: ${docs.length} documents`)
}
