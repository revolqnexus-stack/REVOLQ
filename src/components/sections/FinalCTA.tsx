'use client'

import SplitText from '@/components/ui/SplitText'

export default function FinalCTA() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 6rem)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'var(--text-3xl)', 
            fontWeight: 300, 
            letterSpacing: '-0.04em',
            color: 'var(--fg)',
            lineHeight: 1,
            marginBottom: 'var(--sp-6)'
          }}
        >
          Ready to grow?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-md)',
            color: 'var(--fg-2)',
            maxWidth: '500px',
            margin: '0 auto 3rem',
            opacity: 0.8,
            lineHeight: 1.8,
          }}
        >
          Your competitors are online. Your customers are searching. Let&apos;s make sure they find you first.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'var(--sp-5)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/contact"
            style={{
              background: 'var(--accent)',
              color: 'var(--fg-inv)',
              border: '1px solid var(--accent)',
              padding: '0.85rem 2.8rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              borderRadius: '0',
              textDecoration: 'none',
              transition: 'all var(--dur-base) var(--ease)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-2)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            START A PROJECT
          </a>
          
          <a
            href="https://wa.me/917995617374"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'transparent',
              color: 'var(--fg-2)',
              border: '1px solid var(--border)',
              padding: '0.85rem 2.8rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              borderRadius: '0',
              textDecoration: 'none',
              transition: 'all var(--dur-base) var(--ease)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--fg-2)'
            }}
          >
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  )
}
