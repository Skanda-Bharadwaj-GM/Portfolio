'use client'

import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  const handleNavigate = () => {
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link
          href="/"
          className="font-display font-semibold text-lg tracking-tight text-white hover:text-accent transition-colors"
          onClick={handleNavigate}
        >
          Skanda Bharadwaj GM
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          aria-label="Open navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" d="M4 7h16" />
            <path strokeLinecap="round" d="M4 12h16" />
            <path strokeLinecap="round" d="M4 17h10" />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden absolute right-0 top-14 w-48 rounded-2xl bg-surface border border-white/10 shadow-lg shadow-black/40 py-2">
            <ul className="flex flex-col">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleNavigate}
                    className={`block px-4 py-2.5 text-sm ${
                      pathname === href
                        ? 'bg-white/10 text-white'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-white/10 pt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-accent hover:bg-white/5"
                  onClick={handleNavigate}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
