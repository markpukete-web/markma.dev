# Mark Ma

**Father. Product Builder. Dreamer. Application Support Professional.**

I'm Mark — based in Brisbane, trilingual (English, Cantonese, Mandarin), and I've spent 6+ years keeping enterprise systems running at places like Brisbane Racing Club and RealNZ. Then I built one of my own.

This is the source code for my portfolio site at [markma.dev](https://markmadev.vercel.app/). It's the second thing I've shipped — the first was [First Furlong](https://first-furlong.vercel.app), a production-grade PWA that teaches horse racing to complete beginners.

Fun fact: Ma (馬) means horse in Chinese. I work at a racing club. The horse thing isn't a coincidence — it's the thread that runs through everything.

---

## What's Inside

A single-page, scroll-driven portfolio featuring:

- **Interactive hero** with a cursor-tracking spotlight reveal effect (framer-motion springs, with a static fallback for touch/reduced motion)
- **Canvas dot grid** — a performant, mouse-reactive background pattern drawn on HTML5 Canvas
- **Scroll-triggered animations** for section reveals and smooth transitions via Lenis
- **Dark, premium aesthetic** — `#0a0a0a` background with gold accents, inspired by Apple product pages
- **Full accessibility** — respects `prefers-reduced-motion`, keyboard navigable, WCAG 2.1 Level AA compliant
- **Responsive** — mobile-first layout with device-specific optimisations

## Tech Stack

| Layer | Tool |
|:------|:-----|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 (`@theme` variables) |
| Animation | Framer Motion (spring physics, layout transitions) |
| Canvas | Native HTML5 Canvas API |
| Smooth Scroll | Lenis |
| Deployment | Vercel (auto-deploy from GitHub) |

## Project Structure

```
src/
├── components/   # Reusable UI (DotGrid, Spotlight, Navbar)
├── hooks/        # Custom logic (useSpotlight, useScrollReveal, useLenis)
├── sections/     # Page sections (Hero, About, Experience, Projects, Skills, Contact)
├── styles/       # Global styles and Tailwind configuration
└── assets/       # Static assets (hero images, icons)
```

## Commands

| Command | Action |
|:--------|:-------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Design Philosophy

The design reflects someone who bridges business operations and technology:

- **"Ma means horse"** — the surname, the gold horse imagery, and the racing industry context all connect into a single visual identity
- **Clean and structured** — like well-maintained enterprise systems
- **Premium and polished** — reflecting product-building capability
- **Accessible by default** — information should be clear and usable for everyone, regardless of device or motion preferences

## Built With

This portfolio — like First Furlong before it — was built using AI-assisted development techniques: Claude, Claude Code, GitHub Copilot, and prompt engineering. The AI is the tool; the thinking, the decisions, and the domain knowledge are mine.

---

## Licence

This is a personal portfolio. The code structure is open for reference, but the content, branding, and imagery are my own.