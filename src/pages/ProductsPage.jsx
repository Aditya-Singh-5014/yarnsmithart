import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Placemats & Table Runners',
    description: 'Handwoven from natural jute, cotton, and seagrass. Available in an array of textures, colours, and sizes.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
  {
    title: 'Baskets & Storage',
    description: 'Beautifully crafted storage baskets that bring warmth and order to any room.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
  {
    title: 'Kitchen Accessories',
    description: 'Serving boards, trivets, coasters, and more — designed for the modern kitchen.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
  {
    title: 'Table Linen',
    description: 'Elegant napkins, tablecloths, and runners crafted from premium natural fabrics.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/lifestyle-dining-ON8M0PdY.jpg',
  },
  {
    title: 'Decor',
    description: 'Statement pieces and accent items that add artisanal charm to any space.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/about-craft-Dy_2xpzg.jpg',
  },
  {
    title: 'Custom & Bespoke',
    description: 'Tailored designs for retailers, hotels, and interior projects. Made to your specification.',
    image: 'https://yarnsmitharts-brand-blueprint.lovable.app/assets/hero-home-DneUz7Zf.jpg',
  },
];

const designHighlights = [
  '100% natural and sustainable materials',
  'Handcrafted by skilled artisans',
  'Contemporary designs with timeless appeal',
  'Customisable for retail and hospitality',
  'Rigorously tested for quality and durability',
  'Available in bulk and bespoke orders',
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">CATEGORIES</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-5">
            Explore Our Range
          </h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            From tabletop essentials to statement décor, discover collections designed to elevate every space.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm mb-5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-[320px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-2 group-hover:text-copper transition-colors">
                  {cat.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4">OUR PRODUCTS</p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.65rem] mb-8">
                Design Highlights
              </h2>
              <ul className="space-y-4 mb-10">
                {designHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-warm-gray text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-outline text-charcoal">
                REQUEST A CATALOGUE
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/about-craft-Dy_2xpzg.jpg"
                alt="Design highlights"
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
            Looking for Custom Solutions?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We offer bespoke designs tailored to your brand, retail shelves, or hospitality needs. Let's create something beautiful together.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
