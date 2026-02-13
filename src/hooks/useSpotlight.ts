import { type RefObject, useEffect } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

export function useSpotlight(containerRef?: RefObject<HTMLElement | null>) {
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

        // Only track on non-touch devices
        if (window.matchMedia('(hover: hover)').matches) {
            window.addEventListener('mousemove', handleMouseMove)
        }

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [x, y, containerRef])

    return {
        x: springX, y: springY,
        x1: springX1, y1: springY1,
        x2: springX2, y2: springY2,
        x3: springX3, y3: springY3
    }
}
