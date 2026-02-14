
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { getLenis } from '@/hooks/useLenis'

export function BackToTop() {
    const [visible, setVisible] = useState(false)
    const reducedMotion = useReducedMotion()

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when scrolled past 100vh (approx viewport height)
            if (window.scrollY > window.innerHeight) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        const lenis = getLenis()
        if (lenis) {
            lenis.scrollTo(0)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 rounded-full border border-accent/20 bg-accent/10 p-3 text-accent backdrop-blur-sm transition-colors hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Back to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
