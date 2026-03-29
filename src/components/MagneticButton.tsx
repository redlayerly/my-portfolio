'use client'

import { useRef, useCallback, ReactNode } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export default function MagneticButton({ children, className = '', strength = 40 }: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btn, {
      x: x * (strength / 100),
      y: y * (strength / 100),
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    const btn = btnRef.current
    if (!btn) return
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [])

  return (
    <div
      ref={btnRef}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
