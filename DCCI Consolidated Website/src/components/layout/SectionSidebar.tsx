'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

interface SidebarLink {
  label: string
  href: string
}

interface SectionSidebarProps {
  title: string
  links: SidebarLink[]
}

export default function SectionSidebar({ title, links }: SectionSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      data-pagefind-ignore
      className="hidden lg:block w-56 shrink-0"
      aria-label={`${title} section navigation`}
    >
      <nav
        className="sticky bg-white rounded-2xl border border-warmgray-100 shadow-card p-4 overflow-y-auto"
        style={{
          top: 'calc(var(--total-bar-height) + 1.5rem)',
          maxHeight: 'calc(100vh - var(--total-bar-height) - 3rem)',
        }}
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-warmgray-400 px-2 mb-3">
          {title}
        </div>
        <ul className="space-y-0.5" role="list">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href) && (pathname === link.href || pathname[link.href.length] === '/'))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm transition-all duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700',
                    isActive
                      ? 'bg-warmgray-50 text-warmgray-900 font-semibold'
                      : 'text-warmgray-600 hover:bg-warmgray-50 hover:text-warmgray-900'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
