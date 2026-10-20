import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Phone, Flame, MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import VideoCard from '@/components/ui/VideoCard'

export const metadata: Metadata = {
  title: 'Home Safety',
  description: 'Simple steps and free local services to make the home safer for someone living with dementia in Tallahassee and the Big Bend region.',
}

export default function HomeSafetyPage() {
  return (
    <article>
      <Breadcrumbs crumbs={[
        { label: 'For Caregivers', href: '/caregiver-support' },
        { label: 'Home Safety' },
      ]} />

      <h1 className="text-3xl font-bold text-warmgray-900 mb-4">Home Safety</h1>
      <p className="text-lg text-warmgray-500 mb-8 leading-relaxed max-w-2xl">
        Simple steps and free local services to make the home safer for someone living with dementia in Tallahassee and the Big Bend region.
      </p>

      {/* Fire safety */}
      <section className="mb-10" aria-labelledby="fire-heading">
        <h2 id="fire-heading" className="text-xl font-bold text-warmgray-900 mb-4">Fire safety</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
            <div className="flex items-start gap-3">
              <Flame className="w-5 h-5 text-warmgray-500 shrink-0 mt-0.5" aria-hidden />
              <div className="min-w-0">
                <h3 className="text-base font-bold text-warmgray-900 mb-2">Tallahassee Fire Department (TFD)</h3>
                <p className="text-sm text-warmgray-600 mb-2">
                  TFD offers a <strong>free</strong> Home Fire Safety Survey for single-family homes. To request one, use the "Home Fire Safety Survey" link on TFD's page.
                </p>
                <p className="text-sm text-warmgray-600 mb-3">
                  The same page links to other help, including TFD's Smoke Alarm Program. It provides smoke alarms for seniors and low-income residents in Tallahassee and Leon County, plus tips on where to place them. To request any of these, follow the link on that page and fill out the form.
                </p>
                <a href="https://www.talgov.com/publicsafety/tfd-candc" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1 mb-3">
                  Go to TFD's safety page <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
                <p className="text-sm text-warmgray-600">
                  TFD non-emergency line: <a href="tel:+18508916600" className="font-semibold text-warmgray-900 underline hover:text-warmgray-900">(850) 891-6600</a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-warmgray-500 shrink-0 mt-0.5" aria-hidden />
              <div className="min-w-0">
                <h3 className="text-base font-bold text-warmgray-900 mb-2">Outside Tallahassee or Leon County</h3>
                <p className="text-sm text-warmgray-600 mb-3">
                  The American Red Cross of North and Central Florida installs free smoke alarms.
                </p>
                <a href="https://www.redcross.org/local/florida/north-central-florida/about-us/our-work/home-fire-campaign/smoke-alarm-request.html" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
                  Request a free smoke alarm <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen & household safety */}
      <section className="mb-10" aria-labelledby="kitchen-heading">
        <h2 id="kitchen-heading" className="text-xl font-bold text-warmgray-900 mb-4">Kitchen & household safety</h2>
        <div className="space-y-4">
          <VideoCard video={{
            title: 'Home Safety',
            desc: 'Simple changes like covering stove knobs, locking up knives and medications, and clearing out expired food',
            source: 'UCLA Health',
            href: 'https://www.youtube.com/watch?v=_LneALBpMfE',
          }} />
          <div className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-warmgray-800 shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-warmgray-900">
                Keep Poison Control's number by the phone: <a href="tel:+18002221222" className="font-semibold underline hover:text-warmgray-900">1-800-222-1222</a> (free, 24/7).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wandering */}
      <section className="mb-10" aria-labelledby="wandering-heading">
        <h2 id="wandering-heading" className="text-xl font-bold text-warmgray-900 mb-4">Wandering</h2>
        <div className="p-5 rounded-2xl bg-white border border-warmgray-100 shadow-card">
          <h3 className="text-base font-bold text-warmgray-900 mb-2">Project Lifesaver (Leon County)</h3>
          <p className="text-sm text-warmgray-600 mb-3">
            A wearable tracking bracelet program run by the Alzheimer's Project with the Leon County Sheriff's Office. To ask about enrolling, call the Alzheimer's Project at <a href="tel:+18503862778" className="font-semibold text-warmgray-900 underline hover:text-warmgray-900">(850) 386-2778</a>.
          </p>
          <Link href="/caregiver-support/videos#wandering"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
            Watch the Wandering video in our Video Library →
          </Link>
        </div>
      </section>

      {/* More help */}
      <section className="p-5 rounded-2xl bg-warmgray-50 border border-warmgray-200" aria-labelledby="more-help-heading">
        <h2 id="more-help-heading" className="text-base font-bold text-warmgray-900 mb-3">More help</h2>
        <ul className="space-y-2 text-sm text-warmgray-900" role="list">
          <li className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-warmgray-800 shrink-0 mt-0.5" aria-hidden />
            <span>
              Elder Helpline: <a href="tel:+18009635337" className="font-semibold underline hover:text-warmgray-900">1-800-963-5337</a> (referrals to local in-home services)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-emergency-700 shrink-0 mt-0.5" aria-hidden />
            <span>
              Emergency: <a href="tel:911" className="font-semibold underline hover:text-warmgray-900">911</a>
            </span>
          </li>
        </ul>
      </section>
    </article>
  )
}
