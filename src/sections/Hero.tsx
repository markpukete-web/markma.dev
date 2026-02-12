import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Hero() {
  const heading = useScrollReveal()
  const subtitle = useScrollReveal({ delay: 0.15 })
  const cta = useScrollReveal({ delay: 0.3 })

  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div ref={heading.ref} style={heading.style}>
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Developer &amp; Creator
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Hi, I'm{' '}
            <span className="text-accent">Mark Ma</span>
          </h1>
        </div>

        <div ref={subtitle.ref} style={subtitle.style}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            I build thoughtful, well-crafted web experiences with modern technologies.
            Currently focused on React, TypeScript, and creating tools that make
            complex subjects accessible.
          </p>
        </div>

        <div ref={cta.ref} style={cta.style} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-light"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
