'use client'

import { useState } from 'react'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

const serviceOptions = [
  'Web Development',
  'SEO & GBP',
  'AI Automation',
  'Content & Copy',
  'Brand Strategy',
  'Monthly Retainer',
  'Full Package',
  'Other',
]

const budgetOptions = [
  'Under ₹25,000',
  '₹25,000 - ₹55,000',
  '₹55,000 - ₹1,20,000',
  'Above ₹1,20,000',
  'Not sure yet',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll get back to you within 24 hours.')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    background: 'transparent',
    border: '1px solid var(--border)',
    color: 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontWeight: 200,
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(8rem, 15vh, 12rem) clamp(1.5rem, 5vw, 6rem) clamp(2rem, 5vh, 4rem)',
        }}
      >
        <div className="max-container">
          <SplitText text="Let's talk." className="text-h1" tag="h1" />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
            {/* Left: Info */}
            <div>
              <h2 className="text-h2" style={{ marginBottom: '2rem' }}>
                Get in touch
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <span className="text-label" style={{ display: 'block', marginBottom: '0.3rem' }}>PHONE</span>
                  <a href="tel:+917995617374" style={{ color: 'var(--fog)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 200 }}>
                    +91 79956 17374
                  </a>
                  <br />
                  <a href="tel:+917306085895" style={{ color: 'var(--fog)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 200 }}>
                    +91 73060 85895
                  </a>
                </div>
                <div>
                  <span className="text-label" style={{ display: 'block', marginBottom: '0.3rem' }}>LOCATION</span>
                  <span className="text-body">Kerala, India</span>
                </div>
                <div>
                  <span className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>WHATSAPP</span>
                  <MagneticButton href="https://wa.me/917995617374" className="primary">
                    MESSAGE US
                  </MagneticButton>
                </div>
              </div>
              <p className="text-mono" style={{ marginTop: '2rem', opacity: 0.5 }}>
                We reply within 24 hours.
              </p>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  YOUR BUSINESS
                </label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  placeholder="Business name"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  SERVICE
                </label>
                <select
                  required
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <option value="" style={{ background: 'var(--ink)' }}>Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} style={{ background: 'var(--ink)' }}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  BUDGET
                </label>
                <select
                  required
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <option value="" style={{ background: 'var(--ink)' }}>Select budget range</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} style={{ background: 'var(--ink)' }}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  MESSAGE
                </label>
                <textarea
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--rose)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <MagneticButton className="primary" onClick={() => {}}>
                SEND MESSAGE
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
}
