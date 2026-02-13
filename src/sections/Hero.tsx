import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react'
import { DotGrid } from '@/components/DotGrid'
import { useSpotlight } from '@/hooks/useSpotlight'
import { cn } from '@/utils/cn'

import horseImage from '@/assets/hero_horse_gold.png'


export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const horseRef = useRef<HTMLDivElement>(null)
  const { x, y, x1, y1, x2, y2, x3, y3, isTouch } = useSpotlight(horseRef)
  const { scrollY } = useScroll()

  // Fade out hero on scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  // Parallax for content
  const contentY = useTransform(scrollY, [0, 200], [0, -50])

  // Extract mask templates to top level (Rules of Hooks)
  const maskImage = useMotionTemplate`
    radial-gradient(circle 250px at ${x}px ${y}px, black 10%, transparent 100%),
    radial-gradient(circle 200px at ${x1}px ${y1}px, rgba(0,0,0,0.6) 10%, transparent 100%),
    radial-gradient(circle 150px at ${x2}px ${y2}px, rgba(0,0,0,0.3) 10%, transparent 100%),
    radial-gradient(circle 100px at ${x3}px ${y3}px, rgba(0,0,0,0.1) 10%, transparent 100%)
  `

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Dot Grid */}
      <DotGrid />

      {/* Horse Layers */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div ref={horseRef} className="relative aspect-[4/5] w-full max-w-7xl md:aspect-video">
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
              "absolute inset-0 h-full w-full object-contain transition-opacity duration-700",
              isTouch ? "opacity-100 mix-blend-normal" : "opacity-70 mix-blend-screen"
            )}
            style={{
              maskImage: isTouch ? 'none' : 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage: isTouch ? 'none' : 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          {/* Layer 2b: Interactive spotlight — follows cursor/finger (Hidden on touch to prevent conflicts/perf issues) */}
          {!isTouch && (
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

      {/* Text Overlay */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between p-6 md:p-12"
      >
        {/* Top Left: Name */}
        <div className="mt-20">
          <h1 className="font-serif text-6xl font-bold tracking-tight text-text-primary mix-blend-difference md:text-8xl">
            Mark<br />Ma
          </h1>
        </div>

        {/* Bottom Left: Tagline */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
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
