import { type HTMLMotionProps, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
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

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            ref={ref}
            className={cn(
                'group relative border border-white/10 bg-white/5 overflow-hidden',
                className
            )}
            onMouseMove={handleMouseMove}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 168, 67, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            {children}
        </motion.div>
    )
})
