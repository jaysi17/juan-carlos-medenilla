import { useState } from 'react'
import {
  Trophy,
  Medal,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Section from './Section'

// TODO: Drop event photos in `public/achievements/` and add the paths to the
// `images` arrays below. Empty array `[]` shows the placeholder.
//   images: ['/achievements/adnu-fest-1.jpg', '/achievements/adnu-fest-2.jpg']
const ACHIEVEMENTS = [
  {
    result: 'Champion',
    event: 'ADNU Software Festival 2025',
    detail: 'Calamity Dash',
    icon: Trophy,
    images: [],
    subawards: [
      'Best in Visual Design',
      'Best in Innovation',
      'Best in Functionality',
      'Best in User Experience',
      'Best in Societal Impact',
    ],
  },
  {
    result: 'National Finalist',
    event: 'DOST Level Up 2.0: Esports Game Dev Challenge',
    detail: 'Bicol Region Representative · Calamity Dash',
    icon: Medal,
    images: [],
    subawards: [],
  },
  {
    result: 'Rank 5 · Top 20 Finalist',
    event: 'Ateneo Computer Programming Competition 2025',
    detail: null,
    icon: Award,
    images: [],
    subawards: [],
  },
  {
    result: 'Participant',
    event: '2025 ICPC Asia-Manila Regional Contest',
    detail: 'Representing Ateneo de Naga University',
    icon: Star,
    images: [],
    subawards: [],
  },
]

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05." title="Achievements">
      <ol className="grid gap-6 sm:grid-cols-2">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard key={i} {...ach} />
        ))}
      </ol>
    </Section>
  )
}

function AchievementCard({ result, event, detail, icon, images, subawards }) {
  return (
    <li className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-accent">
      <Carousel images={images} icon={icon} alt={event} />
      <div className="flex-1 p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-fg">
          <span className="text-accent">{result}</span>
          <span className="text-muted font-normal"> &middot; </span>
          <span>{event}</span>
        </h3>
        {detail && <p className="mt-1 text-sm text-muted">{detail}</p>}
        {subawards.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-muted">
            {subawards.map((tag) => (
              <li
                key={tag}
                className="px-2 py-1 rounded border border-border"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

function Carousel({ images, icon: Icon, alt }) {
  const [idx, setIdx] = useState(0)
  const total = images.length

  if (total === 0) {
    return (
      <div className="aspect-video w-full bg-bg border-b border-border flex flex-col items-center justify-center gap-2 text-muted text-sm">
        <Icon size={48} className="text-accent" />
        <span>Photos coming soon</span>
      </div>
    )
  }

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)

  return (
    <div className="relative aspect-video w-full bg-bg border-b border-border overflow-hidden">
      <img
        src={images[idx]}
        alt={`${alt} — photo ${idx + 1}`}
        className="w-full h-full object-cover"
      />
      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 backdrop-blur text-fg opacity-0 group-hover:opacity-100 hover:bg-bg/90 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/70 backdrop-blur text-fg opacity-0 group-hover:opacity-100 hover:bg-bg/90 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? 'w-6 bg-accent' : 'w-1.5 bg-fg/50 hover:bg-fg/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
