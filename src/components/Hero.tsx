'use client';

import { Car, ShieldCheck, Phone, ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const phoneNumber = '(03) 5728 1335';
  const cleanPhone = '0357281335';

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            VicRoads Licensed Tester &bull; Beechworth Workshop
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Logbook Servicing &amp; Roadworthy (RWC) Centre in Beechworth.
          </h1>

          <p className="text-lg sm:text-xl text-surface-300 leading-relaxed mb-8 max-w-2xl font-light">
            Keep your car running smoothly and legally certified with Highbridge Motors. From routine dealership warranty logbook servicing and electronic EFI diagnostics to official VicRoads Roadworthy Certificates and 4WD brake overhauls.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#booking"
              className="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-950/50 flex items-center justify-center gap-2"
            >
              <span>Book a Service / Request Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-4 bg-surface-900 hover:bg-surface-850 text-white border border-surface-700 font-bold rounded-xl text-center text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Workshop: (03) 5728 1335</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-surface-800 text-xs text-surface-400">
            <div>
              <div className="text-white font-black text-lg">VicRoads RWC</div>
              <div>Licensed Vehicle Tester</div>
            </div>
            <div>
              <div className="text-white font-black text-lg">Warranty Safe</div>
              <div>Factory Logbook Servicing</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-white font-black text-lg">4WD &amp; Passenger</div>
              <div>Full Mechanical Repairs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
