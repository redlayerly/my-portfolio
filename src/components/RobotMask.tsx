'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const RobotMask = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const isHoveredRef = useRef(false)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const verticalScannerMask = `linear-gradient(to right, transparent, black 8%, black 92%, transparent)`

  useEffect(() => {
    isHoveredRef.current = isHovered
  }, [isHovered])

  useEffect(() => {
    const proxy = { size: 0, opacity: 0 }
    const solid = maskRef.current

    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 4, paused: true })

    if (solid) {
      tl.current
        .set(proxy, { size: 0, opacity: 0 })
        .to(proxy, {
          opacity: 1,
          size: 450,
          duration: 0.6,
          ease: 'power3.out',
          onUpdate: () => {
            if (solid && !isHoveredRef.current) {
              solid.style.opacity = String(proxy.opacity)
              const size = `${proxy.size}px 100%`
              solid.style.WebkitMaskSize = size
              solid.style.maskSize = size
            }
          },
        })
        .to(proxy, { duration: 1 })
        .to(proxy, {
          opacity: 0,
          size: 0,
          duration: 0.5,
          ease: 'power3.in',
          onUpdate: () => {
            if (solid && !isHoveredRef.current) {
              solid.style.opacity = String(proxy.opacity)
              const size = `${proxy.size}px 100%`
              solid.style.WebkitMaskSize = size
              solid.style.maskSize = size
            }
          },
        })
    }

    tl.current.play()

    return () => {
      tl.current?.kill()
    }
  }, [])

  const handleMouseMove = (clientX: number, clientY: number) => {
    if (!containerRef.current || !maskRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const moveFactor = 4
    const moveX = (x / rect.width - 0.5) * moveFactor
    const moveY = (y / rect.height - 0.5) * moveFactor

    // Parallax on both face and mask images so they stay aligned
    const imgEl = containerRef.current.querySelector('.profile-img') as HTMLElement
    const maskImgEl = containerRef.current.querySelector('.mask-img') as HTMLElement
    if (imgEl) {
      imgEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    }
    if (maskImgEl) {
      maskImgEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    }

    // Move mask scanner to follow cursor
    const maskEl = maskRef.current
    const maskWidth = 450
    const positionStr = `${x - maskWidth / 2}px center`

    maskEl.style.WebkitMaskPosition = positionStr
    maskEl.style.maskPosition = positionStr
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    const solid = maskRef.current
    if (!solid) return

    if (tl.current) tl.current.pause()

    solid.style.WebkitMaskSize = '450px 100%'
    solid.style.maskSize = '450px 100%'
    solid.style.opacity = '1'
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const solid = maskRef.current
    if (!solid) return

    solid.style.opacity = '0'

    setTimeout(() => {
      if (!isHoveredRef.current && solid) {
        solid.style.WebkitMaskPosition = 'calc(50% + 130px) center'
        solid.style.maskPosition = 'calc(50% + 130px) center'
      }
    }, 300)

    if (tl.current) tl.current.restart(true).delay(1)
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto cursor-pointer z-10 overflow-hidden rounded-2xl"
      style={{
        width: '100%',
        maxWidth: '520px',
        aspectRatio: '1 / 1',
        boxShadow: '0 0 40px rgba(0, 240, 255, 0.08), 0 0 80px rgba(0, 240, 255, 0.03)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e) => handleMouseMove(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        handleMouseEnter()
        handleMouseMove(e.touches[0].clientX, e.touches[0].clientY)
      }}
      onTouchMove={(e) => handleMouseMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleMouseLeave}
    >
      {/* Face Image — base layer, fully visible */}
      <img
        src="/images/face-transparent.png"
        alt="AlHussein Alsahati"
        className="profile-img absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-out"
        draggable={false}
        style={{
          objectPosition: 'center center',
          transformOrigin: 'center center',
        }}
      />

      {/* Robot Mask Overlay — reveals via vertical scanner */}
      <div
        ref={maskRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out"
        style={{
          WebkitMaskImage: verticalScannerMask,
          maskImage: verticalScannerMask,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'calc(50% + 130px) center',
          maskPosition: 'calc(50% + 130px) center',
          opacity: 0,
        }}
      >
        <img
          src="/images/mask-transparent.png"
          alt="Cyber Mask Overlay"
          className="mask-img absolute inset-0 w-full h-full object-contain"
          draggable={false}
          style={{
            objectPosition: 'center center',
            mixBlendMode: 'normal',
          }}
        />
      </div>

      {/* Subtle scan line */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%)',
          animation: 'scanLine 5s ease-in-out infinite',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-2 left-2 z-30 w-5 h-5 border-l border-t border-cyan-400/30" />
      <div className="absolute top-2 right-2 z-30 w-5 h-5 border-r border-t border-cyan-400/30" />
      <div className="absolute bottom-2 left-2 z-30 w-5 h-5 border-l border-b border-cyan-400/30" />
      <div className="absolute bottom-2 right-2 z-30 w-5 h-5 border-r border-b border-cyan-400/30" />

      <style jsx>{`
        @keyframes scanLine {
          0% { clip-path: inset(0 0 100% 0); opacity: 0; }
          15% { opacity: 0.25; }
          40% { clip-path: inset(0 0 0 0); opacity: 0.25; }
          60% { clip-path: inset(0 0 0 0); opacity: 0.25; }
          85% { opacity: 0.25; }
          100% { clip-path: inset(100% 0 0 0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default RobotMask
