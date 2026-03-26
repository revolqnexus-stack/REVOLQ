'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function SplitText({ text, className = '', delay = 0, tag: Tag = 'div' }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const chars = containerRef.current.querySelectorAll('.split-char')

    gsap.set(chars, { y: '110%' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        once: true,
      },
    })

    tl.to(chars, {
      y: '0%',
      duration: 0.8,
      stagger: 0.022,
      ease: 'power4.out',
      delay,
    })

    return () => {
      tl.kill()
    }
  }, [delay, text])

  const words = text.split(' ')

  return (
    <Tag ref={containerRef as React.RefObject<HTMLElement & HTMLDivElement>} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {word.split('').map((char, ci) => (
            <span
              key={ci}
              style={{ display: 'inline-block', overflow: 'hidden' }}
            >
              <span className="split-char" style={{ display: 'inline-block' }}>
                {char}
              </span>
            </span>
          ))}
          {wi < words.length - 1 && (
            <span style={{ display: 'inline-block', overflow: 'hidden' }}>
              <span className="split-char" style={{ display: 'inline-block' }}>
                &nbsp;
              </span>
            </span>
          )}
        </span>
      ))}
    </Tag>
  )
}
