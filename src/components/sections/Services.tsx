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
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return

    const totalScroll = scrollContainerRef.current.scrollWidth - window.innerWidth

    const tween = gsap.to(scrollContainerRef.current, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill()
      })
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ overflow: 'hidden', position: 'relative' }}>
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: '100vh',
        }}
      >
        {/* Pinned left panel */}
        <div
          style={{
            minWidth: 'clamp(300px, 30vw, 500px)',
            padding: 'clamp(2rem, 5vh, 4rem) clamp(1.5rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid var(--border)',
          }}
        >
          <span className="text-label" style={{ marginBottom: '1.5rem' }}>
            WHAT WE DO
          </span>
          <SplitText text="Every system." className="text-h2" tag="h2" />
          <SplitText text="Carefully built." className="text-h2" delay={0.1} tag="h2" />
          <p className="text-body" style={{ marginTop: '1.5rem', maxWidth: 280 }}>
            Six services. One agency.
          </p>
        </div>

        {/* Cards */}
        {services.map((service, i) => {
          const Icon = icons[i]
          return (
            <div
              key={service.num}
              style={{
                minWidth: 420,
                height: 'calc(100% - 4rem)',
                margin: '2rem 1rem',
                padding: '3rem 2.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
            >
              {/* Number */}
              <span className="text-mono" style={{ opacity: 0.4, marginBottom: '1rem' }}>
                {service.num}
              </span>

              {/* Icon + Title */}
              <div>
                <Icon
                  size={24}
                  strokeWidth={1}
                  color="var(--rose)"
                  style={{ marginBottom: '1rem' }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.3em',
                    color: 'var(--white)',
                    marginBottom: '1rem',
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-body" style={{ fontSize: '0.85rem', maxWidth: 320 }}>
                  {service.desc}
                </p>
              </div>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  margin: '1.5rem 0',
                }}
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-mono"
                    style={{
                      padding: '0.3rem 0.6rem',
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      fontSize: '0.6rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div 
                style={{ position: 'relative', aspectRatio: '16/10', width: '100%', overflow: 'hidden' }}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.6, mixBlendMode: 'screen', filter: 'contrast(1.2)' }}
                  sizes="420px"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
