'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { translations, Lang, Translations } from '@/lib/i18n'

interface LanguageContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
  setLang: (lang: Lang) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('redlayer-lang') as Lang | null
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('redlayer-lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
  }, [])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang, isRTL: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}
