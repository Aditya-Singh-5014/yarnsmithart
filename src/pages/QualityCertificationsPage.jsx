import { Link } from 'react-router-dom';
import craftsmanshipImg from '../assets/Craftsmanship.png';
import { Shield, Star, CheckCircle, Award } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 14001:2015',
    description: 'Certified quality management system ensuring consistent product excellence.',
  },
  {
    icon: Award,
    title: 'FSC Compliance',
    description: 'Forest Stewardship Council - Certification for forest management or Chain of Custody (CoC) to trace materials.',
  },
  {
    icon: CheckCircle,
    title: 'SEDEX Membership',
    description: 'Committed to responsible and ethical business practices across our supply chain.',
  },
];

const qualityPoints = [
  'Every product undergoes multi-stage quality inspection',
  'Raw materials tested for purity and strength',
  'Colour fastness and durability testing on all finishes',
  'Compliance with EU, US, and APAC safety standards',
  'Sustainable packaging and shipping practices',
];

export default function QualityCertificationsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light/50 to-charcoal opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-copper-light mb-4 tracking-[0.3em]">TRUST & STANDARDS</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Certifications & Audits
          </h1>
          <p className="text-white/60 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by internationally recognised
standards and rigorous quality processes.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">CERTIFICATIONS</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Quality Certifications
            </h2>
            <p className="text-warm-gray text-base leading-relaxed mt-5">
              We hold certifications that reflect our dedication to global quality and safety
standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="border border-tan rounded-sm p-8 lg:p-10 text-center hover:border-copper/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-300">
                    <Icon size={28} className="text-copper" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-tan-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={craftsmanshipImg}
                alt="Quality inspection process"
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <p className="section-label mb-4">OUR PROCESS</p>
              <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-6">
                Quality Trust in Every Fiber
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-8">
                From raw material selection to the final handcrafted product, we maintain the highest standards of quality at every step of our process.
              </p>
              <ul className="space-y-4">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-warm-gray text-base">
                    <CheckCircle size={18} className="text-copper mt-0.5 flex-shrink-0" />
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Quality You Can Trust
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Request our compliance documentation or schedule a factory visit.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
