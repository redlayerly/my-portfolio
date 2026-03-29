'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import CyberMarquee from '@/components/CyberMarquee'
import { useLang } from '@/contexts/LanguageContext'

const socials = [
  { name: 'GitHub', href: 'https://github.com/redlayerly' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hussein-ali-023474377/' },
  { name: 'Telegram', href: 'https://t.me/sa7tz' },
]

const ContactSection = () => {
  const { t, lang } = useLang()

  const text = t.contact.text
  const items = [...t.contact.marqueeItems]

  useGSAP(() => {
    gsap.from('.social-link', {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.social-link',
      },
    })
  })

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen"
      style={{ background: '#0a0a0f' }}
    >
      <div>
        <AnimatedHeaderSection
          subTitle={t.contact.subtitle}
          title={t.contact.title}
          text={text}
          textColor="text-white"
          withScrollTrigger={true}
        />
        <div className="flex px-6 sm:px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>{t.contact.email}</h2>
              <div className="w-full h-px my-2" style={{ background: 'rgba(0,240,255,0.2)' }} />
              <a
                href="mailto:Alhussein.ali@redlayer.ly"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl text-cyan-400/80 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                Alhussein.ali@redlayer.ly
              </a>
            </div>
            <div className="social-link">
              <h2>{t.contact.phone}</h2>
              <div className="w-full h-px my-2" style={{ background: 'rgba(0,240,255,0.2)' }} />
              <a
                href="tel:+218944471000"
                className="text-xl lowercase md:text-2xl lg:text-3xl text-cyan-400/80 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                +218 94 447 1000
              </a>
            </div>
            <div className="social-link">
              <h2>{t.contact.website}</h2>
              <div className="w-full h-px my-2" style={{ background: 'rgba(0,240,255,0.2)' }} />
              <a
                href="https://redlayer.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl lowercase md:text-2xl lg:text-3xl text-cyan-400/80 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                redlayer.ly
              </a>
            </div>
            <div className="social-link">
              <h2>{t.contact.socialMedia}</h2>
              <div className="w-full h-px my-2" style={{ background: 'rgba(0,240,255,0.2)' }} />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm text-white/60 hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'{ '}
                    {social.name}
                    {' }'}
                  </a>
                ))}
              </div>
            </div>
            <div className="social-link">
              <h2>{t.contact.telegram}</h2>
              <div className="w-full h-px my-2" style={{ background: 'rgba(0,240,255,0.2)' }} />
              <a
                href="https://t.me/sa7tz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl lowercase md:text-2xl lg:text-3xl text-cyan-400/80 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                @sa7tz
              </a>
            </div>
          </div>
        </div>
      </div>
      <CyberMarquee items={items} className="text-white bg-transparent" icon="◆" iconClassName="text-pink-400" />
    </section>
  )
}

export default ContactSection
