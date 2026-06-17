'use client'

import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useRouter } from 'next/navigation'
import { OUTREACH_COUNTIES } from '@/lib/data/counties'

// ─── Map configuration ────────────────────────────────────────────────────────

const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron'

const CAMERA_START = { center: [-84.2, 27.0] as [number, number], zoom: 5.5 }
const CAMERA_END   = { center: [-84.234, 30.157] as [number, number], zoom: 8.3 }

// ─── Utilities ────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function smoothstep(t: number) {
  const c = Math.max(0, Math.min(1, t))
  return c * c * (3 - 2 * c)
}

// ─── Attribution CSS — injected once ─────────────────────────────────────────

const ATTRIBUTION_CSS = `
  .maplibregl-ctrl-attrib {
    font-size: 10px !important;
    opacity: 0.6;
    background: rgba(255,255,255,0.85) !important;
  }
  .maplibregl-ctrl-attrib a { color: inherit; }
  .maplibregl-ctrl-bottom-right { z-index: 1; }
`

// ─── Public API ───────────────────────────────────────────────────────────────

export interface MapStoryAPI {
  updateCamera: (progress: number) => void
  showMarkers:  (show: boolean)    => void
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Props {
  onReady:       (api: MapStoryAPI) => void
  reducedMotion: boolean
  className?:    string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MapStoryInner({ onReady, reducedMotion, className = '' }: Props) {
  const containerRef     = useRef<HTMLDivElement>(null)
  const mapRef           = useRef<maplibregl.Map | null>(null)
  const onReadyRef       = useRef(onReady)
  const reducedMotionRef = useRef(reducedMotion)
  const router           = useRouter()

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    if (!document.getElementById('map-story-styles')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'map-story-styles'
      styleEl.textContent = ATTRIBUTION_CSS
      document.head.appendChild(styleEl)
    }

    const rm         = reducedMotionRef.current
    const initCamera = rm ? CAMERA_END : CAMERA_START

    const map = new maplibregl.Map({
      container:          containerRef.current,
      style:              STYLE_URL,
      center:             initCamera.center,
      zoom:               initCamera.zoom,
      dragPan:            true,
      dragRotate:         false,
      // scrollZoom hijacks page scroll on the animated map — keep off there
      scrollZoom:         rm,
      touchZoomRotate:    rm,
      doubleClickZoom:    true,
      keyboard:           true,
      boxZoom:            true,
      attributionControl: false,
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

    map.on('load', () => {
      const initialVisibility = rm ? 'visible' : 'none'

      // GeoJSON source — markers rendered on the WebGL canvas so they are
      // immune to any CSS transform applied to the parent container.
      map.addSource('counties', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: OUTREACH_COUNTIES.map((c, i) => ({
            type: 'Feature' as const,
            id: i,
            geometry: { type: 'Point' as const, coordinates: [c.lng, c.lat] },
            properties: { name: c.name, path: c.path },
          })),
        },
      })

      // Hover ring
      map.addLayer({
        id: 'county-ring',
        type: 'circle',
        source: 'counties',
        layout: { visibility: initialVisibility },
        paint: {
          'circle-radius': 16,
          'circle-color': 'rgba(0,0,0,0)',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#8347c0',
          'circle-stroke-opacity': [
            'case', ['boolean', ['feature-state', 'hover'], false], 0.55, 0,
          ],
        },
      })

      // Dot
      map.addLayer({
        id: 'county-dot',
        type: 'circle',
        source: 'counties',
        layout: { visibility: initialVisibility },
        paint: {
          'circle-radius': 7,
          'circle-color': [
            'case', ['boolean', ['feature-state', 'hover'], false], '#6b34a8', '#8347c0',
          ],
          'circle-stroke-width': 2.5,
          'circle-stroke-color': '#ffffff',
        },
      })

      // County name — visible only while hovering
      map.addLayer({
        id: 'county-label',
        type: 'symbol',
        source: 'counties',
        layout: {
          visibility: initialVisibility,
          'text-field': ['get', 'name'],
          'text-size': 11,
          'text-anchor': 'bottom',
          'text-offset': [0, -1.4],
          'text-font': ['Noto Sans Regular', 'Arial Unicode MS Regular'],
        },
        paint: {
          'text-color': '#2d2926',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
          'text-opacity': [
            'case', ['boolean', ['feature-state', 'hover'], false], 1, 0,
          ],
        },
      })

      // ── Interactivity ──────────────────────────────────────────────────────
      let hoveredId: number | string | null = null

      map.on('mousemove', 'county-dot', (e) => {
        if (!e.features?.length) return
        map.getCanvas().style.cursor = 'pointer'
        const id = e.features[0].id as number
        if (id !== hoveredId) {
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'counties', id: hoveredId }, { hover: false })
          }
          hoveredId = id
          map.setFeatureState({ source: 'counties', id: hoveredId }, { hover: true })
        }
      })

      map.on('mouseleave', 'county-dot', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'counties', id: hoveredId }, { hover: false })
          hoveredId = null
        }
      })

      map.on('click', 'county-dot', (e) => {
        const path = e.features?.[0]?.properties?.path as string | undefined
        if (path) router.push(path)
      })

      // ── Expose API to parent ───────────────────────────────────────────────
      onReadyRef.current({
        updateCamera(progress: number) {
          if (rm || !mapRef.current) return
          const t = smoothstep(progress)
          mapRef.current.jumpTo({
            center: [
              lerp(CAMERA_START.center[0], CAMERA_END.center[0], t),
              lerp(CAMERA_START.center[1], CAMERA_END.center[1], t),
            ],
            zoom: lerp(CAMERA_START.zoom, CAMERA_END.zoom, t),
          })
        },
        showMarkers(show: boolean) {
          if (!mapRef.current) return
          const vis = show ? 'visible' : 'none'
          mapRef.current.setLayoutProperty('county-dot',   'visibility', vis)
          mapRef.current.setLayoutProperty('county-ring',  'visibility', vis)
          mapRef.current.setLayoutProperty('county-label', 'visibility', vis)
        },
      })
    })

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className={`w-full h-full ${className}`} />
}
