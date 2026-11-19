import { ExternalLink } from 'lucide-react'
import Section from './Section'

const OTHER_PROJECTS = [
  {
    title: 'Ledg.it',
    description:
      'A full-stack personal finance tracker with interactive spending charts, Google OAuth, and a Gemini-powered chatbot that answers questions about your spending.',
    tech: ['Next.js 14', 'Supabase', 'Chart.js', 'Gemini API'],
    image: '/projects/ledgit.jpg',
    link: 'https://jaysi17-personal-finance-tracker.vercel.app/login',
  },
  {
    title: 'StayConnect',
    description:
      'An Airbnb-style booking platform where users list, browse, and book stays, with JWT auth in httpOnly cookies, Cloudinary photo uploads, and date-range booking.',
    tech: ['React 19', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    image: '/projects/stayconnect.jpg',
    link: 'https://stay-connect-drab.vercel.app/',
  },
]

export default function OtherProjects() {
  return (
    <Section id="other-projects" eyebrow="04." title="Other Projects">
      <p className="mb-8 text-muted">
        Personal projects I've built on my own time.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {OTHER_PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <div className="relative aspect-video bg-bg border-b border-border overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted text-xs">
                  Screenshot here
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col p-5">
              <span className="text-accent text-xl mb-3">{'{ }'}</span>
              <h3 className="text-base font-semibold text-fg group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-muted">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {project.link && (
                <div className="mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="inline-flex text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
