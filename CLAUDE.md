# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mark Ma. A single-page, scroll-driven site showcasing projects, skills, and experience. Dark theme with warm amber/gold accent. British English spelling throughout all content and comments.

## Commands

```bash
npm run dev      # Dev server (Vite, port 5173)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Architecture

- **Frontend**: React 18 + TypeScript, Vite, Tailwind CSS v4, Motion (framer-motion), Lenis (smooth scrolling)
- **SEO**: react-helmet-async
- **Hosting**: Vercel (auto-deploy from GitHub via SSH remote)
- **Path alias**: `@/` = `src/`

### Project Structure

```
src/
  components/   — Reusable components (Navbar, SectionWrapper)
  sections/     — Page sections (Hero, About, Experience, Projects, Skills, Contact)
  hooks/        — Custom hooks (useLenis, useScrollReveal)
  utils/        — Utilities
  styles/       — Global styles and Tailwind theme
```

### Design System

- **Background**: `#0a0a0a` (near-black)
- **Surface**: `#141414` (alternating sections), `#1e1e1e` (cards)
- **Accent**: `#d4a843` (amber/gold), with `accent-light` and `accent-dark` variants
- **Text**: `text-primary` (#f5f5f5), `text-secondary` (#a3a3a3), `text-muted` (#737373)
- **Border**: `#262626`
- **Typography**: Inter (Google Fonts) for body and headings
- Custom colour tokens defined in `src/styles/index.css` via `@theme`

### Key Patterns

- **Scroll animations**: `useScrollReveal` hook wraps Motion's `useInView` for fade-up-on-scroll. Respects `prefers-reduced-motion`. Used in every section.
- **Smooth scrolling**: Lenis initialised in `useLenis` hook, called once in `App.tsx`
- **Section layout**: `SectionWrapper` provides consistent padding, max-width, and scroll target `id`
- **Hooks in loops**: When `useScrollReveal` is needed inside `.map()`, extract a child component (e.g. `ProjectCard`, `SkillCategory`) to avoid violating React's rules of hooks
- **Nav**: Fixed navbar with frosted glass effect on scroll, hamburger menu on mobile

## Development Rules

- **British English**: Use British spelling in all user-facing text and comments (colour, favourite, organised, etc.)
- **Tailwind spelling**: CSS class names use American English (`transition-colors`, not `transition-colours`)
- **Accessibility**: Follow WCAG 2.1 AA — `aria-hidden` on decorative icons, `aria-label` on icon-only buttons, reduced motion support on all animations
- **Mobile-first**: Responsive design, mobile breakpoints first

## Links

- **Live site**: Deployed via Vercel (auto-deploy from `main` branch)
- **GitHub**: git@github.com:markpukete-web/markma.dev.git
