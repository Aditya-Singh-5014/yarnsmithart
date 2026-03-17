import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    name: 'Ambiente Frankfurt',
    date: 'February 2026',
    location: 'Frankfurt, Germany',
    description: "The world's leading trade fair for consumer goods — featuring our latest tableware and home décor collections.",
  },
  {
    name: 'Maison & Objet Paris',
    date: 'March 2026',
    location: 'Paris, France',
    description: 'Showcasing artisanal home accessories at this premier international lifestyle event.',
  },
  {
    name: 'NY NOW',
    date: 'August 2026',
    location: 'New York, USA',
    description: 'Connecting with buyers and retailers at New York premier market for lifestyle brands.',
  },
  {
    name: 'India International Trade Fair',
    date: 'November 2026',
    location: 'New Delhi, India',
    description: 'Representing the finest of Indian craftsmanship at one of Asia largest trade exhibitions.',
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/events-fair-D2AGpNwC.jpg"
            alt="Exhibition booth"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-copper-light mb-4 tracking-[0.3em]">EVENTS & EXHIBITIONS</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Where We Exhibit
          </h1>
          <p className="text-white/60 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet us at the world's leading trade fairs and discover our latest collections in person.
          </p>
        </div>
      </section>

      {/* Exhibition Highlights */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <p className="section-label mb-4">A WORLD OF ART & CULTURE</p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
                Our Fair & Exhibition Story
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
                Yarnsmitharts regularly participates in premier international trade fairs and exhibitions, showcasing our latest collections to partners, designers, and partners across the globe.
              </p>
              <p className="text-warm-gray text-base leading-relaxed">
                These events are an opportunity to connect with like-minded professionals, explore new design possibilities, and build lasting partnerships.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/events-fair-D2AGpNwC.jpg"
                alt="Trade show exhibition"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">UPCOMING</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl">
              Events & Fair Presence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="bg-cream p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-4 group-hover:text-copper transition-colors">
                  {event.name}
                </h3>
                <div className="flex items-center gap-2 text-warm-gray text-sm mb-2">
                  <Calendar size={14} className="text-copper" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-warm-gray text-sm mb-4">
                  <MapPin size={14} className="text-copper" />
                  {event.location}
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Meet Us at Our Next Event
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a meeting with our team at an upcoming exhibition.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            BOOK A MEETING
          </Link>
        </div>
      </section>
    </>
  );
}
