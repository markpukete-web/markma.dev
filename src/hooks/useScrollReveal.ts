import { useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

/**
 * Hook for scroll-triggered fade-up reveal animations.
 * Respects reduced motion preferences.
 */
export function useScrollReveal(options?: { delay?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: '0px 0px -80px 0px',
  })
  const prefersReducedMotion = useReducedMotion()

  const delay = options?.delay ?? 0

  // If reduced motion is preferred, show content immediately
  if (prefersReducedMotion) {
    return { ref, style: {} }
  }

  return {
    ref,
    style: {
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    },
  }
}
