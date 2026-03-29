'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedHeaderSectionProps {
  subTitle: string
  title: string
  text?: string
  textColor?: string
  withScrollTrigger?: boolean
}

export default function AnimatedHeaderSection({
  subTitle,
  title,
  text,
  textColor = '#e4e4e7',
  withScrollTrigger = false,
}: AnimatedHeaderSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const header = headerRef.current
    if (!container || !header) return

    const words = title.split(' ')

    // Animate container
    const containerTl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        : undefined,
    })

    containerTl.from(container, {
      y: '50vh',
      opacity: 0,
      duration: 1,
      ease: 'circ.out',
    })

    // Animate header content
    const headerTl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        : undefined,
    })

    headerTl.from(header, {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'circ.out',
    })
  }, [withScrollTrigger])

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={headerRef}>
        <p
          className="text-sm tracking-[0.4rem] uppercase mb-4"
          style={{ color: '#00f0ff', opacity: 0.7 }}
        >
          {subTitle}
        </p>
        <div className="flex flex-wrap banner-text-responsive font-bold leading-none mb-8">
          {title.split(' ').map((word, i) => (
            <span
              key={i}
              className="mr-4 sm:mr-6 md:mr-8"
              style={{ color: textColor }}
            >
              {word}
            </span>
          ))}
        </div>
        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background: `linear-gradient(90deg, #00f0ff, #8b5cf6, #ff0055, transparent)`,
          }}
        />
        {/* Text Lines */}
        {text && <AnimatedTextLines text={text} textColor={textColor} />}
      </div>
    </div>
  )
}

function AnimatedTextLines({
  text,
  textColor = '#e4e4e7',
}: {
  text: string
  textColor?: string
}) {
  const linesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = linesRef.current
    if (!container) return

    const lines = container.querySelectorAll('.anim-text-line')

    gsap.from(lines, {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <div ref={linesRef} className="space-y-2">
      {text.split('\n').map((line, i) => (
        <p
          key={i}
          className="anim-text-line value-text-responsive font-light opacity-80 leading-relaxed"
          style={{ color: textColor }}
        >
          {line}
        </p>
      ))}
    </div>
  )
}
