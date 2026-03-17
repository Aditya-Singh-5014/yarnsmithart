import { Link } from 'react-router-dom';
import { Users, Heart, Globe, Lightbulb } from 'lucide-react';

const cultureHighlights = [
  {
    icon: Heart,
    title: 'Passion for Craft',
    description: 'We live and breathe craftsmanship. Every team member contributes to our artistic vision.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: "We believe in teamwork, open communication, and supporting each other's growth.",
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our work reaches 20+ countries — be part of a team making a worldwide impact.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Growth',
    description: 'We encourage new ideas, continuous learning, and creative problem-solving.',
  },
];

const openPositions = [
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Bahadurgarh, Haryana',
    type: 'Full-time',
  },
  {
    title: 'Export Manager',
    department: 'Sales & Export',
    location: 'Bahadurgarh, Haryana',
    type: 'Full-time',
  },
  {
    title: 'Quality Control Supervisor',
    department: 'Quality',
    location: 'Bahadurgarh, Haryana',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://yarnsmitharts-brand-blueprint.lovable.app/assets/about-craft-Dy_2xpzg.jpg"
            alt="Team at Yarnsmitharts"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-copper-light mb-4 tracking-[0.3em]">CAREERS</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Join Our Journey
          </h1>
          <p className="text-white/60 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Be part of a team that's shaping the future of handcrafted home accessories.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">OUR CULTURE</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl">
              Life at Yarnsmitharts
            </h2>
            <p className="text-warm-gray mt-5 text-base max-w-2xl mx-auto leading-relaxed">
              We're more than just a workplace — we're a community of creators, thinkers, and dreamers driven by a shared passion for craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {cultureHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-300">
                    <Icon size={24} className="text-copper" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">OPPORTUNITIES</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl">
              Open Positions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {openPositions.map((pos) => (
              <div
                key={pos.title}
                className="bg-cream p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-copper transition-colors">
                  {pos.title}
                </h3>
                <p className="text-warm-gray text-sm mb-1">{pos.department}</p>
                <p className="text-warm-gray text-sm mb-1">{pos.location}</p>
                <span className="inline-block text-xs font-medium text-copper bg-copper/10 px-3 py-1 rounded-full mt-3">
                  {pos.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Don't See Your Role Listed?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for craft and design. Send us your resume.
          </p>
          <a
            href="mailto:prateekgarg@yarnsmitharts.com"
            className="btn-filled"
          >
            SEND YOUR RESUME
          </a>
        </div>
      </section>
    </>
  );
}
