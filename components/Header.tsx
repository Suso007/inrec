'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Pacifico } from 'next/font/google';

const orbitron = Pacifico({ subsets: ['latin'], weight: ['400'] });


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-white/40'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}
        >
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <div
              className={`transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-9 h-9'
              }`}
            >
              <img src="/logo.png" alt="INREC Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
<span
  className={`${orbitron.className} font-bold tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 ${
    isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl lg:text-2xl'
  }`}
>
  inrec
</span>

              <span
                className={`text-gray-600 transition-all duration-500 ${
                  isScrolled ? 'text-[10px]' : 'text-[10px] sm:text-xs'
                }`}
              >
                {/* Optional tagline/location */}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/products', label: 'Products' },
              { href: '/services', label: 'Services' },
              { href: '/blogs', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 cursor-pointer relative text-xs lg:text-sm ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA (optional) */}
          <div className="hidden lg:block">
            <Link href="/products">
              <span
                className={`flex items-center gap-1.5 rounded-full font-medium transition-all duration-500 hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 ${
                  isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-xs lg:text-sm'
                }`}
              >
                Explore
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer text-blue-600 hover:bg-blue-50"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 top-0 w-6 h-0.5 bg-current transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-6 h-0.5 bg-current transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-blue-200 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-1">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/products', label: 'Products' },
                { href: '/services', label: 'Services' },
                { href: '/blogs', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
