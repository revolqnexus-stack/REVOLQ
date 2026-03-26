'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  
  const [hoverState, setHoverState] = useState<'default' | 'link' | 'button' | 'view' | 'drag'>('default')

  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const afRef = useRef<number>()

  useEffect(() => {
    // Hide on mobile (pointer: coarse)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      
      // Dot follows immediately
      if (dotRef.current) {
        // center the 5x5 dot
        dotRef.current.style.transform = `translate(${e.clientX - 2.5}px, ${e.clientY - 2.5}px)`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      const dragEl = target.closest('[data-cursor="drag"]')
      if (dragEl) {
        setHoverState('drag')
        return
      }
      
      const viewEl = target.closest('img, [data-cursor="view"]')
      if (viewEl) {
        setHoverState('view')
        return
      }

      const buttonEl = target.closest('button, [role="button"]')
      if (buttonEl) {
        setHoverState('button')
        return
      }

      const linkEl = target.closest('a')
      if (linkEl) {
        setHoverState('link')
        return
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, img, [role="button"], [data-cursor]')) {
        setHoverState('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Render loop for ring lerp
    const tick = () => {
      // Lerp ring towards mouse
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1

      if (ringRef.current) {
        // Current state sizes
        let size = 38
        if (hoverState === 'link' || hoverState === 'button') size = 64
        if (hoverState === 'view' || hoverState === 'drag') size = 90
        
        // Center the ring
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`
      }

      afRef.current = requestAnimationFrame(tick)
    }

    afRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (afRef.current) cancelAnimationFrame(afRef.current)
    }
  }, [hoverState])

  // Map state to DOM properties
  const isDefault = hoverState === 'default'
  const isButton = hoverState === 'button'
  const isTextMode = hoverState === 'view' || hoverState === 'drag'
  const textContent = hoverState === 'view' ? 'VIEW' : hoverState === 'drag' ? 'DRAG' : ''
  
  let ringSize = 38
  if (hoverState === 'link' || hoverState === 'button') ringSize = 64
  if (isTextMode) ringSize = 90

  return (
    <div className="cursor-container max-md:hidden">
      {/* DOT */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          opacity: isDefault ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
      />

      {/* RING */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '1px solid rgba(200,169,110,0.35)',
          background: isButton ? 'rgba(200,169,110,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease',
          willChange: 'transform, width, height',
        }}
      >
        <span
          ref={textRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            opacity: isTextMode ? 1 : 0,
            transition: 'opacity 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {textContent}
        </span>
      </div>
    </div>
  )
}
