import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProducts from '../components/FeaturedProducts';
import Lifestyle from '../components/Lifestyle';
import WhyUs from '../components/WhyUs';
import Events from '../components/Events';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Lifestyle />
      <WhyUs />
      <Events />
      <Certifications />
      <Testimonials />
      <Newsletter />
    </>
  );
}
