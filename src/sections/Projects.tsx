import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

const PROJECTS = [
  {
    title: 'First Furlong',
    description:
      'A comprehensive educational web app that teaches Australian horse racing to complete beginners. Features 20+ pages across 13 interactive modules, including a betting calculator, a 50-term glossary, and an AI-powered serverless function. Built as a Progressive Web App with offline support and fully WCAG 2.1 Level AA accessible.',
    reviewScore: '87/100 — "production-ready and commercially viable"',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'PWA', 'Anthropic API'],
    liveUrl: 'https://first-furlong.vercel.app',
    githubUrl: 'https://github.com/markpukete-web/first-furlong',
  },
] as const

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 md:p-8"
    >
      <h3 className="text-2xl font-bold text-text-primary transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-4 leading-relaxed text-text-secondary">{project.description}</p>

      {'reviewScore' in project && (
        <p className="mt-4 text-sm font-medium text-accent">
          Review score: {project.reviewScore}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Live Site &rarr;
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-accent hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export function Projects() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="projects">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">03.</span> Projects
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
