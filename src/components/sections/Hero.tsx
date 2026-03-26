'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline()

    // Eyebrow
    if (eyebrowRef.current) {
      gsap.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 0.5, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      )
    }

    // Headline lines
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean)
    if (lines.length) {
      gsap.fromTo(
        lines,
        { y: 120, opacity: 0, filter: 'blur(20px)' },
        { 
          y: 0, 
          opacity: 1, 
          filter: 'blur(0px)', 
          duration: 1.4, 
          stagger: 0.12, 
          delay: 0.5, 
          ease: 'cubic-bezier(0.0, 0.0, 0.2, 1)' 
        }
      )
    }

    // Subhead
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { opacity: 0 },
        { opacity: 0.65, duration: 1, delay: 1.2, ease: 'power2.out' }
      )
    }

    // Buttons & Phone
    if (btnsRef.current || phoneRef.current) {
      gsap.fromTo(
        [btnsRef.current, phoneRef.current].filter(Boolean),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.5, stagger: 0.1, ease: 'power2.out' }
      )
    }

    // Scroll indicator pulsing line
    if (scrollRef.current) {
      gsap.to(scrollRef.current.querySelector('.scroll-line'), {
        scaleY: 1,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'top',
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 'clamp(2rem, 8vw, 8rem)',
        paddingRight: 'clamp(2rem, 8vw, 8rem)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }}>
        
        {/* Eyebrow */}
        <div 
          ref={eyebrowRef}
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.5em',
            color: 'var(--fg-3)',
            textTransform: 'uppercase',
            marginBottom: 'var(--sp-6)',
            opacity: 0, // JS will handle
          }}
        >
          KERALA · INDIA · DIGITAL AGENCY
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 'var(--sp-7)' }}>
          <div ref={line1Ref} style={{ overflow: 'hidden', paddingBottom: '0.1em', marginTop: '-0.1em' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--fg)'
            }}>
              We build
            </h1>
          </div>
          
          <div ref={line2Ref} style={{ overflow: 'hidden', paddingBottom: '0.1em', marginTop: '-0.1em' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontStyle: 'italic',
              color: 'var(--accent)'
            }}>
              digital systems
            </h1>
          </div>
          
          <div ref={line3Ref} style={{ overflow: 'hidden', paddingBottom: '0.1em', marginTop: '-0.1em' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--fg)'
            }}>
              that work.
            </h1>
          </div>
        </div>

        {/* Sub */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 'var(--text-base)',
            color: 'var(--fg-2)',
            lineHeight: 1.8,
            letterSpacing: '0.04em',
            maxWidth: '420px',
            marginBottom: 'var(--sp-6)',
            opacity: 0,
          }}
        >
          Web development, SEO, AI automation, and brand
          strategy for businesses that refuse to be invisible.
        </p>

        {/* Buttons */}
        <div ref={btnsRef} style={{ display: 'flex', gap: 'var(--sp-5)', flexWrap: 'wrap', opacity: 0 }}>
          <a
            href="/contact"
            style={{
              background: 'var(--accent)',
              color: 'var(--fg-inv)',
              border: '1px solid var(--accent)',
              padding: '0.85rem 2.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderRadius: '0',
              transition: 'all var(--dur-base) var(--ease)',
              textDecoration: 'none',
              display: 'inline-block'
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
            href="/work"
            style={{
              background: 'transparent',
              color: 'var(--fg-2)',
              border: '1px solid var(--border)',
              padding: '0.85rem 2.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderRadius: '0',
              transition: 'all var(--dur-base) var(--ease)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--fg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--fg-2)'
            }}
          >
            SEE OUR WORK
          </a>
        </div>
        
        {/* Bottom left phone */}
        <div
          ref={phoneRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--fg-3)',
            letterSpacing: '0.15em',
            marginTop: 'var(--sp-5)',
            opacity: 0,
          }}
        >
          · +91 79956 17374
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 'clamp(2rem, 8vw, 8rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--sp-2)',
          zIndex: 2,
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            transform: 'scaleY(0)',
          }}
        />
        <span 
          style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)', 
            letterSpacing: '0.35em',
            color: 'var(--fg-3)',
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  )
}
