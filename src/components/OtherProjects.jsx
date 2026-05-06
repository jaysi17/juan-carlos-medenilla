import Section from './Section'

// TODO: Drop screenshots in `public/projects/` and replace `image: null`
// with the path. Also fill in `description` and `tech` for each entry.
const OTHER_PROJECTS = [
  {
    title: 'Blog Site',
    description:
      "A commissioned full-stack blog for a fellow student's CSDC105 prefinals requirement. Clean dark-themed monospace UI for publishing, browsing, editing, and deleting blog posts with title, snippet, and body content.",
    tech: ['React', 'Express', 'MongoDB'],
    image: '/projects/blog-site.jpg',
  },
  {
    title: 'Full-Stack Blog Platform',
    description:
      'A commissioned full-stack blog with user authentication, personal post management, a rich text editor with formatting, and Base64 cover image uploads stored in MongoDB. Built as a school project for a fellow student.',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    image: '/projects/fullstack-blog-platform.jpg',
  },
  {
    title: 'Chiikawa Parkour',
    description:
      'A commissioned 2D parkour platformer featuring the Chiikawa character. Players guide Chiikawa through floating sky platforms, collecting 5 stars while timing jumps carefully — clouds disappear when stepped on, risking a fall.',
    tech: ['Unity', 'C#', '2D Pixel Art'],
    image: '/projects/chiikawa.jpg',
  },
  {
    title: "Potchi's Adventures",
    description:
      'A commissioned 2D platformer where players control Potchi, a cat navigating a cozy living room to collect fish before reaching the food bowl finish line. Features animated character states, heart-based lives, water hazards, and healing pickups.',
    tech: ['Unity', 'C#', '2D Pixel Art'],
    image: '/projects/potchis-adventures.jpg',
  },
  {
    title: 'Rock Paper Scissor',
    description:
      'A simple web-based Rock, Paper, Scissors game where players compete against a CPU opponent with randomized moves. Built as the practical exam for the Frontend Developer position in ThePILLARS Publication Apprenticeship Qualifying Exam 2025.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/rock-paper-scissor.jpg',
  },
  {
    title: 'Weather App',
    description:
      'A clean, minimalist weather web app that lets users search for any city worldwide and view its current weather conditions in real time. Detailed metrics include feels-like temperature, humidity, wind speed, and pressure, plus a light/dark theme toggle.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    image: '/projects/weather-app.jpg',
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
            <div className="relative aspect-video bg-bg border-b border-border overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
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
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
