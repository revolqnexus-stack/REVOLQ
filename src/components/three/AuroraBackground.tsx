'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex noise helpers
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
  
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.15;
    
    // Mouse-reactive UV offset
    vec2 mouseOffset = (uMouse - 0.5) * 0.08;
    uv += mouseOffset;
    
    // 4-layer simplex noise
    float n1 = snoise(vec3(uv * 1.5, t)) * 0.5;
    float n2 = snoise(vec3(uv * 3.0 + 10.0, t * 1.3)) * 0.25;
    float n3 = snoise(vec3(uv * 5.0 + 20.0, t * 0.8)) * 0.125;
    float n4 = snoise(vec3(uv * 8.0 + 30.0, t * 1.6)) * 0.0625;
    float noise = n1 + n2 + n3 + n4;
    
    // Scroll-reactive color palette shift
    float scrollShift = uScroll * 0.3;
    
    // 5 color zones
    vec3 colA = vec3(0.031, 0.027, 0.027); // matches --bg
    vec3 colB = vec3(0.20, 0.12, 0.08);    // warm brown-red
    vec3 colC = vec3(0.35, 0.25, 0.10);    // amber glow
    vec3 colD = vec3(0.08, 0.06, 0.10);    // deep violet shadow
    vec3 colE = vec3(0.031, 0.027, 0.027); // matches --bg
    
    float colorPos = noise * 0.5 + 0.5 + scrollShift;
    colorPos = mod(colorPos, 1.0);
    
    vec3 color;
    if (colorPos < 0.25) {
      color = mix(colA, colB, colorPos * 4.0);
    } else if (colorPos < 0.5) {
      color = mix(colB, colC, (colorPos - 0.25) * 4.0);
    } else if (colorPos < 0.75) {
      color = mix(colC, colD, (colorPos - 0.5) * 4.0);
    } else {
      color = mix(colD, colE, (colorPos - 0.75) * 4.0);
    }
    
    // Scale down the brightness significantly
    color *= 0.18;
    
    // Glowing horizontal band that moves with scroll
    float band = smoothstep(0.05, 0.0, abs(uv.y - mod(uScroll * 0.5 + t * 0.3, 1.4) + 0.2)) * 0.12;
    color += vec3(band * 0.77, band * 0.60, band * 0.60);
    
    // Subtle grid lines
    float gridX = smoothstep(0.98, 1.0, sin(uv.x * 40.0 + t) * 0.5 + 0.5) * 0.02;
    float gridY = smoothstep(0.98, 1.0, sin(uv.y * 40.0 + t * 0.7) * 0.5 + 0.5) * 0.02;
    color += vec3(gridX + gridY) * vec3(0.42, 0.37, 0.66);
    
    // Vignette
    float vig = 1.0 - smoothstep(0.3, 1.2, length(vUv - 0.5) * 1.4);
    color *= vig;
    
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const scrollRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    containerRef.current.appendChild(renderer.domElement)

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Floating orbs
    const orbGeometry = new THREE.SphereGeometry(0.3, 16, 16)
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8a96e,
      transparent: true,
      opacity: 0.06,
    })
    const orbs: THREE.Mesh[] = []
    for (let i = 0; i < 3; i++) {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial.clone())
      orb.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        -2
      )
      scene.add(orb)
      orbs.push(orb)
    }

    // Particles
    const particleCount = 180
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xede8e3,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Create perspective camera for particles
    const perspCam = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
    perspCam.position.z = 3

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight,
      }
    }

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
      perspCam.aspect = window.innerWidth / window.innerHeight
      perspCam.updateProjectionMatrix()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.uTime.value += 0.016
      uniforms.uScroll.value = scrollRef.current
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y)

      // Animate orbs
      orbs.forEach((orb, i) => {
        orb.position.x += Math.sin(uniforms.uTime.value * 0.3 + i * 2) * 0.002
        orb.position.y += Math.cos(uniforms.uTime.value * 0.2 + i * 3) * 0.002
      })

      // Camera parallax
      perspCam.position.x += (mouseRef.current.x * 0.5 - 0.25 - perspCam.position.x) * 0.02
      perspCam.position.y += (mouseRef.current.y * 0.5 - 0.25 - perspCam.position.y) * 0.02

      // Render fullscreen shader with ortho cam
      renderer.autoClear = true
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      orbGeometry.dispose()
      particleGeometry.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="aurora-canvas"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
      }}
    />
  )
}
