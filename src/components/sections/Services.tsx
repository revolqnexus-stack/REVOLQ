'use client'

import { useState } from 'react'

const servicesData = [
  {
    title: 'WEB DEVELOPMENT',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'SEO & ARCHITECTURE',
    tags: ['Technical Context', 'Core Web Vitals', 'Schema'],
  },
  {
    title: 'AI AUTOMATION',
    tags: ['Data Pipelines', 'LLMs', 'Workflow Automation'],
  },
  {
    title: 'BRAND STRATEGY',
    tags: ['Visual Identity', 'Typography Systems', 'UI/UX'],
  },
]

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="section-padding" id="services" style={{ paddingBottom: 'var(--sp-9)' }}>
      <div className="max-container">
        
        {/* SECTION HEADER */}
        <div style={{ marginBottom: 'var(--sp-8)' }}>
          <span 
            className="text-label" 
            style={{ 
              display: 'block', 
              color: 'var(--accent)', 
              fontSize: 'var(--text-xs)', 
              letterSpacing: '0.5em', 
              textTransform: 'uppercase', 
              marginBottom: 'var(--sp-5)' 
            }}
          >
            WHAT WE DO
          </span>
          <h2 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'var(--text-2xl)', 
              fontWeight: 300, 
              color: 'var(--fg)', 
              letterSpacing: '-0.03em',
              lineHeight: 1.05
            }}
          >
            Every system.<br />Carefully built.
          </h2>
        </div>

        {/* SERVICES ACCORDION LIST */}
        <div 
          onMouseLeave={() => setHoveredIdx(null)}
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {servicesData.map((service, i) => {
            const isHovered = hoveredIdx === i
            const isDimmed = hoveredIdx !== null && hoveredIdx !== i

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIdx(i)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center',
                  padding: '2rem 1rem',
                  borderBottom: `1px solid ${isHovered ? 'var(--border-accent)' : 'var(--border)'}`,
                  background: isHovered ? 'var(--accent-glow)' : 'transparent',
                  opacity: isDimmed ? 0.4 : 1,
                  transition: 'all 350ms var(--ease)',
                  cursor: 'pointer',
                  margin: '0 -1rem' // Pull out to give padding room for the background glow
                }}
                data-cursor="view"
              >
                {/* Number */}
                <div 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    color: 'var(--fg-2)', // Lightened
                    opacity: isHovered ? 1 : 0.45, // Boosted resting opacity
                    transition: 'opacity 350ms var(--ease)'
                  }}
                >
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    color: isHovered ? 'var(--fg)' : 'var(--fg-2)',
                    transition: 'color 350ms var(--ease)'
                  }}
                >
                  {service.title}
                </h3>

                {/* Right Area (Tags + Arrow) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', overflow: 'hidden' }}>
                  <div 
                    className="max-md:hidden"
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 350ms var(--ease)'
                    }}
                  >
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          letterSpacing: '0.15em',
                          color: 'var(--fg-2)', // Lightened
                          textTransform: 'uppercase',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow ↗ */}
                  <span 
                    style={{
                      color: 'var(--accent)',
                      fontSize: 'var(--text-sm)',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translate(0,0)' : 'translate(-10px, 10px)',
                      transition: 'all 350ms var(--ease)'
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
