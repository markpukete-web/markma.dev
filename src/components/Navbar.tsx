import { useState, useEffect, useRef, useCallback } from 'react'
import { getLenis } from '@/hooks/useLenis'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileOpen) {
      setMobileOpen(false)
      buttonRef.current?.focus()
    }
  }, [mobileOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Focus first link when mobile menu opens
  useEffect(() => {
    if (mobileOpen) {
      const firstLink = menuRef.current?.querySelector('a')
      firstLink?.focus()
    }
  }, [mobileOpen])

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    scrollTo(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
        }`}
    >
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            const lenis = getLenis()
            if (lenis) {
              lenis.scrollTo(0)
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="text-lg font-semibold text-accent transition-colors hover:text-accent-light"
        >
          mm.
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="flex flex-col gap-1.5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-text-secondary transition-transform duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-secondary transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-secondary transition-transform duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div ref={menuRef} className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="text-base text-text-secondary transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
