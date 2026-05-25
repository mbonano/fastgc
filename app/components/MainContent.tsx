'use client'

import { useState } from 'react'
import { useLanguage } from '../context/language'
import { categories, ui } from '../data/content'
import type { AnyGroup, CategoryGroup } from '../data/content'
import Accordion from './Accordion'

function CategoryTable({ group, lang }: { group: CategoryGroup; lang: string }) {
  return (
    <div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{group.intro[lang as keyof typeof group.intro]}</p>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand-light">
              <th className="text-left px-4 py-3 font-semibold text-brand border-b border-gray-200 w-2/5">
                {group.colHeader1[lang as keyof typeof group.colHeader1]}
              </th>
              <th className="text-left px-4 py-3 font-semibold text-brand border-b border-gray-200 w-3/5">
                {group.colHeader2[lang as keyof typeof group.colHeader2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((row, i) => (
              <tr
                key={row.id}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-3 font-medium text-gray-900 align-top border-b border-gray-100">
                  {row.name[lang as keyof typeof row.name]}
                </td>
                <td className="px-4 py-3 text-gray-600 align-top border-b border-gray-100 leading-relaxed">
                  {row.qualifier[lang as keyof typeof row.qualifier]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GroupContent({ group, lang }: { group: AnyGroup; lang: string }) {
  if (group.type === 'simple') {
    return (
      <p className="text-gray-600 leading-relaxed">
        {group.text[lang as keyof typeof group.text]}
      </p>
    )
  }
  return <CategoryTable group={group} lang={lang} />
}

export default function MainContent() {
  const { lang } = useLanguage()
  const allIds = categories.map((g) => g.id)
  const [openIds, setOpenIds] = useState<string[]>([])

  const allOpen = openIds.length === allIds.length

  function toggleAll() {
    setOpenIds(allOpen ? [] : allIds)
  }

  function toggle(id: string) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
      {/* Intro */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {ui.introHeading[lang]}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          {ui.introText[lang]}
        </p>
      </section>

      {/* Expand/Collapse All */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleAll}
          className="text-sm text-brand font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
        >
          {allOpen ? ui.collapseAll[lang] : ui.expandAll[lang]}
        </button>
      </div>

      {/* Category Accordions */}
      <div className="flex flex-col gap-3">
        {categories.map((group) => (
          <Accordion
            key={group.id}
            title={group.title[lang]}
            isOpen={openIds.includes(group.id)}
            onToggle={() => toggle(group.id)}
          >
            <GroupContent group={group} lang={lang} />
          </Accordion>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-400 space-y-1">
        <p>{ui.footerDisclaimer[lang]}</p>
        <p>{ui.footerSource[lang]}</p>
      </footer>
    </main>
  )
}
