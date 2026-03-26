'use client'

import { useRef, ReactNode } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  'data-cursor'?: string
}

export default function MagneticButton({ children, className = '', href, onClick, ...props }: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const maxMove = 12
    const moveX = (x / rect.width) * maxMove
    const moveY = (y / rect.height) * maxMove

    gsap.to(btnRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    })
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef as React.RefObject<HTMLAnchorElement & HTMLButtonElement>}
      className={`magnetic-btn ${className}`}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="VIEW"
      {...props}
    >
      {children}
    </Tag>
  )
}
