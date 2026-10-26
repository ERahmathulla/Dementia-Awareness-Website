import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The category name shown on the website, e.g. "Support Group".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web address name',
      type: 'slug',
      description: 'Used in filter links like /directory?category=support-group. Click "Generate" to fill it from the title.',
      options: { source: 'title', maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional. A sentence about what belongs in this category.',
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first in the category filter (1, 2, 3…).',
    }),
  ],
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare: ({ title, order }) => ({
      title,
      subtitle: typeof order === 'number' ? `Sort order ${order}` : undefined,
    }),
  },
})
