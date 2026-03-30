import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import productCollectionImg from '../assets/Product collection.png';
import lifestyleImg from "../assets/Lifestyle inspiration.png";
import craftsmanshipImg from '../assets/Craftsmanship.png';
import heroHomeImg from '../assets/YarnsmithartsHome.png';
import basketsImg from '../assets/Baskets & Storage.png';
import kitchenImg from '../assets/Kitchen Accessories.png';

const categories = [
  {
    title: 'Jute Placemats & Coaster',
    description: 'Handwoven from natural jute, cotton, and seagrass. Available in an array of textures, colours, and sizes.',
    image: productCollectionImg,
  },
  {
    title: 'Jute Baskets & Storage',
    description: 'Beautifully crafted storage baskets that bring warmth and order to any room.',
    image: basketsImg,
  },
  {
    title: 'Kitchen Accessories',
    description: 'Serving boards, trivets, coasters, and more — designed for the modern kitchen.',
    image: kitchenImg,
  },
  {
    title: 'Home Décor Accents',
    description: 'Vases, candle holders, and decorative accessories that add character to your space.',
    image: lifestyleImg,
  },
  {
    title: 'Seasonal Collections',
    description: 'Limited-edition collections inspired by global trends and seasonal palettes.',
    image: craftsmanshipImg,
  },
  {
    title: 'Iron Wired Baskets',
    description: 'Tailored iron wire baskets for retail displays, hospitality spaces, and interior styling. Crafted to your exact specifications.',
    image: heroHomeImg,
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
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-36 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productCollectionImg}
            alt="Product collection"
            className="w-full h-full object-contain opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/50 via-charcoal/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-white mb-4 tracking-[0.3em]">OUR COLLECTIONS</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Products
          </h1>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-18">
            <p className="section-label mb-4 tracking-[0.3em]">CATEGORIES</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-5">
              Explore Our Range
            </h2>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              From tabletop essentials to statement décor, discover collections designed to
              elevate every space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm mb-5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-[320px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-lg lg:text-xl text-charcoal mb-2 group-hover:text-copper transition-colors italic">
                  {cat.title}
                </h3>
                <p className="text-warm-gray text-[13px] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image on Left */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={craftsmanshipImg}
                alt="Design highlights"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content on Right */}
            <div>
              <p className="section-label mb-4 tracking-[0.3em]">WHY OUR PRODUCTS</p>
              <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-8">
                Design Highlights
              </h2>
              <ul className="space-y-4">
                {designHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-warm-gray text-[14px]">
                    <Check size={16} className="text-copper flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5 italic">
            Interested in Our Products?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Get in touch with our team for catalogues, samples, and custom orders.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            REQUEST A CATALOGUE
          </Link>
        </div>
      </section>
    </>
  );
}
