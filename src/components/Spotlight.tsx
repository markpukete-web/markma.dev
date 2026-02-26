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
        650px circle at ${mouseX}px ${mouseY}px,
        rgba(212, 168, 67, 0.15),
        transparent 80%
      )
    `

    return (
        <motion.div
            ref={ref}
            className={cn(
                'group relative rounded-2xl border border-white/10 bg-white/[0.07] overflow-hidden shadow-sm transition-all duration-300',
                className
            )}
            onPointerMove={handlePointerMove}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100 z-0"
                style={{ background }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    )
})
