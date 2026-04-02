import { Link } from "react-router-dom";
import productCollectionImg1 from "../assets/Background.png";
import productCollectionImg2 from "../assets/Storage & Baskets.png";
import productCollectionImg3 from "../assets/Kitchen Accessories.png";

const products = [
  {
    title: "Seasonal Décor",
    description:
      "Festive and seasonal decorations handcrafted to bring warmth and celebration to your home.",
    image: productCollectionImg1,
  },
  {
    title: "Home Décor",
    description:
      "Artisanal home accessories designed to add character and charm to every room.",
    image: productCollectionImg2,
  },
  {
    title: "Kitchen Accessories",
    description:
      "Serving boards, trivets, and accessories for the discerning cook.",
    image: productCollectionImg3,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {products.map((product) => (
            <div key={product.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-5">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
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
          <Link to="/products" className="btn-outline text-charcoal">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
