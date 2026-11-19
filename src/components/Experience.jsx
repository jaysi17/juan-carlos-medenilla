import Section from './Section'

const EXPERIENCES = [
  {
    role: 'Software Developer',
    company: 'AVA Data Solutions Inc.',
    location: 'Remote / Philippines',
    period: 'Apr 2026 — Present',
    steps: [
      { title: 'Software Developer', period: 'Jul 2026 — Present', current: true },
      { title: 'QA & Software Developer Intern', period: 'Apr — Jul 2026' },
    ],
    bullets: [
      'Build and maintain web systems for client businesses, including restaurant POS and online ordering, a franchise ERP, a multi-branch spa ERP, and a dental clinic subscription app.',
      'Integrate cashless QR Ph payments: server-side payment checks, polling, reconciliation, payouts, and subscription billing.',
      'Build multi-tenant backends on Supabase (PostgreSQL, row-level security, Edge Functions, Realtime) with role-based access for owners, managers, and staff.',
      'Write automated tests (Vitest, Playwright) and work with branch managers to reproduce, document, and fix reported issues.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    location: 'Client: Philippine Healthcare Skills Training and Assessment Center, Inc.',
    period: 'Jun 2026',
    bullets: [
      'Built and launched phstac.com, the official website of a TESDA-accredited caregiving training center with branches in Naga City and Daraga, Albay.',
      'Worked directly with the client on content, then designed, built, and deployed the six-page site on its custom domain using Astro and Tailwind CSS.',
      'Added SEO structured data, a sitemap, and automated checks for site content and internal links.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'ThePILLARS Publication',
    location: 'Official student publication of Ateneo de Naga University',
    period: 'Sep 2025 — Aug 2026',
    bullets: [
      "Developed article pages for the publication's website (thepillarspub.com) using Nuxt.js (Vue), covering News, Editorial, Features, and Sports.",
      'Built the ADNU League 2025 standings page with live updates, using bracket-based win/loss tracking for ball sports and ranking-based displays for cheer and dance events.',
      'Learned to build software as part of a team: working in a shared codebase on GitHub, splitting features with fellow developers, and shipping together instead of solo.',
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
                {exp.role}
                {exp.company && (
                  <>
                    {' '}
                    <span className="text-accent">@ {exp.company}</span>
                  </>
                )}
              </h3>
              {exp.location && (
                <p className="text-xs text-muted mt-1">{exp.location}</p>
              )}
              {exp.steps && (
                <ul className="mt-3 ml-1 pl-4 border-l-2 border-border space-y-1">
                  {exp.steps.map((step) => (
                    <li key={step.title} className="relative text-sm text-muted">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[21px] top-1.5 h-2 w-2 rounded-full ${
                          step.current ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                      <span className="font-medium text-fg">{step.title}</span>
                      {' · '}
                      {step.period}
                    </li>
                  ))}
                </ul>
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
