'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/language'
import { useSession } from '../context/session'
import { ui } from '../data/content'
import { applicationTypes } from '../../lib/applicationData'
import ApplicationTypeAccordion from './ApplicationTypeAccordion'
import SessionLanding from './SessionLanding'
import type { Lang } from '../../lib/applicationData'

function NextButton({ lang, disabled }: { lang: Lang; disabled: boolean }) {
  const router = useRouter()
  const { setStep } = useSession()

  function handleNext() {
    setStep('details')
    router.push('/details')
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleNext}
        disabled={disabled}
        title={disabled ? ui.nextButtonHint[lang] : undefined}
        className="bg-brand hover:bg-brand-mid text-white font-semibold px-6 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand"
      >
        {ui.nextButton[lang]}
      </button>
      {disabled && (
        <span className="text-sm text-gray-400">{ui.nextButtonHint[lang]}</span>
      )}
    </div>
  )
}

export default function MainContent() {
  const { lang } = useLanguage()
  const { selectedTypes, toggleType } = useSession()
  const [openIds, setOpenIds] = useState<string[]>([])

  function toggleOpen(id: string) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const hasSelection = selectedTypes.length > 0

  return (
    <>
      <SessionLanding />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Intro */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {ui.introHeading[lang]}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {ui.introText[lang]}
          </p>
        </section>

        {/* Instruction + top Next button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <p className="text-gray-700 font-medium">{ui.selectInstruction[lang]}</p>
          <NextButton lang={lang} disabled={!hasSelection} />
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {applicationTypes.map((appType) => (
            <ApplicationTypeAccordion
              key={appType.id}
              appType={appType}
              lang={lang}
              isChecked={selectedTypes.includes(appType.id)}
              isOpen={openIds.includes(appType.id)}
              onToggle={() => toggleOpen(appType.id)}
              onCheck={() => toggleType(appType.id)}
            />
          ))}
        </div>

        {/* Bottom Next button */}
        <div className="mt-6 flex justify-end">
          <NextButton lang={lang} disabled={!hasSelection} />
        </div>
      </main>
    </>
  )
}
