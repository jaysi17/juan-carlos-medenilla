import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'

// TODO: Drop screenshots in `public/projects/` and replace `image: null`
// with the path, e.g. `image: '/projects/shopteneo.png'`.
// Also fill in `description`, `tech`, and `link` for each entry.
const OTHER_PROJECTS = [
  {
    title: 'ShopTeneo',
    description: 'TODO: Add a short description.',
    tech: ['TODO'],
    link: '#',
    type: 'github',
    image: null,
  },
  {
    title: 'Weather App',
    description: 'TODO: Add a short description.',
    tech: ['TODO'],
    link: '#',
    type: 'github',
    image: null,
  },
  {
    title: 'CDSnapLab',
    description: 'TODO: Add a short description.',
    tech: ['TODO'],
    link: '#',
    type: 'github',
    image: null,
  },
  {
    title: 'Rock Paper Scissor',
    description: 'TODO: Add a short description.',
    tech: ['TODO'],
    link: '#',
    type: 'github',
    image: null,
  },
]

export default function OtherProjects() {
  return (
    <Section id="other-projects" eyebrow="04." title="Other Projects">
      <p className="mb-8 text-muted">
        School projects, experiments, and other things I've built along the way.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OTHER_PROJECTS.map((project, i) => (
          <article
            key={i}
            className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <div className="aspect-video bg-bg border-b border-border flex items-center justify-center text-muted text-xs">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                'Screenshot here'
              )}
            </div>
            <div className="flex-1 flex flex-col p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-accent text-xl">{'{ }'}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} link`}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {project.type === 'demo' ? (
                    <ExternalLink size={18} />
                  ) : (
                    <Github size={18} />
                  )}
                </a>
              </div>
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
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
