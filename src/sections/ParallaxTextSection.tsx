'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '@/contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const ParallaxTextSection = () => {
  const { t } = useLang()

  useGSAP(() => {
    gsap.to('#title-service-1', {
      xPercent: 20,
      scrollTrigger: {
        trigger: '#title-service-1',
        scrub: true,
      },
    })
    gsap.to('#title-service-2', {
      xPercent: -30,
      scrollTrigger: {
        trigger: '#title-service-2',
        scrub: true,
      },
    })
    gsap.to('#title-service-3', {
      xPercent: 100,
      scrollTrigger: {
        trigger: '#title-service-3',
        scrub: true,
      },
    })
    gsap.to('#title-service-4', {
      xPercent: -100,
      scrollTrigger: {
        trigger: '#title-service-4',
        scrub: true,
      },
    })
  })

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive text-white/80">
      <div id="title-service-1">
        <p>{t.parallax.cybersecurity}</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal text-cyan-400">{t.parallax.ai}</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-cyan-400 to-pink-500" />
        <p>{t.parallax.neuralNetworks}</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>{t.parallax.threatDetection}</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-pink-500 to-purple-500" />
        <p className="italic text-pink-400">{t.parallax.penTesting}</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-purple-500 to-cyan-400" />
        <p className="text-purple-400">{t.parallax.cryptoSecurity}</p>
      </div>
      <div id="title-service-4">
        <p className="text-white/40">{t.parallax.machineLearning}</p>
      </div>
    </section>
  )
}

export default ParallaxTextSection
