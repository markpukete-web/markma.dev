import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Route, Switch } from 'wouter'
import { useLenis } from '@/hooks/useLenis'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { Navbar } from '@/components/Navbar'
import { BackToTop } from '@/components/BackToTop'
import { Starfield } from '@/components/Starfield'
import { Hero } from '@/sections/Hero'
import { CustomCursor } from '@/components/CustomCursor'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'
import { CaseStudyFirstFurlong } from '@/pages/CaseStudyFirstFurlong'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function Home() {
  return (
    <>
      <Helmet>
        <title>Mark Ma — Product Builder &amp; Application Support Professional</title>
        <meta
          name="description"
          content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques."
        />
        <meta property="og:title" content="Mark Ma — Product Builder & Application Support Professional" />
        <meta property="og:description" content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques." />
        <meta property="og:url" content="https://markma.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://markma.dev/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mark Ma — Product Builder & Application Support Professional" />
        <meta name="twitter:description" content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques." />
        <meta name="twitter:image" content="https://markma.dev/og-image.png" />
        <link rel="canonical" href="https://markma.dev/" />
      </Helmet>

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  useLenis()

  return (
    <HelmetProvider>
      <NoiseOverlay />
      <Starfield />
      <CustomCursor />
      <BackToTop />
      <Helmet>
        <meta name="theme-color" content="#0a0a0a" />
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-background focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/case-study/first-furlong" component={CaseStudyFirstFurlong} />
      </Switch>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Left: copyright + built-with */}
          <div className="text-center md:text-left">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Mark Ma
            </p>
            <p className="mt-1 text-xs text-text-muted/60">
              Built with React &amp; TypeScript
            </p>
          </div>

          {/* Right: icon links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/markpukete-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="mailto:markpukete@hotmail.com"
              aria-label="Email"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  )
}
