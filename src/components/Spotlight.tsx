import { type HTMLMotionProps, motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { forwardRef } from 'react'
import { cn } from '../utils/cn'

interface SpotlightProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
}

export const Spotlight = forwardRef<HTMLDivElement, SpotlightProps>(function Spotlight(
    { children, className = '', ...props },
    ref
) {
    const mouseX = useMotionValue(-1000)
    const mouseY = useMotionValue(-1000)

    function handlePointerMove({ currentTarget, clientX, clientY }: React.PointerEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const background = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseX}px ${mouseY}px,
      rgba(212, 168, 67, 0.25),
      transparent 80%
    )
  `

    const borderBackground = useMotionTemplate`
      radial-gradient(
        400px circle at ${mouseX}px ${mouseY}px,
        rgba(212, 168, 67, 0.5),
        transparent 80%
      )
    `

    return (
        <motion.div
            ref={ref}
            className="group relative rounded-2xl border border-white/5 bg-transparent overflow-hidden shadow-2xl transition-all duration-300"
            onPointerMove={handlePointerMove}
            {...props}
        >
            {/* Glowing borders */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: borderBackground, zIndex: 0 }}
            />
            {/* Inner fill glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
                style={{ background }}
            />
            <div className={cn("relative z-10 w-full h-full bg-surface-light/60 backdrop-blur-md rounded-2xl", className)}>
                {children}
            </div>
        </motion.div>
    )
})
