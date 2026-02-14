import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useLenis } from '@/hooks/useLenis'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'

export default function App() {
  useLenis()

  return (
    <HelmetProvider>
      <NoiseOverlay />
      <Helmet>
        <title>Mark Ma — Product Builder &amp; Application Support Professional</title>
        <meta
          name="description"
          content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques."
        />
        <meta property="og:title" content="Mark Ma — Product Builder & Application Support Professional" />
        <meta property="og:description" content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques." />
        <meta property="og:url" content="https://markma.dev/" />
        {/* <meta property="og:image" content="https://markma.dev/og-image.jpg" /> */}
        <link rel="canonical" href="https://markma.dev/" />
        <meta name="theme-color" content="#0a0a0a" />
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-background focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Mark Ma
        </p>
      </footer>
    </HelmetProvider>
  )
}
