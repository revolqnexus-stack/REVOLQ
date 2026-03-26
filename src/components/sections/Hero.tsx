'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current.querySelector('.scroll-line'), {
        scaleY: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(6rem, 15vh, 10rem) clamp(1.5rem, 5vw, 6rem)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', width: '100%' }}>
        {/* Top label */}
        <div className="text-label" style={{ marginBottom: '2rem' }}>
          KERALA · INDIA · DIGITAL AGENCY
        </div>

        {/* Headline */}
        <div style={{ 
          marginBottom: '2rem', 
          fontSize: 'clamp(5rem, 14vw, 13rem)', 
          lineHeight: 0.9, 
          letterSpacing: '-0.04em',
          fontWeight: 300,
          fontFamily: 'var(--font-heading)'
        }}>
          <SplitText
            text="We build"
            tag="h1"
          />
          <SplitText
            text="digital systems"
            style={{ fontStyle: 'italic', color: 'var(--rose)' }}
            delay={0.2}
            tag="h1"
          />
          <SplitText
            text="that work."
            delay={0.4}
            tag="h1"
          />
        </div>

        {/* Sub */}
        <p
          className="text-body"
          style={{
            maxWidth: 420,
            marginBottom: '3rem',
            opacity: 0.8,
          }}
        >
          Web development, SEO, AI automation, and brand
          strategy for businesses that refuse to be invisible.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <MagneticButton href="/contact" className="primary">
            START A PROJECT
          </MagneticButton>
          <MagneticButton href="/work">
            SEE OUR WORK
          </MagneticButton>
        </div>
      </div>

      {/* Bottom left phone */}
      <div
        ref={phoneRef}
        className="text-mono"
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          opacity: 0.5,
          zIndex: 2,
        }}
      >
        +91 79956 17374
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
        }}
      >
        <span className="text-label" style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}>
          SCROLL
        </span>
        <div
          className="scroll-line"
          style={{
            width: 1,
            height: 40,
            background: 'var(--rose)',
            transformOrigin: 'top',
            transform: 'scaleY(0)',
          }}
        />
      </div>
    </section>
  )
}
