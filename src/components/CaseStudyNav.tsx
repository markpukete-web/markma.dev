import { useState, useEffect } from 'react'
import { getLenis } from '@/hooks/useLenis'

const SECTIONS = [
  { id: 'problem', label: 'The Problem' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'built', label: 'What I Built' },
  { id: 'how-i-work', label: 'How I Work' },
  { id: 'validation', label: 'Validation' },
  { id: 'differently', label: "What I'd Do Differently" },
] as const

const scrollTo = (target: string) => {
  const lenis = getLenis()
  const el = document.querySelector<HTMLElement>(target)
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el)
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function CaseStudyNav() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const elements = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -75% 0px', threshold: 0 },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Case study sections"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-4"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeId === id
        const isHovered = hoveredId === id

        return (
          <button
            key={id}
            type="button"
            aria-label={`Scroll to ${label}`}
            onClick={() => scrollTo(`#${id}`)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex items-center justify-end gap-3 focus-visible:outline-none"
          >
            {/* Label — fades in on hover */}
            <span
              className={`text-xs font-medium text-text-secondary transition-all duration-200 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}
              aria-hidden="true"
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className={`block h-2 w-2 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-accent scale-125'
                  : 'bg-border group-hover:bg-text-muted'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
