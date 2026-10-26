// One-time migration of the site's hardcoded directory and event data into Sanity.
//
//   node scripts/migrate-to-sanity.mjs
//   npx.cmd sanity dataset import scripts/sanity-import.ndjson production --replace
//
// Every document has a fixed _id, so re-running the import updates the same
// documents instead of creating duplicates. Note that --replace overwrites any
// edits made in the Studio to these migrated documents.

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const slugify = (s) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// From RESOURCE_CATEGORY_LABELS in src/lib/utils/constants.ts (the directory's category filter).
const categories = [
  ['helpline', 'Helpline & First Contact'],
  ['diagnosis', 'Diagnosis & Evaluation'],
  ['respite', 'Respite & Adult Day'],
  ['support-group', 'Support Group'],
  ['caregiver-education', 'Caregiver Education'],
  ['in-home-care', 'In-Home Care'],
  ['long-term-care', 'Long-Term Care'],
  ['financial', 'Financial & Insurance'],
  ['legal', 'Legal Planning'],
  ['safety-emergency', 'Safety & Emergency'],
  ['transportation', 'Transportation'],
  ['brain-health', 'Brain Health & Prevention'],
  ['research', 'Research & Trials'],
  ['professional-training', 'Professional Training'],
]

// src/app/directory/page.tsx rendered the directory with an empty list
// (initialResources={[]}), so there are no listings to migrate.
// Each entry would be: { name, category: '<category key>', summary, countiesServed: [...], ... }
const listings = []

// From the "Annual Conference" section of src/app/events/page.tsx.
// Times are Eastern (EDT, UTC-4).
const events = [
  {
    title: "Alzheimer's Disease Education & Training Conference",
    start: '2026-06-20T13:00:00.000Z',
    end: '2026-06-20T20:00:00.000Z',
    county: 'Leon',
    locationName: 'FSU College of Medicine',
    address: '1115 W. Call St., Tallahassee',
    description: "Annual conference for caregivers and healthcare professionals. Hosted by Alzheimer's Project and FSU College of Medicine.",
    registrationUrl: 'https://alzheimersproject.org',
    organizer: "Alzheimer's Project and FSU College of Medicine",
    hidden: false,
  },
]

const docs = [
  ...categories.map(([key, title], i) => ({
    _id: `category-${key}`,
    _type: 'category',
    title,
    slug: { _type: 'slug', current: key },
    order: i + 1,
  })),
  ...listings.map(({ category, ...listing }) => ({
    _id: `listing-${slugify(listing.name)}`,
    _type: 'listing',
    ...listing,
    category: { _type: 'reference', _ref: `category-${category}` },
    hidden: listing.hidden ?? false,
  })),
  ...events.map((event) => ({
    _id: `event-${slugify(event.title)}-${event.start.slice(0, 10)}`,
    _type: 'event',
    ...event,
  })),
]

const ids = new Set(docs.map((d) => d._id))
if (ids.size !== docs.length) throw new Error('Duplicate _id values in migration data')

const out = join(dirname(fileURLToPath(import.meta.url)), 'sanity-import.ndjson')
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join('\n') + '\n')

console.log(`Wrote ${out}`)
console.log(`categories: ${categories.length}, listings: ${listings.length}, events: ${events.length}`)
