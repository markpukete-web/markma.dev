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
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about technology and product development. Feel free to
            reach out — I'd love to hear from you.
          </p>

          <a
            href="mailto:markpukete@hotmail.com"
            className="mt-8 inline-flex items-center rounded-lg border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Say Hello
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
