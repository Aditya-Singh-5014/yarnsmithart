import { Star } from 'lucide-react';

const customerReviews = [
  {
    quote: '"The placemats we ordered have completely transformed our dining table. The craftsmanship is extraordinary — you can feel the quality in every weave."',
    author: 'Sarah L.',
    role: 'Homeowner, United Kingdom',
    rating: 5,
  },
  {
    quote: '"I ordered a set of baskets for our living room and they are absolutely stunning. Natural, elegant, and beautifully made."',
    author: 'Anna K.',
    role: 'Interior Designer, Sweden',
    rating: 5,
  },
  {
    quote: '"Every piece tells a story. The table runners are my favourite — they add so much warmth and character to any setting."',
    author: 'Clara M.',
    role: 'Homeowner, Canada',
    rating: 5,
  },
];

const retailerFeedback = [
  {
    quote: '"Yarnsmitharts products have transformed our home décor section. The quality is unmatched and our customers love the craftsmanship."',
    author: 'Elena M.',
    role: 'Retail Partner, Italy',
    rating: 5,
  },
  {
    quote: '"From the initial samples to the final delivery, the experience has been impeccable. These are products that sell themselves."',
    author: 'Marco T.',
    role: 'Design Curator, Germany',
    rating: 5,
  },
  {
    quote: '"Reliable delivery, consistent quality, and beautiful designs. Yarnsmitharts is our go-to supplier for handcrafted accessories."',
    author: 'James W.',
    role: 'Store Owner, Australia',
    rating: 5,
  },
];

const partnerTestimonials = [
  {
    quote: '"Working with Yarnsmitharts has been a revelation. Their attention to detail and commitment to sustainable practices aligns perfectly with our values."',
    author: 'David R.',
    role: 'Hospitality Partner, France',
    rating: 5,
  },
  {
    quote: '"Their custom product capabilities are outstanding. They delivered exactly what we envisioned, on time and at exceptional quality."',
    author: 'Mika S.',
    role: 'Brand Collaboration Partner, Japan',
    rating: 5,
  },
  {
    quote: '"A trusted partner for sustainable, handcrafted products. Their team is responsive, professional, and deeply passionate about craft."',
    author: 'Lisa H.',
    role: 'Procurement Manager, Netherlands',
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-tan-light/60 p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="text-copper fill-copper" />
        ))}
      </div>
      <p className="font-serif text-charcoal text-base leading-relaxed mb-6 italic">
        {testimonial.quote}
      </p>
      <div>
        <p className="text-charcoal font-medium text-sm">{testimonial.author}</p>
        <p className="text-warm-gray text-xs mt-1">{testimonial.role}</p>
      </div>
    </div>
  );
}

function TestimonialSection({ label, title, testimonials }) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="text-center mb-12">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">TESTIMONIALS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-5">
            What Our Partners Say
          </h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from customers, retailers, and partners who've experienced the Yarnsmitharts difference.
          </p>
        </div>
      </section>

      {/* Testimonial Sections */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TestimonialSection
            label="CUSTOMERS"
            title="Customer Reviews"
            testimonials={customerReviews}
          />
          <TestimonialSection
            label="RETAILERS"
            title="Retailer Feedback"
            testimonials={retailerFeedback}
          />
          <TestimonialSection
            label="PARTNERS"
            title="Partner Testimonials"
            testimonials={partnerTestimonials}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied customers and partners worldwide.
          </p>
          <a href="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            GET IN TOUCH
          </a>
        </div>
      </section>
    </>
  );
}
