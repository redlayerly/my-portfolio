'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Shield, 
  ArrowLeft, 
  Lock, 
  Workflow, 
  Building, 
  Users, 
  UserCheck, 
  Globe, 
  ShieldCheck,
  Github,
  Zap,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLang } from '@/contexts/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FarasCipherPage() {
  const { t } = useLang()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation (Immediate)
      gsap.fromTo('.header-anim', 
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-image-anim', 
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      )

      // Scroll-Triggered Animations for Individual Cards
      const cards = gsap.utils.toArray('.content-card-anim')
      
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none', // Play once, never reverse
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const audiences = [
    {
      title: 'Financial Institutions',
      desc: 'High-speed encryption for banking transactions and sensitive customer data protection.',
      icon: Building,
      color: '#00f0ff'
    },
    {
      title: 'Government Agencies',
      desc: 'Sovereign-grade security for classified communications and sensitive infrastructure.',
      icon: ShieldCheck,
      color: '#ff0055'
    },
    {
      title: 'Large Corporations',
      desc: 'Protecting intellectual property and enterprise-scale network assets.',
      icon: Layers,
      color: '#8b5cf6'
    },
    {
      title: 'Small & Medium Businesses',
      desc: 'Accessible professional-grade security to guard against evolving cyber threats.',
      icon: Users,
      color: '#22c55e'
    },
    {
      title: 'Independent Freelancers',
      desc: 'Securing private communications and individual digital assets.',
      icon: UserCheck,
      color: '#f59e0b'
    },
    {
      title: 'International Organizations',
      desc: 'Unified security standards for multi-region coordination and data sync.',
      icon: Globe,
      color: '#ec4899'
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Visual Effects (Matching Homepage) */}
      <div className="scanline" />
      <div className="noise-overlay" />
      
      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowLeft className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">{t.projectCommon.backToPortfolio}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold gradient-text">RedLayer</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 header-anim">
            Case Study: Cryptography
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 header-anim">
            Faras Cipher: <span className="gradient-text">Knight&apos;s Tour</span> Logic
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto header-anim">
            A revolutionary symmetric-key block cipher inspired by chess dynamics and Warnsdorff&apos;s Rule, 
            engineered for absolute security and extreme performance.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative aspect-[2/1] rounded-3xl overflow-hidden mb-20 cyber-border hero-image-anim">
          <Image 
            src="/projects/faras-cipher.png"
            alt="Faras Cipher Security Dynamics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10">Rust Core</Badge>
              <Badge variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10">Nim Shell</Badge>
              <Badge variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10">Dynamic Permutation</Badge>
            </div>
            <a 
              href="https://github.com/redlayerly/Faras-Cipher"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all font-semibold"
            >
              <Github className="w-5 h-5" />
              {t.projectCommon.viewOnGithub}
            </a>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <section className="tech-section grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="content-card-anim">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-primary" />
              {t.projectCommon.technicalInnovation}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Unlike traditional ciphers that rely on static permutation boxes (P-Boxes), Faras introduces a dynamic, 
                key-dependent bit permutation system modeled after the movement of a chess knight on an 8x8 grid.
              </p>
              <p>
                By applying{' '}
                <a 
                  href="https://www.google.com/search?q=What+is+Warnsdorff+Heuristic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline underline-offset-4 cursor-pointer"
                >
                  Warnsdorff Heuristic
                </a>, 
                the encryption path is generated on-the-fly, seeded by the user key. 
                This ensures that the internal state and permutation pattern are unique for every single key used, nullifying 
                standard differential cryptanalysis attacks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <Zap className="text-primary mb-2" />
                  <div className="font-bold text-foreground">AVX-512 Support</div>
                  <div className="text-xs">Optimized for modern SIMD hardware.</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <Lock className="text-primary mb-2" />
                  <div className="font-bold text-foreground">Constant-Time</div>
                  <div className="text-xs">Invulnerable to side-channel attacks.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-card-anim relative">
            <div className="aspect-square bg-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center p-8 overflow-hidden group">
              <div className="grid grid-cols-8 gap-1 w-full aspect-square opacity-20 pointer-events-none">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-primary/30 rounded-sm" />
                ))}
              </div>
              <Shield className="absolute w-48 h-48 text-primary/10 animate-pulse" />
              <div className="relative z-10 text-center space-y-4">
                <div className="text-6xl font-black text-primary/40 italic">16 ROUNDS</div>
                <div className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Diffusion Layer Analysis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="audience-section mb-32">
          <div className="text-center mb-16 content-card-anim">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">{t.projectCommon.targetSectors}</Badge>
            <h2 className="text-3xl font-bold">{t.projectCommon.whoIsFarasFor.replace('Faras', 'Faras')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((aud, index) => (
              <Card key={index} className="bg-card cyber-border transition-all duration-300 content-card-anim group">
                <CardContent className="p-8">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${aud.color}15` }}
                  >
                    <aud.icon className="w-6 h-6" style={{ color: aud.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{aud.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {aud.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="cta-section text-center content-card-anim">
          <h2 className="text-2xl font-bold mb-8">{t.projectCommon.readyToSecure}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="mailto:alhussein.ali@redlayer.ly">
                {t.projectCommon.contactEnterprise}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.projectCommon.backToPortfolio}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer (Simplified) */}
      <footer className="py-12 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">RedLayer LCC</span>
          </div>
          <div>© 2026 AlHussein Alsahati. {t.projectCommon.allRightsReserved}</div>
        </div>
      </footer>
    </div>
  )
}
