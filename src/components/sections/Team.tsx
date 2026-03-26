'use client'

import SplitText from '@/components/ui/SplitText'
import RevealImage from '@/components/ui/RevealImage'

export default function Team() {
  return (
    <section 
      style={{ 
        padding: 'var(--sp-9) clamp(2rem, 8vw, 8rem)',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)'
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
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 'var(--sp-5)'
            }}
          >
            THE TEAM
          </span>
          <h2 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--fg)',
              marginBottom: 'var(--sp-4)'
            }}
          >
            Two people.<br />One system.
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--fg-2)',
              lineHeight: 1.75,
              maxWidth: '580px',
              opacity: 0.7
            }}
          >
            We build together. We ship together. We handle everything from the first line of research to the final pixel of code.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--sp-6)',
          }}
        >
          {/* Ajmal */}
          <div>
            <RevealImage
              src="/images/ajmal.png"
              alt="Ajmal Mullapati — Co-founder of REVOLQ"
              style={{ aspectRatio: '3/4', objectFit: 'cover' }}
            />
            <div style={{ marginTop: 'var(--sp-5)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 300,
                  letterSpacing: '0.4em',
                  color: 'var(--fg)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--sp-1)',
                }}
              >
                AJMAL MULLAPATI
              </h3>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: 'var(--text-xs)', 
                  color: 'var(--fg-3)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Co-founder
              </div>
            </div>
          </div>

          {/* Eathen */}
          <div>
            <RevealImage
              src="/images/eathen.png"
              alt="Eathen Baby — Co-founder of REVOLQ"
              style={{ aspectRatio: '3/4', objectFit: 'cover' }}
            />
            <div style={{ marginTop: 'var(--sp-5)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 300,
                  letterSpacing: '0.4em',
                  color: 'var(--fg)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--sp-1)',
                }}
              >
                EATHEN BABY
              </h3>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: 'var(--text-xs)', 
                  color: 'var(--fg-3)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Co-founder
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div style={{ marginTop: 'var(--sp-9)', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-md)',
              lineHeight: 1.8,
              color: 'var(--fg-2)',
              maxWidth: '680px',
              margin: '0 auto',
              opacity: 0.8
            }}
          >
            REVOLQ is two people who got tired of watching good businesses in Kerala get ignored online. We started building systems that change that.
          </p>
        </div>
      </div>
    </section>
  )
}
