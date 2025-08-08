'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-gray-800/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        {/* Top: brand + brief */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="INREC Logo"
              className="h-10 w-10 rounded-xl shadow-lg ring-1 ring-white/10"
            />
            <div>
              <h3 className="text-3xl font-pacifico font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                INREC
              </h3>
              <p className="text-sm text-gray-400">Innovative Technology Solutions</p>
            </div>
          </div>

          {/* Partner badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-900/20 px-3 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
            Microsoft Partner
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Services', href: '/services' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-200">Solutions</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Software Development</li>
              <li>Drone Technology</li>
              <li>Microsoft Solutions</li>
              <li>Custom Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-200">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  href="/contact"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  href="/blogs"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-gray-200">Stay Updated</h4>
            <p className="mt-4 text-sm text-gray-400">
              Get product updates, case studies, and tech insights straight to your inbox.
            </p>
            <form
              className="mt-4 flex w-full items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 p-1.5 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-900/30"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Subscribed!');
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow hover:from-blue-600 hover:to-indigo-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} INREC. All rights reserved.</p>

          {/* Social / Button bar */}
          <div className="flex flex-wrap items-center gap-3 text-gray-400">
            {[
              { label: 'Twitter', color: 'hover:text-blue-400', path: 'M22.46 6c-.77...' },
              { label: 'LinkedIn', color: 'hover:text-blue-400', path: 'M4.98 3.5C4.98...' },
              { label: 'GitHub', color: 'hover:text-gray-300', path: 'M12 .5a12 12...' },
              { label: 'WhatsApp', color: 'hover:text-green-400', path: 'M16 .5C7.44...' },
              { label: 'Facebook', color: 'hover:text-blue-500', path: 'M22.676 0H1.326...' },
            ].map((icon, i) => (
              <a key={i} aria-label={icon.label} href="#" className={`${icon.color} transition-colors`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Accent border */}
      <div className="border-t-2 border-blue-500/30" />
    </footer>
  );
}
