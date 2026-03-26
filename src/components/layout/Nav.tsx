'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'WORK', href: '/work' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial scroll
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.8rem clamp(2rem, 6vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 500ms var(--ease)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          background: scrolled ? 'rgba(8,7,7,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: 'var(--fg)',
            textDecoration: 'none',
          }}
        >
          REVOLQ
        </Link>

        {/* Desktop Nav Links & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group"
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 200,
                  letterSpacing: '0.2em',
                  color: isActive ? 'var(--fg)' : 'var(--fg-3)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 200ms var(--ease)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--fg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? 'var(--fg)' : 'var(--fg-3)'
                }}
              >
                {link.label}
                {/* Active Indicator Underline */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-0.3rem',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'var(--accent)',
                    transformOrigin: 'left',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 300ms var(--ease)',
                  }}
                />
              </Link>
            )
          })}

          <a
            href="/contact"
            style={{
              background: 'transparent',
              color: 'var(--fg-2)',
              border: '1px solid var(--border)',
              padding: '0.85rem 2.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderRadius: '0',
              transition: 'all 300ms var(--ease)',
              textDecoration: 'none',
              marginLeft: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--fg-2)'
            }}
          >
            LET&apos;S TALK
          </a>
        </div>

        {/* Mobile Hamburger Layout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-nav-btn">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 200,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: mobileOpen ? 0 : 6, transition: 'gap 300ms var(--ease)' }}>
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 1,
                  background: 'var(--fg)',
                  transition: 'transform 300ms var(--ease)',
                  transform: mobileOpen ? 'rotate(45deg) translateY(0.5px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 1,
                  background: 'var(--fg)',
                  transition: 'transform 300ms var(--ease), opacity 300ms var(--ease)',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 1,
                  background: 'var(--fg)',
                  transition: 'transform 300ms var(--ease)',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--fg)',
                    textDecoration: 'none',
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                CONTACT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
