'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/lib/profile'

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Intro', href: '/intro' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-lg tracking-tight text-white hover:text-accent transition-colors">
          Skanda Bharadwaj GM
        </Link>
        <ul className="flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
            >
              GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
