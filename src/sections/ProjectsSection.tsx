'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedHeaderSection from '@/components/AnimatedHeaderSection'
import Link from 'next/link'
import { useLang } from '@/contexts/LanguageContext'

const projectHrefs: Record<string, string> = {
  r1: '/projects/v2x-6g-ris-mobility',
  r2: '/projects/unified-oss-framework',
  r3: '/projects/urlrc-v2x',
  r4: '/projects/netops-guardian-ai',
  r5: '/projects/cortexops',
  '1': '/projects/faras-cipher',
  '2': '#',
  '3': '#',
  '4': '#',
  '5': '#',
}

const projectColors: Record<string, string> = {
  r1: '#00f0ff',
  r2: '#00f0ff',
  r3: '#ff0055',
  r4: '#8b5cf6',
  r5: '#22c55e',
  '1': '#00f0ff',
  '2': '#ff0055',
  '3': '#8b5cf6',
  '4': '#22c55e',
  '5': '#f59e0b',
}

const ProjectsSection = () => {
  const { t } = useLang()
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([])
  const previewRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const text = t.projects.text

  const mouse = useRef({ x: 0, y: 0 })
  const moveX = useRef<((val: number) => void) | null>(null)
  const moveY = useRef<((val: number) => void) | null>(null)

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, 'x', {
      duration: 1.5,
      ease: 'power3.out',
    })
    moveY.current = gsap.quickTo(previewRef.current, 'y', {
      duration: 2,
      ease: 'power3.out',
    })

    gsap.from('#project', {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '#project',
      },
    })
  }, [])

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return
    setCurrentIndex(index)

    const el = overlayRefs.current[index]
    if (!el) return

    const project = t.projects.allProjects[index]
    const color = projectColors[project.id] || '#00f0ff'

    gsap.killTweensOf(el)
    gsap.fromTo(
      el,
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 0.15,
        ease: 'power2.out',
      }
    )

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth < 768) return
    setCurrentIndex(null)

    const el = overlayRefs.current[index]
    if (!el) return

    gsap.killTweensOf(el)
    gsap.to(el, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      duration: 0.2,
      ease: 'power2.in',
    })

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return
    mouse.current.x = e.clientX + 24
    mouse.current.y = e.clientY + 24
    moveX.current?.(mouse.current.x)
    moveY.current?.(mouse.current.y)
  }

  // Get image path for research projects
  const getImagePath = (projectId: string) => {
    const imageMap: Record<string, string> = {
      'r1': '/images/projects/v2x-6g-ris.png',
      'r2': '/images/projects/unified-oss.png',
      'r3': '/images/projects/urlrc-v2x.png',
      'r4': '/images/projects/netops-guardian.png',
      'r5': '/images/projects/cortexops.png',
    }
    return imageMap[projectId] || null
  }

  return (
    <section id="projects" className="flex flex-col min-h-screen" style={{ background: '#0a0a0f' }}>
      <AnimatedHeaderSection
        subTitle={t.projects.subtitle}
        title={t.projects.title}
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {t.projects.allProjects.map((project, index) => {
          const imgPath = getImagePath(project.id)
          const color = projectColors[project.id] || '#00f0ff'
          const href = projectHrefs[project.id] || '#'

          return (
            <Link
              key={project.id}
              id="project"
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              href={href}
            >
              {/* overlay */}
              <div
                ref={(el) => { overlayRefs.current[index] = el }}
                className="absolute inset-0 hidden md:block duration-200 -z-10"
                style={{
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                  background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                }}
              />

              {/* category + title */}
              <div className="flex justify-between px-6 sm:px-10 text-white transition-all duration-500 md:group-hover:px-12">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-wider px-2 py-1 rounded" style={{ color: color, background: `${color}15`, border: `1px solid ${color}30` }}>
                    {project.category}
                  </span>
                  <h2 className="lg:text-[32px] text-[26px] leading-none">
                    <span>{project.name}</span>
                  </h2>
                </div>
                <svg className="md:w-6 md:h-6 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              {/* divider */}
              <div className="w-full h-0.5 bg-white/20" />
              {/* framework */}
              <div className="flex px-6 sm:px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5">
                {project.frameworks.map((framework, fwIndex) => (
                  <p
                    key={fwIndex}
                    className="text-white/50 transition-colors duration-500 md:group-hover:text-white/80"
                  >
                    {framework}
                  </p>
                ))}
              </div>
              {/* mobile preview */}
              <div className="relative flex items-center justify-center px-6 sm:px-10 md:hidden h-[200px] mt-4">
                {imgPath ? (
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img src={imgPath} alt={project.name} className="w-full h-full object-cover brightness-75" />
                  </div>
                ) : (
                  <div
                    className="w-full h-full rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                      border: `1px solid ${color}20`,
                    }}
                  >
                    <p className="text-white/30 text-sm">{t.projects.viewProject} →</p>
                  </div>
                )}
              </div>
            </Link>
          )
        })}

        {/* Desktop floating preview */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden pointer-events-none w-[960px] md:block hidden opacity-0"
          style={{
            borderColor: '#0a0a0f',
            border: '8px solid #0a0a0f',
          }}
        >
          {currentIndex !== null && (() => {
            const project = t.projects.allProjects[currentIndex]
            const imgPath = getImagePath(project.id)
            const color = projectColors[project.id] || '#00f0ff'
            return (
              <div className="w-full h-full" style={{
                background: imgPath ? '#000' : `linear-gradient(135deg, ${color}10, ${color}05)`,
              }}>
                {imgPath && (
                  <img src={imgPath} alt={project.name} className="w-full h-full object-cover opacity-40" />
                )}
                <div className="absolute inset-0 flex flex-col justify-center p-12">
                  <span className="text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded inline-block w-fit" style={{ color: color, background: `${color}20` }}>
                    {project.category}
                  </span>
                  <h3 className="text-4xl text-white mb-4">{project.name}</h3>
                  <div className="flex gap-3">
                    {project.frameworks.map((fw, fwIndex) => (
                      <span key={fwIndex} className="px-3 py-1 text-sm rounded-full" style={{ border: `1px solid ${color}40`, color: `${color}cc` }}>
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
