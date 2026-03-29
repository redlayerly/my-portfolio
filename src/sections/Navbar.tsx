'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useLang } from '@/contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const navItemIds = ['home', 'services', 'about', 'projects', 'contact']
const navItemKeys = ['home', 'services', 'about', 'projects', 'contact'] as const

const socials = [
  { name: 'GitHub', href: 'https://github.com/redlayerly' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hussein-ali-023474377/' },
  { name: 'Telegram', href: 'https://t.me/sa7tz' },
]

const Navbar = () => {
  const { t, lang, toggleLang } = useLang()
  const navRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement[]>([])
  const contactRef = useRef<HTMLDivElement>(null)
  const topLineRef = useRef<HTMLSpanElement>(null)
  const bottomLineRef = useRef<HTMLSpanElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const iconTl = useRef<gsap.core.Timeline | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showBurger, setShowBurger] = useState(true)

  useEffect(() => {
    gsap.set(navRef.current, { xPercent: 100 })
    gsap.set(
      linksRef.current.filter(Boolean),
      { autoAlpha: 0, x: -20 }
    )
    if (contactRef.current) {
      gsap.set(contactRef.current, { autoAlpha: 0, x: -20 })
    }

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .to(
        linksRef.current.filter(Boolean),
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<'
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<+0.2'
      )

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: 'power2.inOut',
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        '<'
      )
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse()
      iconTl.current?.reverse()
    } else {
      tl.current?.play()
      iconTl.current?.play()
    }
    setIsOpen(!isOpen)
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      toggleMenu()
    }
  }

  return (
    <>
      {/* Language Switcher Button - top left corner */}
      <button
        onClick={toggleLang}
        className="fixed top-4 left-6 sm:left-10 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        style={{
          background: '#0a0a0f',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
        title={lang === 'en' ? 'العربية' : 'English'}
      >
        <span className="text-lg sm:text-xl">🌐</span>
      </button>

      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-6 sm:px-10 uppercase py-28 gap-y-10 md:w-1/2 md:left-1/2"
        style={{
          background: '#0a0a0f',
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        <div className="flex flex-col text-4xl gap-y-2 md:text-6xl lg:text-7xl">
          {navItemKeys.map((key, index) => (
            <div
              key={index}
              ref={(el) => { if (el) linksRef.current[index] = el }}
            >
              <button
                className="transition-all duration-300 cursor-pointer hover:text-cyan-400 text-left"
                onClick={() => scrollTo(navItemIds[index])}
              >
                <span className="block">{t.nav[key]}</span>
              </button>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50 text-sm">{t.nav.email}</p>
            <p className="text-lg sm:text-xl tracking-widest lowercase text-pretty">
              Alhussein.ali@redlayer.ly
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50 text-sm">{t.nav.socialMedia}</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-cyan-400 transition-colors duration-300"
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
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-6 sm:right-10"
        style={{
          background: '#0a0a0f',
          clipPath: showBurger
            ? 'circle(50% at 50% 50%)'
            : 'circle(0% at 50% 50%)',
        }}
        onClick={toggleMenu}
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
      </div>
    </>
  )
}

export default Navbar
