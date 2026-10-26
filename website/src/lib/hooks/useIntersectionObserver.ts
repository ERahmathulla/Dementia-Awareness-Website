'use client'

import { useEffect, useRef, useState } from 'react'

interface Options extends IntersectionObserverInit {
  once?: boolean
}

export function useIntersectionObserver<T extends Element>(options: Options = {}) {
  const { once = true, ...observerOptions } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        if (once) observer.disconnect()
      } else if (!once) {
        setIsIntersecting(false)
      }
    }, { threshold: 0.1, ...observerOptions })

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, observerOptions])

  return { ref, isIntersecting }
}
