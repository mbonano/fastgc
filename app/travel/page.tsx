'use client'

import { useLanguage } from '../context/language'
import { travelUI, travelByStatus, requiredDocuments, practicalTips, domesticTravelUI, domesticTravelItems } from './content'
import type { SafetyLevel, DomesticTravelItem } from './content'

const DOMESTIC_HIGHLIGHT_STYLES = {
  warning: {
    icon: 'text-amber-500',
    iconPath: 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z',
    title: 'text-amber-800',
    body: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
  },
  tip: {
    icon: 'text-green-500',
    iconPath: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
    title: 'text-green-800',
    body: 'text-green-700',
    bg: 'bg-green-50 border-green-200',
  },
  info: {
    icon: 'text-sky-500',
    iconPath: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
    title: 'text-sky-800',
    body: 'text-sky-700',
    bg: 'bg-sky-50 border-sky-200',
  },
} satisfies Record<NonNullable<DomesticTravelItem['highlight']>, unknown>

const SAFETY_STYLES: Record<SafetyLevel, { badge: string; border: string; bg: string; text: string; ruleText: string }> = {
  safe: {
    badge: 'bg-green-100 text-green-800',
    border: 'border-green-200',
    bg: 'bg-green-50',
    text: 'text-green-900',
    ruleText: 'text-green-800',
  },
  risk: {
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    ruleText: 'text-amber-800',
  },
  restricted: {
    badge: 'bg-red-100 text-red-800',
    border: 'border-red-200',
    bg: 'bg-red-50',
    text: 'text-red-900',
    ruleText: 'text-red-800',
  },
  unsafe: {
    badge: 'bg-red-200 text-red-900',
    border: 'border-red-300',
    bg: 'bg-red-50',
    text: 'text-red-900',
    ruleText: 'text-red-900',
  },
}

export default function TravelPage() {
  const { lang } = useLanguage()

  return (
    <main className="flex-1 py-8 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        {/* Page header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {travelUI.pageTitle[lang]}
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {travelUI.pageSubtitle[lang]}
          </p>
        </div>

        {/* General risk warning */}
        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-red-800">{travelUI.warningHeading[lang]}</p>
              <p className="mt-1 text-sm text-red-700 leading-relaxed">{travelUI.warningText[lang]}</p>
              <p className="mt-2 text-sm font-semibold text-red-800">{travelUI.warningAttorney[lang]}</p>
            </div>
          </div>
        </div>

        {/* Domestic travel */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {domesticTravelUI.sectionHeader[lang]}
            </h2>
            <p className="mt-1 text-xs text-gray-500">{domesticTravelUI.sectionSubheader[lang]}</p>
          </div>
          <div className="divide-y divide-gray-100">
            {domesticTravelItems.map((item, i) => {
              const style = item.highlight ? DOMESTIC_HIGHLIGHT_STYLES[item.highlight] : null
              return (
                <div key={i} className={`px-6 py-5 ${style ? `${style.bg} border-l-4` : ''}`}>
                  <div className="flex items-start gap-3">
                    {style && (
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${style.icon}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d={style.iconPath} clipRule="evenodd" />
                      </svg>
                    )}
                    <div>
                      <p className={`text-sm font-semibold ${style ? style.title : 'text-gray-800'}`}>
                        {item.title[lang]}
                      </p>
                      <p className={`mt-1 text-sm leading-relaxed ${style ? style.body : 'text-gray-600'}`}>
                        {item.body[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Travel by status */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {travelUI.statusSectionHeader[lang]}
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">
                {travelUI.internationalBadge[lang]}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">{travelUI.statusSectionSubheader[lang]}</p>
          </div>
          <div className="divide-y divide-gray-100">
            {travelByStatus.map((row, i) => {
              const s = SAFETY_STYLES[row.safetyLevel]
              return (
                <div key={i} className={`px-6 py-5 ${s.bg}`}>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <p className={`text-sm font-semibold ${s.text}`}>{row.status[lang]}</p>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${s.badge}`}>
                      {row.safetyLabel[lang]}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm leading-relaxed ${s.ruleText}`}>{row.rule[lang]}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Required documents */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {travelUI.docsSectionHeader[lang]}
            </h2>
            <p className="mt-1 text-xs text-gray-500">{travelUI.docsSectionSubheader[lang]}</p>
          </div>
          <ul className="divide-y divide-gray-50">
            {requiredDocuments.map((doc, i) => (
              <li key={i} className="px-6 py-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-light text-brand font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{doc[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Practical tips */}
        <section className="bg-sky-50 rounded-xl border border-sky-100 px-6 py-5">
          <h2 className="text-sm font-semibold text-sky-700 uppercase tracking-wide mb-3">
            {travelUI.tipsSectionHeader[lang]}
          </h2>
          <ul className="space-y-2.5">
            {practicalTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-sky-900 leading-relaxed">{tip[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center pb-2">
          {travelUI.disclaimer[lang]}
        </p>

      </div>
    </main>
  )
}
