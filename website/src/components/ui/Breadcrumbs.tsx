import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-warmgray-500" role="list">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-warmgray-300" aria-hidden />
            {crumb.href && i < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-warmgray-900 font-medium" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
