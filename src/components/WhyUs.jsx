import { Sparkles, Leaf, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Handcrafted Excellence',
    description: 'Every piece is made by skilled artisans using time-honoured techniques.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'We source natural, eco-friendly materials for every product.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'Our products meet international quality and safety standards.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by retailers and partners across 20+ countries.',
  },
];

export default function WhyUs() {
  return (
    <section id="careers" className="bg-tan-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">WHY YARNSMITHARTS</p>
          <h2 className="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto">
            Crafted for Those Who <br />
            Appreciate the Finer Things
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-300">
                  <Icon size={24} className="text-copper" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
