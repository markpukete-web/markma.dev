import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

interface Skill {
  name: string
  primary?: boolean
}

interface SkillCategoryData {
  heading: string
  icon: ReactNode
  skills: readonly Skill[]
}

const SKILL_CATEGORIES: readonly SkillCategoryData[] = [
  {
    heading: 'Enterprise Systems',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    skills: [
      { name: 'Momentus ERP', primary: true },
      { name: 'Salesforce CRM' },
      { name: 'HubSpot CRM' },
      { name: 'FareHarbor' },
      { name: 'Freshservice ITSM', primary: true },
      { name: 'Microsoft 365', primary: true },
    ],
  },
  {
    heading: 'Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
    skills: [
      { name: 'React', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'Tailwind CSS', primary: true },
      { name: 'Vite', primary: true },
      { name: 'Node.js' },
      { name: 'HTML / CSS' },
      { name: 'Progressive Web Apps' },
    ],
  },
  {
    heading: 'AI-Assisted Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
    skills: [
      { name: 'VS Code' },
      { name: 'Claude', primary: true },
      { name: 'Claude Code', primary: true },
      { name: 'Codex' },
      { name: 'GitHub Copilot' },
      { name: 'Prompt Engineering', primary: true },
      { name: 'Anthropic API Integration' },
    ],
  },
  {
    heading: 'Professional',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    skills: [
      { name: 'Technical Documentation', primary: true },
      { name: 'Vendor Management', primary: true },
      { name: 'User Training' },
      { name: 'System Administration', primary: true },
      { name: 'WCAG Accessibility' },
    ],
  },
]

function SkillCategory({ category, index }: { category: SkillCategoryData; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

  return (
    <Spotlight
      ref={reveal.ref}
      style={reveal.style}
      className="h-full rounded-xl border border-border bg-surface-light p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="mb-3 text-accent">{category.icon}</div>
      <h3 className="mb-4 text-lg font-semibold text-accent">{category.heading}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className={`flex items-center gap-2 ${skill.primary ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${skill.primary ? 'bg-accent' : 'bg-accent/40'}`}
              aria-hidden="true"
            />
            {skill.name}
          </li>
        ))}
      </ul>
    </Spotlight>
  )
}

export function Skills() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-surface to-[#0f0f0f]">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">04.</span> Technical Skills
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((category, i) => (
          <SkillCategory key={category.heading} category={category} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
