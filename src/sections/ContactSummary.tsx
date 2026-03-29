'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CyberMarquee from '@/components/CyberMarquee'
import { useLang } from '@/contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const ContactSummary = () => {
  const { t } = useLang()
  const containerRef = useRef<HTMLDivElement>(null)
  const items = [...t.contactSummary.values]
  const items2 = [t.contactSummary.contactUs, t.contactSummary.contactUs, t.contactSummary.contactUs, t.contactSummary.contactUs, t.contactSummary.contactUs]

  useGSAP(() => {
    if (!containerRef.current) return
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    })
  })

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
      style={{ background: '#0a0a0f' }}
    >
      <CyberMarquee
        items={items}
        className="text-white"
        icon="◆"
        iconClassName="text-cyan-400"
      />
      <div className="overflow-hidden font-light text-center contact-text-responsive text-white/80">
        <p>
          {t.contactSummary.quote} <br />
          <span className="font-normal text-cyan-400">{t.contactSummary.secure}</span> {t.contactSummary.and}{' '}
          <span className="italic text-pink-400">{t.contactSummary.intelligent}</span> <br />
          {t.contactSummary.digitalFuture} <span className="text-purple-400">{t.contactSummary.together}</span>
        </p>
      </div>
      <CyberMarquee
        items={items2}
        reverse={true}
        className="text-white bg-transparent border-y-2"
        icon="■"
        iconClassName="text-pink-400"
      />
    </section>
  )
}

export default ContactSummary
