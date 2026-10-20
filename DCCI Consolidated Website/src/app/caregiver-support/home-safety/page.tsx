import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Phone, Flame, MapPin, Shield } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import VideoCard from '@/components/ui/VideoCard'

export const metadata: Metadata = {
  title: 'Home Safety',
  description: 'Simple steps and free local services to make the home safer for someone living with dementia in Tallahassee and the Big Bend region.',
}

type TipGroup = { title: string; color: 'default' | 'emergency'; tips: React.ReactNode[] }

const fireTips: TipGroup = {
  title: 'Fire safety tips',
  color: 'emergency',
  tips: [
    'Test battery smoke alarms weekly and replace the batteries every spring and fall (or use alarms with 10-year sealed batteries)',
    'Install carbon monoxide detectors on every level of the home',
    'Never leave candles, fireplaces, or the stove unattended',
    'Create a simple fire escape plan and practice it',
    'Keep lighters and matches locked away',
    'Keep a fire extinguisher accessible and know how to use it',
  ],
}

const kitchenTips: TipGroup = {
  title: 'Kitchen safety tips',
  color: 'default',
  tips: [
    'Consider automatic stove shut-off devices or stove knob covers',
    'Remove or lock away sharp knives and hazardous cleaning products',
    'Set water heater to 120°F or lower to prevent scalding',
    'Label cabinets with pictures as well as words',
    'Remove or disable microwaves if misuse is a concern',
    'Keep counters clear and simple to reduce confusion',
  ],
}

const fallsTips: TipGroup = {
  title: 'Falls prevention tips',
  color: 'default',
  tips: [
    'Remove loose rugs and cords from walkways',
    'Install grab bars in bathrooms next to toilet and in shower/tub',
    'Ensure adequate lighting in all rooms, especially hallways at night',
    'Use non-slip mats in the bathroom and kitchen',
    'Consider a bed rail or lowering the bed height',
    'Keep pathways clear — no furniture blocking common routes',
    'Footwear should have non-slip soles and fit securely',
  ],
}

const safeSittingTips: TipGroup = {
  title: '"Safe Sitting" technique',
  color: 'default',
  tips: [
    'The "safe sitting" technique is a positioning approach used during personal care (bathing, dressing) to reduce fall risk and caregiver injury',
    'The person sits on a stable surface while the caregiver works at their level, minimizing the need for the person to stand unsupported',
    <>
      Watch "What is Safe Sitting?" in the{' '}
      <Link href="/caregiver-support/videos" className="font-medium text-warmgray-900 underline hover:text-warmgray-900">Video Library</Link>{' '}
      for a full demonstration
    </>,
  ],
}

const sleepTips: TipGroup = {
  title: 'Sleep challenges & sundowning tips',
  color: 'default',
  tips: [
    'Maintain consistent sleep and wake times every day',
    'Increase physical activity during daylight hours',
    'Reduce caffeine after noon',
    'Dim lights gradually in the evening to ease the transition',
    'Minimize noise and activity in the evening',
    'Try a small healthy snack before bed if they seem hungry at night',
    'Use nightlights in bathrooms and hallways',
  ],
}

const colorMap: Record<TipGroup['color'], { badge: string; dot: string }> = {
  default: { badge: 'bg-warmgray-100 text-warmgray-800', dot: 'bg-warmgray-600' },
  emergency: { badge: 'bg-emergency-100 text-emergency-700', dot: 'bg-emergency-500' },
}

function TipDetails({ group }: { group: TipGroup }) {
  const colors = colorMap[group.color]
  return (
    <details className="group rounded-2xl bg-white border border-warmgray-100 shadow-card overflow-hidden">
      <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none hover:bg-warmgray-50 transition-colors">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${colors.badge}`}>
            <Shield className="w-4 h-4" aria-hidden />
          </div>
          <h3 className="text-base font-bold text-warmgray-900">{group.title}</h3>
        </div>
        <span className="text-warmgray-400 transition-transform duration-200 group-open:rotate-180" aria-hidden>▾</span>
      </summary>
      <div className="px-5 pb-5 border-t border-warmgray-100 pt-4">
        <ul className="space-y-2" role="list">
          {group.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-warmgray-700">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`} aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
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
        Simple steps and free local services to make the home safer for someone living with dementia in Tallahassee and the Big Bend region. A safer home reduces accidents and caregiver stress, and helps the person with dementia stay independent longer.
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

          <TipDetails group={fireTips} />
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
          <TipDetails group={kitchenTips} />
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

      {/* Falls prevention */}
      <section className="mb-10" aria-labelledby="falls-heading">
        <h2 id="falls-heading" className="text-xl font-bold text-warmgray-900 mb-4">Falls prevention</h2>
        <div className="space-y-4">
          <TipDetails group={fallsTips} />
          <TipDetails group={safeSittingTips} />
        </div>
      </section>

      {/* Sleep & nighttime safety */}
      <section className="mb-10" aria-labelledby="sleep-heading">
        <h2 id="sleep-heading" className="text-xl font-bold text-warmgray-900 mb-4">Sleep & nighttime safety</h2>
        <div className="space-y-4">
          <TipDetails group={sleepTips} />
          <a href="https://www.youtube.com/watch?v=skgL6XzLqG8" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors flex items-center gap-1">
            Watch the Nighttime Disturbances video (UCLA Health) <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
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
          <div className="flex flex-col gap-2">
            <Link href="/caregiver-support/videos#wandering"
              className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              Watch the Wandering video in our Video Library →
            </Link>
            <Link href="/care-services/wandering"
              className="text-sm font-medium text-warmgray-800 hover:text-warmgray-900 transition-colors">
              Silver Alert and other options: Wandering & Missing Persons →
            </Link>
          </div>
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
