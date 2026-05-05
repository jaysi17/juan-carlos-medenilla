import Section from './Section'

const EXPERIENCES = [
  {
    role: 'Quality Assurance & Software Developer Intern',
    company: 'AVA Data Solutions',
    location: 'Remote / Philippines',
    period: 'Apr 2026 — Present',
    bullets: [
      'Conduct manual stress and exploratory testing on a business management system used across 7 branches (POS, scheduling, inventory, suppliers, revenue tracking) to safeguard the CIA triad of business data.',
      'Coordinate with branch managers to investigate, reproduce, and document bug reports, producing detailed and reproducible reports for engineering to triage.',
      'Develop responsive landing pages for client businesses using Astro and other modern JS frameworks, delivering production-ready frontends.',
      'Apply prompt engineering techniques to accelerate development workflows and improve code quality output.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'ThePillars Publication',
    location: 'Ateneo de Naga University',
    period: 'Sep 2025 — Present',
    bullets: [
      'Develop article pages on the official student publication site (thepillarspub.com) using Nuxt.js (Vue), serving the Atenean community across News, Editorial, Features, and Sports sections.',
      'Built the standings page for the ADNU League 2025 intramurals coverage, with live updates that reflect game results in real time once a winner is recorded.',
      'Implemented multiple standings formats within a single page — bracket-based win/loss tracking for ball sports, and ranking-based displays for cheer, dance, and dance sports.',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02." title="Experience">
      <ol className="space-y-10">
        {EXPERIENCES.map((exp, i) => (
          <li
            key={i}
            className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8"
          >
            <div className="text-sm font-mono text-muted pt-1">
              {exp.period}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-fg">
                {exp.role}{' '}
                <span className="text-accent">@ {exp.company}</span>
              </h3>
              {exp.location && (
                <p className="text-xs text-muted mt-1">{exp.location}</p>
              )}
              <ul className="mt-3 space-y-2 text-muted leading-relaxed">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
