import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Lifestyle from './components/Lifestyle';
import WhyUs from './components/WhyUs';
import Events from './components/Events';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProducts />
      <Lifestyle />
      <WhyUs />
      <Events />
      <Certifications />
      <Testimonials />
      <Newsletter />
      <CTABanner />
      <Footer />
    </div>
  );
}
