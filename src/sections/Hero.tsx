import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react'
import { DotGrid } from '@/components/DotGrid'
import { useSpotlight } from '@/hooks/useSpotlight'
import { cn } from '@/utils/cn'

import horseImage from '@/assets/hero_horse_gold.png'


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
    radial-gradient(circle 250px at ${x}px ${y}px, black 10%, transparent 100%),
    radial-gradient(circle 200px at ${x1}px ${y1}px, rgba(0,0,0,0.6) 10%, transparent 100%),
    radial-gradient(circle 150px at ${x2}px ${y2}px, rgba(0,0,0,0.3) 10%, transparent 100%),
    radial-gradient(circle 100px at ${x3}px ${y3}px, rgba(0,0,0,0.1) 10%, transparent 100%)
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

      {/* Horse Layers — pushed to bottom on mobile, centred on desktop */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 pt-[45vh] md:items-center md:pt-4">
        <div ref={horseRef} className="relative w-full max-w-7xl aspect-[4/5] max-h-[50vh] md:max-h-none md:aspect-video">
          {/* Layer 1: Dark Base (Watermark) */}
          <img
            src={horseImage}
            alt="Majestic gold horse"
            className="absolute inset-0 h-full w-full object-contain mix-blend-screen opacity-20 grayscale brightness-[0.3]"
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
                : isTouch ? "opacity-30 md:opacity-50" : "opacity-[0.01]"
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
              className="absolute inset-0 h-full w-full object-contain mix-blend-screen"
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

      {/* Text Overlay */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between p-6 md:p-12"
      >
        {/* Top Left: Name & Socials */}
        <div className="relative mt-20 space-y-6">
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

        {/* Bottom Left: Tagline — hidden on mobile to avoid horse overlap */}
        <div className="hidden md:block">
          <p className="text-xs font-bold tracking-[0.25em] text-accent uppercase md:text-sm">
            Application Support &middot; Product Builder &middot; First Furlong
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" role="presentation">
        <span className="sr-only">Scroll down</span>
        <svg
          className="h-6 w-6 text-accent"
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
      </div>
    </motion.section>
  )
}
