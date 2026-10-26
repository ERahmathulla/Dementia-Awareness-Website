// Migrates the respite (Social Club) schedules from the Respite & Adult Day page into Sanity.
//
//   node scripts/migrate-recurring-programs.mjs
//   npx.cmd sanity dataset import scripts/recurring-programs.ndjson production --replace
//
// Every document has a fixed _id, so re-running the import updates the same
// documents instead of creating duplicates. Note that --replace overwrites any
// edits made in the Studio to these documents.

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const slugify = (s) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

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

const docs = socialClubs.map((club, i) => ({
  _id: `recurringProgram-social-club-${slugify(club.locationName)}`,
  _type: 'recurringProgram',
  // Fixed creation times keep the page's original order within each day
  _createdAt: new Date(Date.UTC(2026, 9, 26, 0, 0, i)).toISOString(),
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

const ids = new Set(docs.map((d) => d._id))
if (ids.size !== docs.length) throw new Error('Duplicate _id values in migration data')

const out = join(dirname(fileURLToPath(import.meta.url)), 'recurring-programs.ndjson')
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join('\n') + '\n')

console.log(`Wrote ${out}`)
console.log(`recurring programs: ${docs.length}`)
