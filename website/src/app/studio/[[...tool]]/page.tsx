import Studio from './Studio'

export const dynamic = 'force-static'

// noindex, mobile viewport, and referrer meta tags for the Studio
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
