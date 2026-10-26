import type { StructureResolver } from 'sanity/structure'
import { apiVersion } from './env'

// Listings verified before this date (or never) show under "Needs review".
function reviewCutoff() {
  const d = new Date()
  d.setFullYear(d.getFullYear() - 1)
  return d.toISOString().slice(0, 10)
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('All listings')
        .schemaType('listing')
        .child(S.documentTypeList('listing').title('All listings').apiVersion(apiVersion)),
      S.listItem()
        .title('Listings by category')
        .child(
          S.documentTypeList('category')
            .title('Listings by category')
            .apiVersion(apiVersion)
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
            .child((categoryId) =>
              S.documentTypeList('listing')
                .title('Listings')
                .apiVersion(apiVersion)
                .filter('_type == "listing" && category._ref == $categoryId')
                .params({ categoryId }),
            ),
        ),
      S.listItem()
        .title('Needs review')
        .child(() =>
          S.documentTypeList('listing')
            .title('Needs review (not verified in 12 months)')
            .apiVersion(apiVersion)
            .filter('_type == "listing" && (!defined(lastVerified) || lastVerified < $cutoff)')
            .params({ cutoff: reviewCutoff() }),
        ),
      S.listItem()
        .title('Hidden listings')
        .child(
          S.documentTypeList('listing')
            .title('Hidden listings')
            .apiVersion(apiVersion)
            .filter('_type == "listing" && hidden == true'),
        ),
      S.divider(),
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
        .title('Categories')
        .schemaType('category')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .apiVersion(apiVersion)
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),
    ])
