'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { playThud, playChime, playWhoosh } from '@/lib/sounds'

const LETTERS = ['R', 'E', 'V', 'O', 'L', 'Q']

export default function Preloader() {
  const [show, setShow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Elements for GSAP
  const topHalfRef = useRef<HTMLDivElement>(null)
  const bottomHalfRef = useRef<HTMLDivElement>(null)
  const topLettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const bottomLettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Mobile skip
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      sessionStorage.setItem('revolq_loaded', 'true')
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      sessionStorage.setItem('revolq_loaded', 'true')
      return
    }

    const hasLoaded = sessionStorage.getItem('revolq_loaded')
    if (hasLoaded) return

    setShow(true)

    try {
      audioCtxRef.current = new AudioContext()
    } catch {}

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('revolq_loaded', 'true')
        setShow(false)
      }
    })

    // STAGE 1 (0ms -> 400ms): Letters stagger in
    if (audioCtxRef.current) playThud(audioCtxRef.current)

    // We animate both top and bottom halves simultaneously to keep them aligned
    const topLetters = topLettersRef.current.filter(Boolean)
    const bottomLetters = bottomLettersRef.current.filter(Boolean)

    tl.fromTo(
      [topLetters, bottomLetters],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
      0 // Start at 0s
    )

    // STAGE 2 (400ms -> 1200ms): Sweep line and progress counter
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
      '+=0' // starts exactly after stage 1 ends (at 0.4s)
    )

    // Progress counter (starts at 0.4s, goes for 0.8s)
    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 0.8,
        ease: 'power1.inOut',
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(this.targets()[0].val).toString().padStart(2, '0')
          }
        }
      },
      0.4
    )

    // STAGE 3 (1200ms -> 2000ms): The Split
    tl.add(() => {
      if (audioCtxRef.current) playWhoosh(audioCtxRef.current)
    }, 1.2)

    // Top half flies up
    tl.to(
      topHalfRef.current,
      { y: '-50vh', duration: 0.6, ease: 'power3.in' },
      1.2
    )

    // Bottom half + line flies down
    tl.to(
      bottomHalfRef.current,
      { y: '50vh', duration: 0.6, ease: 'power3.in' },
      1.2
    )
    tl.to(
      lineRef.current,
      { y: '50vh', opacity: 0, duration: 0.6, ease: 'power3.in' },
      1.2
    )

    // Background fades and actual content clips in
    tl.to(
      containerRef.current,
      { opacity: 0, duration: 0.4, ease: 'power2.inOut' },
      1.6 // End of the 2.0s sequence
    )

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [])

  // Lock scroll while active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [show])

  if (!show) return null

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          userSelect: 'none',
        }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          {/* TOP HALF (Clipped) */}
          <div 
            ref={topHalfRef}
            style={{
              position: 'absolute',
              display: 'flex',
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            }}
          >
            {LETTERS.map((char, i) => (
              <span
                key={`top-${i}`}
                ref={(el) => { topLettersRef.current[i] = el }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  letterSpacing: '0.5em',
                  color: 'var(--fg)',
                  opacity: 0, 
                  display: 'inline-block'
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* BOTTOM HALF (Clipped) */}
          <div 
            ref={bottomHalfRef}
            style={{
              position: 'relative', // this one provides the block layout height
              display: 'flex',
              clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            }}
          >
            {LETTERS.map((char, i) => (
              <span
                key={`bot-${i}`}
                ref={(el) => { bottomLettersRef.current[i] = el }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  letterSpacing: '0.5em',
                  color: 'var(--fg)',
                  opacity: 0,
                  display: 'inline-block'
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Sweep Line positioned absolutely under the text block */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              maxWidth: '600px',
              height: '1px',
              background: 'var(--accent)',
              transformOrigin: 'left',
              scaleX: 0, // setup for GSAP
            }}
          />
        </div>

        {/* Progress Counter (bottom right corner) */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--fg-3)',
          }}
        >
          <span ref={counterRef}>00</span>%
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
