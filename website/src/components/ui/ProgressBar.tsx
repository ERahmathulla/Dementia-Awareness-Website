'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ProgressBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [width, setWidth] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname

      if (timerRef.current) clearTimeout(timerRef.current)

      setIsVisible(true)
      setWidth(20)

      timerRef.current = setTimeout(() => setWidth(60), 100)
      timerRef.current = setTimeout(() => setWidth(85), 400)
      timerRef.current = setTimeout(() => setWidth(100), 700)
      timerRef.current = setTimeout(() => {
        setIsVisible(false)
        setWidth(0)
      }, 1000)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [pathname])

  if (!isVisible) return null

  return (
    <div
      role="progressbar"
      aria-label="Page loading"
      aria-valuenow={width}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-warmgray-700 to-warmgray-400 transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
