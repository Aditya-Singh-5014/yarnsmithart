const products = [
  {
    title: 'Tableware & Placemats',
    description:
      'Woven placemats, coasters, and table runners crafted from natural fibers.',
    image:
      'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
  {
    title: 'Storage & Baskets',
    description:
      'Artisanal baskets and organizers that bring order with elegance.',
    image:
      'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
  {
    title: 'Kitchen Accessories',
    description:
      'Serving boards, trivets, and accessories for the discerning cook.',
    image:
      'https://yarnsmitharts-brand-blueprint.lovable.app/assets/products-collection-DeqHbNLb.jpg',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-tan-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">OUR COLLECTIONS</p>
          <h2 className="section-heading text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="text-warm-gray mt-4 text-base max-w-2xl mx-auto">
            Curated selections from our finest handcrafted collections —
            designed for the modern home.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {products.map((product) => (
            <div
              key={product.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm mb-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[320px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-2 group-hover:text-copper transition-colors">
                {product.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-outline text-charcoal">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
}
