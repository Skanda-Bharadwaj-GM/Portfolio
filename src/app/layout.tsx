import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import SocialLinks from '@/components/SocialLinks'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Skanda Bharadwaj GM | Portfolio',
  description: 'Portfolio of Skanda Bharadwaj GM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-grid min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-20 pb-24">
          {children}
        </main>
        <footer className="border-t border-white/5 py-6">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-2 text-xs text-zinc-500">
            <SocialLinks />
            <p className="text-center">
              Designed by <span className="text-zinc-300 font-medium">Skanda Bharadwaj GM</span> ·
              <span className="ml-1">Copyright © Skanda 2026</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
