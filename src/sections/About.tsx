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
          I'm an Application Support professional based in Brisbane, with over
          six years of experience keeping enterprise platforms running smoothly
          — from ERP and CRM systems to booking engines and ITSM tools. I speak
          English, Cantonese, and Mandarin, and I've worked across industries
          from tourism to racing.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          But I'm not just someone who supports technology — I build with it
          too. My flagship project,{' '}
          <span className="text-accent font-medium">First Furlong</span>, is a
          full-scale educational web app I designed and developed from the
          ground up using AI-assisted techniques. It scored 87/100 in
          professional review and was called "production-ready and commercially
          viable."
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          I bridge business operations and technology — understanding what
          users need on the ground and translating that into solutions that
          actually work.
        </p>
      </div>
    </SectionWrapper>
  )
}
