import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/about-craft-Dy_2xpzg.jpg"
            alt="Yarnsmitharts artisan at work"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
          <p className="text-white/60 mt-5 text-lg max-w-2xl leading-relaxed font-serif">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
           About Yarnsmitarts
          </h1>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4">Our Heritage</p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
                Born from a Passion of Craft
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
               Yarnsmitharts was founded with a singular vision: to bring the timeless beauty of
                handcrafted home accessories to discerning homes worldwide. Rooted in the rich
                artisanal traditions of India, we combine heritage techniques with contemporary
                design sensibilities.
              </p>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
                What began as a small workshop has grown into a globally recognised brand,
                serving premium retailers and interior designers across continents — yet we remain
                true to our founding principles of quality, authenticity, and craftsmanship.
              </p>
            
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/hero-home-DneUz7Zf.jpg"
                alt="Founder Prateek Garg"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Design Philosophy */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">FOUNDER'S VISION</p>
            <h2 className="section-heading text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto font-serif italic">
              "Every home deserves objects that inspire. We
              create pieces that honour traditional craftsmanship
              while embracing the aesthetics of modern living."
            </h2>
          </div>

          <p className="text-center">Prateek Garg</p>
          <p className="text-center text-warm-gray">Founder, Yarnsmitharts</p>
        </div>
      </section>

      {/* Material Quality */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4">MATERIAL QUALITY</p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
                The Finest Natural Fibers
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
                We meticulously select and source our raw materials — from the robust strength of sisal to the delicate softness of cotton. Our commitment to using 100% natural, sustainable materials ensures that every product not only looks and feels premium but also minimizes environmental impact.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '100% natural and sustainable materials',
                  'Handcrafted by skilled artisans',
                  'Contemporary designs with timeless appeal',
                  'Customisable for retail and hospitality',
                  'Rigorously tested for quality and durability',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-warm-gray text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="btn-outline text-charcoal">
                EXPLORE OUR PRODUCTS
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/hero-home-DneUz7Zf.jpg"
                alt="Natural fiber materials"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're a retailer, hotel, or design studio — let's create something extraordinary together.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
