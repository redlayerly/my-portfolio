'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useLang } from '@/contexts/LanguageContext'

const Preloader = () => {
  const { t } = useLang()
  const preloaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const counter = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true)
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.3,
        })
        // Enable scrolling after preloader
        setTimeout(() => {
          document.body.style.overflow = ''
          if (preloaderRef.current) {
            preloaderRef.current.style.display = 'none'
          }
        }, 1300)
      },
    })

    // Animate counter
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.floor(counter.value))
      },
    })

    // Animate progress bar
    tl.to(
      '.preloader-bar',
      {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0
    )

    // Flash effect at 100
    tl.to(
      preloaderRef.current,
      {
        background: 'rgba(0, 240, 255, 0.1)',
        duration: 0.1,
      },
      2.4
    ).to(
      preloaderRef.current,
      {
        background: '#0a0a0f',
        duration: 0.1,
      },
      2.5
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0a0a0f' }}
    >
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs animate-matrix-fall"
            style={{
              left: `${(i * 5) + Math.random() * 3}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j}>
                {String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-2xl md:text-3xl font-bold tracking-widest gradient-text mb-4">
          {t.preloader.brand}
        </div>

        {/* Counter */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(0, 240, 255, 0.1)"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${(count / 100) * 565.48} 565.48`}
              style={{
                transition: 'stroke-dasharray 0.1s ease',
                filter: 'drop-shadow(0 0 6px rgba(0, 240, 255, 0.5))',
              }}
            />
          </svg>
          <span
            ref={counterRef}
            className="text-5xl md:text-6xl font-light text-white tabular-nums"
          >
            {count}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="preloader-bar h-full rounded-full"
            style={{
              width: '0%',
              background: 'linear-gradient(90deg, #00f0ff, #ff0055, #8b5cf6)',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
            }}
          />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2 text-white/40 text-xs tracking-[0.3rem] uppercase">
          <span>{isDone ? t.preloader.ready : t.preloader.initializing}</span>
          {!isDone && (
            <span className="flex gap-1">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Preloader
