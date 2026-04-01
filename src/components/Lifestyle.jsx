import { Link } from 'react-router-dom';
import lifestyleImg from '../assets/Lifestyle inspiration.png';

export default function Lifestyle() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-0 lg:min-h-[500px]">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={lifestyleImg}
              alt="Modern living space with artisanal accessories"
              className="w-full h-full min-h-[350px] object-cover"
            />
          </div>

          {/* Dark Content Panel */}
          <div className="bg-charcoal flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div>
              <p className="section-label-white mb-4 tracking-[0.3em]">
                LIFESTYLE
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-[1.15] mb-6">
                <em className="italic">Design Your Everyday</em>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
                Our accessories are designed to seamlessly integrate into your daily
rituals — turning an ordinary morning into an aesthetic experience, and
a simple dinner into an occasion worth savouring.
              </p>

              <Link
                to="/products"
                className="btn-outline-light"
              >
                SHOP THE LOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
