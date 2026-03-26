'use client'

import { useEffect, useState } from 'react'

export default function Grain() {
  const [turbulence, setTurbulence] = useState(0.85)

  useEffect(() => {
    // Refresh the noise to create an animated film grain effect
    const interval = setInterval(() => {
      setTurbulence(Math.random() * 0.03 + 0.82)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        pointerEvents: 'none',
        opacity: 0.028,
        width: '100vw',
        height: '100vh',
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100%',
          filter: 'url(#grain)',
        }}
        preserveAspectRatio="none"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={turbulence}
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
