'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '../data/content'

const STORAGE_KEY = 'fastgc_lang'
const SUPPORTED: Lang[] = ['en', 'es', 'ru']

function detectDefaultLang(): Lang {
  if (typeof navigator === 'undefined') return 'en'
  const preferred = navigator.language.slice(0, 2).toLowerCase()
  return (SUPPORTED.includes(preferred as Lang) ? preferred : 'en') as Lang
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && SUPPORTED.includes(stored)) {
      setLangState(stored)
    } else {
      setLangState(detectDefaultLang())
    }
  }, [])

  function setLang(next: Lang) {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
