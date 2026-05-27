'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/language'
import { useSession } from '../context/session'
import { ui } from '../data/content'
import { applicationTypes } from '../../lib/applicationData'
import type { ApplicationType, Lang } from '../../lib/applicationData'

// ─── Sub-components ──────────────────────────────────────────────────────────

function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="relative group inline-flex items-center cursor-help">
      <svg className="w-3.5 h-3.5 text-brand opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 px-3 py-2 text-xs text-white bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 leading-relaxed">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
      </span>
    </span>
  )
}

type InfoBlockVariant = 'blue' | 'amber' | 'emerald' | 'orange'

const infoBlockStyles: Record<InfoBlockVariant, { wrap: string; label: string }> = {
  blue:    { wrap: 'bg-blue-50 border-l-4 border-blue-300 rounded-lg px-4 py-3',    label: 'text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1' },
  amber:   { wrap: 'bg-amber-50 border-l-4 border-amber-400 rounded-lg px-4 py-3',  label: 'text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1' },
  emerald: { wrap: 'bg-emerald-50 border-l-4 border-emerald-500 rounded-lg px-4 py-3', label: 'text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1' },
  orange:  { wrap: 'bg-orange-50 border-l-4 border-orange-400 rounded-lg px-4 py-3', label: 'text-xs font-semibold text-orange-700 uppercase tracking-wide mb-1' },
}

function InfoBlock({ label, value, tooltip, variant }: { label: string; value: string; tooltip?: string; variant: InfoBlockVariant }) {
  const s = infoBlockStyles[variant]
  return (
    <div className={s.wrap}>
      <div className="flex items-center gap-1.5 mb-1">
        <p className={s.label}>{label}</p>
        {tooltip && <InfoTooltip text={tooltip} />}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
    </div>
  )
}

function SectionHeader({ label, color }: { label: string; color: string }) {
  return (
    <h3 className={`text-xs font-semibold uppercase tracking-wide mb-3 ${color}`}>
      {label}
    </h3>
  )
}

function CollapsibleSection({
  label,
  color,
  bgColor,
  defaultOpen = false,
  showLabel,
  hideLabel,
  children,
}: {
  label: string
  color: string
  bgColor: string
  defaultOpen?: boolean
  showLabel: string
  hideLabel: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={bgColor}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <h3 className={`text-xs font-semibold uppercase tracking-wide ${color}`}>{label}</h3>
        <span className={`text-xs font-medium ${color} flex items-center gap-1`}>
          {open ? hideLabel : showLabel}
          <svg
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && <div className="px-6 pb-5">{children}</div>}
    </div>
  )
}

interface DetailCardProps {
  appType: ApplicationType
  lang: Lang
  checkedItems: boolean[]
  onToggleAction: (index: number) => void
  showLabel: string
  hideLabel: string
}

function DetailCard({ appType, lang, checkedItems, onToggleAction, showLabel, hideLabel }: DetailCardProps) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Card header */}
      <div className="bg-brand px-6 py-5">
        <h2 className="text-xl font-bold text-white">{appType.name[lang]}</h2>
        <p className="text-green-200 text-sm mt-1">{appType.simpleDescription[lang]}</p>
      </div>

      <div className="divide-y divide-gray-100">

        {/* Explanation */}
        <div className="px-6 py-5">
          <p className="text-gray-700 leading-relaxed">{appType.explanation[lang]}</p>
        </div>

        {/* Who can apply */}
        {appType.applicants.length > 0 && (
          <div className="px-6 py-5">
            <SectionHeader label={ui.whoCanApply[lang]} color="text-brand" />
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

        {/* Timeline + filing facts row */}
        <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoBlock variant="blue"    label={ui.targetTimeline[lang]}      value={appType.targetTimeline[lang]} />
          {appType.countrySpecificInfo[lang] && (
            <InfoBlock variant="amber" label={ui.countrySpecificInfo[lang]} value={appType.countrySpecificInfo[lang]} />
          )}
          <InfoBlock variant="emerald" label={ui.canFileConcurrently[lang]} value={appType.canFileConcurrently[lang]} tooltip={ui.canFileConcurrentlyTooltip[lang]} />
          <InfoBlock variant="orange"  label={ui.commonWaivers[lang]}       value={appType.commonWaivers[lang]}       tooltip={ui.commonWaiversTooltip[lang]} />
        </div>

        {/* Critical Warnings — always visible */}
        {appType.criticalWarnings && appType.criticalWarnings.length > 0 && (
          <div className="px-6 py-5 bg-red-50 border-l-4 border-red-500">
            <SectionHeader label={ui.criticalWarnings[lang]} color="text-red-700" />
            <ul className="space-y-3">
              {appType.criticalWarnings.map((warn, i) => (
                <li key={i} className="flex gap-3 text-sm text-red-900">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 text-red-700 font-bold text-xs flex items-center justify-center mt-0.5">!</span>
                  <span className="leading-relaxed">{warn[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        <div className="px-6 py-5 bg-gray-50">
          <SectionHeader label={ui.steps[lang]} color="text-brand" />
          <ol className="space-y-2">
            {appType.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand text-brand font-bold text-xs flex items-center justify-center mt-0.5 shadow-sm">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step[lang].replace(/^Step \d+: /, '').replace(/^Paso \d+: /, '').replace(/^Шаг \d+: /, '')}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Action Items */}
        <div className="px-6 py-5">
          <SectionHeader label={ui.actionItems[lang]} color="text-brand" />
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
                    <span className={`text-sm leading-relaxed transition-colors ${checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                      {item[lang]}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Prevention Tips */}
        <div className="px-6 py-5 bg-rose-50">
          <SectionHeader label={ui.preventionTips[lang]} color="text-rose-700" />
          <ul className="space-y-2">
            {appType.preventionSuggestions.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-rose-900">
                <span className="flex-shrink-0 text-rose-400 mt-1 font-bold">!</span>
                <span className="leading-relaxed">{tip[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Acceleration Tips */}
        <div className="px-6 py-5 bg-emerald-50">
          <SectionHeader label={ui.accelerationTips[lang]} color="text-emerald-700" />
          <ul className="space-y-3">
            {appType.accelerationTips.map((tip, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-emerald-900">
                <span className="flex-shrink-0 text-emerald-500 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="leading-relaxed">{tip[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interview Preparation — collapsible, open by default */}
        <CollapsibleSection
          label={ui.interviewPrep[lang]}
          color="text-violet-700"
          bgColor="bg-violet-50"
          defaultOpen={true}
          showLabel={showLabel}
          hideLabel={hideLabel}
        >
          <ul className="space-y-3">
            {appType.interviewPrep.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-violet-900">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-violet-200 text-violet-700 font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{tip[lang]}</span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {/* Communication Templates — collapsible, closed by default */}
        {appType.communicationTemplates.length > 0 && (
          <CollapsibleSection
            label={ui.communicationTemplates[lang]}
            color="text-brand"
            bgColor="bg-white"
            defaultOpen={false}
            showLabel={showLabel}
            hideLabel={hideLabel}
          >
            <div className="space-y-4">
              {appType.communicationTemplates.map((tmpl, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 text-sm space-y-1 border-b border-gray-200">
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
          </CollapsibleSection>
        )}

        {/* What Comes Next — collapsible, closed by default */}
        {appType.whatComesNext && appType.whatComesNext.length > 0 && (
          <CollapsibleSection
            label={ui.whatComesNext[lang]}
            color="text-sky-700"
            bgColor="bg-sky-50"
            defaultOpen={false}
            showLabel={showLabel}
            hideLabel={hideLabel}
          >
            <ul className="space-y-3">
              {appType.whatComesNext.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-sky-900">
                  <span className="flex-shrink-0 text-sky-500 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item[lang]}</span>
                </li>
              ))}
            </ul>
          </CollapsibleSection>
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
              showLabel={ui.showSection[lang]}
              hideLabel={ui.hideSection[lang]}
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
