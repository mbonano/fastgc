'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../context/language'
import { ui } from '../data/content'
import type { Lang } from '../data/content'

const LANG_OPTIONS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ru', label: 'Русский' },
]

const NAV_LINKS = [
  { href: '/', labelKey: 'navHome' as const },
  { href: '/ice', labelKey: 'navIce' as const },
  { href: '/travel', labelKey: 'navTravel' as const },
  { href: '/rights', labelKey: 'navRights' as const },
]

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-brand text-white sticky top-0 z-10 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight whitespace-nowrap hover:text-green-200 transition-colors group"
          >
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {ui.siteTitle[lang]}
          </Link>
          <span className="hidden lg:inline text-green-200 text-sm truncate">
            {ui.siteTagline[lang]}
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1 shrink-0">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-green-100 hover:text-white px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {ui[labelKey][lang]}
            </Link>
          ))}
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

          {/* Hamburger button — mobile only */}
          <button
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="sm:hidden bg-brand border-t border-white/10 px-4 py-2">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-green-100 hover:text-white px-2.5 py-3 rounded hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
            >
              {ui[labelKey][lang]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
