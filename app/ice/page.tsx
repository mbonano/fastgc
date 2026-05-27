'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from '../context/language'
import { ui } from '../data/content'
import type { Lang } from '../data/content'
import { isWithin100MileBorderZone, getMinBorderDistanceMiles } from '../../lib/borderZone'
import { iceUI, uscisImpacts, canDoItems, cannotDoItems } from './content'

const BorderZoneMap = dynamic(() => import('../components/BorderZoneMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-lg bg-gray-100 animate-pulse" style={{ height: 280 }} />
  ),
})

type BorderStatus = 'loading' | 'inside' | 'outside' | 'error'

export default function IcePage() {
  const { lang } = useLanguage()
  const [borderStatus, setBorderStatus] = useState<BorderStatus>('loading')
  const [distanceMiles, setDistanceMiles] = useState<number | null>(null)
  const [position, setPosition] = useState<{ lat: number; lon: number } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setBorderStatus('error')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        const inside = isWithin100MileBorderZone(latitude, longitude)
        const dist = getMinBorderDistanceMiles(latitude, longitude)
        setPosition({ lat: latitude, lon: longitude })
        setDistanceMiles(dist)
        setBorderStatus(inside ? 'inside' : 'outside')
      },
      () => setBorderStatus('error'),
      { timeout: 8000 }
    )
  }, [])

  return (
    <main className="flex-1 py-8 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        {/* Page header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {iceUI.pageTitle[lang]}
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {iceUI.pageSubtitle[lang]}
          </p>
        </div>

        {/* Border zone status banner */}
        <BorderZoneBanner status={borderStatus} distanceMiles={distanceMiles} lang={lang} />

        {/* Map — only shown once we have coordinates */}
        {position && distanceMiles !== null && (
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <BorderZoneMap
              lat={position.lat}
              lon={position.lon}
              isInside={borderStatus === 'inside'}
              distanceMiles={distanceMiles}
              yourLocationLabel={iceUI.mapYourLocation[lang]}
              milesFromBorderLabel={iceUI.mapMilesFromBorder[lang]}
              legendText={iceUI.mapLegend[lang]}
            />
          </div>
        )}

        {/* USCIS May 2026 Memo */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 text-amber-600 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <h2 className="text-sm font-semibold text-amber-800 uppercase tracking-wide">
                  {iceUI.memoSectionBadge[lang]}
                </h2>
                <p className="mt-1 text-sm text-amber-900 leading-relaxed">
                  {iceUI.memoSectionIntro[lang]}
                </p>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-50">
            {uscisImpacts.map((item, i) => (
              <li key={i} className="px-6 py-4">
                <p className="text-sm font-semibold text-gray-800">{item.heading[lang]}</p>
                <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">{item.text[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* What ICE can do */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {iceUI.canDoHeader[lang]}
            </h2>
            <p className="mt-1 text-xs text-gray-500">{iceUI.canDoSubheader[lang]}</p>
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
                      {iceUI.legalSourceLabel[lang]}{' '}
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
        </section>

        {/* What ICE cannot do */}
        <section className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-blue-100 bg-blue-50">
            <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
              {iceUI.cannotDoHeader[lang]}
            </h2>
            <p className="mt-1 text-xs text-blue-600">{iceUI.cannotDoSubheader[lang]}</p>
          </div>
          <ul className="divide-y divide-blue-50">
            {cannotDoItems.map((item, i) => (
              <li key={i} className="px-6 py-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-blue-500 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-blue-900">{item.limitation[lang]}</p>
                    <p className="mt-0.5 text-sm text-blue-800 leading-relaxed">{item.explanation[lang]}</p>
                    <p className="mt-1.5 text-xs text-blue-400">
                      {iceUI.protectedByLabel[lang]}{' '}
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
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center pb-2">
          {iceUI.disclaimer[lang]}
        </p>

      </div>
    </main>
  )
}

function BorderZoneBanner({
  status,
  distanceMiles,
  lang,
}: {
  status: BorderStatus
  distanceMiles: number | null
  lang: Lang
}) {
  if (status === 'loading') {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 flex items-center gap-3">
        <svg className="w-5 h-5 text-gray-400 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <span className="text-sm text-gray-500">{ui.borderZoneChecking[lang]}</span>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="text-sm text-gray-600">{ui.borderZoneError[lang]}</p>
          <p className="text-xs text-gray-400 mt-0.5">{iceUI.bannerLocationHint[lang]}</p>
        </div>
      </div>
    )
  }

  const inside = status === 'inside'

  return (
    <div
      className={`rounded-xl border-l-4 px-5 py-4 flex items-start gap-3 ${
        inside ? 'bg-orange-50 border-orange-500' : 'bg-green-50 border-green-500'
      }`}
    >
      <span className={`flex-shrink-0 mt-0.5 ${inside ? 'text-orange-500' : 'text-green-600'}`}>
        {inside ? (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
        )}
      </span>
      <div>
        <p className={`text-sm font-semibold ${inside ? 'text-orange-800' : 'text-green-800'}`}>
          {ui[inside ? 'borderZoneInside' : 'borderZoneOutside'][lang]}
          {distanceMiles !== null && (
            <span className="font-normal ml-1">
              (~{distanceMiles} {iceUI.milesAbbrev[lang]})
            </span>
          )}
        </p>
        <p className={`text-xs mt-0.5 leading-relaxed ${inside ? 'text-orange-700' : 'text-green-700'}`}>
          {inside ? iceUI.bannerInsideDetail[lang] : iceUI.bannerOutsideDetail[lang]}
        </p>
        <p className="text-xs mt-1 text-gray-400">
          {iceUI.bannerZoneNote[lang]}
        </p>
      </div>
    </div>
  )
}
