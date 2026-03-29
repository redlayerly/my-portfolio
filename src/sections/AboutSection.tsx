'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import { AnimatedTextLines } from '@/components/AnimatedTextLines'
import { useLang } from '@/contexts/LanguageContext'

const AboutSection = () => {
  const { t, lang } = useLang()

  const text = `${t.about.tagline1}
    ${t.about.tagline2}
    ${t.about.tagline3}`

  const aboutText = t.about.bio

  const imgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to('#about', {
      scale: 0.95,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
      ease: 'power1.inOut',
    })

    if (imgRef.current) {
      gsap.set(imgRef.current, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
      })
      gsap.to(imgRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: { trigger: imgRef.current },
      })
    }
  })

  return (
    <section id="about" className="min-h-screen rounded-b-4xl" style={{ background: '#0a0a0f' }}>
      <AnimatedHeaderSection
        subTitle={t.about.subtitle}
        title={t.about.title}
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />
      <div
        id="about"
        className="flex flex-col items-center justify-between gap-16 px-6 sm:px-10 pb-16 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/60"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div
          ref={imgRef}
          className="w-full max-w-md rounded-3xl overflow-hidden border border-cyan-500/20"
          style={{
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)',
          }}
        >
          <img
            src="/ai-bg.png"
            alt="AI Technology"
            className="w-full h-auto object-cover"
          />
        </div>
        <AnimatedTextLines text={aboutText} className="w-full font-light" />
      </div>
    </section>
  )
}

export default AboutSection
