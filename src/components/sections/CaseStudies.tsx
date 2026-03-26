'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Parallax logic
    if (sectionRef.current && imageRef.current && contentRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })

      // Image slowly zooms
      tl.fromTo(
        imageRef.current,
        { scale: 1.0 },
        { scale: 1.08, ease: 'none' },
        0
      )

      // Content translates slightly upward
      tl.fromTo(
        contentRef.current,
        { y: 0 },
        { y: -30, ease: 'none' },
        0
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="work"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '800px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Image Container */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <Image
          ref={imageRef}
          src="/images/nixtudio.png"
          alt="Nixtudio Bridal Studio Case Study"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
        {/* Gradient Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(8,7,7,0.95) 40%, rgba(8,7,7,0.3) 100%)',
          }}
        />
      </div>

      {/* Foreground Content */}
      <div 
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: 'clamp(3rem, 8vw, 8rem)',
        }}
      >
        <div style={{ position: 'relative', maxWidth: '800px' }}>
          {/* Project Number (Background) */}
          <div 
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '-1rem',
              fontFamily: 'var(--font-display)',
              fontSize: '12rem',
              fontWeight: 300,
              color: 'var(--fg)',
              opacity: 0.04,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            01
          </div>

          <div style={{ position: 'relative', zIndex: 3 }}>
            {/* Category */}
            <h4 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}
            >
              BRIDAL STUDIO · PALA, KERALA · 2025
            </h4>

            {/* Title */}
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 8vw, 8rem)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'var(--fg)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              NIXTUDIO
            </h2>

            {/* Subtitle */}
            <h3 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--fg-2)',
                marginBottom: 'var(--sp-5)',
              }}
            >
              by Nikita Liby
            </h3>

            {/* Description */}
            <p 
              style={{
                maxWidth: '380px',
                fontSize: 'var(--text-base)',
                color: 'var(--fg-2)',
                opacity: 0.7,
                marginBottom: 'var(--sp-8)',
                lineHeight: 1.75,
              }}
            >
              A premium digital gateway architected from the ground up to establish regional dominance in Kerala&apos;s luxury bridal sector. Zero compromises.
            </p>

            {/* Stats */}
            <div 
              style={{
                display: 'flex',
                gap: 'clamp(2rem, 4vw, 4rem)',
                marginBottom: 'var(--sp-8)',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>
                  464
                </div>
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: '0.5rem' }}>
                  REVIEWS
                </div>
              </div>
              
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>
                  4.9★
                </div>
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: '0.5rem' }}>
                  RATING
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>
                  #1
                </div>
                <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: '0.5rem' }}>
                  RANKING
                </div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="https://nixtudio.in"
              target="_blank"
              rel="noreferrer"
              className="case-study-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--fg-2)',
                textDecoration: 'none',
                transition: 'color 300ms var(--ease)',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
              data-cursor="VIEW"
            >
              VIEW CASE STUDY ↗
              <span 
                className="underline-sweep"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'var(--accent)',
                  transformOrigin: 'left',
                  transform: 'scaleX(0)',
                  transition: 'transform 300ms var(--ease)',
                }}
              />
              <style jsx>{`
                .case-study-link:hover .underline-sweep {
                  transform: scaleX(1) !important;
                }
              `}</style>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
