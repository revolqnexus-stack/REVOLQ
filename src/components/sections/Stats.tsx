'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '4.9★', label: 'Average Client Rating' },
  { value: '24/7', label: 'AI Systems Running' },
  { value: '₹0', label: 'Hidden Fees' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => setVisible(true),
    })
  }, [])

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                padding: '2rem 1rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}
              >
                {stat.value}
              </div>
              <div className="text-mono" style={{ opacity: 0.6 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
