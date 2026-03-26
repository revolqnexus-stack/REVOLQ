'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const itemsLine1 = [
  'WE BUILD SYSTEMS',
  'ZERO COMPROMISES',
  'KERALA AGENCY',
  'PURE RESEARCH',
  'DIGITAL DOMINANCE',
  'AESTHETICS & ROI',
]

const itemsLine2 = [
  'UI/UX ARCHITECTURE',
  'CREATIVE DIRECTION',
  'SEO OPERATIONS',
  'HEADLESS COMMERCE',
  'AI PIPELINES',
  'BRAND IDENTITY',
]

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      className="marquee-section max-md:hidden"
      style={{
        background: 'var(--bg-1)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div 
        ref={containerRef}
        className="marquee-wrapper group"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem'
        }}
      >
        {/* Track 1: Moving Left */}
        <div 
          className="marquee-track pause-on-hover"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'marqueeLeft 40s linear infinite',
          }}
        >
          {/* Triple the items to ensure it loops smoothly across wide screens */}
          {[...itemsLine1, ...itemsLine1, ...itemsLine1, ...itemsLine1].map((item, i) => (
            <div 
              key={`t1-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--fg-2)',
                  opacity: 0.3,
                  letterSpacing: '0.12em',
                  padding: '0 2rem',
                }}
              >
                {item}
              </span>
              <span 
                style={{
                  color: 'var(--accent)',
                  opacity: 0.4,
                  fontSize: '0.8rem',
                }}
              >
                ◆
              </span>
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right */}
        <div 
          className="marquee-track reverse pause-on-hover"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'marqueeRight 45s linear infinite',
            opacity: 0.4,
          }}
        >
          {[...itemsLine2, ...itemsLine2, ...itemsLine2, ...itemsLine2].map((item, i) => (
            <div 
              key={`t2-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--fg-2)',
                  opacity: 0.3,
                  letterSpacing: '0.12em',
                  padding: '0 2rem',
                }}
              >
                {item}
              </span>
              <span 
                style={{
                  color: 'var(--accent)',
                  opacity: 0.4,
                  fontSize: '0.8rem',
                }}
              >
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
