'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollHeader(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    function handleScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setIsScrolled(currentScrollY > threshold)

          if (currentScrollY < 10) {
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current + 5) {
            setIsVisible(false)
          } else if (currentScrollY < lastScrollY.current - 5) {
            setIsVisible(true)
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { isVisible, isScrolled }
}
