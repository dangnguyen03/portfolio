'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-6 px-12 border-b fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-white">
          Portfolio Creator<span className="text-neutral-500 dark:text-neutral-400">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('certificates')} className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            Certifications
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            Contact
          </button>
          <Link 
            href="/contact" 
            className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex items-center gap-2"
          >
            Book a call
            <ArrowRight className="w-4 h-4" />
          </Link>
          <ThemeToggle />
        </nav> 
      </div>
    </header>
  )
}

