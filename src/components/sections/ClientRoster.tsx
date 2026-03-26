'use client'

import { useRef } from 'react'

const clients = [
  { domain: 'nixtudio.in', url: 'https://nixtudio.in' },
  { domain: 'holyfamilydentalcare.in', url: 'https://holyfamilydentalcare.in' },
  { domain: '[ next one ].in', url: '/contact' },
]

export default function ClientRoster() {
  return (
    <section className="section-padding" style={{ paddingBottom: '2rem', borderTop: '1px solid var(--border)' }}>
      <div className="max-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 
          className="text-mono" 
          style={{ 
            fontSize: '0.65rem', 
            letterSpacing: '0.2em', 
            opacity: 0.4, 
            marginBottom: '3rem',
            textAlign: 'center'
          }}
        >
          LIVE IN THE WILD
        </h4>
        
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 'clamp(2rem, 5vw, 5rem)', 
            justifyContent: 'center',
            width: '100%' 
          }}
        >
          {clients.map((client) => (
            <a
              key={client.domain}
              href={client.url}
              target={client.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="client-link group"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'var(--white)',
                textDecoration: 'none',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: 0.5,
                transition: 'opacity 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
              }}
              data-cursor="VIEW"
            >
              <span style={{ position: 'relative' }}>
                {client.domain}
                <span 
                  className="link-underline"
                  style={{
                    position: 'absolute',
                    bottom: '-0.2rem',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'var(--white)',
                    transformOrigin: 'left',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </span>
              <span 
                className="arrow"
                style={{
                  fontSize: '0.6em',
                  opacity: 0,
                  transform: 'translate(-10px, 10px)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  color: 'var(--rose)'
                }}
              >
                ↗
              </span>
              
              <style jsx>{`
                .client-link:hover .link-underline {
                  transform: scaleX(1) !important;
                }
                .client-link:hover .arrow {
                  opacity: 1 !important;
                  transform: translate(0, 0) !important;
                }
              `}</style>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
