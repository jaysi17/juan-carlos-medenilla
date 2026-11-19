import Section from './Section'

const SKILLS = [
  'JavaScript / TypeScript',
  'React & Next.js',
  'Vue.js & Nuxt.js',
  'Node.js & Express',
  'Tailwind CSS',
  'Astro',
  'Supabase',
  'PostgreSQL',
  'MongoDB',
  'Vitest & Playwright',
  'Unity & C#',
  'Git & GitHub',
]

export default function About() {
  return (
    <Section id="about" eyebrow="01." title="About">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          <p>
            Hi! I'm Juan Carlos — JC for short. I'm a 4th-year Computer Science
            student at <span className="text-fg">Ateneo de Naga University</span>{' '}
            (BS CS '27) and a Software Developer at{' '}
            <span className="text-fg">AVA Data Solutions Inc.</span>, where I
            joined full-time after completing my internship.
          </p>
          <p>
            I work on full-stack applications for real businesses, building
            systems that support everyday operations — from restaurant POS and
            online ordering to franchise and multi-branch management platforms.
            I also take on freelance web projects and previously volunteered as
            a web developer for <span className="text-fg">ThePILLARS</span>, our
            university's student publication, where I learned to build and
            collaborate as part of a team.
          </p>
          <p>
            My current toolkit includes React, TypeScript, and Supabase, with
            experience in Next.js, the MERN stack, and Vue/Nuxt. Outside of web
            development, I explore game development with Unity and enjoy
            competitive programming. I represented Ateneo de Naga University at
            the <span className="text-fg">ICPC Asia-Manila Regional 2025</span>.
          </p>
          <p className="pt-2">
            Technologies I recently used:
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
          <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border">
            <img
              src="/me/selfie.jpg"
              alt="Juan Carlos Medenilla"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
