import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/Logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Events & Fair", to: "/events" },
  { label: "Certifications", to: "/certifications" },
  { label: "Careers", to: "/careers" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    console.log("I am being rendered");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-md" : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-serif text-2xl lg:text-[1.65rem] font-bold text-charcoal tracking-tight"
          >
            <img
              src={logoImg}
              alt="Yarnsmith Arts logo"
              loading="lazy"
              className="h-10 lg:h-12 w-auto"
            />
            YARNSMITH ARTS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-[0.75rem] font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-copper"
                      : "text-charcoal/80 hover:text-copper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-filled text-[0.65rem] py-1.5 px-3.5 ml-2 whitespace-nowrap tracking-wider"
            >
              REQUEST A CATALOG
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-charcoal p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream border-t border-tan/30 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 transition-colors ${
                  isActive
                    ? "text-copper"
                    : "text-charcoal/80 hover:text-copper"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
