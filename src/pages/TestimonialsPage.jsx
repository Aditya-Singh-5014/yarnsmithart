import { Star } from 'lucide-react';

const customerReviews = [
  {
    quote: '"Yarnsmitharts Kitchen Plater products have transformed our home décor section. The quality is unmatched and our customers love the craftsmanship."',
    author: 'Susanne.',
    role: 'Retail Buyer, Netherlands',
    rating: 5,
  },
  {
    quote: '"Working with Yarnsmitharts has been a revelation. Their attention to detail and commitment to sustainable practices aligns perfectly with our values."',
    author: 'Wendy.',
    role: 'Interior Designer, USA',
    rating: 5,
  },
  {
    quote: '"These products sell themselves. The natural textures and elegant finishes resonate perfectly with our customer base."',
    author: 'Adriana.',
    role: 'Store Owner, USA',
    rating: 5,
  },
];

const retailerFeedback = [
  {
    quote: '"Yarnsmitharts has been a cornerstone supplier for our home décor category. Their range is versatile, quality is consistent, and margins are excellent."',
    author: 'James K.',
    role: 'USA',
  },
  {
    quote: '"From custom orders to seasonal collections, the team delivers with precision. A true partner in every sense."',
    author: 'Annika S.',
    role: 'Norway',
  },
];

function CustomerCard({ testimonial }) {
  return (
    <div className="bg-tan-light/60 p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-copper fill-copper" />
        ))}
      </div>
      <p className="font-serif text-charcoal text-sm leading-relaxed mb-6 italic">
        {testimonial.quote}
      </p>
      <div>
        <p className="text-charcoal font-medium text-sm">{testimonial.author}</p>
        <p className="text-warm-gray text-xs mt-1">{testimonial.role}</p>
      </div>
    </div>
  );
}

function RetailerCard({ testimonial }) {
  return (
    <div className="bg-tan-light/60 p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300">
      {/* Quote icon */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-copper mb-5">
        <path d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8L6 20H8L10 16V10C10 8.89543 9.10457 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8H16C14.8954 8 14 8.89543 14 10V14C14 15.1046 14.8954 16 16 16H18L16 20H18L20 16V10C20 8.89543 19.1046 8 18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="font-serif text-charcoal text-sm leading-relaxed mb-6 italic">
        {testimonial.quote}
      </p>
      <div>
        <span className="text-charcoal font-medium text-sm">{testimonial.author}</span>
        <span className="text-warm-gray text-sm ml-2">{testimonial.role}</span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal min-h-[380px] flex items-center pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-white/40 text-[0.65rem] font-medium tracking-[0.3em] uppercase mb-3">
            SOCIAL PROOF
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-3">
            Testimonials
          </h1>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Hear from our partners, retailers, and customers who trust
            Yarnsmitharts for premium home accessories.
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">CUSTOMERS</p>
            <h2 className="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Customer Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {customerReviews.map((t) => (
              <CustomerCard key={t.author} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Feedback */}
      <section className="bg-cream py-16 lg:py-24 border-t border-tan/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">RETAILERS</p>
            <h2 className="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Retailer Feedback
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {retailerFeedback.map((t) => (
              <RetailerCard key={t.author} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight mb-4 italic">
            Join Our Growing Network
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Become part of the Yarnsmitharts family. Let's create something
            beautiful together.
          </p>
          <a
            href="https://www.instagram.com/yarnsmith_arts/"
            className="inline-block border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </>
  );
}
