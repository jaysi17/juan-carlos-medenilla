import { Github, Linkedin, Mail } from 'lucide-react'

const SOCIALS = [
  {
    href: 'https://github.com/jaysi17',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/juan-carlos-medenilla-a1a296298',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:jcimedenilla15@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Juan Carlos Medenilla
        </p>
      </div>
    </footer>
  )
}
