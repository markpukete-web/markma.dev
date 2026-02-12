import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

export function About() {
  const heading = useScrollReveal()
  const content = useScrollReveal({ delay: 0.15 })

  return (
    <SectionWrapper id="about">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">01.</span> About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div ref={content.ref} style={content.style} className="mt-10 max-w-3xl">
        <p className="text-lg leading-relaxed text-text-secondary">
          I'm a developer who enjoys turning ideas into polished, accessible web
          applications. I care about clean code, thoughtful user experiences, and
          building things that genuinely help people.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          When I'm not coding, you'll find me exploring the world of horse racing,
          which inspired my flagship project{' '}
          <span className="text-accent font-medium">First Furlong</span> — an
          educational platform that makes racing knowledge accessible to complete
          beginners.
        </p>
      </div>
    </SectionWrapper>
  )
}
