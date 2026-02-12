import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

const EXPERIENCE = [
  {
    role: 'Independent Developer',
    company: 'Self-employed',
    period: '2024 — Present',
    description:
      'Building full-stack web applications with React, TypeScript, and modern tooling. Focused on creating accessible, educational platforms deployed via Vercel.',
  },
] as const

function ExperienceCard({ item, index }: { item: typeof EXPERIENCE[number]; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className="rounded-xl border border-border bg-surface-light p-6 md:p-8"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-semibold">{item.role}</h3>
        <span className="text-sm text-text-muted">{item.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
      <p className="mt-4 leading-relaxed text-text-secondary">{item.description}</p>
    </div>
  )
}

export function Experience() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="experience" className="bg-surface">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">02.</span> Experience
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 space-y-8">
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard key={item.role} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
