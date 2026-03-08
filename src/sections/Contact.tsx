import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

export function Contact() {
  const heading = useScrollReveal()
  const content = useScrollReveal({ delay: 0.15 })

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <div ref={heading.ref} style={heading.style}>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-accent">05.</span> Get In Touch
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent" />
        </div>

        <div ref={content.ref} style={content.style}>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            I'm currently based in Brisbane and open to roles where I can bridge
            business operations and technology. Whether that's a new opportunity,
            a collaboration, or just a chat — feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@markma.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Say Hello
            </a>

            <a
              href="https://ko-fi.com/firstfurlong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Support My Work
            </a>

            <a
              href="/Mark_Ma_dev_CV_2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
