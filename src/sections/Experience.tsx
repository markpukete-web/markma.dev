import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Spotlight } from '@/components/Spotlight'

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
      'Primary system administrator for Momentus ERP and supporting business applications across a multi-venue racing and hospitality operation. Responsible for vendor management, system upgrades, user governance, and cross-departmental technical support.',
    bullets: [
      'Led the successful upgrade of Momentus ERP from version 25.1 to 25.2, coordinating testing, vendor engagement, and internal communications — delivered with zero disruption to business operations.',
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

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const reveal = useScrollReveal({ delay: index * 0.1 })

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
    </Spotlight>
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
