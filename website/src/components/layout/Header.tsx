'use client'

import Link from 'next/link'
import { Search, Menu } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useScrollHeader } from '@/lib/hooks/useScrollHeader'
import { useMenuStore } from '@/store/menuStore'
import { useSearchStore } from '@/store/searchStore'
import DesktopNav from './DesktopNav'

export default function Header() {
  const { isVisible, isScrolled } = useScrollHeader(50)
  const { toggleMobileMenu } = useMenuStore()
  const { open: openSearch } = useSearchStore()

  return (
    <header
      className={cn(
        'sticky z-40 bg-white transition-all duration-300 ease-smooth will-change-transform',
        'border-b',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled
          ? 'border-warmgray-100/80 shadow-header-scrolled backdrop-blur-md bg-white/90'
          : 'border-transparent shadow-none bg-white'
      )}
      style={{ top: 'var(--helpbar-height)', height: 'var(--header-height)' }}
    >
      <div className="container-main h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded-lg group"
          aria-label="Big Bend Brain Health — Home"
        >
          <video
            src="/brain.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[95px] h-[95px] rounded-xl object-cover shadow-sm group-hover:shadow-md transition-shadow"
            aria-hidden={true}
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-bold text-warmgray-900 group-hover:text-warmgray-900 transition-colors">
              Big Bend Brain Health
            </div>
            <div className="text-[11px] text-warmgray-500 font-medium">
              Memory Care Resources
            </div>
          </div>
          <div className="sm:hidden text-sm font-bold text-warmgray-900 group-hover:text-warmgray-900 transition-colors">
            BBBH
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="flex-1 flex justify-center">
          <DesktopNav />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={openSearch}
            className={cn(
              'p-2 rounded-lg text-warmgray-500 hover:bg-warmgray-100 hover:text-warmgray-900',
              'transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700'
            )}
            aria-label="Open search (Ctrl+K)"
          >
            <Search className="w-5 h-5" aria-hidden />
          </button>

          <button
            onClick={toggleMobileMenu}
            className={cn(
              'lg:hidden p-2 rounded-lg text-warmgray-500 hover:bg-warmgray-100 hover:text-warmgray-900',
              'transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700'
            )}
            aria-label="Open navigation menu"
            aria-expanded={false}
            aria-controls="mobile-nav"
          >
            <Menu className="w-5 h-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  )
}
