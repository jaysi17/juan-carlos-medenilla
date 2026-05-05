import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#other-projects', label: 'Other' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY
      setScrolled(y > 8)
      if (y < 80) setHidden(false)
      else if (delta > 6) setHidden(true)
      else if (delta < -6) setHidden(false)
      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out',
        hidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <div
        className={[
          'transition-colors duration-300',
          scrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-semibold tracking-tight text-fg hover:text-accent transition-colors"
          >
            JCM
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-md text-fg hover:bg-card transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-bg">
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

function ThemeButton({ theme, onToggleTheme }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggleTheme}
      className="p-2 rounded-md text-fg hover:bg-card transition-colors"
    >
      <span
        className="block transition-transform duration-500"
        style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)' }}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  )
}
