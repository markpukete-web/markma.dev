import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

interface ExperienceMetric {
  value: string
  label: string
}

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  metrics?: readonly ExperienceMetric[]
  bullets?: readonly string[]
}

const EXPERIENCE: readonly ExperienceItem[] = [
  {
    role: 'Application Support Officer',
    company: 'Brisbane Racing Club',
    period: 'May 2025 — Present',
    description:
      'Primary system administrator for Momentus ERP and supporting business applications across a multi-venue racing and hospitality operation. Responsible for vendor management, system upgrades, user governance, and cross-departmental technical support.',
    metrics: [
      { value: 'v25.1 → 25.3', label: 'ERP Upgrades Delivered' },
      { value: 'Zero', label: 'Business Disruption' },
      { value: '17/23', label: 'Modules Completed in 6 Months' },
    ],
    bullets: [
      'Led the successful upgrade of Momentus ERP from version 25.1 to 25.2, coordinating testing, vendor engagement, and internal communications to deliver the upgrade with zero disruption to business operations. Subsequently managed the incremental 25.2 to 25.3 update.',
      'Identified calculation discrepancies in the Momentus vendor licensing model and negotiated revised commercial terms, delivering measurable cost savings for the organisation.',
      'Implemented a comprehensive user access audit programme to optimise licence utilisation, informing strategic planning for the transition to unlimited user licensing.',
      'Prepared executive briefing materials for vendor leadership reviews, including system performance metrics, support ticket analysis, and strategic roadmap alignment.',
      'Contributing to the technical scoping of the ticketing platform migration from Moshtix to Ticketmaster, including infrastructure requirements and integration mapping.',
    ],
  },
  {
    role: 'Business Applications Support',
    company: 'RealNZ',
    period: 'Sep 2019 — Apr 2025',
    description:
      "End-to-end technical support for business applications across one of New Zealand's largest tourism operators, with primary responsibility for FareHarbor reservation system and Salesforce CRM.",
    metrics: [
      { value: '5.5 Years', label: 'Enterprise App Support' },
      { value: 'Legacy → Cloud', label: 'Platform Migration' },
    ],
    bullets: [
      'Led the transition from legacy reservation system (Customlinc) to cloud-based FareHarbor platform, managing requirements gathering, testing, staff training, and post-launch support with minimal business disruption.',
      'Created detailed documentation and user manuals for business applications, significantly reducing support ticket volume and improving first-contact resolution rates.',
      'Served as primary liaison between business stakeholders and application vendors, managing relationships and escalating issues to ensure alignment with business needs.',
      'Managed annual contract and rates loading processes, ensuring accurate implementation of new pricing across the reservation platform.',
    ],
  },
  {
    role: 'Reservation Supervisor',
    company: 'Southern Discoveries / Real Journeys',
    period: 'Oct 2016 — Sep 2019',
    description:
      'Managed reservation operations and team in a high-volume tourism environment, ensuring booking accuracy, payment processing, and customer satisfaction across multiple product lines.',
  },
  {
    role: 'Computer Technician',
    company: 'Mark & Sun Limited',
    period: 'Jul 2007 — May 2010',
    description:
      'Provided hardware and software support services for business clients, including fault diagnosis, system monitoring, software installation, and equipment testing.',
  },
]

const VISIBLE_BULLETS = 3

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })
  const [expanded, setExpanded] = useState(false)

  const hasMore = (item.bullets?.length ?? 0) > VISIBLE_BULLETS
  const visibleBullets = item.bullets
    ? expanded ? item.bullets : item.bullets.slice(0, VISIBLE_BULLETS)
    : []

  return (
    <Spotlight
      ref={reveal.ref}
      style={reveal.style}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-xl border border-border bg-surface-light p-6 md:p-8"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-xl font-semibold">{item.role}</h3>
        <span className="text-sm text-text-muted">{item.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>

      {item.metrics && item.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="inline-flex flex-col rounded-lg border border-accent/10 bg-accent/5 px-3 py-2"
            >
              <span className="text-sm font-semibold text-accent">{metric.value}</span>
              <span className="text-xs text-text-muted">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <p className="mt-4 leading-relaxed text-text-secondary">{item.description}</p>

      {visibleBullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {visibleBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-2 text-sm text-accent transition-colors hover:text-accent-light"
        >
          {expanded
            ? 'Show less ↑'
            : `Show ${item.bullets!.length - VISIBLE_BULLETS} more ↓`}
        </button>
      )}
    </Spotlight>
  )
}

export function Experience() {
  const heading = useScrollReveal()

  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-surface to-[#0f0f0f]">
      <div ref={heading.ref} style={heading.style}>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-accent">02.</span> Experience
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />
      </div>

      <div className="relative mt-10">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[3px] top-6 bottom-6 w-px bg-border"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {EXPERIENCE.map((item, i) => (
            <div key={item.role} className="relative pl-8">
              {/* Timeline dot — accent for current role, muted for past */}
              <div
                className={`absolute left-0 top-6 h-2 w-2 rounded-full ${
                  i === 0
                    ? 'bg-accent'
                    : 'bg-border'
                }`}
                aria-hidden="true"
              />
              <ExperienceCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
