import { ArrowDown, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-5xl mx-auto w-full hero-enter">
        <p className="text-sm font-medium text-accent mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-fg">
          Juan Carlos Medenilla.
        </h1>
        <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-muted">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
          Computer Science student at Ateneo de Naga University, currently a
          QA &amp; Software Developer Intern at AVA Data Solutions Inc. and a Web
          Developer at ThePillars Publication. I build full-stack web apps,
          games, and small tools that solve real problems.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            View my work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-fg font-medium hover:bg-card transition-colors"
          >
            Get in touch
          </a>
          <a
            href="/resume/Medenilla_Juan_Carlos_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-fg font-medium hover:bg-card transition-colors"
          >
            Resume
            <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
