import { Metadata } from 'next'
import SplitText from '@/components/ui/SplitText'
import Pricing from '@/components/sections/Pricing'
import MagneticButton from '@/components/ui/MagneticButton'
import { Code, Search, Cpu, PenLine, Layers, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — REVOLQ',
  description: 'Web development, SEO, AI automation, content, brand strategy, and monthly retainers. Every service fully explained.',
}

const services = [
  {
    icon: Code,
    title: 'WEB DEVELOPMENT',
    desc: 'Next.js websites engineered to rank, convert, and scale. Not templates. Not themes. Systems.',
    deliverables: ['Custom Next.js website', 'TypeScript codebase', 'Vercel deployment', 'Mobile responsive', 'SEO-first architecture', 'Analytics setup'],
    timeline: '2-4 weeks',
    starting: '₹25,000+',
  },
  {
    icon: Search,
    title: 'SEO & GBP',
    desc: 'Google visibility for businesses that deserve to be found. Local SEO, Search Console, structured data, monthly ranking reports.',
    deliverables: ['Technical SEO audit', 'Google Business Profile setup', 'Structured data / Schema', 'Search Console integration', 'Sitemap + robots.txt', 'Monthly ranking reports'],
    timeline: 'Ongoing',
    starting: '₹15,000+',
  },
  {
    icon: Cpu,
    title: 'AI AUTOMATION',
    desc: 'WhatsApp agents that reply in your voice. n8n workflows that run while you sleep. Your business, automated.',
    deliverables: ['WhatsApp AI agent', 'Custom knowledge base', 'n8n workflow automation', 'Webhook integrations', 'Auto-responses', 'Analytics dashboard'],
    timeline: '1-3 weeks',
    starting: '₹40,000+',
  },
  {
    icon: PenLine,
    title: 'CONTENT & COPY',
    desc: 'Words that convert. Descriptions that rank. Copy that makes visitors become clients.',
    deliverables: ['Website copy', 'SEO-optimised content', 'Product descriptions', 'OG tags + meta', 'Brand voice guide', 'Social media templates'],
    timeline: '1-2 weeks',
    starting: '₹10,000+',
  },
  {
    icon: Layers,
    title: 'BRAND STRATEGY',
    desc: 'Positioning. Identity. The story your business tells before anyone speaks.',
    deliverables: ['Brand positioning', 'Visual identity system', 'Color palette + typography', 'Logo guidance', 'Brand guidelines doc', 'Competitor analysis'],
    timeline: '2-3 weeks',
    starting: '₹20,000+',
  },
  {
    icon: RefreshCw,
    title: 'MONTHLY RETAINER',
    desc: 'We become your digital team. GBP management, content, SEO monitoring, AI maintenance — all handled. Every month.',
    deliverables: ['GBP management', 'Content calendar', 'SEO monitoring', 'AI system maintenance', 'Monthly reports', 'Priority support'],
    timeline: 'Monthly',
    starting: '₹15,000/mo',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(8rem, 15vh, 12rem) clamp(1.5rem, 5vw, 6rem) clamp(4rem, 8vh, 6rem)',
        }}
      >
        <div className="max-container">
          <SplitText text="Every service." className="text-h1" tag="h1" />
          <SplitText text="Fully explained." className="text-h1" delay={0.2} tag="h1" />
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <section
            key={service.title}
            className="section-padding"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className="max-container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="service-detail-grid">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Icon size={24} strokeWidth={1} color="var(--rose)" />
                    <span className="text-mono" style={{ opacity: 0.4 }}>0{i + 1}</span>
                  </div>
                  <SplitText text={service.title} className="text-h2" tag="h2" />
                  <p className="text-body" style={{ marginTop: '1.5rem', maxWidth: 450 }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <div>
                      <span className="text-label" style={{ display: 'block', marginBottom: '0.3rem' }}>TIMELINE</span>
                      <span className="text-mono">{service.timeline}</span>
                    </div>
                    <div>
                      <span className="text-label" style={{ display: 'block', marginBottom: '0.3rem' }}>STARTING AT</span>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)' }}>
                        {service.starting}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-label" style={{ marginBottom: '1rem' }}>DELIVERABLES</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        style={{
                          padding: '0.7rem 0',
                          borderBottom: '1px solid var(--dim)',
                          color: 'var(--fog)',
                          fontSize: '0.85rem',
                          fontWeight: 200,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ color: 'var(--rose)', fontSize: '0.8rem' }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Pricing */}
      <Pricing />

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <SplitText text="Let's build your system." className="text-h2" tag="h2" />
        <div style={{ marginTop: '2rem' }}>
          <MagneticButton href="/contact" className="primary">START A PROJECT</MagneticButton>
        </div>
      </section>

      
    </>
  )
}
