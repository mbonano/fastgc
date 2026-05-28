import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Providers from './components/Providers'
import Header from './components/Header'
import Footer from './components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'FastGC — U.S. Green Card Guide',
  description:
    'Plain-language guide to every U.S. green card eligibility category. Learn how to apply and how to speed up your case.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-surface antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-SJRZ0FFKQ8" />
    </html>
  )
}
