'use client'

import Link from 'next/link'
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-1.5 text-xl font-bold tracking-tight whitespace-nowrap hover:text-green-200 transition-colors group">
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {ui.siteTitle[lang]}
          </Link>
          <span className="hidden lg:inline text-green-200 text-sm truncate">
            {ui.siteTagline[lang]}
          </span>
        </div>

        <nav className="flex items-center gap-1 shrink-0">
          <Link
            href="/"
            className="text-sm text-green-100 hover:text-white px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {ui.navHome[lang]}
          </Link>
          <Link
            href="/ice"
            className="text-sm text-green-100 hover:text-white px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {ui.navIce[lang]}
          </Link>
          <Link
            href="/travel"
            className="text-sm text-green-100 hover:text-white px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {ui.navTravel[lang]}
          </Link>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
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
