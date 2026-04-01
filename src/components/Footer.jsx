import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const exploreLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Events & Fair', to: '/events' },
  { label: 'Certifications', to: '/certifications' },
];

const companyLinks = [
  { label: 'Careers', to: '/careers' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl text-white font-bold mb-4 block">
              YARNSMITH ARTS
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Crafting premium home & kitchen accessories that transform
              everyday living into an artful experience.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-medium text-white/70 tracking-[0.2em] uppercase mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/50 text-sm hover:text-copper-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium text-white/70 tracking-[0.2em] uppercase mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/50 text-sm hover:text-copper-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xs font-medium text-white/70 tracking-[0.2em] uppercase mb-5">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:prateek@yarnsmitharts.com"
                    className="text-white/50 text-sm hover:text-copper-light transition-colors break-all"
                  >
                    prateek@yarnsmitharts.com
                  </a>
                  <a
                    href="mailto:prachi@yarnsmitharts.com"
                    className="text-white/50 text-sm hover:text-copper-light transition-colors break-all mt-1"
                  >
                    prachi@yarnsmitharts.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919891357557"
                  className="text-white/50 text-sm hover:text-copper-light transition-colors"
                >
                  +91 9891357557
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Plot 100, HSIIDC Industrial Estate, Bahadurgarh,
                  Haryana-124507, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs text-center md:text-left">
              © 2026 Yarnsmith Arts. All rights reserved.
            </p>
            <p className="text-white/30 text-xs text-center md:text-right">
              Crafted with passion in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
