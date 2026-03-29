'use client'

import { useEffect, useRef } from 'react'

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Hide on mobile
    if (window.innerWidth < 768) {
      cursor.style.display = 'none'
      return
    }

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1
      if (cursor) {
        cursor.style.left = `${cursorX}px`
        cursor.style.top = `${cursorY}px`
      }
      requestAnimationFrame(animate)
    }

    // Scale on hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)'
        cursor.style.borderColor = 'rgba(255, 0, 85, 0.8)'
        cursor.style.boxShadow = '0 0 20px rgba(255, 0, 85, 0.3), inset 0 0 20px rgba(255, 0, 85, 0.1)'
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'
        cursor.style.borderColor = 'rgba(0, 240, 255, 0.5)'
        cursor.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 15px rgba(0, 240, 255, 0.05)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9990] pointer-events-none rounded-full hidden md:block"
      style={{
        width: '32px',
        height: '32px',
        border: '1.5px solid rgba(0, 240, 255, 0.5)',
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 15px rgba(0, 240, 255, 0.05)',
        transform: 'translate(-50%, -50%) scale(1)',
        transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    />
  )
}

export default CursorFollower
