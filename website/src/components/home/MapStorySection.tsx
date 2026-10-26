'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  MotionValue,
} from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useIsMobile } from '@/lib/hooks/useMediaQuery'
import { OUTREACH_COUNTIES } from '@/lib/data/counties'
import type { MapStoryAPI } from './MapStoryInner'

// Dynamically imported so MapLibre GL (browser-only) never runs on the server
const MapStoryInner = dynamic(() => import('./MapStoryInner'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-warmgray-100" />,
})

// ─── Text stage wrapper ───────────────────────────────────────────────────────

function TextStage({
  opacity,
  children,
}: {
  opacity: MotionValue<number>
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-20"
      style={{ opacity }}
      // Visually fades in/out — SR users access content via the sr-only nav
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}

// ─── Static fallback (reduced-motion or mobile) ───────────────────────────────

function StaticMapSection() {
  return (
    <section
      id="map-section"
      className="section-padding bg-warmgray-50"
      aria-labelledby="map-heading-static"
    >
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-warmgray-500 uppercase tracking-wider mb-2">
            Outreach by county
          </p>
          <h2
            id="map-heading-static"
            className="text-3xl md:text-4xl font-bold text-warmgray-900 mb-4"
          >
            Explore outreach by county.
          </h2>
          <p className="text-warmgray-500 text-lg max-w-xl mx-auto">
            Select a county to view upcoming dementia awareness events, resource tables,
            volunteer opportunities, and community education efforts.
          </p>
        </div>

        {/* Static map at Big Bend zoom with all markers visible */}
        <div className="mx-auto max-w-2xl mb-10 rounded-2xl overflow-hidden shadow-card" style={{ height: 420 }}>
          <MapStoryInner
            onReady={() => {}}
            reducedMotion={true}
            className="w-full h-full"
          />
        </div>

        {/* County link grid for mobile / SR users */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
          {OUTREACH_COUNTIES.map(county => (
            <Link
              key={county.slug}
              href={county.path}
              className="group flex items-center gap-2.5 p-3 rounded-xl bg-white border border-warmgray-100 hover:border-purple-400/40 hover:shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" aria-hidden />
              <span className="text-sm font-medium text-warmgray-800 group-hover:text-warmgray-900">
                {county.name} County
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Animated section (desktop, motion-ok) ────────────────────────────────────

function AnimatedMapSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapApiRef    = useRef<MapStoryAPI | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map container CSS transforms (purely visual, not related to camera)
  const mapX     = useTransform(scrollYProgress, [0, 0.5],      ['12%', '0%'])
  const mapScale = useTransform(scrollYProgress, [0, 0.4, 1],   [0.88, 1.0, 1.05])

  // Narrative text opacity per scroll stage
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.30],           [1, 1, 0])
  const stage2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.72],  [0, 1, 1, 0])
  const stage3Opacity = useTransform(scrollYProgress, [0.68, 0.78],              [0, 1])

  // Scroll hint disappears as soon as the user starts scrolling
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  // Drive map camera and marker visibility from scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    mapApiRef.current?.updateCamera(v)
    mapApiRef.current?.showMarkers(v >= 0.35)
  })

  return (
    <section id="map-section" aria-labelledby="map-heading-animated">

      {/* Always-in-DOM nav for screen readers and keyboard-only users */}
      <nav className="sr-only" aria-label="Outreach counties">
        <h2 id="map-heading-animated">Explore outreach by county</h2>
        <ul>
          {OUTREACH_COUNTIES.map(county => (
            <li key={county.slug}>
              <Link href={county.path}>
                {county.name} County — Dementia outreach events
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 300vh scroll container — provides scroll room for all three stages */}
      <div ref={containerRef} className="relative min-h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-warmgray-50 flex">

          {/* Left: narrative copy panels */}
          <div className="relative w-[38%] shrink-0 h-full z-10">

            <TextStage opacity={stage1Opacity}>
              <p className="text-sm font-semibold text-warmgray-500 uppercase tracking-wider mb-3">
                The Big Bend region
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-warmgray-900 mb-4 leading-tight">
                Bringing dementia awareness across Florida's Big Bend.
              </h2>
              <p className="text-warmgray-500 text-base md:text-lg leading-relaxed">
                We connect families, caregivers, churches, libraries, senior centers,
                and student volunteers with accessible dementia education and local
                support resources.
              </p>
            </TextStage>

            <TextStage opacity={stage2Opacity}>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
                Expanding the reach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-warmgray-900 mb-4 leading-tight">
                From local hubs to community-wide awareness.
              </h2>
              <p className="text-warmgray-500 text-base md:text-lg leading-relaxed">
                Awareness events are important, but many families never attend formal
                programs. Our outreach model helps dementia information move beyond
                individual events and into the wider community.
              </p>
            </TextStage>

            <TextStage opacity={stage3Opacity}>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
                Local action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-warmgray-900 mb-4 leading-tight">
                Explore outreach by county.
              </h2>
              <p className="text-warmgray-500 text-base leading-relaxed mb-6">
                Select a county to view upcoming dementia awareness events, resource tables,
                volunteer opportunities, and community education efforts near you.
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Outreach counties">
                {OUTREACH_COUNTIES.map(county => (
                  <Link
                    key={county.slug}
                    href={county.path}
                    role="listitem"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-700 border border-purple-400/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1"
                  >
                    <MapPin className="w-3 h-3" aria-hidden />
                    {county.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/directory"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-warmgray-700 hover:text-warmgray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmgray-700 rounded"
              >
                View all resources
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </TextStage>


          </div>

          {/* Right: real MapLibre map */}
          <div className="flex-1 h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{
                x: mapX,
                scale: mapScale,
                transformOrigin: 'center center',
              }}
            >
              <MapStoryInner
                onReady={(api) => {
                  mapApiRef.current = api
                  // Sync to current scroll position immediately (user may have scrolled already)
                  const p = scrollYProgress.get()
                  api.updateCamera(p)
                  api.showMarkers(p >= 0.35)
                }}
                reducedMotion={false}
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-[19%] -translate-x-1/2 flex flex-col items-center gap-1.5 text-warmgray-400 pointer-events-none"
            style={{ opacity: hintOpacity }}
            aria-hidden="true"
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
            <span className="w-px h-8 bg-warmgray-300 rounded-full" />
          </motion.div>

        </div>
      </div>

    </section>
  )
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function MapStorySection() {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  if (prefersReducedMotion || isMobile) {
    return <StaticMapSection />
  }

  return <AnimatedMapSection />
}
