import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = 'service_pxg65gi';
    const templateID = 'template_k7sckls';
    const publicKey = 'qu6IQVljkR2dGIs_U';

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', company: '', subject: '', message: '' });
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('Failed to send message. Please try again.');
          alert('Failed to send message. Please check your EmailJS configuration or try again later.');
        }
      );
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal py-20 lg:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/40 text-[0.65rem] font-medium tracking-[0.3em] uppercase mb-3">LET'S CONNECT</p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-3">
            Contact Us
          </h1>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            We'd love to hear from you. Whether it's a partnership inquiry or a product question, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left – Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Get in Touch
              </h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-copper mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:prateek@yarnsmitharts.com"
                    className="text-warm-gray text-sm hover:text-copper transition-colors"
                  >
                    prateek@yarnsmitharts.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-copper mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+919891357557"
                    className="text-warm-gray text-sm hover:text-copper transition-colors"
                  >
                    +91 9891357557
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-copper mt-0.5 flex-shrink-0" />
                  <p className="text-warm-gray text-sm leading-relaxed">
                    Plot 100, HSIIDC Industrial Estate,<br />
                    Bahadurgarh, Haryana–124507, India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-copper mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <p className="text-warm-gray text-sm">
                    Mon – Sat: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-sm overflow-hidden border border-tan">
                <iframe
                  title="Yarnsmith Arts Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.87674972858!2d76.8849556393611!3d28.70845683615785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0b9829bfc97b%3A0x7c49f93940949d3a!2sYarnsmith%20Arts!5e1!3m2!1sen!2sin!4v1775054460748!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right – Form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                  placeholder="Company Name (optional)"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light resize-none"
                  placeholder="Your Message"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === 'Sending...'}
                  className="btn-filled text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                {status && status !== 'Sending...' && (
                  <p className={`text-sm mt-3 ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-cream py-16 lg:py-24 border-t border-tan/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">PARTNERSHIPS</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal font-normal leading-tight mb-5">
            Interested in a Business Partnership?
          </h2>
          <p className="text-warm-gray text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            We work with retailers, hotels, interior designers, and distributors worldwide. Let's explore how we can grow together.
          </p>
          <a
            href="mailto:prateek@yarnsmitharts.com"
            className="btn-filled text-sm"
          >
            START A PARTNERSHIP
          </a>
        </div>
      </section>
    </>
  );
}
