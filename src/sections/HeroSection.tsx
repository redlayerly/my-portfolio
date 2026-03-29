'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import RobotMask from '@/components/RobotMask'
import { useLang } from '@/contexts/LanguageContext'

const HeroSection = () => {
  const { t, lang } = useLang()

  useGSAP(() => {
    gsap.from('.hero-social', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out',
      delay: 2.5,
    })
    gsap.from('.hero-name', {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 2.0,
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            animation: 'techPulse 10s ease-in-out infinite',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Background Beams */}
      <BackgroundBeams className="opacity-30 z-[1]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Text Section */}
        <div className="w-full mt-4 flex flex-col items-center z-30 px-6 sm:px-10 pt-20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <AnimatedHeaderSection
            subTitle={t.hero.subtitle}
            title={t.hero.brand}
            text={t.hero.text}
            textColor="text-white"
          />
          {/* Bilingual Name Display - swap order based on lang */}
          <div className="flex flex-col items-center gap-1 mt-4 px-6 sm:px-10">
            {lang === 'ar' ? (
              <>
                <span
                  className="hero-name text-base sm:text-lg font-light text-cyan-300/70 tracking-wide"
                  dir="rtl"
                >
                  {t.hero.nameEn}
                </span>
                <span className="hero-name text-xl sm:text-2xl font-semibold text-white/90 tracking-[0.2em]">
                  {t.hero.nameAr}
                </span>
              </>
            ) : (
              <>
                <span
                  className="hero-name text-base sm:text-lg font-light text-cyan-300/70 tracking-wide"
                  dir="rtl"
                >
                  {t.hero.nameAr}
                </span>
                <span className="hero-name text-xl sm:text-2xl font-semibold text-white/90 tracking-[0.2em] uppercase">
                  {t.hero.nameEn}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Robot Mask Section - centered, same layout as MohamedxFawzi */}
        <div className="flex justify-center px-6 sm:px-10 mt-4 pb-16">
          <RobotMask />
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-6 sm:left-10 flex items-center gap-4 z-30">
          <a
            href="https://github.com/redlayerly"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-white/60 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hussein-ali-023474377/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-white/60 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href="https://t.me/sa7tz"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-white/60 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-10 flex flex-col items-center gap-2 text-white/30 z-30">
          <span className="text-xs tracking-[0.3rem] uppercase rotate-90 origin-center translate-y-8">
            {t.hero.scroll}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes techPulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
          100% { opacity: 0.3; transform: scale(1); }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
