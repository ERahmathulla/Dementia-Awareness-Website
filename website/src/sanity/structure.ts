import type { StructureResolver } from 'sanity/structure'
import { apiVersion } from './env'
import { PROGRAM_TYPES } from './options'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming events')
        .child(
          S.documentTypeList('event')
            .title('Upcoming events')
            .apiVersion(apiVersion)
            .filter('_type == "event" && dateTime(coalesce(end, start)) >= dateTime(now())')
            .defaultOrdering([{ field: 'start', direction: 'asc' }]),
        ),
      S.listItem()
        .title('Past events')
        .child(
          S.documentTypeList('event')
            .title('Past events')
            .apiVersion(apiVersion)
            .filter('_type == "event" && dateTime(coalesce(end, start)) < dateTime(now())')
            .defaultOrdering([{ field: 'start', direction: 'desc' }]),
        ),
      S.divider(),
      S.listItem()
        .title('Recurring programs')
        .schemaType('recurringProgram')
        .child(
          S.list()
            .title('Recurring programs')
            .items(
              PROGRAM_TYPES.map((programType) =>
                S.listItem()
                  .id(programType.toLowerCase().replace(/\s+/g, '-'))
                  .title(programType)
                  .schemaType('recurringProgram')
                  .child(
                    S.documentTypeList('recurringProgram')
                      .title(programType)
                      .apiVersion(apiVersion)
                      .filter('_type == "recurringProgram" && programType == $programType')
                      .params({ programType })
                      .initialValueTemplates([
                        S.initialValueTemplateItem('recurringProgram-by-type', { programType }),
                      ]),
                  ),
              ),
            ),
        ),
    ])
