'use client'

import SplitText from '@/components/ui/SplitText'
import RevealImage from '@/components/ui/RevealImage'
import MagneticButton from '@/components/ui/MagneticButton'

const metrics = [
  { label: 'Google Maps Target', value: '#4→#1' },
  { label: 'Reviews', value: '464' },
  { label: 'Rating', value: '4.9★' },
  { label: 'AI Active', value: '24/7' },
]

export default function CaseStudies() {
  return (
    <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            OUR WORK
          </span>
          <SplitText text="Built for real businesses." className="text-h2" tag="h2" />
        </div>

        {/* NIXTUDIO — Featured */}
        <div style={{ marginBottom: '6rem' }}>
          {/* Full Width Image Hero */}
          <div style={{ width: '100%', marginBottom: '3rem' }}>
            <RevealImage
              src="/images/nixtudio.png"
              alt="NIXTUDIO bridal studio by Nikita Liby"
              style={{ aspectRatio: '16/7', objectFit: 'cover', width: '100%' }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="case-study-grid"
          >
            {/* Left Col: Info */}
            <div>
              <span className="text-mono" style={{ display: 'block', marginBottom: '1rem', opacity: 0.5 }}>
                BRIDAL STUDIO · PALA, KERALA · 2025
              </span>
              <SplitText text="NIXTUDIO by Nikita Liby" className="text-h2" tag="h3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }} />
              <p className="text-body" style={{ margin: '2rem 0', maxWidth: 400 }}>
                A complete digital transformation for Pala&apos;s most premium bridal makeup studio.
                Website, SEO, GBP optimisation, and a 24/7 WhatsApp AI agent that replies in Nikita&apos;s voice.
              </p>
              <MagneticButton href="/work" className="primary">
                VIEW CASE STUDY
              </MagneticButton>
            </div>

            {/* Right Col: Massive Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: '2rem 1.5rem',
                    borderLeft: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {m.value}
                  </div>
                  <div className="text-mono" style={{ opacity: 0.5, fontSize: '0.7rem' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Holy Family Dental — Minimal Gallery Block */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="case-study-grid"
          >
            <div>
              <span className="text-mono" style={{ display: 'block', marginBottom: '1rem', opacity: 0.5 }}>
                DENTAL CLINIC · KURAVILANGAD, KERALA
              </span>
              <SplitText text="Holy Family Dental Care" className="text-h2" tag="h3" />
              <p className="text-body" style={{ margin: '1.5rem 0', maxWidth: 400 }}>
                Digital presence for a specialist dental clinic in Kottayam district.
              </p>
              <span
                className="text-mono"
                style={{
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                }}
              >
                COMING SOON
              </span>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', padding: '2rem', background: 'var(--glass)' }}>
              <RevealImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Holy Family Dental Care clinic"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
