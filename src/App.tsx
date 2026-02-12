import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useLenis } from '@/hooks/useLenis'
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
      <Helmet>
        <title>Mark Ma — Product Builder &amp; Application Support Professional</title>
        <meta
          name="description"
          content="Mark Ma bridges business operations and technology — 6+ years in enterprise application support with hands-on product development using AI-assisted techniques."
        />
      </Helmet>

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
          &copy; {new Date().getFullYear()} Mark Ma. Built with React &amp; Tailwind CSS.
        </p>
      </footer>
    </HelmetProvider>
  )
}
