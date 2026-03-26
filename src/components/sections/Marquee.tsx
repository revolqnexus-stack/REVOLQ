'use client'

const track1 = 'Web Development ◆ SEO ◆ AI Automation ◆ GBP Management ◆ Brand Strategy ◆ WhatsApp AI ◆ n8n Workflows ◆ Next.js ◆ Kerala ◆ '
const track2 = 'NIXTUDIO ◆ Pala ◆ Kottayam ◆ Kerala ◆ India ◆ Premium Digital ◆ Built Different ◆ REVOLQ ◆ '

export default function Marquee() {
  return (
    <section
      style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Track 1 → */}
      <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
        <div className="marquee-track marquee-left">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                opacity: 0.15,
                paddingRight: '2rem',
                textTransform: 'uppercase',
              }}
            >
              {track1}
            </span>
          ))}
        </div>
      </div>

      {/* Track 2 ← */}
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track marquee-right">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                opacity: 0.1,
                paddingRight: '2rem',
                textTransform: 'uppercase',
              }}
            >
              {track2}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
