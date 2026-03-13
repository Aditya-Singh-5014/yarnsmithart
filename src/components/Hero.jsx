export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/hero-home-DneUz7Zf.jpg"
          alt="Handcrafted home accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="section-label text-white/75 mb-5 tracking-[0.3em]">
            PREMIUM HOME & KITCHEN ACCESSORIES
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-8">
            Where Craft Meets{' '}
            <em className="italic">Modern Living</em>
          </h1>

          <p className="text-white/75 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            Handcrafted accessories that elevate every corner of your
            home. Designed with intention, made with mastery.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn-filled">
              EXPLORE COLLECTION
            </a>
            <a
              href="#about"
              className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
