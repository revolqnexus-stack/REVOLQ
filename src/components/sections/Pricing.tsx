'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'PRESENCE',
    price: '₹25,000+',
    sub: 'Your digital foundation.',
    features: [
      { text: 'Next.js website (up to 6 pages)', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Vercel deployment + domain setup', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics', included: true },
      { text: 'GBP management', included: false },
      { text: 'AI automation', included: false },
      { text: 'Monthly retainer', included: false },
    ],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'SIGNAL',
    price: '₹55,000+',
    sub: 'For businesses ready to grow.',
    features: [
      { text: 'Everything in Presence', included: true },
      { text: 'Full SEO infrastructure', included: true },
      { text: 'Google Business Profile setup', included: true },
      { text: 'Structured data + Schema', included: true },
      { text: 'Search Console + sitemap', included: true },
      { text: 'OG images + social metadata', included: true },
      { text: '1 month support', included: true },
      { text: 'AI automation', included: false },
    ],
    cta: 'MOST POPULAR',
    featured: true,
  },
  {
    name: 'ORBIT',
    price: '₹1,20,000+',
    sub: 'Your complete digital team.',
    features: [
      { text: 'Everything in Signal', included: true },
      { text: 'WhatsApp AI agent', included: true },
      { text: 'n8n automation workflows', included: true },
      { text: 'Custom AI knowledge base', included: true },
      { text: '3 months GBP management', included: true },
      { text: 'Monthly SEO reports', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: "LET'S BUILD",
    featured: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => setVisible(true),
    })
  }, [])

  return (
    <section ref={sectionRef} className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: '1rem' }}>
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            INVESTMENT
          </span>
          <SplitText text="Transparent pricing." className="text-h2" tag="h2" />
          <SplitText text="No surprises." className="text-h2" delay={0.1} tag="h2" />
          <p className="text-body" style={{ marginTop: '1.5rem', maxWidth: 450 }}>
            Every project is different. These are starting points.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
          className="pricing-grid"
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              style={{
                padding: '2.5rem 2rem',
                border: `1px solid ${tier.featured ? 'var(--rose)' : 'var(--border)'}`,
                position: 'relative',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `translateY(0) ${tier.featured ? 'scale(1.03)' : ''}`
                  : `translateY(40px) ${tier.featured ? 'scale(1.03)' : ''}`,
                transition: `all 0.6s ease ${i * 0.15}s`,
                background: tier.featured ? 'var(--glass)' : 'transparent',
              }}
            >
              {/* Name */}
              <h3 className="text-label" style={{ marginBottom: '0.5rem', color: tier.featured ? 'var(--rose)' : 'var(--fog)' }}>
                {tier.name}
              </h3>

              {/* Price */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                  marginBottom: '0.5rem',
                }}
              >
                {tier.price}
              </div>

              {/* Sub */}
              <p className="text-body" style={{ marginBottom: '2rem', fontSize: '0.85rem' }}>
                {tier.sub}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {tier.features.map((f) => (
                  <li
                    key={f.text}
                    style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--dim)',
                      fontSize: '0.8rem',
                      fontWeight: 200,
                      color: f.included ? 'var(--fog)' : 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: f.included ? 'var(--rose)' : 'rgba(255,255,255,0.15)', fontSize: '0.9rem' }}>
                      {f.included ? '✓' : '✗'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/contact"
                className={tier.featured ? 'primary' : ''}
              >
                {tier.cta}
              </MagneticButton>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="text-body" style={{ marginBottom: '0.5rem' }}>
            Need something custom? Everything is negotiable.
          </p>
          <a
            href="/contact"
            style={{
              color: 'var(--rose)',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--rose)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
          >
            TALK TO US →
          </a>
        </div>
      </div>

      
    </section>
  )
}
