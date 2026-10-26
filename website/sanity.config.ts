'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'big-bend-brain-health',
  title: 'Big Bend Brain Health',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      // Pre-fills the program type when creating from a "Recurring programs" group
      {
        id: 'recurringProgram-by-type',
        title: 'Recurring program',
        schemaType: 'recurringProgram',
        parameters: [{ name: 'programType', type: 'string' }],
        value: (params: { programType: string }) => ({ programType: params.programType }),
      },
    ],
  },
  document: {
    // Keep the global "Create" menu to the plain document types
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global' ? prev.filter((item) => item.templateId !== 'recurringProgram-by-type') : prev,
  },
})
