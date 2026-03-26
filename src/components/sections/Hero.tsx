'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import ChatMockup from '@/components/ui/ChatMockup'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

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

  // -- Performance Optimized 3D Tilt --
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / rect.width) - 0.5
    const yPct = (mouseY / rect.height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  // ------------------------------------

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline()
    
    // ... existing GSAP logic ...

    // Eyebrow
    if (eyebrowRef.current) {
      gsap.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 0.85, duration: 0.8, delay: 0.3, ease: 'power2.out' }
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
        { opacity: 0.9, duration: 1, delay: 1.2, ease: 'power2.out' }
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
        paddingTop: '5rem', // Offset for fixed Nav
        paddingLeft: 'var(--hero-padding, clamp(2rem, 8vw, 8rem))',
        paddingRight: 'var(--hero-padding, clamp(2rem, 8vw, 8rem))',
        paddingBottom: '2rem',
        overflow: 'hidden',
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            --hero-padding: 1rem !important;
            padding-top: 6rem !important;
          }
        }
      `}</style>
      <div 
        className="hero-grid"
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          alignItems: 'center',
          gap: '4rem'
        }}
      >
        <style jsx>{`
          @media (max-width: 1023px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .hero-mockup-wrapper {
              display: none !important;
            }
          }
        `}</style>
        
        <div className="hero-text">
          {/* Eyebrow */}
          <div 
            ref={eyebrowRef}
            style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.5em',
              color: 'var(--fg-2)', // Lightened
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
            <MagneticButton
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
            >
              START A PROJECT
            </MagneticButton>
            <MagneticButton
              href="/work"
              style={{
                background: 'transparent',
                color: 'var(--fg-2)',
                border: '1px solid var(--border-hover)', // Stronger resting border
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
            >
              SEE OUR WORK
            </MagneticButton>
          </div>
          
          {/* Bottom left phone */}
          <div
            ref={phoneRef}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--fg-2)', // Lightened
              letterSpacing: '0.15em',
              marginTop: 'var(--sp-5)',
              opacity: 0,
            }}
          >
            · +91 79956 17374
          </div>
        </div>

        {/* Mockup Column */}
        <motion.div 
          className="hero-mockup-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: 50, rotateY: -15, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, rotateY: -5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            perspective: '1000px',
            display: 'flex',
            justifyContent: 'center',
            rotateX,
            rotateY,
          }}
        >
          <ChatMockup />
        </motion.div>
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
            color: 'var(--fg-2)', // Lightened
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  )
}
