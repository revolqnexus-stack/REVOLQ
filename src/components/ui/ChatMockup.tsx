'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  { id: 1, type: 'customer', text: 'Hi, I need a facial tomorrow at 4 PM', delay: 1000 },
  { id: 2, type: 'ai', text: 'Perfect! I can book you with Anjali. That\'s ₹1,500. Confirm?', delay: 2500 },
  { id: 3, type: 'customer', text: 'Yes please!', delay: 4000 },
  { id: 4, type: 'ai', text: '✅ Booked! Payment link: pay.revolq.in/xyz', delay: 5500 }
]

export default function ChatMockup() {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([])

  useEffect(() => {
    messages.forEach((msg) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg])
      }, msg.delay)
    })
  }, [])

  return (
    <div 
      className="chat-mockup-container"
      style={{
        width: '100%',
        maxWidth: '380px',
        height: '480px',
        background: 'var(--bg-1)',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div 
        style={{ 
          padding: '1.25rem', 
          background: 'var(--bg-2)', 
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-inv)', fontWeight: 600 }}>R</div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--fg)' }}>REVOLQ AI</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
            Online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        style={{ 
          flex: 1, 
          padding: '1.25rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          overflowY: 'auto' 
        }}
      >
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                maxWidth: '85%',
                padding: '0.75rem 1rem',
                borderRadius: '16px',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                alignSelf: msg.type === 'customer' ? 'flex-end' : 'flex-start',
                background: msg.type === 'customer' ? 'var(--accent)' : 'var(--bg-2)',
                color: msg.type === 'customer' ? 'var(--fg-inv)' : 'var(--fg)',
                borderBottomRightRadius: msg.type === 'customer' ? '4px' : '16px',
                borderBottomLeftRadius: msg.type === 'ai' ? '4px' : '16px',
              }}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Placeholder */}
      <div 
        style={{ 
          padding: '1rem', 
          background: 'var(--bg-1)', 
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <div style={{ flex: 1, height: '36px', background: 'var(--bg-2)', borderRadius: '18px', padding: '0 1rem', display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: 'var(--fg-3)' }}>Type a message...</div>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-inv)' }}>→</div>
      </div>
    </div>
  )
}
