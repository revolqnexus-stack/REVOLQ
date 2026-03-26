'use client'

import { useState } from 'react'

const tiers = [
  {
    name: 'PRESENCE',
    price: '₹25,000+',
    sub: 'Your digital foundation.',
    features: [
      'Next.js website (6 pages)',
      'Mobile responsive architecture',
      'Vercel deployment + Domain',
      'Basic Technical SEO setup',
    ],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'SIGNAL',
    price: '₹55,000+',
    sub: 'For businesses ready to grow.',
    features: [
      'Everything in Presence',
      'Full SEO infrastructure',
      'Google Business Profile setup',
      'Structured data + Schema',
      '1 month priority support',
    ],
    cta: 'MOST POPULAR',
    featured: true,
  },
  {
    name: 'ORBIT',
    price: '₹1,20,000+',
    sub: 'Your complete digital team.',
    features: [
      'Everything in Signal',
      'AI Automation Workflows',
      'WhatsApp AI integration',
      'n8n Custom Pipelines',
      'Monthly Retainer inclusions',
    ],
    cta: "LET'S BUILD",
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section 
      style={{ 
        padding: 'var(--sp-9) clamp(2rem, 8vw, 8rem)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--sp-9)' }}>
          <span 
            style={{ 
              display: 'block', 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)', 
              letterSpacing: '0.4em', 
              color: 'var(--accent)', 
              textTransform: 'uppercase', 
              marginBottom: 'var(--sp-5)' 
            }}
          >
            INVESTMENT
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
            Transparent pricing.<br />No surprises.
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--fg-2)',
              marginTop: '1.5rem',
              maxWidth: '450px',
              opacity: 0.7 
            }}
          >
            Every project is unique. These are initial frameworks to define the scope and speed of your digital dominance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--sp-6)',
            alignItems: 'stretch'
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                padding: 'var(--sp-7)',
                background: tier.featured ? 'var(--bg-1)' : 'transparent',
                border: tier.featured ? '1px solid var(--border-accent)' : '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 300ms var(--ease)',
                position: 'relative'
              }}
            >
              {/* Tier Name */}
              <span 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.4em',
                  color: tier.featured ? 'var(--accent)' : 'var(--fg-3)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--sp-4)',
                  display: 'block'
                }}
              >
                {tier.name}
              </span>

              {/* Price */}
              <div 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--fg)',
                  lineHeight: 1,
                  marginBottom: 'var(--sp-2)',
                }}
              >
                {tier.price}
              </div>

              {/* Subheadline */}
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--fg-2)',
                  opacity: 0.6,
                  marginBottom: 'var(--sp-7)',
                }}
              >
                {tier.sub}
              </p>

              {/* Features */}
              <div style={{ flex: 1, marginBottom: 'var(--sp-8)' }}>
                {tier.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--border)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--fg-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '1rem 0',
                  background: tier.featured ? 'var(--accent)' : 'transparent',
                  color: tier.featured ? 'var(--fg-inv)' : 'var(--fg)',
                  border: `1px solid ${tier.featured ? 'var(--accent)' : 'var(--border)'}`,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 300ms var(--ease)'
                }}
                onMouseEnter={(e) => {
                  if (tier.featured) {
                    e.currentTarget.style.background = 'var(--accent-2)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.featured) {
                    e.currentTarget.style.background = 'var(--accent)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--fg)'
                  }
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
