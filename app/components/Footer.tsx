'use client'

import { useLanguage } from '../context/language'
import { ui } from '../data/content'

export default function Footer() {
  const { lang } = useLanguage()
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-xs text-gray-400 space-y-1">
        <p>{ui.footerDisclaimer[lang]}</p>
        <p>{ui.footerSource[lang]}</p>
      </div>
    </footer>
  )
}
