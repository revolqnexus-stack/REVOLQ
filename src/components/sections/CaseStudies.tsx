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
        <div
          style={{
            border: '1px solid var(--border)',
            padding: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: '3rem',
            position: 'relative',
            transition: 'border-color 0.4s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="case-study-grid"
          >
            <div>
              <span className="text-mono" style={{ display: 'block', marginBottom: '1rem', opacity: 0.5 }}>
                BRIDAL STUDIO · PALA, KERALA · 2025
              </span>
              <SplitText text="NIXTUDIO by Nikita Liby" className="text-h2" tag="h3" />
              <p className="text-body" style={{ margin: '1.5rem 0', maxWidth: 500 }}>
                A complete digital transformation for Pala&apos;s most premium bridal makeup studio.
                Website, SEO, GBP optimisation, and a 24/7 WhatsApp AI agent that replies in Nikita&apos;s voice.
              </p>

              {/* Metrics */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: '0.5rem 1rem',
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        fontWeight: 300,
                        color: 'var(--white)',
                      }}
                    >
                      {m.value}
                    </div>
                    <div className="text-mono" style={{ opacity: 0.5, fontSize: '0.6rem' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <MagneticButton href="/work">
                VIEW CASE STUDY →
              </MagneticButton>
            </div>

            <RevealImage
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
              alt="NIXTUDIO bridal studio by Nikita Liby"
              className="case-study-image"
            />
          </div>
        </div>

        {/* Holy Family Dental — Smaller Card */}
        <div
          style={{
            border: '1px solid var(--border)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            position: 'relative',
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

          <RevealImage
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
            alt="Holy Family Dental Care clinic"
          />
        </div>
      </div>

      
    </section>
  )
}
