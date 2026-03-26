'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type AnimationPreset = 'fadeUp' | 'blurIn' | 'slideLeft'

interface SplitTextProps {
  text: string
  tag?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'section' | 'article'
  splitBy?: 'char' | 'word'
  preset?: AnimationPreset
  stagger?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function SplitText({
  text,
  tag: Tag = 'div',
  splitBy = 'word',
  preset = 'fadeUp',
  stagger,
  delay = 0,
  className = '',
  style = {},
}: SplitTextProps) {
  const containerRef = useRef<any>(null)
  
  // Default stagger logic
  const defaultStagger = stagger ?? (splitBy === 'char' ? 0.04 : 0.1)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll('.split-inner')
    if (!spans.length) return

    // Pre-setup starting states based on preset
    if (preset === 'fadeUp') {
      gsap.set(spans, { y: '100%', opacity: 0 })
    } else if (preset === 'blurIn') {
      gsap.set(spans, { filter: 'blur(20px)', opacity: 0 })
    } else if (preset === 'slideLeft') {
      gsap.set(spans, { x: -30, opacity: 0 })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Unobserve to trigger only once
            observer.unobserve(entry.target)

            // Trigger animations
            if (preset === 'fadeUp') {
              gsap.to(spans, {
                y: '0%',
                opacity: 1,
                duration: 0.8,
                stagger: defaultStagger,
                delay,
                ease: 'power3.out',
              })
            } else if (preset === 'blurIn') {
              gsap.to(spans, {
                filter: 'blur(0px)',
                opacity: 1,
                duration: 1.2,
                stagger: defaultStagger,
                delay,
                ease: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
              })
            } else if (preset === 'slideLeft') {
              gsap.to(spans, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: defaultStagger,
                delay,
                ease: 'power3.out',
              })
            }
          }
        })
      },
      { threshold: 0.1 } // trigger when 10% visible
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [preset, defaultStagger, delay])

  const parts = splitBy === 'char' ? text.split('') : text.split(' ')

  return (
    <Tag ref={containerRef} className={className} style={{ ...style }}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="split-outer"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: splitBy === 'word' ? '0.25em' : '0',
          }}
        >
          <span
            className="split-inner"
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
            }}
          >
            {part === ' ' ? '\u00A0' : part}
          </span>
        </span>
      ))}
    </Tag>
  )
}
