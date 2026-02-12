import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

const SKILL_CATEGORIES = [
  {
    heading: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML / CSS', 'Vite', 'Framer Motion'],
  },
  {
    heading: 'Backend & Data',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'REST APIs'],
  },
  {
    heading: 'Tools & Workflow',
    skills: ['Git / GitHub', 'Vercel', 'VS Code', 'Figma', 'PWA', 'CI/CD'],
  },
] as const

function SkillCategory({ category, index }: { category: typeof SKILL_CATEGORIES[number]; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

  return (
    <div ref={reveal.ref} style={reveal.style}>
      <h3 className="mb-4 text-lg font-semibold text-accent">{category.heading}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="skills" className="bg-surface">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">04.</span> Technical Skills
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, i) => (
          <SkillCategory key={category.heading} category={category} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
