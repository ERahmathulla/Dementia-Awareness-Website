import { defineField, defineType } from 'sanity'
import { COST_OPTIONS, COUNTY_OPTIONS } from '../options'

const US_PHONE = /^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const listing = defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The organization or program name.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Pick the best fit. Families use this to filter the directory.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences shown on the card. Keep it under 200 characters.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
      rows: 6,
      description: 'Optional. Longer notes like hours or what to expect. Searchable, but not shown on the card.',
    }),
    defineField({
      name: 'countiesServed',
      title: 'Counties served',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: COUNTY_OPTIONS.map((c) => ({ title: c, value: c })), layout: 'grid' },
      description: 'Tick every county this service covers. Use "All Big Bend counties", "Statewide", or "Nationwide / Online" for wider coverage.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'address',
      title: 'Street address',
      type: 'string',
      description: 'Optional. e.g. "1115 W. Call St."',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'Optional. e.g. "Tallahassee"',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Optional. A US phone number, e.g. (850) 386-2778 or 1-800-963-5337.',
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
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Optional. A public contact email.',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'string',
      options: { list: COST_OPTIONS.map((c) => ({ title: c, value: c })), layout: 'radio' },
      description: 'Optional. Pick the closest match.',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'text',
      rows: 2,
      description: 'Optional. Who qualifies, e.g. "Age 60+ in Leon County".',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Optional. Type a language and press Enter, e.g. "English", "Spanish".',
    }),
    defineField({
      name: 'lastVerified',
      title: 'Last verified',
      type: 'date',
      description: 'The date you last confirmed this information is correct. Update it every time you check.',
    }),
    defineField({
      name: 'hidden',
      title: 'Hide from website',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on to hide this listing without deleting it.',
    }),
    defineField({
      name: 'editorNotes',
      title: 'Editor notes (internal)',
      type: 'text',
      rows: 3,
      description: 'Internal only. Never shown on the website.',
    }),
  ],
  orderings: [
    { title: 'Name', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', category: 'category.title', hidden: 'hidden' },
    prepare: ({ title, category, hidden }) => ({
      title,
      subtitle: [category, hidden ? 'Hidden' : null].filter(Boolean).join(' · '),
    }),
  },
})
