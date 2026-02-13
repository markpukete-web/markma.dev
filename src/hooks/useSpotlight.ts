import { type RefObject, useEffect, useState } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'motion/react'

export function useSpotlight(containerRef?: RefObject<HTMLElement | null>) {
    const prefersReducedMotion = useReducedMotion()
    const [isTouch, setIsTouch] = useState(
        () => typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches
    )
    const x = useMotionValue(-1000)
    const y = useMotionValue(-1000)

    // Main cursor (responsive)
    const springConfigMain = { damping: 20, stiffness: 300 }
    const springX = useSpring(x, springConfigMain)
    const springY = useSpring(y, springConfigMain)

    // Echo 1 (slight lag)
    const springConfig1 = { damping: 25, stiffness: 200 }
    const springX1 = useSpring(x, springConfig1)
    const springY1 = useSpring(y, springConfig1)

    // Echo 2 (more lag)
    const springConfig2 = { damping: 30, stiffness: 150 }
    const springX2 = useSpring(x, springConfig2)
    const springY2 = useSpring(y, springConfig2)

    // Echo 3 (most lag)
    const springConfig3 = { damping: 35, stiffness: 100 }
    const springX3 = useSpring(x, springConfig3)
    const springY3 = useSpring(y, springConfig3)

    useEffect(() => {
        // If reduced motion is preferred, skip cursor tracking entirely.
        // x and y remain at -1000, keeping the spotlight offscreen.
        if (prefersReducedMotion) return

        const canHover = window.matchMedia('(hover: hover)').matches
        setIsTouch(!canHover)

        function handleMouseMove(e: MouseEvent) {
            if (containerRef?.current) {
                const rect = containerRef.current.getBoundingClientRect()
                x.set(e.clientX - rect.left)
                y.set(e.clientY - rect.top)
            } else {
                x.set(e.clientX)
                y.set(e.clientY)
            }
        }

        function handleTouch(e: TouchEvent) {
            const touch = e.touches[0]
            if (touch && containerRef?.current) {
                const rect = containerRef.current.getBoundingClientRect()
                x.set(touch.clientX - rect.left)
                y.set(touch.clientY - rect.top)
            }
        }

        if (canHover) {
            window.addEventListener('mousemove', handleMouseMove)
        } else {
            window.addEventListener('touchstart', handleTouch)
            window.addEventListener('touchmove', handleTouch)
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchstart', handleTouch)
            window.removeEventListener('touchmove', handleTouch)
        }
    }, [x, y, containerRef, prefersReducedMotion])

    return {
        x: springX, y: springY,
        x1: springX1, y1: springY1,
        x2: springX2, y2: springY2,
        x3: springX3, y3: springY3,
        isTouch,
        prefersReducedMotion: !!prefersReducedMotion,
    }
}
