import { useState } from 'react'
import { Link } from 'wouter'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import firstFurlongScreenshot from '@/assets/first-furlong-screenshot.png'

const PROJECTS = [
  {
    title: 'First Furlong',
    description:
      'A production-grade Progressive Web App that teaches Australian horse racing to complete beginners. 20+ pages across 13 interactive modules, including a betting calculator, 50-term glossary with cross-linking, interactive form guide with tap-to-decode, and track profiles built with genuine industry access. Features an AI-powered serverless function using the Anthropic API for weekly racing previews. Fully WCAG 2.1 Level AA accessible with offline PWA support.',
    reviewScore: '87/100',
    reviewQuote: 'production-ready and commercially viable',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'PWA', 'Anthropic API'],
    liveUrl: 'https://first-furlong.vercel.app',
  },
] as const

export function Projects() {
  const heading = useScrollReveal()
  const content = useScrollReveal({ delay: 0.2 })
  const [phoneInView, setPhoneInView] = useState(false)

  // We feature the First Furlong project
  const project = PROJECTS[0]

  return (
    <SectionWrapper id="projects">
      <div ref={heading.ref} style={heading.style} className="mb-12 md:mb-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">03.</span> Projects
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

        {/* Mobile: Mockup appears first */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            animate={phoneInView ? { y: [-10, 10, -10] } : { y: 0 }}
            transition={phoneInView ? {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            } : { duration: 0.5 }}
            onViewportEnter={() => setPhoneInView(true)}
            onViewportLeave={() => setPhoneInView(false)}
            className="relative"
          >
            {/* CSS Phone Mockup */}
            <div className="relative h-[500px] w-[260px] md:h-[600px] md:w-[300px] rounded-[2.5rem] border-[8px] md:border-[10px] border-surface bg-gray-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
              {/* Screen Content */}
              {/* Screen Content */}
              <img
                src={firstFurlongScreenshot}
                alt="First Furlong app homepage showing the learning journey interface"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />

              {/* Notch/Camera/Home Bar indicators */}
              <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-surface/90 z-20"></div>
              <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/20"></div>
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-accent/20 blur-3xl opacity-40" aria-hidden="true"></div>
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="order-2 lg:order-1">
          <div
            ref={content.ref}
            style={content.style}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                Featured Project
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-text-primary">The problem:</span>{' '}
                Horse racing is one of Australia's biggest sports, but there's nowhere for complete beginners to learn the basics without being pushed toward gambling.
              </p>
              <p>
                <span className="font-semibold text-text-primary">What I built:</span>{' '}
                A 20+ page Progressive Web App with 13 interactive modules, a betting calculator, 50-term glossary, interactive form guide with tap-to-decode, and track profiles built with genuine industry access.
              </p>
              <p>
                <span className="font-semibold text-text-primary">How:</span>{' '}
                AI-assisted development using Claude Code and GitHub Copilot, with an AI-powered serverless function (Anthropic API) for weekly racing previews. Fully WCAG 2.1 Level AA accessible with offline PWA support.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex flex-col rounded-lg border border-accent/10 bg-accent/5 px-4 py-2">
                <span className="text-sm font-semibold text-accent">~2 Months</span>
                <span className="text-xs text-text-muted">Build Time</span>
              </div>
              <div className="inline-flex flex-col rounded-lg border border-accent/10 bg-accent/5 px-4 py-2">
                <span className="text-sm font-semibold text-accent">20+ Pages</span>
                <span className="text-xs text-text-muted">13 Modules</span>
              </div>
              <div className="inline-flex flex-col rounded-lg border border-accent/10 bg-accent/5 px-4 py-2">
                <span className="text-sm font-semibold text-accent">87/100</span>
                <span className="text-xs text-text-muted">Independent Review</span>
              </div>
            </div>

            {/* Validation Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg"
            >
              <p className="font-serif italic text-xl text-text-primary">
                "{project.reviewQuote}"
              </p>
              <p className="text-text-muted mt-2 text-sm">
                — Independent Design & Industry Review
              </p>
            </motion.div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm font-medium text-accent hover:bg-accent/20 transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-[#0a0a0a] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
              >
                <span>Visit Live Site</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <Link
                href="/case-study/first-furlong"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium py-3.5"
              >
                <span>Read the Case Study</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
