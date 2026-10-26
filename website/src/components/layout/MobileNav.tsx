'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import * as Accordion from '@radix-ui/react-accordion'
import { X, ChevronDown, Phone, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useMenuStore } from '@/store/menuStore'
import { useBodyScrollLock } from '@/lib/hooks/useBodyScrollLock'
import { NAV_LINKS, HELPLINE_PHONE } from '@/lib/utils/constants'

export default function MobileNav() {
  const { isMobileMenuOpen, closeMobileMenu } = useMenuStore()
  const pathname = usePathname()
  const router = useRouter()

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    closeMobileMenu()
  }, [pathname, closeMobileMenu])

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={(open) => !open && closeMobileMenu()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
            'data-[state=open]:animate-backdrop-in',
            'data-[state=closed]:animate-fade-out'
          )}
        />

        <Dialog.Content
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-[min(320px,100vw)] bg-white',
            'flex flex-col shadow-overlay',
            'data-[state=open]:animate-slide-in-right',
            'data-[state=closed]:animate-slide-out-right',
            'focus:outline-none'
          )}
          aria-label="Main navigation menu"
        >
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-warmgray-100">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
              onClick={closeMobileMenu}
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-warmgray-700 to-warmgray-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">BB</span>
              </div>
              <span className="text-sm font-semibold text-warmgray-900 leading-tight">
                Big Bend<br />
                <span className="text-warmgray-800 text-xs">Brain Health</span>
              </span>
            </Link>

            <Dialog.Close
              className="p-2 rounded-lg text-warmgray-500 hover:bg-warmgray-100 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" aria-hidden />
            </Dialog.Close>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-2">
            <Accordion.Root type="single" collapsible>
              {NAV_LINKS.map((item) => {
                const isActive = pathname.startsWith(item.href)

                if (!('children' in item)) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center px-4 py-3 text-sm font-medium text-warmgray-700 hover:bg-warmgray-50 hover:text-warmgray-900',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-warmgray-700',
                        isActive && 'text-warmgray-900 bg-warmgray-50'
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <Accordion.Item key={item.href} value={item.href}>
                    <Accordion.Trigger
                      className={cn(
                        'group flex items-center justify-between w-full px-4 py-3',
                        'text-sm font-medium text-warmgray-700 hover:bg-warmgray-50 hover:text-warmgray-900',
                        'transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-warmgray-700',
                        isActive && 'text-warmgray-900 bg-warmgray-50'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className="w-4 h-4 text-warmgray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>

                    <Accordion.Content
                      className={cn(
                        'overflow-hidden',
                        'data-[state=open]:animate-fade-in',
                        'data-[state=closed]:animate-fade-out'
                      )}
                    >
                      <div className="py-1 bg-warmgray-50 border-y border-warmgray-100">
                        {('children' in item) && item.children?.map((child: { href: string; label: string; description: string }) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'flex flex-col gap-0.5 px-6 py-2.5 transition-colors duration-150',
                              'hover:bg-warmgray-100',
                              'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-warmgray-700',
                              pathname === child.href && 'bg-warmgray-50'
                            )}
                          >
                            <span className={cn(
                              'text-sm font-medium text-warmgray-800',
                              pathname === child.href && 'text-warmgray-900'
                            )}>
                              {child.label}
                            </span>
                            <span className="text-xs text-warmgray-500">{child.description}</span>
                          </Link>
                        ))}

                        <Link
                          href={item.href}
                          className="flex items-center px-6 py-2.5 text-xs font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors focus-visible:outline-none"
                        >
                          View all {item.label} →
                        </Link>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                )
              })}
            </Accordion.Root>

            <div className="px-4 py-3 mt-1 border-t border-warmgray-100">
              <div className="grid grid-cols-2 gap-2">
                <Link href="/events" className="flex items-center justify-center px-3 py-2 text-xs font-medium text-warmgray-600 bg-warmgray-100 rounded-lg hover:bg-warmgray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700">
                  Events
                </Link>
                <Link href="/professionals" className="flex items-center justify-center px-3 py-2 text-xs font-medium text-warmgray-600 bg-warmgray-100 rounded-lg hover:bg-warmgray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700">
                  Professionals
                </Link>
                <Link href="/about" className="flex items-center justify-center px-3 py-2 text-xs font-medium text-warmgray-600 bg-warmgray-100 rounded-lg hover:bg-warmgray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700">
                  About
                </Link>
                <Link href="/directory" className="flex items-center justify-center px-3 py-2 text-xs font-medium text-warmgray-600 bg-warmgray-100 rounded-lg hover:bg-warmgray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700">
                  Search
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-warmgray-100 p-4 space-y-2 bg-warmgray-50">
            <Link
              href="/emergency"
              className="flex items-center justify-center gap-2 w-full btn-emergency text-sm py-2.5"
            >
              <AlertCircle className="w-4 h-4" aria-hidden />
              Emergency Resources
            </Link>
            <a
              href={`tel:+18503862778`}
              className="flex items-center justify-center gap-2 w-full text-xs font-medium text-warmgray-600 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden />
              Helpline: {HELPLINE_PHONE}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
