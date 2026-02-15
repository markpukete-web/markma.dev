import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'wouter'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'
import firstFurlongScreenshot from '@/assets/first-furlong-screenshot.png'

export function CaseStudyFirstFurlong() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Section animations
  const heroHeading = useScrollReveal()
  const heroSubtitle = useScrollReveal({ delay: 0.1 })
  const heroStats = useScrollReveal({ delay: 0.2 })
  const heroPhone = useScrollReveal({ delay: 0.3 })

  const problemHeading = useScrollReveal()
  const problemContent1 = useScrollReveal({ delay: 0.1 })
  const problemContent2 = useScrollReveal({ delay: 0.2 })
  const problemContent3 = useScrollReveal({ delay: 0.3 })
  const problemQuote = useScrollReveal({ delay: 0.4 })

  const decisionsHeading = useScrollReveal()
  const decision1 = useScrollReveal({ delay: 0.1 })
  const decision2 = useScrollReveal({ delay: 0.2 })
  const decision3 = useScrollReveal({ delay: 0.3 })
  const decision4 = useScrollReveal({ delay: 0.4 })

  const builtHeading = useScrollReveal()
  const builtContent = useScrollReveal({ delay: 0.1 })
  const techStack = useScrollReveal({ delay: 0.2 })

  const validationHeading = useScrollReveal()
  const validation1 = useScrollReveal({ delay: 0.1 })
  const validation2 = useScrollReveal({ delay: 0.2 })

  const differentlyHeading = useScrollReveal()
  const differentlyContent = useScrollReveal({ delay: 0.1 })

  const ctaSection = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>First Furlong Case Study — Mark Ma</title>
        <meta
          name="description"
          content="How I built First Furlong — a production-grade Progressive Web App that demystifies Australian horse racing for complete beginners."
        />
        <meta property="og:title" content="First Furlong Case Study — Mark Ma" />
        <meta
          property="og:description"
          content="How I built First Furlong — a production-grade Progressive Web App that demystifies Australian horse racing for complete beginners."
        />
        <meta property="og:url" content="https://markma.dev/case-study/first-furlong" />
        <link rel="canonical" href="https://markma.dev/case-study/first-furlong" />
      </Helmet>

      <main id="main-content">
        {/* Section 1: Hero Banner */}
        <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-text-muted" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">
                Mark Ma
              </Link>
              {' / '}
              <Link href="/#projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
              {' / '}
              <span className="text-text-secondary">First Furlong</span>
            </nav>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Left column: content */}
              <div>
                <div ref={heroHeading.ref} style={heroHeading.style}>
                  <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                    Case Study
                  </span>
                  <h1 className="font-serif text-5xl font-bold md:text-6xl lg:text-7xl text-text-primary mb-6">
                    First Furlong
                  </h1>
                </div>

                <div ref={heroSubtitle.ref} style={heroSubtitle.style}>
                  <p className="font-serif text-xl md:text-2xl text-text-secondary italic leading-relaxed mb-8">
                    Demystifying Australia's racing heritage through accessible, non-gambling education for a digital-native generation.
                  </p>
                </div>

                <div ref={heroStats.ref} style={heroStats.style}>
                  <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-2">
                      <span className="font-semibold text-accent">20+ Pages</span>
                    </span>
                    <span className="text-text-muted/50">·</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="font-semibold text-accent">13 Modules</span>
                    </span>
                    <span className="text-text-muted/50">·</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="font-semibold text-accent">WCAG 2.1 AA</span>
                    </span>
                    <span className="text-text-muted/50">·</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="font-semibold text-accent">PWA with Offline Support</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column: phone mockup */}
              <div ref={heroPhone.ref} style={heroPhone.style} className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* CSS Phone Mockup */}
                  <div className="relative h-[500px] w-[260px] md:h-[600px] md:w-[300px] rounded-[2.5rem] border-[8px] md:border-[10px] border-surface bg-gray-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
                    <img
                      src={firstFurlongScreenshot}
                      alt="First Furlong app homepage showing the learning journey interface"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    {/* Notch/Camera/Home Bar indicators */}
                    <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-surface/90 z-20" />
                    <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20" />
                  </div>
                  {/* Glow effect behind phone */}
                  <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-accent/20 blur-3xl opacity-40" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Problem */}
        <SectionWrapper id="problem">
          <div ref={problemHeading.ref} style={problemHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">The Problem</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p ref={problemContent1.ref} style={problemContent1.style}>
                My surname, Ma (馬), literally translates to "horse". It's a detail I've carried my whole life, but it took on a new meaning when I began working at the Brisbane Racing Club. Every race day, I witnessed a recurring disconnect: the sport is rich with history and data, yet the barrier to entry is immense for newcomers.
              </p>

              <p ref={problemContent2.ref} style={problemContent2.style}>
                Most existing tools are designed by betting companies for bettors. They assume you already know how to read a cryptic form guide or understand the physics of a "Good 4" track. As a trilingual professional who bridges business operations and technology, I saw a massive gap. There was no entry point for the casual fan — someone who wants to appreciate the "sport of kings" without being pushed toward a betting slip.
              </p>

              <p ref={problemContent3.ref} style={problemContent3.style}>
                I built First Furlong to be that bridge. By combining my industry access at the BRC with modern web standards, I wanted to turn the confusion of the track into a moment of clarity.
              </p>
            </div>

            <div
              ref={problemQuote.ref}
              style={problemQuote.style}
              className="mt-12 border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg"
            >
              <p className="font-serif italic text-xl md:text-2xl text-text-primary">
                "There was no entry point for the casual fan — someone who wants to appreciate the sport without being pushed toward a betting slip."
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 3: Key Decisions */}
        <SectionWrapper id="decisions">
          <div ref={decisionsHeading.ref} style={decisionsHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">Key Decisions</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Decision 1 */}
            <Spotlight
              ref={decision1.ref}
              style={decision1.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Education, Not Gambling</h3>
                <p className="text-text-secondary leading-relaxed">
                  First Furlong is positioned as cultural heritage rather than betting facilitation. This wasn't a content choice — it was a foundational product decision that shaped the entire feature set, tone, and audience.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Every design decision flows from this: the glossary explains terminology without assuming you'll place a bet. The form guide tutorial teaches you to read the data, not to gamble on it. The track profiles share insider knowledge about the venues as places, not just betting markets.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Product Strategy & Ethics
                </span>
              </div>
            </Spotlight>

            {/* Decision 2 */}
            <Spotlight
              ref={decision2.ref}
              style={decision2.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Progressive Web App</h3>
                <p className="text-text-secondary leading-relaxed">
                  A PWA made more sense than a native app or a traditional website for this specific use case. Race days expose a real infrastructure problem — mobile signal at tracks is patchy at best. Offline support via service worker caching means the educational content is always available, even when connectivity drops.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Install-to-homescreen lowers the barrier compared to app store downloads. No account creation, no payment, no friction — just open and learn.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Technical Problem Solving
                </span>
              </div>
            </Spotlight>

            {/* Decision 3 */}
            <Spotlight
              ref={decision3.ref}
              style={decision3.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">AI as Methodology</h3>
                <p className="text-text-secondary leading-relaxed">
                  AI-assisted development was used throughout — Claude and Claude Code for complex feature implementation, GitHub Copilot for code completion, prompt engineering for content generation. Systematic documentation practices (CLAUDE.md, HISTORY.md, ROADMAP.md) maintained project context across development sessions.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The AI-powered weekly racing preview feature (Anthropic API serverless function with web search) is a practical integration, not a tech demo. It generates timely content that would otherwise require manual curation.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The key distinction: the thinking, decisions, and domain knowledge are mine. AI was a force multiplier for execution speed.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Operational Efficiency
                </span>
              </div>
            </Spotlight>

            {/* Decision 4 */}
            <Spotlight
              ref={decision4.ref}
              style={decision4.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Accessibility as a Foundation</h3>
                <p className="text-text-secondary leading-relaxed">
                  WCAG 2.1 Level AA compliance was built in from day one, not retrofitted. Full keyboard navigation, screen reader optimisation, reduced motion support, and a dedicated accessibility page.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Racing education should be inclusive for all Australians. This is unusual for a personal project and signals the same professional-grade standards I apply to enterprise systems at BRC.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Professional Standards & Empathy
                </span>
              </div>
            </Spotlight>
          </div>
        </SectionWrapper>

        {/* Section 4: What I Built */}
        <SectionWrapper id="built">
          <div ref={builtHeading.ref} style={builtHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">What I Built</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div ref={builtContent.ref} style={builtContent.style}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Feature 1 */}
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-semibold text-accent">Interactive Form Guide</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Interactive Form Guide</h3>
                  <p className="text-sm text-text-secondary">
                    Tap-to-decode functionality that demystifies racing form guides for complete beginners.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-semibold text-accent">Weekly Racing Calendar</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Weekly Racing Calendar</h3>
                  <p className="text-sm text-text-secondary">
                    AI-powered racing previews with timely, auto-generated content via the Anthropic API.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-semibold text-accent">Accessibility Page</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Accessibility Page</h3>
                  <p className="text-sm text-text-secondary">
                    A dedicated page demonstrating commitment to inclusive design and WCAG compliance.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-semibold text-accent">Mobile Experience</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Mobile Experience</h3>
                  <p className="text-sm text-text-secondary">
                    Responsive design optimised for trackside use on race day.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-semibold text-accent">Progress Tracking</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Progress Tracking</h3>
                  <p className="text-sm text-text-secondary">
                    Celebratory micro-interactions when users complete educational modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div ref={techStack.ref} style={techStack.style}>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'React 18',
                  'TypeScript',
                  'Tailwind CSS',
                  'Vite',
                  'Vercel',
                  'Wouter',
                  'Framer Motion',
                  'Anthropic API',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 5: Validation & Industry Feedback */}
        <SectionWrapper id="validation">
          <div ref={validationHeading.ref} style={validationHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">Validation</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Spotlight
              ref={validation1.ref}
              style={validation1.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Industry Validation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Brisbane Racing Club's marketing team validated terminology accuracy and content positioning. Track-specific content for Eagle Farm, Flemington, and Randwick was developed using genuine industry access and insider knowledge.
                </p>
              </div>
            </Spotlight>

            <Spotlight
              ref={validation2.ref}
              style={validation2.style}
              className="rounded-2xl p-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Technical Achievement</h3>
                <p className="text-text-secondary leading-relaxed">
                  Full PWA architecture with offline support and service worker caching. SEO optimisation via react-helmet-async with Open Graph tags. Vercel Analytics integration. WCAG 2.1 Level AA compliance across all 20+ pages.
                </p>
              </div>
            </Spotlight>
          </div>
        </SectionWrapper>

        {/* Section 6: What I'd Do Differently */}
        <SectionWrapper id="differently">
          <div ref={differentlyHeading.ref} style={differentlyHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">What I'd Do Differently</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div ref={differentlyContent.ref} style={differentlyContent.style} className="mx-auto max-w-3xl">
            <div className="space-y-8 text-lg leading-relaxed text-text-secondary">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Earlier User Testing with "True" Beginners
                </h3>
                <p>
                  I relied heavily on my industry knowledge from BRC. In the next iteration, I would run usability sessions with people who have zero racing exposure much earlier in the wireframing stage — to identify terminology blind spots I might have missed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Component Library Standardisation
                </h3>
                <p>
                  Because I used a fast-moving development approach, I initially built several custom interactive components that could have been unified into a more reusable design system from day one. This would have made scaling the 13 modules more efficient.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Edge-Optimised AI Pipeline
                </h3>
                <p>
                  The AI Racing Previews currently run via serverless functions. To prepare for high-concurrency traffic during major events like the Melbourne Cup, I would refactor the Anthropic API calls to the Edge to reduce latency for trackside users.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 7: Call to Action */}
        <SectionWrapper id="cta">
          <div ref={ctaSection.ref} style={ctaSection.style} className="text-center space-y-6">
            <a
              href="https://first-furlong.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-[#0a0a0a] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              <span>Visit First Furlong</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <div>
              <Link href="/" className="text-accent hover:text-accent-light transition-colors">
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  )
}
