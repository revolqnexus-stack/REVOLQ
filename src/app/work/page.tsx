import { Metadata } from 'next'
import SplitText from '@/components/ui/SplitText'
import RevealImage from '@/components/ui/RevealImage'
import MagneticButton from '@/components/ui/MagneticButton'

export const metadata: Metadata = {
  title: 'Our Work — REVOLQ',
  description: 'Case studies and projects by REVOLQ digital agency. Real businesses. Real results.',
}

const metrics = [
  { label: 'Google Maps Target', value: '#4→#1' },
  { label: 'Reviews', value: '464' },
  { label: 'Rating', value: '4.9★' },
  { label: 'AI Active', value: '24/7' },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(8rem, 15vh, 12rem) clamp(1.5rem, 5vw, 6rem) clamp(4rem, 8vh, 6rem)',
        }}
      >
        <div className="max-container">
          <SplitText text="The work." className="text-h1" tag="h1" />
          <p className="text-body" style={{ marginTop: '1.5rem', maxWidth: 450 }}>
            Real businesses. Real results.
          </p>
        </div>
      </section>

      {/* NIXTUDIO expanded */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <span className="text-mono" style={{ display: 'block', marginBottom: '1rem', opacity: 0.5 }}>
            BRIDAL STUDIO · PALA, KERALA · 2025
          </span>
          <SplitText text="NIXTUDIO by Nikita Liby" className="text-h2" tag="h2" />

          <div style={{ margin: '3rem 0' }}>
            <RevealImage
              src="/images/nixtudio.png"
              alt="NIXTUDIO bridal studio showcase"
              priority
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="work-content-grid">
            <div>
              <h3 className="text-label" style={{ marginBottom: '1rem' }}>THE CHALLENGE</h3>
              <p className="text-body">
                NIXTUDIO by Nikita Liby is Pala&apos;s most premium bridal makeup studio. Despite being the top-rated studio
                in the area with 464 Google reviews and a 4.9-star rating, their digital presence didn&apos;t match
                the quality of their work. They needed a complete digital transformation.
              </p>
            </div>
            <div>
              <h3 className="text-label" style={{ marginBottom: '1rem' }}>THE SOLUTION</h3>
              <p className="text-body">
                We built a complete digital system: a premium Next.js website optimised for conversions,
                full SEO infrastructure with structured data, Google Business Profile optimisation,
                and a 24/7 WhatsApp AI agent that replies in Nikita&apos;s voice using a custom knowledge base.
              </p>
            </div>
          </div>

          {/* Results */}
          <div style={{ marginTop: '3rem' }}>
            <h3 className="text-label" style={{ marginBottom: '1.5rem' }}>RESULTS</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: '1.5rem 2rem',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                    minWidth: 140,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: 'var(--white)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {m.value}
                  </div>
                  <div className="text-mono" style={{ opacity: 0.5 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services delivered */}
          <div style={{ marginTop: '3rem' }}>
            <h3 className="text-label" style={{ marginBottom: '1rem' }}>SERVICES DELIVERED</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Next.js Website', 'SEO', 'Google Business Profile', 'WhatsApp AI Agent', 'n8n Automation', 'Content Strategy'].map((s) => (
                <span
                  key={s}
                  className="text-mono"
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    fontSize: '0.6rem',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holy Family */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <span className="text-mono" style={{ display: 'block', marginBottom: '1rem', opacity: 0.5 }}>
            DENTAL CLINIC · KURAVILANGAD, KERALA
          </span>
          <SplitText text="Holy Family Dental Care" className="text-h2" tag="h2" />
          <p className="text-body" style={{ margin: '1.5rem 0', maxWidth: 500 }}>
            Digital presence for a specialist dental clinic in Kottayam district.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <RevealImage
              src="/images/texture1.png"
              alt="Holy Family Dental Care clinic"
            />
          </div>
          <span
            className="text-mono"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
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
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
        }}
      >
        <SplitText text="Want results like these?" className="text-h2" tag="h2" />
        <div style={{ marginTop: '2rem' }}>
          <MagneticButton href="/contact" className="primary">
            START A PROJECT
          </MagneticButton>
        </div>
      </section>

      
    </>
  )
}
