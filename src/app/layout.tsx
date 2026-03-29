import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import LenisProvider from '@/components/LenisProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AlHussein Alsahati | Cybersecurity Engineer & AI Researcher',
  description: 'Academic researcher and cybersecurity engineer specializing in AI and digital security. Founder of RedLayer.ly - Providing cutting-edge security solutions.',
  keywords: ['Cybersecurity', 'AI', 'Machine Learning', 'Security Engineer', 'RedLayer', 'AlHussein Alsahati', 'Penetration Testing'],
  authors: [{ name: 'AlHussein Alsahati' }],
  icons: {
    icon: '/profile.png',
  },
  openGraph: {
    title: 'AlHussein Alsahati | Cybersecurity & AI Expert',
    description: 'Academic researcher and cybersecurity engineer specializing in AI and digital security.',
    url: 'https://redlayer.ly',
    siteName: 'AlHussein Alsahati Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlHussein Alsahati | Cybersecurity & AI Expert',
    description: 'Academic researcher and cybersecurity engineer specializing in AI and digital security.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: '#0a0a0f',
          color: '#e4e4e7',
        }}
      >
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  )
}
