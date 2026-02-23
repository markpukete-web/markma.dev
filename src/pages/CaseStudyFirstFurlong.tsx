import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'wouter'
import { getLenis } from '@/hooks/useLenis'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'
import { CaseStudyNav } from '@/components/CaseStudyNav'
import firstFurlongScreenshot from '@/assets/first-furlong-screenshot.png'
import csFormGuide from '@/assets/cs-form-guide.png'
import csRacingCalendar from '@/assets/cs-racing-calendar.png'
import csAccessibility from '@/assets/cs-accessibility.png'

const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Identify the Problem',
    description: 'Spotted a gap in racing education through my work at BRC — no entry point for casual fans who wanted to understand the sport without being pushed toward betting.',
  },
  {
    number: '02',
    title: 'Research & Plan',
    description: 'Mapped the competitive landscape, scoped features against user needs, and defined the audience. Domain knowledge from BRC shaped what mattered and what didn\'t.',
  },
  {
    number: '03',
    title: 'Prompt & Build',
    description: 'Used Claude Code for feature implementation, GitHub Copilot for speed, and systematic prompt engineering for content generation across 13 modules.',
  },
  {
    number: '04',
    title: 'Test & Refine',
    description: 'Iterated based on real user needs, ran accessibility audits for WCAG 2.1 AA compliance, and incorporated industry feedback throughout development.',
  },
  {
    number: '05',
    title: 'Ship & Validate',
    description: 'Deployed to Vercel, scored 87/100 in independent review, and received validation from BRC\'s marketing team on terminology accuracy and content positioning.',
  },
] as const

export function CaseStudyFirstFurlong() {
  // Scroll to top when component mounts
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
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
  const builtPanel1 = useScrollReveal({ delay: 0.1 })
  const builtPanel2 = useScrollReveal({ delay: 0.1 })
  const builtPanel3 = useScrollReveal({ delay: 0.1 })
  const techStack = useScrollReveal({ delay: 0.2 })

  const workflowHeading = useScrollReveal()
  const workflowStep0 = useScrollReveal({ delay: 0.05 })
  const workflowStep1 = useScrollReveal({ delay: 0.1 })
  const workflowStep2 = useScrollReveal({ delay: 0.15 })
  const workflowStep3 = useScrollReveal({ delay: 0.2 })
  const workflowStep4 = useScrollReveal({ delay: 0.25 })
  const workflowStepReveals = [workflowStep0, workflowStep1, workflowStep2, workflowStep3, workflowStep4]

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

      <CaseStudyNav />
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
                  <div className="relative h-[500px] w-[260px] md:h-[600px] md:w-[300px] rounded-[2.5rem] border-[8px] md:border-[10px] border-surface bg-gray-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
                    <img
                      src={firstFurlongScreenshot}
                      alt="First Furlong app homepage showing the learning journey interface"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-surface/90 z-20" />
                    <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20" />
                  </div>
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
            <Spotlight ref={decision1.ref} style={decision1.style} className="rounded-2xl p-8">
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

            <Spotlight ref={decision2.ref} style={decision2.style} className="rounded-2xl p-8">
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

            <Spotlight ref={decision3.ref} style={decision3.style} className="rounded-2xl p-8">
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

            <Spotlight ref={decision4.ref} style={decision4.style} className="rounded-2xl p-8">
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

          <div className="space-y-8 mb-12">
            {/* Panel 1 — Screenshot Left */}
            <div
              ref={builtPanel1.ref}
              style={builtPanel1.style}
              className="rounded-2xl border border-white/10 bg-white/[0.07] overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="lg:w-[58%] flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-text-muted font-mono truncate">
                    first-furlong.vercel.app
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <img
                    src={csFormGuide}
                    alt="First Furlong interactive form guide showing tap-to-decode UI with plain-English explanations for barrier draw, weight, and jockey silks"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:w-[42%] p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-5xl font-bold text-accent/15 mb-4">01</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  Core Feature · Tap-to-Decode
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Interactive Form Guide</h3>
                <p className="text-text-secondary leading-relaxed">
                  The cryptic symbols on a racing form guide become clear with a single tap. Each element — barrier draw, weight, jockey silks — reveals a plain-English explanation designed for someone seeing a form guide for the first time.
                </p>
              </div>
            </div>

            {/* Panel 2 — Screenshot Right */}
            <div
              ref={builtPanel2.ref}
              style={builtPanel2.style}
              className="rounded-2xl border border-white/10 bg-white/[0.07] overflow-hidden flex flex-col lg:flex-row-reverse"
            >
              <div className="lg:w-[58%] flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-text-muted font-mono truncate">
                    first-furlong.vercel.app
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <img
                    src={csRacingCalendar}
                    alt="First Furlong racing calendar page showing AI-generated weekly previews with race meeting details and tips"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:w-[42%] p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-5xl font-bold text-accent/15 mb-4">02</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  AI Integration · Anthropic API
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-4">AI-Powered Racing Previews</h3>
                <p className="text-text-secondary leading-relaxed">
                  A serverless function powered by the Anthropic API generates timely racing previews with web search capabilities. Content that would otherwise require hours of manual curation, delivered automatically.
                </p>
              </div>
            </div>

            {/* Panel 3 — Screenshot Left */}
            <div
              ref={builtPanel3.ref}
              style={builtPanel3.style}
              className="rounded-2xl border border-white/10 bg-white/[0.07] overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="lg:w-[58%] flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-text-muted font-mono truncate">
                    first-furlong.vercel.app
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <img
                    src={csAccessibility}
                    alt="First Furlong accessibility page demonstrating WCAG 2.1 AA compliance with keyboard navigation and screen reader support"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:w-[42%] p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-5xl font-bold text-accent/15 mb-4">03</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  Professional Standards · User Experience
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Accessibility & Progress Tracking</h3>
                <p className="text-text-secondary leading-relaxed">
                  WCAG 2.1 Level AA compliance across all 20+ pages. Full keyboard navigation, screen reader optimisation, and reduced motion support — paired with celebratory micro-interactions when users complete modules.
                </p>
              </div>
            </div>
          </div>

          <div ref={techStack.ref} style={techStack.style}>
            <div className="flex flex-wrap gap-2 justify-center">
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Wouter', 'Framer Motion', 'Anthropic API'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 5: How I Work */}
        <SectionWrapper id="how-i-work" className="bg-gradient-to-b from-surface to-[#0f0f0f]">
          <div ref={workflowHeading.ref} style={workflowHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">How I Work</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div className="relative">
            {/* Desktop horizontal connector line — runs through the centre of the number badges */}
            <div
              className="hidden lg:block absolute top-4 left-[10%] right-[10%] h-px bg-border"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-4">
              {WORKFLOW_STEPS.map((step, i) => (
                <div
                  key={step.number}
                  ref={workflowStepReveals[i].ref}
                  style={workflowStepReveals[i].style}
                  className="relative flex flex-col lg:items-center"
                >
                  {/* Mobile vertical connector — skip on last item */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div
                      className="lg:hidden absolute left-4 top-9 h-[calc(100%+1.5rem)] w-px bg-border"
                      aria-hidden="true"
                    />
                  )}

                  {/* Number badge — sits on the horizontal line on desktop */}
                  <div className="relative z-10 mb-4 flex lg:justify-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-surface text-xs font-bold text-accent ring-4 ring-surface">
                      {step.number}
                    </span>
                  </div>

                  {/* Step card */}
                  <Spotlight className="w-full flex-1 rounded-xl p-5">
                    <h3 className="mb-2 text-sm font-semibold text-accent">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-text-secondary">{step.description}</p>
                  </Spotlight>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 6: Validation & Industry Feedback */}
        <SectionWrapper id="validation">
          <div ref={validationHeading.ref} style={validationHeading.style} className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-text-primary">Validation</h2>
            <div className="mt-2 h-1 w-16 rounded bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Spotlight ref={validation1.ref} style={validation1.style} className="rounded-2xl p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Industry Validation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Brisbane Racing Club's marketing team validated terminology accuracy and content positioning. Track-specific content for Eagle Farm, Flemington, and Randwick was developed using genuine industry access and insider knowledge.
                </p>
              </div>
            </Spotlight>

            <Spotlight ref={validation2.ref} style={validation2.style} className="rounded-2xl p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Technical Achievement</h3>
                <p className="text-text-secondary leading-relaxed">
                  Full PWA architecture with offline support and service worker caching. SEO optimisation via react-helmet-async with Open Graph tags. Vercel Analytics integration. WCAG 2.1 Level AA compliance across all 20+ pages.
                </p>
              </div>
            </Spotlight>
          </div>
        </SectionWrapper>

        {/* Section 7: What I'd Do Differently */}
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

        {/* Section 8: Call to Action */}
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
