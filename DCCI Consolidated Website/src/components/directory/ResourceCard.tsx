import { Phone, Globe, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import type { DirectoryListing } from '@/sanity/lib/queries'

const categoryColors: Record<string, string> = {
  'safety-emergency': 'bg-emergency-100 text-emergency-700',
}

export function isSpanish(language: string) {
  return /^(es|spanish|español|espanol)$/i.test(language.trim())
}

function formatVerified(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default function ResourceCard({ listing }: { listing: DirectoryListing }) {
  const badgeColor = (listing.category?.slug && categoryColors[listing.category.slug]) || 'bg-warmgray-100 text-warmgray-800'
  const counties = listing.countiesServed ?? []

  return (
    <div className="card-interactive group p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-warmgray-900 leading-snug group-hover:text-warmgray-900 transition-colors">
          {listing.name}
        </h3>
        {listing.category && (
          <span className={cn('badge shrink-0 mt-0.5', badgeColor)}>
            {listing.category.title}
          </span>
        )}
      </div>

      <p className="text-sm text-warmgray-500 leading-relaxed flex-1">
        {listing.summary}
      </p>

      {/* Counties */}
      {counties.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {counties.slice(0, 4).map((county) => (
            <span key={county} className="badge bg-warmgray-100 text-warmgray-600">
              <MapPin className="w-2.5 h-2.5" aria-hidden />
              {county}
            </span>
          ))}
          {counties.length > 4 && (
            <span className="badge bg-warmgray-100 text-warmgray-500">
              +{counties.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Cost and languages */}
      {(listing.cost || listing.languages?.some(isSpanish)) && (
        <div className="flex flex-wrap items-center gap-1.5">
          {listing.cost && (
            <span className="badge bg-warmgray-100 text-warmgray-800">{listing.cost}</span>
          )}
          {listing.languages?.some(isSpanish) && (
            <span className="badge bg-warmgray-50 text-warmgray-800 border border-warmgray-200 text-xs">
              🌐 Español disponible
            </span>
          )}
        </div>
      )}

      {/* Contact row */}
      {(listing.phone || listing.website) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-warmgray-100">
          {listing.phone && (
            <a
              href={`tel:${listing.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
              aria-label={`Call ${listing.name} at ${listing.phone}`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden />
              {listing.phone}
            </a>
          )}
          {listing.website && (
            <a
              href={listing.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
              aria-label={`Visit ${listing.name} website (opens in new tab)`}
            >
              <Globe className="w-3.5 h-3.5" aria-hidden />
              Website
            </a>
          )}
        </div>
      )}

      {listing.lastVerified && (
        <p className="text-xs text-warmgray-400">
          Last verified: {formatVerified(listing.lastVerified)}
        </p>
      )}
    </div>
  )
}
