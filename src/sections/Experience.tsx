import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  bullets?: readonly string[]
}

const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Application Support Officer',
    company: 'Brisbane Racing Club',
    period: 'May 2025 — Present',
    description:
      'Providing frontline application support across enterprise platforms in a fast-paced racing and events environment.',
    bullets: [
      'Administering Momentus ERP, HubSpot CRM, and Freshservice ITSM to support business operations across racing and hospitality',
      'Delivering user training and technical documentation to improve staff adoption of key systems',
      'Coordinating with vendors to resolve escalated issues and manage system updates',
    ],
  },
  {
    role: 'Business Applications Support',
    company: 'RealNZ',
    period: 'Sep 2019 — Apr 2025',
    description:
      "Supported mission-critical booking and CRM systems across one of New Zealand's largest tourism operators.",
    bullets: [
      'Administered Salesforce CRM, FareHarbor booking engine, and Microsoft 365 across 30+ tourism experiences',
      'Led system configuration, troubleshooting, and user support for 200+ staff nationwide',
      'Managed vendor relationships and contributed to platform selection and implementation projects',
    ],
  },
  {
    role: 'Reservation Supervisor',
    company: 'Southern Discoveries / Real Journeys',
    period: 'Oct 2016 — Sep 2019',
    description:
      'Supervised reservation operations and trained frontline staff on booking systems across multiple tourism brands.',
  },
  {
    role: 'Computer Technician',
    company: 'Mark & Sun Limited',
    period: 'Jul 2007 — May 2010',
    description:
      'Provided hardware and software troubleshooting, system builds, and technical support for small business clients.',
  },
] as const

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className="rounded-xl border border-border bg-surface-light p-6 md:p-8"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-semibold">{item.role}</h3>
        <span className="text-sm text-text-muted">{item.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
      <p className="mt-4 leading-relaxed text-text-secondary">{item.description}</p>

      {item.bullets && item.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Experience() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="experience" className="bg-surface">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">02.</span> Experience
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="mt-10 space-y-8">
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard key={item.role} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
