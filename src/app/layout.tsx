import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, DM_Mono, Archivo_Black, Space_Grotesk } from 'next/font/google'
import './globals.css'
import GlobalEffects from '@/components/GlobalEffects'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'
import Grain from '@/components/ui/Grain'
import ProgressBar from '@/components/ui/ProgressBar'
import Preloader from '@/components/Preloader'
import LenisProvider from '@/lib/lenis'
import GeometricPlexus from '@/components/ui/GeometricPlexus'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REVOLQ — Digital Agency, Kerala',
  description:
    'REVOLQ builds websites, SEO systems, and AI automations for businesses in Kerala and across India.',
  keywords:
    'digital agency Kerala, web development Kerala, SEO agency Kottayam, AI automation India, Next.js agency Kerala, REVOLQ',
  metadataBase: new URL('https://revolq.in'),
  openGraph: {
    title: 'REVOLQ — Digital Agency, Kerala',
    description:
      'REVOLQ builds websites, SEO systems, and AI automations for businesses in Kerala and across India.',
    url: 'https://revolq.in',
    siteName: 'REVOLQ',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REVOLQ Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVOLQ — Digital Agency, Kerala',
    description:
      'REVOLQ builds websites, SEO systems, and AI automations for businesses in Kerala and across India.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${dmMono.variable} ${archivoBlack.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        <LenisProvider>
          <Preloader />
          <GlobalEffects />
          <GeometricPlexus />
          <Grain />
          <ProgressBar />
          <Nav />
          <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
