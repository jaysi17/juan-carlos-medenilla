import { Github, ExternalLink, Award, Youtube, Lock } from 'lucide-react'
import Section from './Section'

const PROJECTS = [
  {
    title: 'Donut Franchise ERP',
    year: '2026',
    role: 'Software Developer',
    org: 'AVA Data Solutions',
    stats: [
      { value: '6', label: 'production plants' },
      { value: '17', label: 'provinces' },
    ],
    description:
      'A web ERP for a donut franchise brand (client name withheld) with production plants across Luzon. It runs the whole chain in one system, from franchise applications to distributor payouts. I took it from a front-end prototype to production: three-department application sign-off, role-scoped access for every team, in-browser OCR for delivery receipts, billing statements, and QR Ph payments and withdrawals.',
    tech: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS v4', 'QR Ph payments', 'Tesseract.js'],
    isPrivate: true,
    image: '/projects/donut-franchise-erp.jpg',
    imageNote: 'Demo data · branding blurred',
  },
  {
    title: 'Daet Kitchen',
    year: '2026',
    role: 'Software Developer',
    org: 'AVA Data Solutions',
    description:
      'POS and online ordering for a restaurant in Daet, Camarines Norte. Customers order dine-in, pickup, or delivery from their phones and pay by QR Ph, while staff run the counter, kitchen display, and cash drawer. I adapted it from the QUEBO system, redesigned every screen in the Daet brand, and built a Shift Turnover module for cash counts, checklists, and issue reports.',
    tech: ['JavaScript', 'Supabase', 'PostgreSQL', 'QR Ph payments', 'PWA', 'Playwright'],
    demo: 'https://www.daetkitchen.com',
    image: '/projects/daet-kitchen.jpg',
    imageNote: 'Demo data',
  },
  {
    title: 'QUEBO Cafe',
    year: '2026',
    role: 'Co-developer',
    org: 'AVA Data Solutions',
    description:
      'A restaurant management system built to run QUEBO Cafe in Naga City as a cashless cafe. Customers order from their phones and pay by QR Ph, and paid orders go straight to the order stations without passing through a cashier. It also covers the POS, floor plan, inventory, and payroll, syncs in real time, and keeps working offline.',
    contributions: [
      'Worked across most of the system, including the order stations (kitchen, barista), inventory, payroll, delivery dispatch, and customer ordering',
      'Built the multi-tenant SaaS foundation it runs on: subscription billing, plan gating, restaurant-code staff login, and tenant isolation',
      'Built the cashless checkout end to end: QR Ph payments with server-side pricing, payment polling, and QR expiry',
    ],
    tech: ['JavaScript', 'Supabase', 'PostgreSQL', 'Deno Edge Functions', 'QR Ph payments', 'PWA'],
    demo: 'https://quebo.cafe',
    image: '/projects/quebo-cafe.jpg',
    imageNote: 'Customer ordering page',
  },
  {
    title: 'Daet Massage & Spa ERP',
    year: '2026',
    role: 'Co-developer',
    org: 'AVA Data Solutions',
    stats: [
      { value: '7', label: 'branches' },
      { value: '7', label: 'user roles' },
    ],
    description:
      'An offline-first business system for a seven-branch massage and spa chain, used daily on tablets and phones by owners, receptionists, therapists, and riders. It handles front-desk sales, online booking, home service, GPS attendance, and payroll, and the front desk keeps selling when the internet drops.',
    contributions: [
      'Built the configurable payroll engine: per-service commissions, cutoff policies, deductions, holiday pay, and printable payslips',
      'Finished the QR Ph payment integration, including 30% booking deposits, balance payments, and automatic reconciliation',
      'Fixed offline-sync and POS crash issues, and wrote 50+ test files for my features',
    ],
    tech: ['React 18', 'Supabase', 'Dexie (IndexedDB)', 'PWA', 'QR Ph payments', 'Vitest'],
    isPrivate: true,
    image: '/projects/daet-spa-erp.jpg',
    imageNote: 'Demo data',
  },
  {
    title: 'AVA Smart Dental',
    year: '2026',
    role: 'Co-developer',
    org: 'AVA Data Solutions',
    description:
      'A subscription clinic-management app for Filipino dental practices, covering patient records, dental charts, appointments, billing, and prescriptions. Clinics start on a free trial and pay monthly or yearly by QR Ph.',
    contributions: [
      'Built subscription billing: QR Ph invoices, verified settlement, a free trial with email reminders, and a paywall that blocks edits but keeps records readable',
      'Built the account layer that lets one owner run multiple clinics, with data access scoped per clinic',
      'Added tiered pricing to the marketing site',
    ],
    tech: ['React 19', 'TypeScript', 'Supabase', 'QR Ph payments', 'Edge Functions', 'PWA'],
    demo: 'https://smartdental.avasolutions.ph',
    image: '/projects/ava-smart-dental.jpg',
    imageNote: 'Demo data',
  },
  {
    title: 'PHSTAC Website',
    year: '2026',
    role: 'Web Developer',
    org: 'Freelance',
    description:
      'The official website of the Philippine Healthcare Skills Training and Assessment Center, a TESDA-accredited caregiving school with branches in Naga City and Daraga, Albay. I built the six-page site from design to launch on its custom domain, with course, enrollment, and partnership pages driven by a single content file, SEO structured data, and automated link and data checks.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS v4', 'Motion', 'Netlify'],
    demo: 'https://phstac.com',
    image: '/projects/phstac.jpg',
  },
  {
    title: 'ThePILLARS Publication Website',
    year: '2025',
    role: 'Web Developer',
    org: 'Student Publication',
    description:
      'The official student publication website of Ateneo de Naga University, covering News, Editorial, Features, and Sports. I built article pages and the ADNU League 2025 standings page with live updates and separate formats for bracket-based ball sports and ranking-based cheer and dance events.',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
    demo: 'https://thepillarspub.com',
    image: '/projects/thepillars-publication.jpg',
  },
  {
    title: 'Calamity Dash',
    year: '2025',
    role: 'Gameplay Programmer',
    org: 'Team project',
    badges: ['ADNU Software Festival 2025 Champion', 'DOST National Finalist'],
    description:
      'A Unity game selected as a DOST National Game Development Finalist representing the Bicol Region. I implemented the core player mechanics, controls, and in-game interactions, and designed the maps, obstacles, and interactive elements.',
    tech: ['Unity', 'C#'],
    demo: 'https://youtu.be/Eb1hND5jAp8',
    image: '/projects/calamity-dash.jpg',
  },
]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03." title="Projects">
      <p className="mb-8 text-muted">
        Client systems from my work at AVA Data Solutions, freelance and campus
        projects, and a game that went to nationals.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({
  title,
  year,
  role,
  org,
  stats,
  description,
  contributions,
  tech,
  github,
  demo,
  isPrivate,
  image,
  imageNote,
  badges,
}) {
  const isYouTube = demo && /(?:youtube\.com|youtu\.be)/i.test(demo)
  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="relative aspect-video bg-bg border-b border-border overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
            Screenshot here
          </div>
        )}
        {imageNote && (
          <span className="absolute left-2.5 bottom-2.5 px-2 py-0.5 rounded-full text-[11px] font-medium text-white bg-black/70 backdrop-blur-sm">
            {imageNote}
          </span>
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
        {role && (
          <p className="mt-1 text-sm text-muted">
            <span className="font-medium text-fg">{role}</span>
            {org && <> · {org}</>}
          </p>
        )}
        {badges && badges.length > 0 && (
          <div className="mt-1 space-y-0.5">
            {badges.map((b) => (
              <p key={b} className="flex items-center gap-1.5 text-xs text-accent">
                <Award size={12} className="shrink-0" />
                <span>{b}</span>
              </p>
            ))}
          </div>
        )}
        {stats && stats.length > 0 && (
          <ul className="mt-4 py-2.5 flex flex-wrap gap-x-6 gap-y-2 border-y border-border">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-fg">{s.value}</span>
                <span className="text-[11px] uppercase tracking-wide text-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
        {contributions && contributions.length > 0 && (
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-fg">
              My contributions
            </p>
            <ul className="mt-2 space-y-1.5">
              {contributions.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted leading-relaxed">
                  <span className="text-accent">▹</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex-1" />
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
              aria-label={isYouTube ? `${title} on YouTube` : `${title} live site`}
              className="text-muted hover:text-accent transition-colors"
            >
              {isYouTube ? <Youtube size={20} /> : <ExternalLink size={20} />}
            </a>
          )}
          {isPrivate && !demo && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Lock size={14} />
              Private client system
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
