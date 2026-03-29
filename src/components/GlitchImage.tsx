'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export default function GlitchImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const glitchLayersRef = useRef<HTMLDivElement[]>([])
  const scanLinesRef = useRef<HTMLDivElement>(null)
  const noiseRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const glitchLayers = glitchLayersRef.current
    const mask = maskRef.current

    // Main glitch animation timeline
    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 })

    // Glitch effect sequence
    glitchTl
      .to(glitchLayers, {
        opacity: 0.8,
        x: 'random(-10, 10)',
        y: 'random(-5, 5)',
        duration: 0.1,
        stagger: 0.02,
      })
      .to(glitchLayers, {
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.05,
      })
      .to({}, { duration: 2 }) // Pause

    // Random glitch bursts
    const randomGlitch = () => {
      const delay = gsap.utils.random(1, 4)
      gsap.delayedCall(delay, () => {
        if (!glitchLayers[0]) return
        
        gsap.timeline()
          .to(glitchLayers, {
            opacity: () => gsap.utils.random(0.3, 0.9),
            x: () => `random(-15, 15)`,
            y: () => `random(-8, 8)`,
            skewX: () => gsap.utils.random(-5, 5),
            duration: 0.05,
            stagger: 0.01,
          })
          .to(glitchLayers, {
            opacity: 0,
            x: 0,
            y: 0,
            skewX: 0,
            duration: 0.08,
          })
        
        randomGlitch()
      })
    }
    randomGlitch()

    // Mask appearance animation - Digital face appearing/disappearing
    const maskTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 })
    
    maskTimeline
      .to(mask, {
        opacity: 1,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(mask, {
        opacity: 0.3,
        scale: 0.98,
        duration: 0.1,
      })
      .to(mask, {
        opacity: 1,
        scale: 1.01,
        duration: 0.2,
      })
      .to(mask, {
        opacity: 0,
        scale: 1,
        duration: 0.5,
        delay: 2,
        ease: 'power2.in',
      })

    // Scan line animation
    if (scanLinesRef.current) {
      gsap.to(scanLinesRef.current, {
        y: '100%',
        duration: 0.15,
        repeat: -1,
        ease: 'none',
      })
    }

    // Noise flicker
    if (noiseRef.current) {
      gsap.to(noiseRef.current, {
        opacity: () => gsap.utils.random(0.02, 0.08),
        duration: 0.1,
        repeat: -1,
        repeatRefresh: true,
      })
    }

    // RGB shift effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(glitchLayers[0], {
        x: x * 10,
        y: y * 5,
        opacity: 0.4,
        duration: 0.3,
      })
      gsap.to(glitchLayers[1], {
        x: x * -10,
        y: y * -5,
        opacity: 0.4,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(glitchLayers, {
        x: 0,
        y: 0,
        opacity: 0,
        duration: 0.3,
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      glitchTl.kill()
      maskTimeline.kill()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 blur-2xl opacity-40 animate-pulse" />
      
      {/* Main Image Container */}
      <div 
        ref={imageRef}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/50"
        style={{ 
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)',
        }}
      >
        {/* Base Image */}
        <Image
          src="/profile.png"
          alt="AlHussein Alsahati"
          fill
          className="object-cover"
          priority
        />

        {/* RGB Shift Layers - Red */}
        <div
          ref={el => { if (el) glitchLayersRef.current[0] = el }}
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/profile.png"
            alt=""
            fill
            className="object-cover"
            style={{ 
              filter: 'url(#redChannel)',
              transform: 'translateX(-2px)',
            }}
          />
        </div>

        {/* RGB Shift Layers - Cyan */}
        <div
          ref={el => { if (el) glitchLayersRef.current[1] = el }}
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        >
          <Image
            src="/profile.png"
            alt=""
            fill
            className="object-cover"
            style={{ 
              filter: 'url(#cyanChannel)',
              transform: 'translateX(2px)',
            }}
          />
        </div>

        {/* Digital Mask Overlay */}
        <div
          ref={maskRef}
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(0, 240, 255, 0.1) 20%, 
                transparent 40%,
                rgba(255, 0, 85, 0.1) 60%,
                transparent 80%,
                rgba(139, 92, 246, 0.1) 100%
              )
            `,
            mixBlendMode: 'overlay',
          }}
        >
          {/* Scanning lines */}
          <div 
            ref={scanLinesRef}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: 0, opacity: 0.8 }}
          />
        </div>

        {/* Scan Lines Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)',
          }}
        />

        {/* Noise Texture */}
        <div
          ref={noiseRef}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Digital Grid Mask */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px',
          }}
        />

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-cyan-400 opacity-0"
              style={{
                top: `${20 + i * 30}%`,
                animation: `glitchLine ${2 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
      </div>

      {/* Status Badge */}
      <div className="absolute bottom-4 right-4 bg-gray-900/90 border border-cyan-500/50 rounded-full px-4 py-2 flex items-center gap-2" style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}>
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium">Open to Work</span>
      </div>

      {/* SVG Filters for RGB Shift */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="redChannel">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            />
          </filter>
          <filter id="cyanChannel">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Glitch Line Animation Styles */}
      <style jsx>{`
        @keyframes glitchLine {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%);
          }
          5% {
            opacity: 0.8;
          }
          10% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
