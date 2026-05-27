'use client'

import { useId } from 'react'
import type { ApplicationType, Lang } from '../../lib/applicationData'
import { ui } from '../data/content'

interface Props {
  appType: ApplicationType
  lang: Lang
  isChecked: boolean
  isOpen: boolean
  onToggle: () => void
  onCheck: () => void
}

export default function ApplicationTypeAccordion({
  appType,
  lang,
  isChecked,
  isOpen,
  onToggle,
  onCheck,
}: Props) {
  const panelId = useId()
  const checkboxId = useId()

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-shadow ${
        isOpen ? 'border-brand shadow-md' : 'border-gray-200 shadow-sm'
      } ${isChecked ? 'ring-2 ring-brand/30' : ''}`}
    >
      {/* Header row */}
      <div className="flex items-start bg-white">
        {/* Checkbox — click area isolated so it doesn't toggle accordion */}
        <div className="flex-shrink-0 flex items-center px-4 pt-4 pb-4 self-start">
          <input
            id={checkboxId}
            type="checkbox"
            checked={isChecked}
            onChange={onCheck}
            className="h-5 w-5 rounded border-gray-400 text-brand accent-brand cursor-pointer focus:ring-2 focus:ring-brand focus:ring-offset-1"
            aria-label={`Select ${appType.name[lang]}`}
          />
        </div>

        {/* Title + subtitle — click toggles accordion */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex-1 flex items-center justify-between px-3 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset min-w-0"
        >
          <div className="min-w-0 pr-3">
            <p className="font-semibold text-gray-900 text-base leading-snug">
              {appType.name[lang]}
            </p>
            <p className="text-sm text-gray-500 mt-0.5 leading-snug">
              {appType.simpleDescription[lang]}
            </p>
          </div>
          <span
            className="ml-2 flex-shrink-0 text-brand transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Expanded panel */}
      <div
        id={panelId}
        role="region"
        hidden={!isOpen}
        className="border-t border-gray-200"
      >
        <div className="px-5 py-5 space-y-5">
          {/* Explanation */}
          <p className="text-gray-700 leading-relaxed text-sm">{appType.explanation[lang]}</p>

          {/* Applicants table — only when rows exist */}
          {appType.applicants.length > 0 && (
            <div className="overflow-x-auto -mx-1">
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
          )}

          {/* Meta fields */}
          <dl className="grid gap-3 sm:grid-cols-1">
            <div className="bg-gray-50 rounded-lg px-4 py-3">
              <dt className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                {ui.targetTimeline[lang]}
              </dt>
              <dd className="text-sm text-gray-700">{appType.targetTimeline[lang]}</dd>
            </div>
            <div className="bg-gray-50 rounded-lg px-4 py-3">
              <dt className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                {ui.canFileConcurrently[lang]}
              </dt>
              <dd className="text-sm text-gray-700">{appType.canFileConcurrently[lang]}</dd>
            </div>
            <div className="bg-gray-50 rounded-lg px-4 py-3">
              <dt className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                {ui.commonWaivers[lang]}
              </dt>
              <dd className="text-sm text-gray-700">{appType.commonWaivers[lang]}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
