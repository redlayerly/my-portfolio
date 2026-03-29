'use client'

import Preloader from '@/components/Preloader'
import Navbar from '@/sections/Navbar'
import HeroSection from '@/sections/HeroSection'
import ParallaxTextSection from '@/sections/ParallaxTextSection'
import AboutSection from '@/sections/AboutSection'
import ServicesSection from '@/sections/ServicesSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ContactSummary from '@/sections/ContactSummary'
import ContactSection from '@/sections/ContactSection'
import CursorFollower from '@/components/CursorFollower'

export default function Portfolio() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <ParallaxTextSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSummary />
        <ContactSection />
      </main>
      <CursorFollower />
    </>
  )
}
