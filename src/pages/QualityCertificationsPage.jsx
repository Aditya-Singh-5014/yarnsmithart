import { Link } from 'react-router-dom';
import craftsmanshipImg from '../assets/Craftsmanship.png';
import { Shield, CheckCircle, Award, FileCheck, ClipboardCheck } from 'lucide-react';

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
  'Raw material quality inspection',
  'In-process quality checks',
  'Final product testing',
  'Packaging & shipment audit',
];

const processCards = [
  {
    icon: FileCheck,
    title: 'AQL Testing'
  },
  {
    icon: ClipboardCheck,
    title: 'Third-Party Audits'
  },
  {
    icon: Shield,
    title: 'Material Safety'
  },
  {
    icon: Award,
    title: 'Export Quality'
  }
];

export default function QualityCertificationsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light/50 to-charcoal opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-white text-copper-light mb-4 tracking-[0.3em]">TRUST & STANDARDS</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Certifications & Audits
          </h1>
          <p className="text-white/60 mt-5 text-lg max-w-2xl leading-relaxed">
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
            
            {/* Left Content */}
            <div>
              <p className="section-label mb-4 tracking-[0.3em] text-copper text-[10px] sm:text-xs">
                STANDARDS
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-charcoal mb-6 leading-tight">
                Manufacturing Excellence
              </h2>
              <p className="text-warm-gray text-[13.5px] leading-[1.8] mb-8 max-w-lg">
                Our manufacturing facility in Bahadurgarh, Haryana operates under stringent quality
                controls. Every product undergoes multi-stage inspection — from raw material
                sourcing to final packaging — ensuring that only the finest pieces reach our
                partners.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-warm-gray text-[13px] sm:text-[13.5px]">
                    <CheckCircle size={16} className="text-copper flex-shrink-0" strokeWidth={1.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {processCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={card.title} 
                    className="bg-cream py-10 px-6 flex flex-col items-center justify-center text-center shadow-sm"
                  >
                    <Icon size={24} className="text-copper mb-4" strokeWidth={1.5} />
                    <p className="text-charcoal text-[13px] font-medium">{card.title}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Quality you can trust
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
