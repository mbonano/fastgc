'use client'

import { useLanguage } from '../context/language'
import { rightsUI, memoImpacts, canDoItems, cannotDoItems } from './content'

const MEMO_SOURCE_URL = 'https://www.uscis.gov/sites/default/files/document/memos/PM-602-0199-AdjustmentOfStatusAndDiscretion-20260521.pdf'

export default function RightsPage() {
  const { lang } = useLanguage()

  return (
    <main className="flex-1 py-8 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        {/* Page header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {rightsUI.pageTitle[lang]}
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {rightsUI.pageSubtitle[lang]}
          </p>
        </div>

        {/* USCIS Memo May 2026 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-sm font-bold text-amber-800">
                    {rightsUI.memoTitle[lang]}
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-200 text-amber-800 whitespace-nowrap">
                    {rightsUI.memoBadge[lang]}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-amber-900 leading-relaxed">
                  {rightsUI.memoIntro[lang]}
                </p>
                <a
                  href={MEMO_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 underline hover:text-amber-900 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                  </svg>
                  {rightsUI.memoSourceLabel[lang]}
                </a>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {rightsUI.memoKeyImpactsHeader[lang]}
            </p>
          </div>
          <ul className="divide-y divide-gray-50">
            {memoImpacts.map((item, i) => (
              <li key={i} className="px-6 py-4 flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.heading[lang]}</p>
                  <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">{item.text[lang]}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ICE & CBP intro */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-base font-bold text-gray-800">{rightsUI.iceCbpTitle[lang]}</h2>
            <p className="mt-1 text-sm text-gray-500 leading-relaxed">{rightsUI.iceCbpIntro[lang]}</p>
          </div>

          {/* What they CAN do */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {rightsUI.canDoHeader[lang]}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{rightsUI.canDoSubheader[lang]}</p>
            </div>
            <ul className="divide-y divide-gray-50">
              {canDoItems.map((item, i) => (
                <li key={i} className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{item.action[lang]}</p>
                      <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">{item.explanation[lang]}</p>
                      <p className="mt-1.5 text-xs text-gray-400">
                        {rightsUI.legalSourceLabel[lang]}{' '}
                        {item.sourceUrl ? (
                          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                            {item.source}
                          </a>
                        ) : (
                          item.source
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* What they CANNOT do */}
          <div className="bg-blue-50">
            <div className="px-6 py-3 border-b border-blue-100">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                {rightsUI.cannotDoHeader[lang]}
              </p>
              <p className="text-xs text-blue-500 mt-0.5">{rightsUI.cannotDoSubheader[lang]}</p>
            </div>
            <ul className="divide-y divide-blue-100">
              {cannotDoItems.map((item, i) => (
                <li key={i} className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-blue-900">{item.limitation[lang]}</p>
                      <p className="mt-0.5 text-sm text-blue-800 leading-relaxed">{item.explanation[lang]}</p>
                      <p className="mt-1.5 text-xs text-blue-400">
                        {rightsUI.protectedByLabel[lang]}{' '}
                        {item.sourceUrl ? (
                          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            {item.source}
                          </a>
                        ) : (
                          item.source
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </main>
  )
}
