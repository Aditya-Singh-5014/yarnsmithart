import { Link } from 'react-router-dom';
import tradeShowImg from '../assets/Trade show exhibition.png';

export default function Events() {
  return (
    <section id="events" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={tradeShowImg}
              alt="Trade show exhibition booth"
              loading="lazy"
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="section-label mb-4">EVENTS & EXHIBITIONS</p>

            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
              Meet us at the World's Finest Trade
Shows
            </h2>

            <p className="text-warm-gray text-base leading-relaxed mb-10 max-w-lg">
              Yarnsmith Arts regularly participates in premier trade fairs and exhibitions, showcasing our latest collections to partners and design enthusiasts.
            </p>

            <Link to="/events" className="btn-outline text-charcoal">
              VIEW OUR EVENTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
