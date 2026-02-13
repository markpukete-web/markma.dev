import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

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
          But I'm not just someone who supports technology — I build with it
          too. My flagship project,{' '}
          <span className="text-accent font-medium">First Furlong</span>, is a
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
