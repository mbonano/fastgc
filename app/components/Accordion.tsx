'use client'

import { useId } from 'react'

interface Props {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export default function Accordion({ title, isOpen, onToggle, children }: Props) {
  const panelId = useId()

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
      >
        <span className="font-semibold text-gray-900 text-base">{title}</span>
        <span
          className="ml-4 shrink-0 text-brand transition-transform duration-200"
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

      <div
        id={panelId}
        role="region"
        hidden={!isOpen}
        className="border-t border-gray-200"
      >
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  )
}
