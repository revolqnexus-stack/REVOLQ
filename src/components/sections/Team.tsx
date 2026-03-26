'use client'

import SplitText from '@/components/ui/SplitText'
import RevealImage from '@/components/ui/RevealImage'

export default function Team() {
  return (
    <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            THE TEAM
          </span>
          <SplitText text="Two people." className="text-h2" tag="h2" />
          <SplitText text="One system." className="text-h2" delay={0.1} tag="h2" />
          <p className="text-body" style={{ marginTop: '1rem' }}>
            We build together. We ship together.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
          className="team-grid"
        >
          {/* Ajmal */}
          <div>
            <RevealImage
              src="/images/ajmal.png"
              alt="Ajmal Mullapati — Co-founder of REVOLQ"
              className="team-image"
              style={{ aspectRatio: '3/4', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  color: 'var(--white)',
                  marginBottom: '0.3rem',
                }}
              >
                AJMAL MULLAPATI
              </h3>
              <span className="text-mono" style={{ opacity: 0.5 }}>
                Co-founder
              </span>
            </div>
          </div>

          {/* Eathen */}
          <div>
            <RevealImage
              src="/images/eathen.png"
              alt="Eathen Baby — Co-founder of REVOLQ"
              className="team-image"
              style={{ aspectRatio: '3/4', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  color: 'var(--white)',
                  marginBottom: '0.3rem',
                }}
              >
                EATHEN BABY
              </h3>
              <span className="text-mono" style={{ opacity: 0.5 }}>
                Co-founder
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-body"
          style={{
            marginTop: '3rem',
            maxWidth: 600,
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          REVOLQ is two people who got tired of watching good businesses in Kerala get ignored online.
          We started building systems that change that.
        </p>
      </div>

      
    </section>
  )
}
