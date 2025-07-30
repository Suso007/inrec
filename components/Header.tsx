
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="hover:scale-105 transition-transform cursor-pointer flex items-center">
          <img 
            src="https://static.readdy.ai/image/1450204e7456e605b9ffeb3252b693e1/a0abcb56231d1a2525a33ec6049b1445.png" 
            alt="INREC Logo" 
            className="h-10 w-10 mr-3"
          />
          <span className="text-3xl font-bold font-pacifico bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">INREC</span>
        </Link>

        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/about') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            About
          </Link>
          <Link href="/products" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/products') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Products
          </Link>
          <Link href="/services" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/services') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Services
          </Link>
          <Link href="/blogs" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/blogs') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Blog
          </Link>
          <Link href="/contact" className={`hover:scale-110 transition-transform cursor-pointer font-medium ${
            isActive('/contact') 
              ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center cursor-pointer space-y-1"
        >
          <div className={`w-6 h-0.5 bg-blue-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-blue-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-blue-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b-2 border-blue-200 lg:hidden">
            <nav className="flex flex-col p-6 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/about') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                About
              </Link>
              <Link href="/products" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/products') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Products
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/services') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Services
              </Link>
              <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/blogs') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Blog
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`font-medium cursor-pointer ${
                isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
