import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const isHoveringRef = useRef(false)

  const springConfig = { stiffness: 750, damping: 28, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const offset = isHoveringRef.current ? 20 : 8
      mouseX.set(e.clientX - offset)
      mouseY.set(e.clientY - offset)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hovering = !!(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'
      )
      isHoveringRef.current = hovering
      setIsHovering(hovering)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-exclusion sm:block hidden"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
      }}
      transition={{ type: 'spring', stiffness: 750, damping: 28, mass: 0.5 }}
    >
      <div
        className="h-full w-full rounded-full bg-accent/80 backdrop-blur-sm"
        style={{
          boxShadow: isHovering ? '0 0 20px 2px rgba(212, 168, 67, 0.4)' : 'none',
        }}
      />
    </motion.div>
  )
}
