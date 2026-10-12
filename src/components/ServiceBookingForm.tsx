'use client';

import React, { useState } from 'react';
import { Car, Wrench, ShieldCheck, Calendar, Phone, CheckCircle2, Clock } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  timeframe: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'logbook',
    name: 'Scheduled Logbook Service',
    icon: '📘',
    description: 'Factory-spec service with genuine fluids and filters, preserving your new car statutory manufacturer warranty.',
    timeframe: 'Half-Day Service'
  },
  {
    id: 'rwc',
    name: 'Roadworthy Inspection (RWC)',
    icon: '🛡️',
    description: 'Official VicRoads roadworthy inspection certificate required for vehicle registration or private resale.',
    timeframe: 'Same-Day Test'
  },
  {
    id: 'brakes',
    name: 'Brake, Clutch & Suspension',
    icon: '🛑',
    description: 'Disc pad replacement, rotor machining, clutch kit replacement, and 4WD heavy-duty shock absorber upgrades.',
    timeframe: '1–2 Days'
  },
  {
    id: 'diagnostics',
    name: 'Engine Light & EFI Diagnostics',
    icon: '💻',
    description: 'OBD2 computer scanning, sensor diagnostics, fuel system troubleshooting, and electrical fault tracing.',
    timeframe: 'Same-Day Scan'
  },
  {
    id: 'pre-trip',
    name: 'High Country 4WD Pre-Trip Safety Check',
    icon: '🏔️',
    description: 'Comprehensive inspection of ball joints, steering, diff oils, coolant, belts, and hoses before alpine touring.',
    timeframe: '2-Hour Check'
  },
  {
    id: 'general',
    name: 'General Mechanical Repairs',
    icon: '🔧',
    description: 'Alternators, starter motors, battery replacement, water pumps, timing belts, and exhaust repairs.',
    timeframe: 'Custom Quote'
  }
];

export function SlabEstimator() {
  return <ServiceBookingForm />;
}

export function ServiceBookingForm() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(SERVICE_OPTIONS[0]);
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-surface-900 border-y border-surface-800 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800 mb-4 inline-block">
            Online Workshop Booking Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book a Service / RWC in Beechworth
          </h2>
          <p className="mt-4 text-surface-300 text-base">
            Select your service type, enter your vehicle details, and request your preferred workshop date. We will confirm your bay booking promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_OPTIONS.map((opt) => {
              const active = selectedService.id === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedService(opt)}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    active
                      ? 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-500/30'
                      : 'border-surface-800 bg-surface-950/60 hover:border-surface-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-800 text-blue-400">
                      {opt.timeframe}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base mb-1">{opt.name}</h4>
                  <p className="text-xs text-surface-400 leading-relaxed mb-3">{opt.description}</p>
                  <div className="text-[11px] font-semibold text-blue-400">
                    {active ? '✓ Selected for Booking' : 'Click to Select'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Form Card (5 cols) */}
          <div className="lg:col-span-5 bg-surface-950 rounded-2xl p-6 sm:p-8 border border-surface-800 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 pb-3 border-b border-surface-800 flex items-center justify-between">
              <span>Service Booking Request</span>
              <span className="text-xs text-blue-400 font-semibold">{selectedService.name.split(' ')[0]}</span>
            </h3>

            {submitted ? (
              <div className="bg-blue-950/80 border border-blue-700 p-6 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
                <h4 className="font-bold text-white">Booking Request Logged!</h4>
                <p className="text-xs text-surface-300">
                  Thank you! Highbridge Motors will check workshop availability for your {vehicleMake} {vehicleModel} on {preferredDate} and call you to confirm your drop-off time.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg text-xs uppercase"
                >
                  Book Another Vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <label className="block text-surface-300 font-bold mb-1">Year</label>
                    <input
                      type="text"
                      required
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                      placeholder="2019"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-surface-300 font-bold mb-1">Make</label>
                    <input
                      type="text"
                      required
                      value={vehicleMake}
                      onChange={(e) => setVehicleMake(e.target.value)}
                      placeholder="Toyota"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-surface-300 font-bold mb-1">Model</label>
                    <input
                      type="text"
                      required
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      placeholder="Hilux"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-surface-300 font-bold mb-1">Notes / Symptoms</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Squeaking brakes, 100,000km major service, RWC for road registration..."
                    className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-950 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Service / Request Appointment</span>
                </button>

                <div className="text-center pt-2">
                  <a
                    href="tel:0357281335"
                    className="text-xs text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Prefer to speak? Call Workshop: (03) 5728 1335
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
