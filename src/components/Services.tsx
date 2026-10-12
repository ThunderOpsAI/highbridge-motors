'use client';

import { Wrench, ShieldCheck, Car, Check, Gauge, Cog } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'VicRoads Roadworthy Inspections (RWC)',
    category: 'Licensed Vehicle Testing Station',
    description: 'Certified roadworthy examinations for private sales, interstate transfers, and re-registration. Comprehensive safety checks on steering, suspension, tyres, and structure.',
    icon: ShieldCheck,
    tag: 'Licensed VicRoads Tester',
    specs: [
      'Comprehensive 40-Point Safety Check',
      'Electronic Brake Force & Roller Testing',
      'Tyre Tread, Rim & Wheel Bearing Checks',
      'Official VicRoads Certificate Issued'
    ]
  },
  {
    name: 'Manufacturer Logbook Servicing',
    category: 'Factory Warranty Compliant',
    description: 'Maintain your statutory new-car warranty without paying dealership premiums. We service according to exact factory handbook intervals with premium Castrol fluids.',
    icon: Car,
    tag: 'Statutory Warranty Safe',
    specs: [
      'Genuine or OEM Equivalent Filters & Parts',
      'Full Digital Diagnostic Scan Included',
      'Brake Fluid & Coolant Chemical Analysis',
      'Logbook Stamp & Service Interval Reset'
    ]
  },
  {
    name: 'Brakes, Clutches & Suspension',
    category: 'Mechanical Engineering',
    description: 'Brake disc machining, premium ceramic pads, heavy-duty clutch replacements, and lifted 4WD suspension kits fitted and tuned for alpine terrain.',
    icon: Wrench,
    tag: '4WD & Passenger Specialists',
    specs: [
      'Heavy-Duty Clutches for Towing & 4WDing',
      'Disc Brake Machining & Rotor Replacement',
      'Suspension Bushes, Control Arms & Shocks',
      'Power Steering Flush & Rack Overhauls'
    ]
  },
  {
    name: 'Electronic Diagnostics & Auto Electrical',
    category: 'Computer Systems',
    description: 'Advanced scan tool diagnostics to trace Check Engine lights, ABS, airbag, and traction control faults, alternator testing, and battery replacements.',
    icon: Gauge,
    tag: 'State-of-the-Art Scan Tools',
    specs: [
      'Live ECU Sensor Data Stream Analysis',
      'Common Rail Diesel (CRD) Injector Testing',
      'Charging System & Alternator Diagnostics',
      'Deep Cycle & Starter Battery Testing'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-surface-950 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800 mb-3 inline-block">
            Mechanical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Mechanical Workshop in Beechworth
          </h2>
          <p className="mt-4 text-surface-300 text-base">
            Located at 4/26 Crawford Street. Modern diagnostics, licensed testers, and honest country service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-surface-900 border border-surface-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-surface-800 px-2.5 py-1 rounded-md">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{svc.name}</h3>
                  <div className="text-xs text-blue-400 font-semibold mb-3">{svc.category}</div>
                  <p className="text-sm text-surface-300 leading-relaxed mb-6">{svc.description}</p>

                  <div className="space-y-2 mb-6">
                    {svc.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-surface-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-800 flex justify-between items-center">
                  <a
                    href="#booking"
                    className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300"
                  >
                    Book Service &rarr;
                  </a>
                  <a
                    href="tel:0357281335"
                    className="text-xs font-bold text-surface-400 hover:text-white"
                  >
                    Call (03) 5728 1335
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
