'use client'

import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

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
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <SplitText
          text="Ready to grow?"
          className="text-display"
          tag="h2"
        />

        <p
          className="text-body"
          style={{
            maxWidth: 500,
            margin: '2rem auto 3rem',
            opacity: 0.8,
          }}
        >
          Your competitors are online.
          Your customers are searching.
          Let&apos;s make sure they find you.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <MagneticButton href="/contact" className="primary">
            START A PROJECT
          </MagneticButton>
          <MagneticButton href="https://wa.me/917995617374">
            WHATSAPP US
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
