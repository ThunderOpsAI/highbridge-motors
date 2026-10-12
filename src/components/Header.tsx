'use client';

import { Menu, X, Phone, Car, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '(03) 5728 1335';
  const cleanPhone = '0357281335';

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-surface-950/95 backdrop-blur-xl border-b border-surface-800 shadow-xl py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
              <div className="h-11 sm:h-12 px-3 py-1 bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center font-black text-lg">
                <Car className="w-5 h-5 mr-1" />
                <span>HIGHBRIDGE</span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-white font-extrabold text-sm tracking-tight leading-none">Highbridge Motors</div>
                <div className="text-blue-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Beechworth &bull; Licensed RWC</div>
              </div>
            </Link>
            
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-800/80 border border-surface-700/60 text-[11px] text-surface-300">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>4/26 Crawford St, Beechworth</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/#booking" className="text-surface-300 hover:text-blue-400 transition-colors text-sm font-semibold tracking-wide">
              Book a Service
            </Link>
            <Link href="/#rwc" className="text-surface-300 hover:text-blue-400 transition-colors text-sm font-semibold tracking-wide">
              Roadworthy (RWC)
            </Link>
            <Link href="/#services" className="text-surface-300 hover:text-blue-400 transition-colors text-sm font-semibold tracking-wide">
              Logbook Servicing
            </Link>
            <Link href="/#contact" className="text-surface-300 hover:text-blue-400 transition-colors text-sm font-semibold tracking-wide">
              Workshop &amp; Hours
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-950/60"
            >
              <span>Book a Service / Call Now</span>
            </a>

            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-850 hover:bg-surface-800 border border-surface-700 text-blue-400 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneNumber}</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-surface-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-surface-900 border-t border-surface-800 px-4 py-6 space-y-4">
          <Link href="/#booking" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-blue-400 font-medium">
            Book a Service Form
          </Link>
          <Link href="/#rwc" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-blue-400 font-medium">
            Roadworthy Inspection (RWC)
          </Link>
          <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-blue-400 font-medium">
            Mechanical Services
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-blue-400 font-medium">
            Workshop &amp; Hours
          </Link>
          <div className="pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Workshop: {phoneNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
