import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudies from '@/components/sections/CaseStudies'
import Pricing from '@/components/sections/Pricing'
import Team from '@/components/sections/Team'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <Team />
      <FinalCTA />
    </>
  )
}
