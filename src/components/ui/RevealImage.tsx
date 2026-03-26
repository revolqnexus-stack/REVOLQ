'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function RevealImage({ src, alt, width, height, fill = false, priority = false, className = '', style }: RevealImageProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.set(outerRef.current, { clipPath: 'inset(100% 0 0 0)' })
    gsap.set(innerRef.current, { scale: 1.15 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: 'top 80%',
        once: true,
      },
    })

    tl.to(outerRef.current, {
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.2,
      ease: 'power4.inOut',
    }).to(
      innerRef.current,
      {
        scale: 1,
        duration: 1.2,
        ease: 'power4.inOut',
      },
      0
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={outerRef} style={{ overflow: 'hidden', position: 'relative', ...style }} className={className}>
      <div ref={innerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        {fill ? (
          <Image src={src} alt={alt} fill priority={priority} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
        ) : (
          <Image src={src} alt={alt} width={width || 1200} height={height || 800} priority={priority} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        )}
      </div>
    </div>
  )
}
