# Mark Ma — Product Builder & Application Support Professional

A modern, high-performance portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase the bridge between technical capability and business operations logic.

## 🚀 Key Features

- **Interactive Hero Spotlight**: Custom cursor-tracking spotlight effect using `framer-motion` springs, with a static fallback for touch devices.
- **Reduced Motion Support**: Respects system `prefers-reduced-motion` settings by disabling parallax, spotlight tracking, and canvas animations.
- **Canvas Dot Grid**: Performant, mouse-reactive background pattern drawn on HTML5 Canvas.
- **Performance-First**: Built on Vite for lightning-fast HMR and optimized production builds.
- **Scroll-Driven Storytelling**: Utilizing `framer-motion` for reveal animations and smooth section transitions (Lenis).
- **Custom Design System**: Tailored Tailwind CSS configuration with a dark, premium aesthetic (`#0a0a0a` background with gold accents).
- **Responsive & Accessible**: Fully responsive layout with mobile-specific optimizations (gesture-friendly hero) and WCAG compliance.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (using `@theme` variables)
- **Animation**: Framer Motion (Spring physics, layout transitions)
- **Canvas**: Native HTML5 Canvas API (DotGrid component)
- **Smooth Scroll**: Lenis
- **Deployment**: Vercel

## 📂 Project Structure

```bash
src/
├── components/   # Reusable UI (DotGrid, Spotlight, Navbar)
├── hooks/        # Custom logic (useSpotlight, useScrollReveal, useLenis)
├── sections/     # Page sections (Hero, About, Experience, Projects)
├── styles/       # Global styles and Tailwind configuration
└── assets/       # Static assets (Hero images, icons)
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:5173`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Run ESLint to check for code quality issues      |

## 🎨 Design Philosophy

The design reflects a professional who **bridges business operations and technology**:

- **"Ma means horse"**: A unique brand identity weaving the surname definition into the visual theme (gold horse imagery).
- **Clean & Structured**: Like well-maintained enterprise systems.
- **Premium & Polished**: Reflecting product-building capability (e.g., *First Furlong*).
- **Accessible**: Ensuring information is clear and usable for all users, regardless of device or motion preferences.
