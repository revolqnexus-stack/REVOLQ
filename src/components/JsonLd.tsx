export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'REVOLQ',
    description:
      'REVOLQ builds websites, SEO systems, and AI automations for businesses in Kerala and across India.',
    url: 'https://revolq.in',
    telephone: '+917995617374',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Ajmal Mullapati',
        jobTitle: 'Co-founder',
      },
      {
        '@type': 'Person',
        name: 'Eathen Baby',
        jobTitle: 'Co-founder',
      },
    ],
    sameAs: ['https://wa.me/917995617374'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
