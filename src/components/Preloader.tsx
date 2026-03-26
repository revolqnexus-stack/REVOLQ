'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { playThud, playGlitch, playChime, playWhoosh, playLetterThud } from '@/lib/sounds'

const LETTERS = ['R', 'E', 'V', 'O', 'L', 'Q']

export default function Preloader() {
  const [show, setShow] = useState(false)
  const [phase, setPhase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const lineRef = useRef<SVGLineElement>(null)
  const subTextRef = useRef<HTMLDivElement>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check sessionStorage
    const hasLoaded = sessionStorage.getItem('revolq_loaded')
    if (hasLoaded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false)
      return
    }

    setShow(true)

    // Create AudioContext
    try {
      audioCtxRef.current = new AudioContext()
    } catch {
      // Audio not supported
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Skip all animations
      setTimeout(() => {
        sessionStorage.setItem('revolq_loaded', 'true')
        setShow(false)
      }, 500)
      return
    }

    // Phase 1: Blackout (0ms to 800ms)
    setPhase(1)
    if (audioCtxRef.current) {
      playThud(audioCtxRef.current)
    }

    // Phase 2: Glitch burst (800ms)
    setTimeout(() => {
      setPhase(2)
      // Play 3 rapid glitch clicks
      if (audioCtxRef.current) {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            if (audioCtxRef.current) playGlitch(audioCtxRef.current)
          }, i * 80)
        }
      }

      // Shake the R letter
      const rLetter = lettersRef.current[0]
      if (rLetter) {
        gsap.to(rLetter, {
          x: '+=8',
          y: '+=4',
          duration: 0.05,
          repeat: 6,
          yoyo: true,
          ease: 'none',
        })
      }
    }, 800)

    // Phase 3: Letter build (1400ms)
    setTimeout(() => {
      setPhase(3)
      lettersRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          {
            y: -80,
            opacity: 0,
            filter: 'blur(20px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            delay: i * 0.12,
            ease: 'power3.out',
          }
        )
        // Play letter thud
        if (audioCtxRef.current) {
          setTimeout(() => {
            if (audioCtxRef.current) playLetterThud(audioCtxRef.current, i)
          }, i * 120)
        }
      })
    }, 1400)

    // Phase 4: Breathe (2600ms)
    setTimeout(() => {
      setPhase(4)

      // Breathe animation
      const letterContainer = containerRef.current?.querySelector('.preloader-letters')
      if (letterContainer) {
        gsap.to(letterContainer, {
          scale: 1.02,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        })
      }

      // Line draw
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' }
        )
      }

      // Sub text fade
      if (subTextRef.current) {
        gsap.fromTo(
          subTextRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, delay: 0.2 }
        )
      }

      // Chime sound
      if (audioCtxRef.current) {
        playChime(audioCtxRef.current)
      }
    }, 2600)

    // Phase 5: Explosion exit (3200ms)
    setTimeout(() => {
      setPhase(5)

      const letterContainer = containerRef.current?.querySelector('.preloader-letters')
      if (letterContainer) {
        gsap.to(letterContainer, {
          scale: 8,
          opacity: 0,
          duration: 0.6,
          ease: 'power4.in',
        })
      }

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          clipPath: 'circle(150% at 50% 50%)',
          duration: 0.8,
          ease: 'power3.inOut',
        })
      }

      if (audioCtxRef.current) {
        playWhoosh(audioCtxRef.current)
      }

      setTimeout(() => {
        sessionStorage.setItem('revolq_loaded', 'true')
        setShow(false)
      }, 900)
    }, 3200)
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            ref={containerRef}
            className="preloader"
            style={{
              clipPath: phase >= 5 ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
            }}
          >
            {/* Phase 2: Flash effects */}
            {phase === 2 && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  animation: 'flicker 0.15s steps(3) 3',
                }}
              />
            )}

            {/* Letters */}
            <div className="preloader-letters" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {LETTERS.map((letter, i) => (
                <span
                  key={letter}
                  ref={(el) => { lettersRef.current[i] = el }}
                  className="preloader-letter"
                  style={{
                    opacity: phase < 3 ? (phase === 2 && i === 0 ? 1 : 0) : 1,
                    fontSize: phase === 2 && i === 0 ? '30vw' : '18vw',
                    textShadow:
                      phase === 2 && i === 0
                        ? '-4px 0 rgba(255,0,0,0.7), 4px 0 rgba(0,255,255,0.7)'
                        : phase === 3
                          ? `-${Math.max(0, 3 - i)}px 0 rgba(255,0,0,0.3), ${Math.max(0, 3 - i)}px 0 rgba(0,255,255,0.3)`
                          : 'none',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Phase 4: Line and subtitle */}
            {phase >= 4 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '1rem',
                }}
              >
                <svg width="40vw" height="2" viewBox="0 0 100 2" style={{ maxWidth: '500px' }}>
                  <line
                    ref={lineRef}
                    x1="0"
                    y1="1"
                    x2="100"
                    y2="1"
                    stroke="var(--rose)"
                    strokeWidth="0.5"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    pathLength="1"
                  />
                </svg>
                <div
                  ref={subTextRef}
                  className="text-label"
                  style={{
                    marginTop: '1rem',
                    opacity: 0,
                    letterSpacing: '0.5em',
                  }}
                >
                  DIGITAL AGENCY · KERALA · INDIA
                </div>
              </div>
            )}
          </div>

          
        </motion.div>
      )}
    </AnimatePresence>
  )
}
