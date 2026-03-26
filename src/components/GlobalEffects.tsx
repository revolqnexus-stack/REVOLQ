'use client'

import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/components/ui/Cursor'), { ssr: false })
const AuroraBackground = dynamic(() => import('@/components/three/AuroraBackground'), { ssr: false })

export default function GlobalEffects() {
  return (
    <>
      <AuroraBackground />
      <Cursor />
    </>
  )
}
