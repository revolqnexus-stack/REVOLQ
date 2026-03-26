'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import ClientRoster from '@/components/sections/ClientRoster'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudies from '@/components/sections/CaseStudies'
import Pricing from '@/components/sections/Pricing'
import Team from '@/components/sections/Team'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Hero />
      <Marquee />
      <ClientRoster />
      <Stats />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <Team />
      <FinalCTA />
    </motion.div>
  )
}
