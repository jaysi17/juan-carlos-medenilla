import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'

// TODO: Replace with your school / coursework / experimental projects.
// Pwede mo dito ilagay yung Data Structures, OOP, DB course outputs,
// competitive programming repos, weekend builds, etc.
const OTHER_PROJECTS = [
  {
    title: 'School Project Title',
    description: 'Maikling one-liner about this project.',
    tech: ['Tech', 'Stack'],
    link: '#',
    type: 'github',
  },
  {
    title: 'Another School Project',
    description: 'Another short description.',
    tech: ['Tech', 'Stack'],
    link: '#',
    type: 'github',
  },
  {
    title: 'Competitive Programming',
    description: 'Solutions and notes from contest practice.',
    tech: ['C++', 'Algorithms'],
    link: '#',
    type: 'github',
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
            className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-accent"
          >
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
          </article>
        ))}
      </div>
    </Section>
  )
}
