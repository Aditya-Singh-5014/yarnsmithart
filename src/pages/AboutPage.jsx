import { Link } from "react-router-dom";
import {
  Heart,
  Eye,
  Leaf,
  Shield,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import craftsmanshipImg from "../assets/Craftsmanship.png";
import heroHomeImg from "../assets/Our story.png";
import productCollectionImg from "../assets/Craftsmanship.png";

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-36 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productCollectionImg}
            alt="Yarnsmitharts artisan at work"
            className="w-full h-full object-fill opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/50 via-charcoal/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-white mb-4 tracking-[0.3em]">OUR STORY</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            About YARNSMITH ARTS
          </h1>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4 tracking-[0.3em]">
                OUR HERITAGE
              </p>
              <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
                Born from a Passion for Craft
              </h2>
              <p className="text-warm-gray text-[14px] leading-[1.8] mb-5">
                Yarnsmith Arts was founded with a singular vision: to bring the
                timeless beauty of handcrafted home accessories to discerning
                homes worldwide. Rooted in the rich artisanal traditions of
                India, we combine heritage techniques with contemporary design
                sensibilities.
              </p>
              <p className="text-warm-gray text-[14px] leading-[1.8]">
                What began as a small Passion has grown into a globally
                recognised brand, serving premium retailers and interior
                designers across continents — yet we remain true to our founding
                principles of quality, authenticity, and craftsmanship.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={heroHomeImg}
                alt="Handcrafted products"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="bg-tan-light py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-6 tracking-[0.3em]">
            FOUNDER'S VISION
          </p>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] text-charcoal font-normal leading-relaxed italic max-w-2xl mx-auto mb-8">
            "Every home deserves objects that inspire. We create pieces that
            honour traditional craftsmanship while embracing the aesthetics of
            modern living."
          </h2>
          <p className="text-charcoal text-sm font-medium">Prateek Garg</p>
          <p className="text-warm-gray text-xs mt-1">Founder, Yarnsmitharts</p>
        </div>
      </section>

      {/* Craftsmanship & Design Philosophy */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4 tracking-[0.3em]">PHILOSOPHY</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-5">
              Craftsmanship & Design Philosophy
            </h2>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We believe in the harmony of form and function — where every
              material is carefully selected and every detail intentionally
              designed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Made with Love */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Heart size={28} className="text-copper" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-charcoal mb-3 italic">
                Made with Love
              </h3>
              <p className="text-warm-gray text-[13px] leading-relaxed max-w-xs mx-auto">
                Each product passes through the hands of skilled artisans who
                pour their expertise into every stitch, weave, and finish.
              </p>
            </div>

            {/* Design-Led */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Eye size={28} className="text-copper" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-charcoal mb-3 italic">
                Design-Led
              </h3>
              <p className="text-warm-gray text-[13px] leading-relaxed max-w-xs mx-auto">
                Our design team blends global trends with traditional motifs,
                creating pieces that feel both contemporary and timeless.
              </p>
            </div>

            {/* Natural & Ethically Sourced */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Leaf size={28} className="text-copper" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-charcoal mb-3 italic">
                Natural & Ethically Sourced
              </h3>
              <p className="text-warm-gray text-[13px] leading-relaxed max-w-xs mx-auto">
                We prioritize ethically sourcing of raw materials for production
                like Wood, Jute etc - ensuring beauty with responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-copper-light mb-4 tracking-[0.3em]">
              OUR VALUES
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5 italic">
              Mission & Values
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We are committed to creating a positive impact through our
              products, our practices, and our partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Quality First */}
            <div className="border border-white/15 rounded-sm p-8 text-center hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Award
                  size={24}
                  className="text-copper-light"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-base lg:text-lg text-white mb-3 italic">
                Quality First
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed">
                Uncompromising standards in every product.
              </p>
            </div>

            {/* Sustainability */}
            <div className="border border-white/15 rounded-sm p-8 text-center hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Leaf
                  size={24}
                  className="text-copper-light"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-base lg:text-lg text-white mb-3 italic">
                Sustainability
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed">
                Eco-conscious practices from source to shelf.
              </p>
            </div>

            {/* Fair Practices */}
            <div className="border border-white/15 rounded-sm p-8 text-center hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Users
                  size={24}
                  className="text-copper-light"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-base lg:text-lg text-white mb-3 italic">
                Fair Practices
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed">
                Empowering artisan communities with fair wages.
              </p>
            </div>

            {/* Integrity */}
            <div className="border border-white/15 rounded-sm p-8 text-center hover:border-white/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Heart
                  size={24}
                  className="text-copper-light"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-base lg:text-lg text-white mb-3 italic">
                Integrity
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed">
                Honest relationships with every partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Discover Our Collections */}
      <section className="bg-charcoal-light py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5 italic">
            Discover Our Collections
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            See how craftsmanship comes alive in our premium product range.
          </p>
          <Link
            to="/products"
            className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white"
          >
            EXPLORE PRODUCTS
          </Link>
        </div>
      </section>
    </>
  );
}
