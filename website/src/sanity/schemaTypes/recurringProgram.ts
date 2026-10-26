import { defineArrayMember, defineField, defineType } from 'sanity'
import { COUNTY_OPTIONS, DAYS_OF_WEEK, PROGRAM_TYPES, TIME_OPTIONS, WEEKS_OF_MONTH, formatClockTime } from '../options'

const US_PHONE = /^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const scheduleEntry = defineArrayMember({
  name: 'scheduleEntry',
  title: 'Day and time',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day of the week',
      type: 'string',
      options: { list: [...DAYS_OF_WEEK] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start time',
      type: 'string',
      options: { list: TIME_OPTIONS },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'End time',
      type: 'string',
      options: { list: TIME_OPTIONS },
      validation: (rule) =>
        rule.required().custom((end, context) => {
          const start = (context.parent as { startTime?: string } | undefined)?.startTime
          return !end || !start || end > start ? true : 'The end time must be after the start time.'
        }),
    }),
    defineField({
      name: 'weeks',
      title: 'Which weeks of the month',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: [...WEEKS_OF_MONTH], layout: 'grid' },
      description: 'Leave empty if it meets every week. For "2nd & 4th Tuesday", tick 2nd and 4th.',
    }),
  ],
  preview: {
    select: { day: 'day', startTime: 'startTime', endTime: 'endTime', weeks: 'weeks' },
    prepare: ({ day, startTime, endTime, weeks }) => ({
      title: weeks?.length ? `${weeks.join(' & ')} ${day ?? ''}`.trim() : day,
      subtitle: startTime && endTime ? `${formatClockTime(startTime)} – ${formatClockTime(endTime)}` : undefined,
    }),
  },
})

export const recurringProgram = defineType({
  name: 'recurringProgram',
  title: 'Recurring program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. "Social Club at Temple Israel".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'programType',
      title: 'Program type',
      type: 'string',
      options: { list: [...PROGRAM_TYPES], layout: 'radio' },
      description: 'Respite programs appear on the Respite & Adult Day page, and support groups on the Support Groups page. All types appear on the Events page and county pages.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Optional short tag shown as a badge on the Support Groups page, e.g. "General", "Specialized", or "County".',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description: 'Optional. Who runs it, e.g. "Alzheimer\'s Project".',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional. A sentence or two about the program.',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [scheduleEntry],
      description: 'Add one entry for each day it meets.',
    }),
    defineField({
      name: 'locationName',
      title: 'Location name',
      type: 'string',
      description: 'e.g. "Temple Israel".',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Street address and/or city. The website shows this in brackets after the location name.',
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'string',
      options: { list: COUNTY_OPTIONS.map((c) => ({ title: c, value: c })) },
      description: 'Where the program meets.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Optional. A US phone number, e.g. (850) 386-2778.',
      validation: (rule) =>
        rule.custom((value) =>
          !value || US_PHONE.test(value.trim()) ? true : 'Enter a 10-digit US phone number, like (850) 386-2778.'),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Optional. The full web address, starting with https://',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'publicNotes',
      title: 'Public notes',
      type: 'text',
      rows: 2,
      description: 'Optional. Shown on the website next to the hours, e.g. "drop-off after 9, pickup before 3".',
    }),
    defineField({
      name: 'hidden',
      title: 'Hide from website',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on to hide this program without deleting it (for example, while it is paused).',
    }),
  ],
  preview: {
    select: { title: 'name', programType: 'programType', schedule: 'schedule', hidden: 'hidden' },
    prepare: ({ title, programType, schedule, hidden }) => ({
      title,
      subtitle: [
        programType,
        (schedule as { day?: string }[] | undefined)?.map((s) => s.day).filter(Boolean).join(', '),
        hidden ? 'Hidden' : null,
      ].filter(Boolean).join(' · '),
    }),
  },
})
