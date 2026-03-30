import { Link } from 'react-router-dom';

export default function Newsletter() {
  return (
    <section className="bg-charcoal py-24 lg:py-32 border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 italic">
          Ready to elevate your space?
        </h2>

        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Explore our curated collections or connect with us to discuss custom orders
          and partnerships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white whitespace-nowrap text-center">
            BROWSE PRODUCTS
          </Link>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white whitespace-nowrap text-center">
            PARTNER WITH US
          </Link>
        </div>
      </div>
    </section>
  );
}
