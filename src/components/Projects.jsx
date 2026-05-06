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
    demo: 'https://youtu.be/Eb1hND5jAp8',
    image: null,
    badge: 'DOST National Finalist',
  },
  {
    title: 'Ledg.it',
    year: '2025',
    description:
      'A full-stack personal finance tracker that helps users monitor income and expenses, visualize spending patterns through interactive charts, and get AI-powered insights via a real-time Gemini-powered chatbot. Features email and Google OAuth authentication, custom typable categories, and an iOS-inspired dark theme UI.',
    tech: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'Chart.js', 'Gemini API'],
    github: null,
    demo: 'https://jaysi17-personal-finance-tracker.vercel.app/login',
    image: '/projects/ledgit.png',
  },
  {
    title: 'DMS Sinangag Website',
    year: '2026',
    description:
      'Landing page for a 24-hour Filipino eatery in Daet, Camarines Norte specializing in sinangag and silog meals. Features an interactive menu with search and category filtering, scroll/load animations with reduced motion support, mobile-first responsive design with sticky navbar, Google Maps embed, and SEO-optimized JSON-LD structured data.',
    tech: ['Astro', 'React', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Motion'],
    github: null,
    demo: 'https://dms-sinangag.netlify.app/',
    image: '/projects/dms-sinangag.png',
  },
  {
    title: 'ThePillars Publication Website',
    year: '2025',
    description:
      'The official student publication website of Ateneo de Naga University (thepillarspub.com), serving the entire Atenean community across News, Editorial, Features, and Sports. I develop article pages and built the standings page for ADNU League 2025 intramurals coverage — with live updates and multiple standings formats: bracket-based win/loss tracking for ball sports and ranking-based displays for cheer and dance sports.',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
    github: null,
    demo: 'https://thepillarspub.com',
    image: '/projects/thepillars-publication.png',
  },
  {
    title: 'StayConnect',
    year: '2025',
    description:
      'A full-stack accommodation booking platform inspired by Airbnb, where users can list, browse, and book stays. Features JWT authentication via httpOnly cookies, property listings with amenities and Cloudinary photo uploads, sortable browse grid with date-range booking, and a mobile-responsive UI.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    github: null,
    demo: 'https://stay-connect-drab.vercel.app/',
    image: '/projects/stayconnect.png',
  },
  {
    title: 'C&D SnapLab',
    year: '2025',
    description:
      "A web-based photobooth app I built for fun because I dream of having my own photobooth one day. Captures 4 sequential photos via the device's webcam and compiles them into a downloadable photostrip (PNG or PDF). Features a countdown timer with flash effects, multiple strip layouts (vertical, grid, framed), dark/light theme, and a fully responsive design — all client-side with no backend storage.",
    tech: ['React', 'Vite', 'Tailwind CSS', 'html2canvas', 'jsPDF'],
    github: null,
    demo: 'https://cd-snap-lab.vercel.app/',
    image: '/projects/cdsnaplab.png',
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
