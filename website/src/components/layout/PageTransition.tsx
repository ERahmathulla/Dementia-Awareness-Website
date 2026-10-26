'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      const el = containerRef.current
      if (!el) return

      el.style.opacity = '0'
      el.style.transform = 'translateY(6px)'
      el.style.transition = 'none'

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = 'opacity 200ms cubic-bezier(0.4,0,0.2,1), transform 200ms cubic-bezier(0.4,0,0.2,1)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      })
    }
  }, [pathname])

  return (
    <div ref={containerRef} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  )
}
