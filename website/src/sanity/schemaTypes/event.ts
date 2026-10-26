import { defineField, defineType } from 'sanity'
import { COUNTY_OPTIONS } from '../options'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The event name.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'start',
      title: 'Starts',
      type: 'datetime',
      description: 'Date and start time (Florida time).',
      options: { timeStep: 15 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'Ends',
      type: 'datetime',
      description: 'Optional. The event stays on the website until this time (or until it starts, if left empty).',
      options: { timeStep: 15 },
      validation: (rule) =>
        rule.custom((end, context) => {
          const start = (context.document as { start?: string } | undefined)?.start
          return !end || !start || end >= start ? true : 'The end must be after the start.'
        }),
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'string',
      options: { list: COUNTY_OPTIONS.map((c) => ({ title: c, value: c })) },
      description: 'Where the event happens. It appears on that county\'s page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationName',
      title: 'Location name',
      type: 'string',
      description: 'Optional. e.g. "FSU College of Medicine"',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Optional. e.g. "1115 W. Call St., Tallahassee"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Optional. A few sentences about the event.',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration link',
      type: 'url',
      description: 'Optional. Where people sign up, starting with https://',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
      description: 'Optional. Who is hosting, e.g. "Alzheimer\'s Project".',
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'string',
      description: 'Optional. e.g. "Free" or "$25".',
    }),
    defineField({
      name: 'hidden',
      title: 'Hide from website',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on to hide this event without deleting it.',
    }),
  ],
  orderings: [
    { title: 'Start date', name: 'startAsc', by: [{ field: 'start', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', start: 'start', county: 'county', hidden: 'hidden' },
    prepare: ({ title, start, county, hidden }) => ({
      title,
      subtitle: [
        start ? new Date(start).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : null,
        county,
        hidden ? 'Hidden' : null,
      ].filter(Boolean).join(' · '),
    }),
  },
})
