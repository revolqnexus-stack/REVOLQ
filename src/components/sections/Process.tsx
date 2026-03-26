'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    num: '01',
    title: 'DISCOVERY',
    desc: 'We map your business, competitors, and audience. No assumptions. Pure research data.',
  },
  {
    num: '02',
    title: 'STRATEGY',
    desc: 'A digital roadmap built specifically for your niche. What to build, where to rank, how to automate.',
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We execute. Website, SEO, AI systems — built to spec. No bloat. No delays.',
  },
  {
    num: '04',
    title: 'LAUNCH & MANAGE',
    desc: 'Live, indexed, automated, and monitored. Then we manage everything monthly to ensure dominance.',
  },
]

export default function Process() {
  const lineRef = useRef<SVGLineElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!lineRef.current || !sectionRef.current) return

    gsap.fromTo(
      lineRef.current,
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        padding: 'var(--sp-9) clamp(2rem, 8vw, 8rem)',
        background: 'var(--bg)',
        position: 'relative' 
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--sp-8)' }}>
          <span 
            style={{ 
              display: 'block', 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)', 
              letterSpacing: '0.5em', 
              color: 'var(--accent)', 
              textTransform: 'uppercase', 
              marginBottom: 'var(--sp-5)' 
            }}
          >
            HOW WE WORK
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
            Four steps.<br />Zero guesswork.
          </h2>
        </div>

        {/* Timeline Content */}
        <div style={{ position: 'relative', paddingLeft: 'clamp(2rem, 5vw, 4rem)' }}>
          {/* SVG line */}
          <svg
            style={{
              position: 'absolute',
              left: 'clamp(0.5rem, 1vw, 1rem)',
              top: 0,
              bottom: 0,
              width: 2,
              height: '100%',
            }}
          >
            <line
              ref={lineRef}
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              pathLength="1"
            />
          </svg>

          {/* Steps */}
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                position: 'relative',
                marginBottom: i < steps.length - 1 ? 'var(--sp-9)' : 0,
              }}
            >
              {/* Dot on timeline */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(1.5rem, 4vw, 3.4rem))',
                  top: '0.5rem',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  zIndex: 2,
                }}
              />

              {/* Large faded backdrop number */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '-2rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12vw',
                  fontWeight: 300,
                  color: 'var(--fg)',
                  opacity: 0.03,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  zIndex: 1,
                }}
              >
                {step.num}
              </div>

              {/* Step Info */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: 'var(--text-xs)',
                    color: 'var(--accent)', 
                    letterSpacing: '0.2em',
                    display: 'block',
                    marginBottom: '0.5rem',
                    opacity: 0.8 
                  }}
                >
                  {step.num}
                </span>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 300,
                    letterSpacing: '0.1em',
                    color: 'var(--fg)',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--sp-4)'
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--fg-2)',
                    lineHeight: 1.75,
                    maxWidth: '500px',
                    opacity: 0.7 
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
