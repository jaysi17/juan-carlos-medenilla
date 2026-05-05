import { useInView } from '../hooks/useInView'

export default function Section({ id, title, eyebrow, children }) {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      id={id}
      className={`px-6 py-20 sm:py-24 scroll-mt-20 reveal ${inView ? 'is-visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <p className="text-sm font-medium text-accent mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
            {title}
          </h2>
          <div className="mt-4 h-px w-16 bg-border" />
        </div>
        {children}
      </div>
    </section>
  )
}
