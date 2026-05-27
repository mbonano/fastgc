'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'fastgc_session'

// checkedActions: { [appTypeId]: boolean[] } — one bool per action item index
interface StoredSession {
  selectedTypes: string[]
  currentStep: 'selection' | 'details'
  checkedActions: Record<string, boolean[]>
}

interface SessionContextValue {
  selectedTypes: string[]
  currentStep: 'selection' | 'details'
  checkedActions: Record<string, boolean[]>
  toggleType: (name: string) => void
  setStep: (step: 'selection' | 'details') => void
  toggleAction: (typeId: string, index: number, total: number) => void
  clearAndStart: () => void
  resumeStored: () => void
  hasStoredSession: boolean
  sessionStarted: boolean
  sessionReady: boolean
}

const SessionContext = createContext<SessionContextValue>({
  selectedTypes: [],
  currentStep: 'selection',
  checkedActions: {},
  toggleType: () => {},
  setStep: () => {},
  toggleAction: () => {},
  clearAndStart: () => {},
  resumeStored: () => {},
  hasStoredSession: false,
  sessionStarted: false,
  sessionReady: false,
})

function readStored(): StoredSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredSession) : null
  } catch {
    return null
  }
}

function writeStored(state: StoredSession) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState<'selection' | 'details'>('selection')
  const [checkedActions, setCheckedActions] = useState<Record<string, boolean[]>>({})
  const [hasStoredSession, setHasStoredSession] = useState(false)
  const [sessionStarted, setSessionStarted] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    const stored = readStored()
    setHasStoredSession(stored !== null && stored.selectedTypes.length > 0)
    setSessionReady(true)
  }, [])

  function save(types: string[], step: 'selection' | 'details', actions: Record<string, boolean[]>) {
    writeStored({ selectedTypes: types, currentStep: step, checkedActions: actions })
  }

  function toggleType(name: string) {
    setSelectedTypes((prev) => {
      const next = prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
      save(next, currentStep, checkedActions)
      return next
    })
  }

  function setStep(step: 'selection' | 'details') {
    setCurrentStep(step)
    save(selectedTypes, step, checkedActions)
  }

  function toggleAction(typeId: string, index: number, total: number) {
    setCheckedActions((prev) => {
      const current = prev[typeId] ?? Array(total).fill(false)
      const next = [...current]
      next[index] = !next[index]
      const updated = { ...prev, [typeId]: next }
      save(selectedTypes, currentStep, updated)
      return updated
    })
  }

  function clearAndStart() {
    localStorage.removeItem(STORAGE_KEY)
    setSelectedTypes([])
    setCurrentStep('selection')
    setCheckedActions({})
    setHasStoredSession(false)
    setSessionStarted(true)
  }

  function resumeStored() {
    const stored = readStored()
    if (stored) {
      setSelectedTypes(stored.selectedTypes)
      setCurrentStep(stored.currentStep)
      setCheckedActions(stored.checkedActions ?? {})
    }
    setSessionStarted(true)
  }

  return (
    <SessionContext.Provider
      value={{
        selectedTypes,
        currentStep,
        checkedActions,
        toggleType,
        setStep,
        toggleAction,
        clearAndStart,
        resumeStored,
        hasStoredSession,
        sessionStarted,
        sessionReady,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}
