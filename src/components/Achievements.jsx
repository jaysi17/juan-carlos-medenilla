import { Trophy, Medal, Award, Star } from 'lucide-react'
import Section from './Section'

// TODO: Drop your event photos in `public/achievements/` (or `src/assets/`)
// and replace the `image: null` lines with the path. Example:
//   image: '/achievements/adnu-software-fest-2025.jpg'
const ACHIEVEMENTS = [
  {
    result: 'Champion',
    event: 'ADNU Software Festival 2025',
    detail: 'Calamity Dash',
    icon: Trophy,
    image: null,
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
    image: null,
    subawards: [],
  },
  {
    result: 'Rank 5 · Top 20 Finalist',
    event: 'Ateneo Computer Programming Competition 2025',
    detail: null,
    icon: Award,
    image: null,
    subawards: [],
  },
  {
    result: 'Participant',
    event: '2025 ICPC Asia-Manila Regional Contest',
    detail: 'Representing Ateneo de Naga University',
    icon: Star,
    image: null,
    subawards: [],
  },
]

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05." title="Achievements">
      <ol className="space-y-4">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementItem key={i} {...ach} />
        ))}
      </ol>
    </Section>
  )
}

function AchievementItem({ result, event, detail, icon: Icon, image, subawards }) {
  return (
    <li className="flex flex-col sm:flex-row gap-5 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
      <div className="shrink-0 w-full sm:w-44 aspect-video sm:aspect-square rounded-md overflow-hidden bg-bg border border-border flex items-center justify-center text-muted">
        {image ? (
          <img
            src={image}
            alt={event}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-1.5 text-xs">
            <Icon size={24} className="text-accent" />
            <span>Photo here</span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-fg">
          <span className="text-accent">{result}</span>
          <span className="text-muted font-normal"> &middot; </span>
          <span>{event}</span>
        </h3>
        {detail && (
          <p className="mt-1 text-sm text-muted">{detail}</p>
        )}
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
