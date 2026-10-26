import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import VideoCard, { type Video } from '@/components/ui/VideoCard'

export const metadata: Metadata = {
  title: 'Caregiver Video Library',
  description: 'Free on-demand how-to videos covering common dementia caregiving challenges including behaviors, safety, communication, and more.',
}

const videos: Video[] = [
  { title: 'Agitation & Aggression', desc: 'Spotting triggers and calming tense moments', source: 'UCLA Health', href: 'https://www.youtube.com/watch?v=hahvUXwTXE4' },
  { title: "Let's Talk Action Plans", source: "Alzheimer's Project" },
  { title: 'What is Safe Sitting?', source: "Alzheimer's Project" },
  { id: 'wandering', title: 'Wandering', desc: 'Why wandering happens and how to keep a loved one safe', source: 'UCLA Health', href: 'https://www.youtube.com/watch?v=Sw0yEB508mI' },
  { title: 'Strategies for Family Dynamics', source: "Alzheimer's Project" },
  { title: 'Kitchen Safety', source: 'UCLA Health', href: 'https://www.youtube.com/watch?v=_LneALBpMfE' },
  {
    title: 'Fire Safety',
    desc: 'Reducing fire, cooking, and carbon monoxide risks at home',
    source: 'DISCOVER Voices / Cornwall Fire & Rescue (UK)',
    href: 'https://www.youtube.com/watch?v=3ohpZNC65FM',
    noteLabel: 'Note: this is a UK video. Read before calling any numbers.',
    note: "This video comes from Cornwall Fire & Rescue Service in the United Kingdom. Its safety advice is accurate and useful, but the phone numbers and services it mentions do not serve Florida, so please don't contact them. Local families can request a free home fire safety survey from the Tallahassee Fire Department instead.",
    action: { label: 'Find local home safety resources', href: '/caregiver-support/home-safety' },
  },
  { title: 'Noise and Distractions', desc: 'Creating a calmer environment at home', source: "Alzheimer's Project", href: 'https://www.youtube.com/watch?v=PcycMLaksIY&t=66s' },
  { title: 'Financial Considerations', desc: 'Managing and protecting finances as dementia progresses', source: 'McGill University', href: 'https://www.youtube.com/watch?v=8mJ9IC1PXR0' },
  { title: 'Legal Considerations', desc: 'Legal steps to take after a dementia diagnosis', source: 'Wyoming Dementia Together', href: 'https://www.youtube.com/watch?v=c_N4X7EHh-8' },
  { title: 'Falls', desc: 'Simple ways to prevent falls at home', source: 'Keila Haynes (YouTube)', href: 'https://www.youtube.com/watch?v=AYTqp96LMCg' },
  { title: 'Dressing', desc: 'Helping a loved one get dressed with less stress', source: "Teepa Snow's Positive Approach to Care", href: 'https://www.youtube.com/watch?v=B0YomKXSDaw' },
  {
    title: 'Refusing Care',
    desc: 'What to do when a loved one refuses bathing, medications, or meals',
    source: 'UCLA Health',
    links: [
      { label: 'Bathing', href: 'https://www.youtube.com/watch?v=sl3Dc1kERto' },
      { label: 'Medications', href: 'https://www.youtube.com/watch?v=-rB5-AkqpjQ' },
    ],
  },
  { title: 'Repeat Questions & Statements', desc: 'Techniques for responding calmly without frustration', source: 'UCLA Health', href: 'https://www.youtube.com/watch?v=hke8ek_aHkE' },
  { title: 'Nighttime Disturbances', desc: 'Sleep hygiene and overnight care strategies', source: 'UCLA Health', href: 'https://www.youtube.com/watch?v=skgL6XzLqG8' },
]

export default function VideosPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Video Library' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Caregiver Video Library</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Free on-demand videos covering the most common caregiving challenges. Watch at your own pace, as many times as you need.
      </p>

      <section className="mb-10" aria-label="Videos">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://alzheimersproject.org" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
            Alzheimer's Project video library <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
          <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
            UCLA videos in English & Spanish through FSU REACH <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>
      </section>

      {/* FSU REACH crisis videos */}
      <section className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
        <h2 className="text-base font-bold text-warmgray-900 mb-2">Crisis Intervention Videos</h2>
        <p className="text-sm text-warmgray-600 mb-3">
          FSU REACH hosts short videos on what to do in dementia-related crisis situations — including emergent behavioral episodes and caregiver safety.
        </p>
        <a href="https://reach.med.fsu.edu" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
          View FSU REACH crisis resources <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </section>
    </article>
  )
}
