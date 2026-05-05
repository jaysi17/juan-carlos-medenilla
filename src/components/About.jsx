import Section from './Section'

const SKILLS = [
  'JavaScript / TypeScript',
  'React & Next.js',
  'Vue.js & Nuxt.js',
  'Node.js & Express',
  'Tailwind CSS',
  'Astro',
  'MongoDB',
  'Supabase',
  'Unity & C#',
  'Git & GitHub',
]

export default function About() {
  return (
    <Section id="about" eyebrow="01." title="About">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          <p>
            Hi! I'm Juan Carlos — JC for short. I'm a Computer Science student
            at <span className="text-fg">Ateneo de Naga University</span> (BS
            CS '27), currently a QA &amp; Software Developer Intern at{' '}
            <span className="text-fg">AVA Data Solutions</span> and a Web
            Developer at{' '}
            <span className="text-fg">ThePillars Publication</span>.
          </p>
          <p>
            I enjoy building full-stack web apps with the MERN stack, Next.js,
            and the Vue/Nuxt ecosystem, and I dabble in Unity game development
            on the side. Outside of building, I do competitive programming —
            I represented Ateneo de Naga at the{' '}
            <span className="text-fg">ICPC Asia-Manila Regional 2025</span>.
          </p>
          <p className="pt-2">
            Mga technologies na ginagamit ko recently:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-accent">▹</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1">
          <div className="aspect-square rounded-lg bg-card border border-border flex items-center justify-center text-muted text-sm">
            {/* TODO: replace with your photo */}
            Your photo here
          </div>
        </div>
      </div>
    </Section>
  )
}
