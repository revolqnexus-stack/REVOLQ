import { Metadata } from 'next'
import SplitText from '@/components/ui/SplitText'
import RevealImage from '@/components/ui/RevealImage'
import MagneticButton from '@/components/ui/MagneticButton'

export const metadata: Metadata = {
  title: 'About — REVOLQ',
  description: 'REVOLQ is a digital agency from Kerala, India. Founded by Ajmal Mullapati and Eathen Baby.',
}

const values = [
  {
    title: 'PRECISION',
    desc: 'Every line of code, every SEO tag, every automation — built with surgical precision. No shortcuts.',
  },
  {
    title: 'TRANSPARENCY',
    desc: 'You see everything. Every decision, every cost, every result. No hidden anything.',
  },
  {
    title: 'SYSTEMS',
    desc: 'We don\'t build websites. We build digital systems that work while you sleep.',
  },
]

export default function AboutPage() {
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
          <SplitText text="Not an agency." className="text-h1" tag="h1" />
          <SplitText text="A digital system." className="text-h1 gold-italic" delay={0.2} tag="h1" />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
            <div>
              <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                OUR STORY
              </span>
              <SplitText text="Born in Kerala." className="text-h2" tag="h2" />
              <SplitText text="Built for India." className="text-h2" delay={0.1} tag="h2" />
              <p className="text-body" style={{ marginTop: '1.5rem' }}>
                REVOLQ started because we saw a gap. Businesses in Kerala — incredible businesses —
                were invisible online. The best bridal studio in Pala had no website. The top dental
                clinic in Kuravilangad wasn&apos;t on Google Maps. Restaurants with 500+ reviews had
                zero digital presence beyond a phone number.
              </p>
              <p className="text-body" style={{ marginTop: '1rem' }}>
                We decided to fix that. Not with templates. Not with ₹5,000 WordPress sites.
                With proper digital systems — the same technology and strategy that
                international agencies charge lakhs for — but built specifically for
                businesses in Kerala and India.
              </p>
            </div>
            <RevealImage
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern workspace"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            OUR VALUES
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.3em',
                    color: 'var(--rose)',
                    marginBottom: '1rem',
                  }}
                >
                  {v.title}
                </h3>
                <p className="text-body" style={{ fontSize: '0.85rem' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            THE TEAM
          </span>
          <SplitText text="Two people." className="text-h2" tag="h2" />
          <SplitText text="One system." className="text-h2" delay={0.1} tag="h2" />
          <p className="text-body" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            We build together. We ship together.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="about-grid">
            <div>
              <RevealImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Ajmal Mullapati"
              />
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.3em', color: 'var(--white)', marginBottom: '0.3rem' }}>
                  AJMAL MULLAPATI
                </h3>
                <span className="text-mono" style={{ opacity: 0.5 }}>Co-founder</span>
              </div>
            </div>
            <div>
              <RevealImage
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                alt="Eathen Baby"
              />
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.3em', color: 'var(--white)', marginBottom: '0.3rem' }}>
                  EATHEN BABY
                </h3>
                <span className="text-mono" style={{ opacity: 0.5 }}>Co-founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <SplitText text="Ready to work with us?" className="text-h2" tag="h2" />
        <div style={{ marginTop: '2rem' }}>
          <MagneticButton href="/contact" className="primary">LET&apos;S TALK</MagneticButton>
        </div>
      </section>

      
    </>
  )
}
