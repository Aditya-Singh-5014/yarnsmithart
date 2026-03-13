export default function CTABanner() {
  return (
    <section className="relative bg-charcoal py-24 lg:py-32 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light/50 to-charcoal opacity-80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
          Explore Our Curated Collections of Handcrafted Excellence
        </h2>

        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're a design enthusiast or a retail partner, discover
          how Yarnsmitharts can elevate your spaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#products" className="btn-outline-light">
            BROWSE PRODUCTS
          </a>
          <a href="#contact" className="btn-outline-light">
            PARTNER WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
