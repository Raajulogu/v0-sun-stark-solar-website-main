'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Works', href: '/works' },
    { label: 'Process', href: '/process' },
    { label: 'Partners', href: '/partners' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold flex-shrink-0">
            <div className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-lg bg-accent">
              <span className="text-base sm:text-lg font-bold text-accent-foreground">☀️</span>
            </div>
            <span className="text-foreground tracking-tight hidden sm:inline">SunStark</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden hover:bg-secondary transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="space-y-1 border-t border-border pb-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-full mt-3 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
