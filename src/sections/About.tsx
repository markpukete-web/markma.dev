import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

import markPhoto from '@/assets/mark-ma.jpg'
import horseLogo from '@/assets/hero_horse_gold.png'

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
  const photo = useScrollReveal({ delay: 0.25 })

  return (
    <SectionWrapper id="about">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">01.</span> About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      {/* Stats bar — full width above the grid */}
      <div className="mt-10 grid grid-cols-3 max-w-3xl gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            ref={statReveals[i].ref}
            style={statReveals[i].style}
            className="flex flex-col items-center text-center"
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

      <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left column — bio */}
        <div className="lg:col-span-3">
          <Spotlight
            ref={content.ref}
            style={content.style}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12"
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
              ground up using AI-assisted development techniques — with positive
              validation from Brisbane Racing Club's marketing team on content
              accuracy and positioning.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              I bridge business operations and technology — I understand what users
              need on the ground and I translate that into solutions that actually
              work.
            </p>
          </Spotlight>
        </div>

        {/* Right column — photo */}
        <div ref={photo.ref} style={photo.style} className="mx-auto max-w-xs lg:col-span-2 lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/15 opacity-50 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={markPhoto}
                alt="Mark Ma — Application Support Officer and Product Builder"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
              {/* Logo overlay with background to cover the original shirt detail */}
              <div className="absolute bottom-4 right-2 z-10 h-9 w-9">
                <div className="absolute inset-0 rounded-full bg-[#1c2331] shadow-sm" />
                <img
                  src={horseLogo}
                  alt=""
                  className="relative z-10 h-full w-full object-contain p-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
