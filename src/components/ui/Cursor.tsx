'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a, button, [data-cursor]')
      if (link) {
        setIsHovering(true)
        const cursorText = link.getAttribute('data-cursor') || ''
        setHoverText(cursorText)
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a, button, [data-cursor]')
      if (link) {
        setIsHovering(false)
        setHoverText('')
      }
    }

    const tick = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        const size = isHovering ? 64 : 40
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`
      }
      requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    const raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      cancelAnimationFrame(raf)
    }
  }, [isHovering])

  return (
    <div id="cursor">
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--rose)',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          borderRadius: '50%',
          border: `1px solid var(--rose)`,
          pointerEvents: 'none',
          zIndex: 9997,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      >
        {hoverText && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              color: 'var(--rose)',
              letterSpacing: '0.1em',
            }}
          >
            {hoverText}
          </span>
        )}
      </div>
    </div>
  )
}
