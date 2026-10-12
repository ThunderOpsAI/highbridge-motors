import { Phone, Mail, MapPin, Car } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-surface-400 text-xs py-14 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-base">
              <Car className="w-5 h-5 text-blue-400" />
              <span>Highbridge Motors</span>
            </div>
            <p className="text-surface-400 max-w-sm leading-relaxed">
              Certified automotive mechanics in Beechworth. VicRoads Licensed Roadworthy Inspection Centre, logbook servicing, brakes, clutches, and auto diagnostics.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Workshop &amp; Contact</h4>
            <div className="flex items-center gap-2 text-surface-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>4/26 Crawford Street, Beechworth VIC 3747</span>
            </div>
            <div className="flex items-center gap-2 text-surface-300">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href="tel:0357281335" className="hover:text-white transition-colors">(03) 5728 1335</a>
            </div>
            <div className="flex items-center gap-2 text-surface-300">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href="mailto:info@highbridgemotors.com.au" className="hover:text-white transition-colors">info@highbridgemotors.com.au</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
            <div><a href="#booking" className="hover:text-white transition-colors">Book a Service Form</a></div>
            <div><a href="#services" className="hover:text-white transition-colors">Roadworthy Inspections (RWC)</a></div>
            <div><a href="#services" className="hover:text-white transition-colors">Logbook Servicing</a></div>
            <div><span className="text-surface-500">Workshop Hours: Mon-Fri 8:30am - 5:00pm</span></div>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-surface-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Highbridge Motors. All rights reserved.
          </div>
          <div>
            4/26 Crawford St, Beechworth VIC 3747 &bull; Licensed VicRoads Tester
          </div>
        </div>
      </div>
    </footer>
  );
}
