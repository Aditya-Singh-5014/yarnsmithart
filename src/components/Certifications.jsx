import { Shield, Scale, Star } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'Meeting international manufacturing standards.',
  },
  {
    icon: Scale,
    title: 'Fair Trade Practices',
    description: 'Ethical sourcing and fair labour practices.',
  },
  {
    icon: Star,
    title: 'Quality Assured',
    description: 'Rigorous testing at every stage of production.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-charcoal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-copper-light mb-4">TRUST & QUALITY</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight max-w-2xl mx-auto">
            Certified Excellence, Assured Quality
          </h2>
          <p className="text-white/50 mt-5 text-base max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality is backed by internationally recognised
            certifications and rigorous auditing processes.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="border border-white/15 rounded-sm p-8 lg:p-10 text-center hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-white/60 group-hover:text-copper-light transition-colors duration-300"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="font-serif text-xl text-copper-light mb-3">
                  {cert.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
