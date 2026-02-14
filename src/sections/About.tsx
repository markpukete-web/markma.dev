import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

const stats = [
  { value: '6+', label: 'Years Enterprise Support' },
  { value: '3', label: 'Fluent Languages' },
  { value: '1', label: 'Shipped Product' },
]

export function About() {
  const heading = useScrollReveal()
  const stat0 = useScrollReveal({ delay: 0 })
  const stat1 = useScrollReveal({ delay: 0.1 })
  const stat2 = useScrollReveal({ delay: 0.2 })
  const statReveals = [stat0, stat1, stat2]
  const content = useScrollReveal({ delay: 0.15 })

  return (
    <SectionWrapper id="about">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">01.</span> About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 flex max-w-3xl items-start justify-between">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            ref={statReveals[i].ref}
            style={statReveals[i].style}
            className={`flex flex-1 flex-col items-center text-center ${
              i < stats.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
            <span className="font-mono text-4xl font-bold text-accent md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-1 text-xs text-text-secondary md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <Spotlight
        ref={content.ref}
        style={content.style}
        className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12"
      >
        <p className="text-lg leading-relaxed text-text-secondary">
          I'm an Application Support professional based in Brisbane, with over
          six years of experience managing enterprise business systems, vendor
          relationships, and cross-departmental technology initiatives. I speak
          English, Cantonese, and Mandarin, and I've worked across industries
          from tourism to racing.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          I also build. My flagship project,{' '}
          <a
            href="https://first-furlong.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:text-accent-light transition-colors"
          >
            First Furlong
          </a>, is a
          production-grade Progressive Web App I designed and built from the
          ground up using AI-assisted development techniques. It scored 87/100
          in independent professional review and was assessed as
          "production-ready and commercially viable."
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          I bridge business operations and technology — I understand what users
          need on the ground and I translate that into solutions that actually
          work.
        </p>
      </Spotlight>
    </SectionWrapper>
  )
}
