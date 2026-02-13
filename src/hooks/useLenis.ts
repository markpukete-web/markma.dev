import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

/** Returns the active Lenis instance for programmatic scrolling. */
export function getLenis() {
  return lenisInstance
}

/** Initialises Lenis smooth scrolling on mount. */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenisInstance = lenis

    let frameId: number

    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
