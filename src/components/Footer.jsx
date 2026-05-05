import { Github, Linkedin, Mail } from 'lucide-react'

// TODO: Replace the # placeholders with your actual GitHub and LinkedIn URLs.
const SOCIALS = [
  {
    href: '#',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: '#',
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
          Built with React &amp; Tailwind &middot; &copy; {new Date().getFullYear()} Juan Carlos Medenilla
        </p>
      </div>
    </footer>
  )
}
