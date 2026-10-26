'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// The Studio renders in a full-screen layer on <body> so the site header,
// footer, and page transition wrapper don't sit around or clip it.
export default function Studio() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    // Hide the page scrollbars of the site behind the Studio
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])
  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-white">
      <NextStudio config={config} />
    </div>,
    document.body,
  )
}
