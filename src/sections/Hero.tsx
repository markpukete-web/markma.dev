import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react'
import { DotGrid } from '@/components/DotGrid'
import { useSpotlight } from '@/hooks/useSpotlight'
import { getLenis } from '@/hooks/useLenis'
import { cn } from '@/utils/cn'

import horseImage from '@/assets/hero_horse_gold.png'
import maCharacter from '@/assets/ma-character.png'


export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const horseRef = useRef<HTMLDivElement>(null)
  const { x, y, x1, y1, x2, y2, x3, y3, isTouch, prefersReducedMotion } = useSpotlight(horseRef)
  const { scrollY } = useScroll()
  const reducedMotion = useReducedMotion()

  // Fade out hero on scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  // Parallax for content — disabled when reduced motion is preferred
  const contentY = useTransform(scrollY, [0, 200], [0, prefersReducedMotion ? 0 : -50])

  // Extract mask templates to top level (Rules of Hooks)
  const maskImage = useMotionTemplate`
    radial-gradient(circle 300px at ${x}px ${y}px, black 10%, transparent 100%),
    radial-gradient(circle 220px at ${x1}px ${y1}px, rgba(0,0,0,0.7) 10%, transparent 100%),
    radial-gradient(circle 160px at ${x2}px ${y2}px, rgba(0,0,0,0.4) 10%, transparent 100%),
    radial-gradient(circle 110px at ${x3}px ${y3}px, rgba(0,0,0,0.15) 10%, transparent 100%)
  `

  // Entrance animation helpers
  const shouldAnimate = !reducedMotion
  const fadeUp = (delay: number) =>
    shouldAnimate
      ? {
        initial: { opacity: 0, y: 20 } as const,
        animate: { opacity: 1, y: 0 } as const,
        transition: { duration: 0.6, delay, ease: 'easeOut' } as const,
      }
      : {}

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Dot Grid — hidden when reduced motion is preferred */}
      {!prefersReducedMotion && <DotGrid />}

      {/* 馬 — static decorative character, centred in right half, hidden on mobile */}
      <motion.span
        aria-hidden="true"
        {...(shouldAnimate
          ? {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1.5, delay: 0.5, ease: 'easeOut' },
          }
          : {})}
        className="pointer-events-none absolute inset-0 z-[1] hidden select-none items-center justify-center md:flex -translate-x-[2%]"
      >
        <img
          src={maCharacter}
          alt=""
          className="h-[60vh] w-auto opacity-30 invert"
        />
      </motion.span>

      {/* Horse Layers — pushed to bottom on mobile, centre-right on desktop */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-end justify-center p-4 pt-[45vh] md:items-center md:justify-end md:pr-8 md:pt-4 lg:pr-16">
        <div ref={horseRef} className="relative w-full max-w-7xl aspect-[4/5] max-h-[50vh] md:max-h-[70vh] md:max-w-none md:aspect-video">
          {/* Layer 1: Dark Base (Watermark) */}
          <img
            src={horseImage}
            alt="Majestic gold horse"
            className={cn(
              "absolute inset-0 h-full w-full object-contain mix-blend-screen grayscale brightness-[0.3]",
              prefersReducedMotion ? "opacity-20" : isTouch ? "opacity-20" : "opacity-0"
            )}
            loading="eager"
          />

          {/* Layer 2a: Static vignette — always visible, guarantees gold horse on all devices */}
          <img
            src={horseImage}
            alt=""
            className={cn(
              "absolute inset-0 h-full w-full object-contain transition-opacity duration-700 mix-blend-normal",
              prefersReducedMotion
                ? "opacity-30"
                : isTouch ? "opacity-30 md:opacity-50" : "opacity-0"
            )}
            style={{
              maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)',
            }}
          />

          {/* Layer 2b: Interactive spotlight — follows cursor/finger (hidden when reduced motion is preferred) */}
          {!prefersReducedMotion && (
            <motion.img
              src={horseImage}
              alt=""
              className="absolute inset-0 h-full w-full object-contain brightness-140 contrast-110 drop-shadow-[0_0_20px_rgba(212,168,67,0.5)]"
              style={{
                maskImage,
                WebkitMaskImage: maskImage,
              }}
            />
          )}
        </div>
      </div>

      {/* Gradient overlay — text/image separation */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-background via-background/70 to-transparent md:bg-gradient-to-r md:from-background md:via-background/60 md:to-transparent"
        aria-hidden="true"
      />

      {/* Floating context badges — desktop only */}
      {[
        { text: '2026 — Year of the Horse 馬', className: 'top-[22%] right-[15%]', delay: 0.8 },
        { text: 'Brisbane Racing Club', className: 'top-[46%] right-[15%]', delay: 1.0 },
        { text: 'AI-Assisted Builder', className: 'top-[70%] right-[15%]', delay: 1.2 },
      ].map((badge) => (
        <motion.span
          key={badge.text}
          {...(shouldAnimate
            ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6, delay: badge.delay, ease: 'easeOut' },
            }
            : {})}
          className={`absolute z-[8] hidden items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs font-medium uppercase tracking-wider backdrop-blur-[2px] md:inline-flex ${badge.className}`}
          style={{ color: 'rgba(255, 255, 255, 0.45)' }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent/40" />
          {badge.text}
        </motion.span>
      ))}

      {/* Text Overlay */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 z-10 flex h-full w-full flex-col justify-center p-6 md:p-12"
      >
        {/* Name & Socials — vertically centred, nudged slightly above centre */}
        <div className="relative -mt-12 space-y-6 md:-mt-16">
          {/* Mobile gradient backdrop for text legibility */}
          <div
            className="pointer-events-none absolute -inset-6 -top-24 z-[-1] bg-gradient-to-b from-background via-background/80 to-transparent md:hidden"
            aria-hidden="true"
          />
          <motion.h1
            {...fadeUp(0)}
            className="font-serif text-7xl font-bold tracking-tighter text-text-primary md:text-9xl"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}
          >
            Mark<br />Ma
          </motion.h1>

          <div className="space-y-6">
            <motion.p
              {...fadeUp(0.2)}
              className="max-w-xs text-base font-normal text-text-secondary md:max-w-sm md:text-lg"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
            >
              Ma means horse. I work at a racing club. I spent 6+ years supporting enterprise systems — then I built my own.
            </motion.p>

            <motion.a
              {...fadeUp(0.4)}
              href="https://first-furlong.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-l-2 border-accent pl-3 text-base font-medium text-accent hover:underline"
            >
              Meet First Furlong →
            </motion.a>

            <motion.div {...fadeUp(0.6)} className="flex gap-4">
              <a
                href="https://github.com/markpukete-web"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 hover:text-accent"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="mailto:markpukete@hotmail.com"
                className="group rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 hover:text-accent"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

      </motion.div>

      {/* Bottom Left: Tagline — centred on mobile, bottom-left on desktop */}
      <motion.div
        {...fadeUp(0.8)}
        className="absolute bottom-20 left-0 right-0 z-10 text-center md:bottom-8 md:left-12 md:right-auto md:text-left"
      >
        <p className="text-xs font-bold tracking-[0.25em] text-accent uppercase md:text-sm">
          Application Support &middot; Product Builder &middot; First Furlong
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          const lenis = getLenis()
          const el = document.querySelector<HTMLElement>('#about')
          if (!el) return
          if (lenis) {
            lenis.scrollTo(el)
          } else {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent"
        animate={!reducedMotion ? { y: [0, 8, 0] } : undefined}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </motion.section>
  )
}
