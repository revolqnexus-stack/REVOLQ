import Link from 'next/link'

const navigateLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Web Development',
  'SEO & GBP',
  'AI Automation',
  'Content & Copy',
  'Brand Strategy',
  'Monthly Retainer',
]

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 6rem) 2rem',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Huge decorative REVOLQ */}
      <div
        style={{
          position: 'absolute',
          top: '-3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-heading)',
          fontSize: '15vw',
          fontWeight: 300,
          color: 'var(--white)',
          opacity: 0.06,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        REVOLQ
      </div>

      {/* 4-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
        className="footer-grid"
      >
        {/* Navigate */}
        <div>
          <h4 className="text-label" style={{ marginBottom: '1.5rem' }}>
            Navigate
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {navigateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--fog)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  transition: 'color 0.3s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-label" style={{ marginBottom: '1.5rem' }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {serviceLinks.map((service) => (
              <span
                key={service}
                style={{
                  color: 'var(--fog)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-label" style={{ marginBottom: '1.5rem' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <a href="tel:+917995617374" style={{ color: 'var(--fog)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 200 }}>
              +91 79956 17374
            </a>
            <a href="tel:+917306085895" style={{ color: 'var(--fog)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 200 }}>
              +91 73060 85895
            </a>
            <span style={{ color: 'var(--fog)', fontSize: '0.85rem', fontWeight: 200 }}>
              Kerala, India
            </span>
            <a
              href="https://wa.me/917995617374"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--rose)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300 }}
            >
              WhatsApp →
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-label" style={{ marginBottom: '1.5rem' }}>
            Legal
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ color: 'var(--fog)', fontSize: '0.85rem', fontWeight: 200 }}>
              Privacy Policy
            </span>
            <span style={{ color: 'var(--fog)', fontSize: '0.85rem', fontWeight: 200 }}>
              Terms
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '4rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span className="text-mono" style={{ opacity: 0.5 }}>
          © 2026 REVOLQ. All rights reserved.
        </span>
        <span className="text-mono" style={{ opacity: 0.5 }}>
          Designed & built by REVOLQ
        </span>
      </div>

      
    </footer>
  )
}
