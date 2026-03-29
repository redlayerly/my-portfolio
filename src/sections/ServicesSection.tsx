'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import { useLang } from '@/contexts/LanguageContext'

const ServicesSection = () => {
  const { t } = useLang()

  const text = `${t.services.text1}
    ${t.services.text2}
    ${t.services.text3}`

  const serviceRefs = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        duration: 1,
        ease: 'circ.out',
      })
    })
  }, [])

  return (
    <section
      id="services"
      className="min-h-screen rounded-t-4xl"
      style={{ background: '#0a0a0f' }}
    >
      <AnimatedHeaderSection
        subTitle={t.services.subtitle}
        title={t.services.title}
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />
      {t.services.items.map((service, index) => (
        <div
          key={index}
          ref={(el) => { if (el) serviceRefs.current[index] = el }}
          className="sticky px-6 sm:px-10 pt-6 pb-12 border-t-2"
          style={{
            borderColor: 'rgba(0, 240, 255, 0.15)',
            background: '#0a0a0f',
            top: `calc(10vh + ${index * 5}em)`,
            marginBottom: `${(t.services.items.length - index - 1) * 5}rem`,
          }}
        >
          <div className="flex items-center justify-between gap-4 font-light text-white">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">
                <span className="block">{service.title}</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-widest text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-xl sm:text-2xl lg:text-3xl text-white/80">
                {service.subItems.map((subItem, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-center">
                      <span className="mr-12 text-lg text-cyan-400/50">
                        0{itemIndex + 1}
                      </span>
                      {subItem}
                    </h3>
                    {itemIndex < service.subItems.length - 1 && (
                      <div
                        className="w-full h-px my-2"
                        style={{ background: 'rgba(0, 240, 255, 0.15)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServicesSection
