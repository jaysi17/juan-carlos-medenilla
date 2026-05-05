import { Github, ExternalLink, Award } from 'lucide-react'
import Section from './Section'

const PROJECTS = [
  {
    title: 'Calamity Dash',
    year: '2025',
    description:
      "A Unity-based game selected as a DOST National Game Development Finalist representing the Bicol Region. As Gameplay Programmer, I implemented core player mechanics, controls, and in-game interactions, and designed the in-game maps and environments — level layout, obstacles, and interactive elements.",
    tech: ['Unity', 'C#'],
    github: null,
    demo: null,
    image: null,
    badge: 'DOST National Finalist',
  },
  {
    title: 'Personal Finance Tracker',
    year: '2025',
    description:
      'A solo full-stack expense tracking web app to manage personal finances, inspired by Tarsi by Bryl Lim. Features dual authentication (email/password + Google OAuth) with Supabase as the backend, plus an integrated AI chatbot powered by the Google Gemini API for conversational expense queries and insights.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Google OAuth', 'Gemini API'],
    github: null,
    demo: null,
    image: null,
  },
  {
    title: 'DMS Sinangag Website',
    year: '2026',
    description:
      'A multi-section marketing site for a 24/7 Filipino eatery, built as part of client work at AVA Data Solutions. Includes an interactive menu browser with category filtering for 20+ items, Google Maps integration, and a bilingual (Tagalog/English) UX optimized for local users.',
    tech: ['Astro', 'Tailwind CSS'],
    github: null,
    demo: null,
    image: null,
  },
  {
    title: 'ThePillars Publication Website',
    year: '2025',
    description:
      'The official student publication website of Ateneo de Naga University (thepillarspub.com), serving the entire Atenean community across News, Editorial, Features, and Sports. I develop article pages and built the standings page for ADNU League 2025 intramurals coverage — with live updates and multiple standings formats: bracket-based win/loss tracking for ball sports and ranking-based displays for cheer and dance sports.',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
    github: null,
    demo: null,
    image: null,
  },
  {
    title: 'StayConnect',
    year: '2025',
    description:
      'A full-stack booking website built end-to-end on the MERN stack. Users can browse and book accommodations, with secure authentication via JSON Web Tokens, password hashing through bcrypt, and image uploads handled by Multer middleware on the Express backend.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Multer', 'bcrypt'],
    github: null,
    demo: null,
    image: null,
  },
]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03." title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ title, year, description, tech, github, demo, image, badge }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="aspect-video bg-bg border-b border-border flex items-center justify-center text-muted text-sm">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          'Screenshot here'
        )}
      </div>
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
            {title}
          </h3>
          {year && (
            <span className="text-xs font-mono text-muted shrink-0 mt-1">{year}</span>
          )}
        </div>
        {badge && (
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-accent">
            <Award size={12} />
            {badge}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-muted">
          {tech.map((t) => (
            <li key={t} className="px-2 py-1 rounded border border-border">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source on GitHub`}
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
