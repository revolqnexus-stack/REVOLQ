'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { label: 'WORK', href: '/work' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
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
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'backdrop-filter 0.4s ease, border-color 0.4s ease',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 300,
            letterSpacing: '0.35em',
            color: 'var(--white)',
            textDecoration: 'none',
          }}
        >
          REVOLQ
        </Link>

        {/* Desktop Center Links */}
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 200,
                letterSpacing: '0.3em',
                color: 'var(--fog)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              data-cursor="VIEW"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <span className="text-mono" style={{ opacity: 0.6 }}>
            +91 79956 17374
          </span>
          <MagneticButton href="/contact" className="primary">
            LET&apos;S TALK
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-nav-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 200,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: mobileOpen ? 0 : 6, transition: 'gap 0.3s' }}>
            <span
              style={{
                display: 'block',
                width: 24,
                height: 1,
                background: 'var(--white)',
                transition: 'transform 0.3s',
                transform: mobileOpen ? 'rotate(45deg) translateY(0.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 1,
                background: 'var(--white)',
                transition: 'transform 0.3s, opacity 0.3s',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 1,
                background: 'var(--white)',
                transition: 'transform 0.3s',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'none',
              }}
            />
          </div>
        </button>
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
              background: 'var(--ink)',
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
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontWeight: 300,
                    color: 'var(--white)',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                  textDecoration: 'none',
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
