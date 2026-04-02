import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded page components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const QualityCertificationsPage = lazy(() => import('./pages/QualityCertificationsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// A simple loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[70vh] bg-cream">
    <div className="w-10 h-10 border-4 border-tan border-t-copper rounded-full animate-spin text-copper"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/certifications" element={<QualityCertificationsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
