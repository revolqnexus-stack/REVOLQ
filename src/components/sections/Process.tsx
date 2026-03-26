'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/ui/SplitText'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'DISCOVERY',
    desc: 'We map your business, competitors, audience. No assumptions. Pure research.',
  },
  {
    num: '02',
    title: 'STRATEGY',
    desc: 'A digital roadmap built specifically for you. What to build, where to rank, how to automate.',
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We execute. Website, SEO, AI systems — built to spec. No bloat. No delays.',
  },
  {
    num: '04',
    title: 'LAUNCH & MANAGE',
    desc: 'Live, indexed, automated, and monitored. Then we manage everything monthly.',
  },
]

export default function Process() {
  const lineRef = useRef<SVGLineElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
    <section ref={sectionRef} className="section-padding" style={{ position: 'relative' }}>
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            HOW WE WORK
          </span>
          <SplitText text="Four steps." className="text-h2" tag="h2" />
          <SplitText text="Zero guesswork." className="text-h2" delay={0.1} tag="h2" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '4rem' }}>
          {/* SVG line */}
          <svg
            style={{
              position: 'absolute',
              left: '1rem',
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
              stroke="var(--rose)"
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
                marginBottom: i < steps.length - 1 ? '6rem' : 0,
                paddingLeft: '2rem',
              }}
            >
              {/* Dot on timeline */}
              <div
                style={{
                  position: 'absolute',
                  left: '-3.4rem',
                  top: '0.5rem',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--rose)',
                }}
              />

              {/* Large faded number */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '-2rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15vw',
                  fontWeight: 300,
                  color: 'var(--white)',
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {step.num}
              </div>

              <span className="text-mono" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--rose)', opacity: 0.8 }}>
                {step.num}
              </span>
              <SplitText
                text={step.title}
                className="text-h2"
                tag="h3"
                delay={i * 0.05}
              />
              <p className="text-body" style={{ marginTop: '1rem', maxWidth: 500 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
