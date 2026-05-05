import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium text-accent mb-3">
          06. What's Next?
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-fg">
          Get In Touch
        </h2>
        <p className="mt-6 text-muted leading-relaxed">
          I'm always open to new opportunities, internships, and interesting
          collaborations. Whether you have a question, a project idea, or just
          want to say hi — my inbox is open.
        </p>
        <a
          href="mailto:jcimedenilla15@gmail.com"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-colors"
        >
          <Mail size={16} />
          Say Hello
        </a>
      </div>
    </section>
  )
}
