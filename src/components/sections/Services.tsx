'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Search, Cpu, PenLine, Layers, RefreshCw } from 'lucide-react'
import SplitText from '@/components/ui/SplitText'

gsap.registerPlugin(ScrollTrigger)

const icons = [Code, Search, Cpu, PenLine, Layers, RefreshCw]

const services = [
  {
    num: '01',
    title: 'WEB DEVELOPMENT',
    desc: 'Next.js websites engineered to rank, convert, and scale. Not templates. Not themes. Systems.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'SEO-first'],
    img: '/images/texture1.png',
  },
  {
    num: '02',
    title: 'SEO & GBP',
    desc: 'Google visibility for businesses that deserve to be found. Local SEO, Search Console, structured data, monthly ranking reports.',
    tags: ['Google', 'Search Console', 'GBP', 'Schema'],
    img: '/images/texture1.png',
  },
  {
    num: '03',
    title: 'AI AUTOMATION',
    desc: 'WhatsApp agents that reply in your voice. n8n workflows that run while you sleep. Your business, automated.',
    tags: ['Claude AI', 'n8n', 'WhatsApp API', 'Webhooks'],
    img: '/images/texture1.png',
  },
  {
    num: '04',
    title: 'CONTENT & COPY',
    desc: 'Words that convert. Descriptions that rank. Copy that makes visitors become clients.',
    tags: ['SEO Copy', 'Brand Voice', 'OG', 'Schema'],
    img: '/images/texture1.png',
  },
  {
    num: '05',
    title: 'BRAND STRATEGY',
    desc: 'Positioning. Identity. The story your business tells before anyone speaks.',
    tags: ['Identity', 'Positioning', 'Visual System'],
    img: '/images/texture1.png',
  },
  {
    num: '06',
    title: 'MONTHLY RETAINER',
    desc: 'We become your digital team. GBP management, content, SEO monitoring, AI maintenance — all handled. Every month.',
    tags: ['Ongoing', 'Reports', 'Management', 'Growth'],
    img: '/images/texture1.png',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const rows = sectionRef.current.querySelectorAll('.service-row')
    
    rows.forEach((row, i) => {
      gsap.fromTo(row, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger && (st.trigger as Element).classList?.contains('service-row')) {
          st.kill()
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding" style={{ position: 'relative' }}>
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: '6rem', maxWidth: 800 }}>
          <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>
            WHAT WE DO
          </span>
          <SplitText text="Every system." className="text-h2" tag="h2" />
          <SplitText text="Carefully built." className="text-h2" delay={0.1} tag="h2" />
          <p className="text-body" style={{ marginTop: '2rem', maxWidth: 400, fontSize: '1.1rem', color: 'var(--fog)' }}>
            We don't just build websites. We build comprehensive digital ecosystems that drive revenue.
          </p>
        </div>

        {/* Rows */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <div
                key={service.num}
                className="service-row service-detail-grid"
                style={{
                  padding: '4rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 3fr 2fr',
                  gap: '2rem',
                  alignItems: 'start',
                }}
              >
                {/* 1. Number & Icon */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <span className="text-mono" style={{ fontSize: '1rem', opacity: 0.3 }}>
                    {service.num}
                  </span>
                  <div style={{ padding: '1rem', border: '1px solid var(--dim)', borderRadius: '50%' }}>
                    <Icon size={24} strokeWidth={1} color="var(--rose)" />
                  </div>
                </div>

                {/* 2. Title & Desc */}
                <div style={{ paddingRight: '2rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                      marginBottom: '1rem',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-body" style={{ fontSize: '1.05rem', color: 'var(--fog)', maxWidth: 500, lineHeight: 1.6 }}>
                    {service.desc}
                  </p>
                </div>

                {/* 3. Tags */}
                <div>
                  <h4 className="text-mono" style={{ fontSize: '0.65rem', opacity: 0.5, marginBottom: '1.5rem' }}>
                    DELIVERABLES
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-mono"
                        style={{
                          padding: '0.5rem 0.8rem',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '2px',
                          fontSize: '0.65rem',
                          color: 'var(--white)',
                          background: 'rgba(255,255,255,0.02)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
