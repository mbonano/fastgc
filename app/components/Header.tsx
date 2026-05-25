'use client'

import { useLanguage } from '../context/language'
import { ui } from '../data/content'
import type { Lang } from '../data/content'

const LANG_OPTIONS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ru', label: 'Русский' },
]

export default function Header() {
  const { lang, setLang } = useLanguage()

  return (
    <header className="bg-brand text-white sticky top-0 z-10 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold tracking-tight">{ui.siteTitle[lang]}</span>
          <span className="hidden sm:inline text-green-200 text-sm ml-3">
            {ui.siteTagline[lang]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="lang-select" className="text-sm text-green-200 sr-only">
            {ui.languageLabel[lang]}
          </label>
          <select
            id="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="bg-white/10 text-white text-sm rounded-md px-3 py-1.5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
            aria-label={ui.languageLabel[lang]}
          >
            {LANG_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-gray-900 bg-white">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
