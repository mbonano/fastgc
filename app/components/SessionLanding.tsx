'use client'

import { useSession } from '../context/session'
import { useLanguage } from '../context/language'
import { ui } from '../data/content'

export default function SessionLanding() {
  const { hasStoredSession, sessionStarted, sessionReady, clearAndStart, resumeStored } = useSession()
  const { lang } = useLanguage()

  if (!sessionReady || sessionStarted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8">
        {/* Logo */}
        <div className="mb-6 text-center">
          <span className="inline-block bg-brand text-white text-xl font-bold px-4 py-2 rounded-lg tracking-tight">
            {ui.siteTitle[lang]}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          {ui.sessionTitle[lang]}
        </h1>
        <p className="text-gray-500 text-sm text-center mb-8 leading-relaxed">
          {ui.sessionSubtitle[lang]}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={clearAndStart}
            className="w-full bg-brand hover:bg-brand-mid text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {ui.newSession[lang]}
          </button>

          <div className="relative">
            <button
              onClick={resumeStored}
              disabled={!hasStoredSession}
              title={!hasStoredSession ? ui.noSavedSession[lang] : ui.resumeSessionHint[lang]}
              className="w-full border-2 border-brand text-brand hover:bg-brand-light font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              {ui.resumeSession[lang]}
            </button>
            {!hasStoredSession && (
              <p className="text-xs text-gray-400 text-center mt-1.5">
                {ui.noSavedSession[lang]}
              </p>
            )}
            {hasStoredSession && (
              <p className="text-xs text-gray-500 text-center mt-1.5">
                {ui.resumeSessionHint[lang]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
