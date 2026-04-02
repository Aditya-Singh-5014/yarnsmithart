import { Link } from 'react-router-dom';
import heroImage from '../assets/YarnsmithartsHome.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Handcrafted home accessories"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="section-label-white mb-5 tracking-[0.3em]">
            PREMIUM HOME & KITCHEN ACCESSORIES
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-6 sm:mb-8">
            Where craft meets{' '}
            <em className="italic">modern living</em>
          </h1>

          <p className="text-white/75 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Handcrafted accessories that elevate every corner of your
            home. Designed with intention, made with mastery.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link to="/products" className="btn-filled text-center">
              EXPLORE COLLECTION
            </Link>
            <Link
              to="/about"
              className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white text-center"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
