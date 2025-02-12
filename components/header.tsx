'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type HeaderProps = {
  scrollToSection: (sectionId: string) => void
}

export function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="py-6 px-8 border-b fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Portfolio Creator<span className="text-neutral-500">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-neutral-900 hover:text-neutral-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-neutral-900 hover:text-neutral-600 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('certifications')} className="text-neutral-900 hover:text-neutral-600 transition-colors">
            Certifications
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-neutral-900 hover:text-neutral-600 transition-colors">
            Contact
          </button>
          <Link 
            href="/contact" 
            className="text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2"
          >
            Book a call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

