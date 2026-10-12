import { Phone, Car, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function PreFooterCTAs() {
  const phoneNumber = '(03) 5728 1335';
  const cleanPhone = '0357281335';

  return (
    <section className="py-16 bg-surface-900 border-t border-surface-800 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-surface-950 to-surface-900 rounded-3xl p-8 sm:p-12 border border-blue-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700 mb-3 inline-block">
              Beechworth Local Mechanics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Due for a Routine Logbook Service or VicRoads RWC?
            </h2>
            <p className="mt-3 text-sm text-surface-300">
              Book online in seconds or call our friendly Crawford Street workshop team to lock in your appointment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="#booking"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all"
            >
              Book a Service
            </a>
            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-3.5 bg-surface-900 hover:bg-surface-800 border border-surface-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call (03) 5728 1335</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
