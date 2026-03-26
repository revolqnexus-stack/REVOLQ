'use client'

import { useState } from 'react'

const clients = [
  { domain: 'nixtudio.in', label: 'Bridal Studio · Pala', url: 'https://nixtudio.in' },
  { domain: 'holyfamilydental.in', label: 'Dental Clinic · Kuravilangad', url: 'https://holyfamilydental.in' },
  { domain: 'revolq.com', label: 'Digital Labs · Kochi', url: '#' },
]

export default function ClientRoster() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section 
      style={{ 
        padding: 'var(--sp-9) clamp(2rem, 8vw, 8rem)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Label */}
        <span 
          style={{ 
            display: 'block', 
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)', 
            letterSpacing: '0.5em', 
            color: 'var(--accent)', 
            textTransform: 'uppercase', 
            marginBottom: 'var(--sp-8)' 
          }}
        >
          LIVE IN THE WILD
        </span>

        {/* Link List */}
        <div 
          onMouseLeave={() => setHoveredIdx(null)}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {clients.map((client, i) => {
            const isHovered = hoveredIdx === i
            const isDimmed = hoveredIdx !== null && !isHovered

            return (
              <a
                key={client.domain}
                href={client.url}
                target={client.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIdx(i)}
                data-cursor="view"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderBottom: `1px solid ${isHovered ? 'var(--border-accent)' : 'var(--border)'}`,
                  textDecoration: 'none',
                  opacity: isDimmed ? 0.35 : 1,
                  transition: 'all 300ms var(--ease)',
                }}
              >
                {/* Left: Domain */}
                <span 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    color: isHovered ? 'var(--fg)' : 'var(--fg-2)',
                    transition: 'color 300ms var(--ease)',
                  }}
                >
                  {client.domain}
                </span>

                {/* Right: Label + Arrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-3)',
                      opacity: isHovered ? 1 : 0.4,
                      transition: 'opacity 300ms var(--ease)',
                    }}
                  >
                    {client.label}
                  </span>
                  <span 
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--fg-3)',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 300ms var(--ease)',
                    }}
                  >
                    ↗
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
