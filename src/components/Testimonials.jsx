import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote:
      '"Yarnsmitharts products have transformed our home décor section. The quality is unmatched and our customers love the craftsmanship."',
    author: 'Elena M.',
    role: 'Retail Partner, Italy',
    rating: 5,
  },
  {
    quote:
      '"Working with Yarnsmitharts has been a revelation. Their attention to detail and commitment to sustainable practices aligns perfectly with our values."',
    author: 'Marco T.',
    role: 'Design Curator, Germany',
    rating: 5,
  },
  {
    quote:
      '"From the initial samples to the final delivery, the experience has been impeccable. These are products that sell themselves."',
    author: 'Sarah L.',
    role: 'Buyer, United Kingdom',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">TESTIMONIALS</p>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl">
            What Our Partners Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-tan-light/60 p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-copper fill-copper"
                  />
                ))}
              </div>

              <p className="font-serif text-charcoal text-base leading-relaxed mb-6 italic">
                {t.quote}
              </p>

              <div>
                <p className="text-charcoal font-medium text-sm">
                  {t.author}
                </p>
                <p className="text-warm-gray text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/testimonials" className="btn-outline text-charcoal">
            READ MORE TESTIMONIALS
          </Link>
        </div>
      </div>
    </section>
  );
}
