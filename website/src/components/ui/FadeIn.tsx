'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'none'
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReduced])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : direction === 'up' ? 'translateY(16px)' : 'none',
        transition: isVisible
          ? `opacity 400ms cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 400ms cubic-bezier(0.4,0,0.2,1) ${delay}s`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}
