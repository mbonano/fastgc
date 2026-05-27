'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/language'
import { useSession } from '../context/session'
import { ui } from '../data/content'
import { applicationTypes } from '../../lib/applicationData'
import type { ApplicationType, Lang } from '../../lib/applicationData'

// ─── Sub-components ──────────────────────────────────────────────────────────

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg px-4 py-3">
      <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">{label}</p>
      <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
    </div>
  )
}

interface DetailCardProps {
  appType: ApplicationType
  lang: Lang
  checkedItems: boolean[]
  onToggleAction: (index: number) => void
}

function DetailCard({ appType, lang, checkedItems, onToggleAction }: DetailCardProps) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Card header */}
      <div className="bg-brand px-6 py-5">
        <h2 className="text-xl font-bold text-white">{appType.name[lang]}</h2>
        <p className="text-green-200 text-sm mt-1">{appType.simpleDescription[lang]}</p>
      </div>

      <div className="px-6 py-6 space-y-7">
        {/* Explanation */}
        <p className="text-gray-700 leading-relaxed">{appType.explanation[lang]}</p>

        {/* Who can apply table */}
        {appType.applicants.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
              {ui.whoCanApply[lang]}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-light">
                    <th className="text-left px-4 py-2.5 font-semibold text-brand border-b border-gray-200 w-2/5">
                      {ui.whoCanApplyAs[lang]}
                    </th>
                    <th className="text-left px-4 py-2.5 font-semibold text-brand border-b border-gray-200 w-3/5">
                      {ui.whoNeedToBe[lang]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appType.applicants.map((row, i) => (
                    <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900 align-top border-b border-gray-100">
                        {row.whoAs[lang]}
                      </td>
                      <td className="px-4 py-3 text-gray-600 align-top border-b border-gray-100 leading-relaxed">
                        {row.whoBe[lang]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Target Timeline */}
        <InfoBlock label={ui.targetTimeline[lang]} value={appType.targetTimeline[lang]} />

        {/* Steps */}
        <div>
          <h3 className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
            {ui.steps[lang]}
          </h3>
          <ol className="space-y-2">
            {appType.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-light text-brand font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step[lang].replace(/^Step \d+: /, '').replace(/^Paso \d+: /, '').replace(/^Шаг \d+: /, '')}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Action Items — interactive checkbox list */}
        <div>
          <h3 className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
            {ui.actionItems[lang]}
          </h3>
          <ul className="space-y-2.5">
            {appType.actionItems.map((item, i) => {
              const checked = checkedItems[i] ?? false
              return (
                <li key={i}>
                  <label className="flex gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleAction(i)}
                      className="flex-shrink-0 mt-0.5 h-4 w-4 rounded border-gray-400 accent-brand cursor-pointer"
                    />
                    <span
                      className={`text-sm leading-relaxed transition-colors ${
                        checked ? 'line-through text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {item[lang]}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Country-Specific Info */}
        {appType.countrySpecificInfo[lang] && (
          <InfoBlock label={ui.countrySpecificInfo[lang]} value={appType.countrySpecificInfo[lang]} />
        )}

        {/* Can File Concurrently */}
        <InfoBlock label={ui.canFileConcurrently[lang]} value={appType.canFileConcurrently[lang]} />

        {/* Common Waivers */}
        <InfoBlock label={ui.commonWaivers[lang]} value={appType.commonWaivers[lang]} />

        {/* Prevention Tips */}
        <div>
          <h3 className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
            {ui.preventionTips[lang]}
          </h3>
          <ul className="space-y-2">
            {appType.preventionSuggestions.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="flex-shrink-0 text-brand mt-1">•</span>
                <span className="leading-relaxed">{tip[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Communication Templates */}
        {appType.communicationTemplates.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-brand uppercase tracking-wide mb-3">
              {ui.communicationTemplates[lang]}
            </h3>
            <div className="space-y-4">
              {appType.communicationTemplates.map((tmpl, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 text-sm space-y-1">
                    <p>
                      <span className="font-semibold text-gray-700">{ui.recipient[lang]}:</span>{' '}
                      <span className="text-gray-600">{tmpl.recipient[lang]}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">{ui.whenToSend[lang]}:</span>{' '}
                      <span className="text-gray-600">{tmpl.whenToSend[lang]}</span>
                    </p>
                  </div>
                  <pre className="px-4 py-3 text-xs text-gray-700 font-mono whitespace-pre-wrap leading-relaxed bg-white">
                    {tmpl.template}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── PDF download button ──────────────────────────────────────────────────────

function DownloadButton({ lang, contentRef }: { lang: Lang; contentRef: React.RefObject<HTMLDivElement | null> }) {
  const [exporting, setExporting] = useState(false)

  async function handleDownload() {
    if (!contentRef.current || exporting) return
    setExporting(true)
    try {
      const { exportToPdf } = await import('../../lib/pdf')
      await exportToPdf(contentRef.current)
    } finally {
      setExporting(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={exporting}
      className="bg-brand hover:bg-brand-mid text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-wait flex items-center gap-2"
    >
      {exporting ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
          </svg>
          Generating…
        </>
      ) : (
        ui.downloadPdf[lang]
      )}
    </button>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DetailsPage() {
  const router = useRouter()
  const { lang } = useLanguage()
  const { selectedTypes, checkedActions, toggleAction, setStep } = useSession()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedTypes.length === 0) {
      router.replace('/')
    }
  }, [selectedTypes, router])

  const selected = applicationTypes.filter((t) => selectedTypes.includes(t.id))
  if (selected.length === 0) return null

  function handleBack() {
    setStep('selection')
    router.push('/')
  }

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
      {/* Top nav — outside the captured content */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleBack}
          className="text-brand font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
        >
          {ui.backButton[lang]}
        </button>
        <DownloadButton lang={lang} contentRef={contentRef} />
      </div>

      {/* Captured content: title + all cards */}
      <div ref={contentRef} className="bg-surface">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{ui.detailsPageTitle[lang]}</h1>

        <div className="space-y-8">
          {selected.map((appType) => (
            <DetailCard
              key={appType.id}
              appType={appType}
              lang={lang}
              checkedItems={checkedActions[appType.id] ?? Array(appType.actionItems.length).fill(false)}
              onToggleAction={(i) => toggleAction(appType.id, i, appType.actionItems.length)}
            />
          ))}
        </div>

        {/* Footer inside capture */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400 space-y-1">
          <p>{ui.footerDisclaimer[lang]}</p>
          <p>{ui.footerSource[lang]}</p>
        </div>
      </div>

      {/* Bottom nav — outside the captured content */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handleBack}
          className="text-brand font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
        >
          {ui.backButton[lang]}
        </button>
        <DownloadButton lang={lang} contentRef={contentRef} />
      </div>
    </main>
  )
}
