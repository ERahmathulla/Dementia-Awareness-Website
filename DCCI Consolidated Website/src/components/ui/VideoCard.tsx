import Link from 'next/link'
import { ExternalLink, Play } from 'lucide-react'

export type Video = {
  id?: string
  title: string
  desc?: string
  source: string
  href?: string
  links?: { label: string; href: string }[]
  note?: string
  noteLabel?: string
  action?: { label: string; href: string }
}

export default function VideoCard({ video }: { video: Video }) {
  const body = (
    <>
      <div className="w-8 h-8 rounded-lg bg-warmgray-100 flex items-center justify-center shrink-0">
        <Play className="w-4 h-4 text-warmgray-700 fill-warmgray-700" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-warmgray-900 flex items-center gap-1">
          {video.title}
          {video.href && <ExternalLink className="w-3 h-3 text-warmgray-400 shrink-0" aria-hidden />}
        </p>
        {video.desc && <p className="text-xs text-warmgray-500 mt-0.5">{video.desc}</p>}
        <p className="text-xs text-warmgray-400 mt-1">{video.source}</p>
      </div>
    </>
  )

  return (
    <div id={video.id} className="scroll-mt-header rounded-xl bg-white border border-warmgray-100 shadow-card overflow-hidden">
      {video.href ? (
        <a href={video.href} target="_blank" rel="noopener noreferrer"
          className="flex gap-3 p-4 hover:bg-warmgray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warmgray-700">
          {body}
        </a>
      ) : (
        <div className="flex gap-3 p-4">{body}</div>
      )}

      {video.links && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 px-4 pb-4 pl-[60px] -mt-2">
          {video.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className="text-xs font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
              {link.label} <ExternalLink className="w-3 h-3" aria-hidden />
            </a>
          ))}
        </div>
      )}

      {(video.note || video.action) && (
        <details className="px-4 pb-4 pl-[60px] -mt-2">
          <summary className="text-xs font-medium text-warmgray-600 hover:text-warmgray-900 cursor-pointer transition-colors">
            {video.noteLabel}
          </summary>
          <div className="mt-3 space-y-3">
            {video.note && (
              <p className="text-xs text-warmgray-600 leading-relaxed p-3 rounded-lg bg-warmgray-50 border border-warmgray-200">
                {video.note}
              </p>
            )}
            {video.action && (
              <Link href={video.action.href} className="btn-secondary text-sm w-full">
                {video.action.label}
              </Link>
            )}
          </div>
        </details>
      )}
    </div>
  )
}
