import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Michael Stewart',
    location: 'Beechworth Local',
    text: 'Took my Subaru in for a 125,000km major service and RWC test. Highbridge gave clear itemised quotes before touching anything. Honest mechanics are hard to find—these guys are gold.',
    rating: 5,
    date: '3 weeks ago'
  },
  {
    name: 'Emily Parker',
    location: 'Yackandandah',
    text: 'Friendly, fast, and transparent. Dropped the car off before work and it was ready by lunchtime with new front brakes and full service done.',
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'Darren Ross',
    location: 'Beechworth',
    text: 'Great local workshop. They look after both our family cars and the work ute. Never push unnecessary repairs.',
    rating: 5,
    date: '2 months ago'
  }
];

export function ReviewsHighlight() {
  return (
    <section className="py-16 bg-surface-950 text-surface-100 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            What Beechworth Drivers Say About Highbridge Motors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-surface-900 border border-surface-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-blue-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-surface-300 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-3 border-t border-surface-800 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-white">{rev.name}</div>
                  <div className="text-surface-400 text-[11px]">{rev.location}</div>
                </div>
                <span className="text-surface-500 text-[10px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
