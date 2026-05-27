'use client'

import { LanguageProvider } from '../context/language'
import { SessionProvider } from '../context/session'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SessionProvider>{children}</SessionProvider>
    </LanguageProvider>
  )
}
