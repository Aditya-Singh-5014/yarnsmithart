export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="section-label mb-4">THE YARNSMITHARTS DIFFERENCE</p>

            <h2 className="section-heading text-4xl md:text-5xl mb-8">
              Artistry in Every Detail
            </h2>

            <p className="text-warm-gray text-base leading-relaxed mb-6">
              At Yarnsmitharts, we believe that the objects you surround
              yourself with should tell a story. Each piece in our collection
              is a testament to the enduring beauty of skilled craftsmanship
              — where natural materials meet contemporary design to create
              accessories that transform your living spaces.
            </p>

            <p className="text-warm-gray text-base leading-relaxed mb-10">
              From our workshop in Haryana to homes across the globe, we
              bring the warmth of handmade excellence to modern interiors.
            </p>

            <a href="#products" className="btn-outline text-charcoal">
              DISCOVER OUR HERITAGE
            </a>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/about-craft-Dy_2xpzg.jpg"
              alt="Artisan crafting with traditional techniques"
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
