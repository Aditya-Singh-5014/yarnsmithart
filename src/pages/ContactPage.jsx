import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">CONTACT</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-5">
            Get In Touch
          </h1>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions, need a catalogue, or want to explore a partnership? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-3.5 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <button type="submit" className="btn-filled w-full sm:w-auto">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Contact Details
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} className="text-copper" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium text-sm mb-1">Email</p>
                    <a
                      href="mailto:prateekgarg@yarnsmitharts.com"
                      className="text-warm-gray text-sm hover:text-copper transition-colors"
                    >
                      prateekgarg@yarnsmitharts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} className="text-copper" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium text-sm mb-1">Phone</p>
                    <a
                      href="tel:+919891357557"
                      className="text-warm-gray text-sm hover:text-copper transition-colors"
                    >
                      +91 9891357557
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-copper" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium text-sm mb-1">Address</p>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Plot 100, HSIIDC Industrial Estate,<br />
                      Bahadurgarh, Haryana-124507, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-sm overflow-hidden border border-tan">
                <iframe
                  title="Yarnsmitharts Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8898!2d76.9192!3d28.6864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzExLjAiTiA3NsKwNTUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Interested in a Business Partnership?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with retailers, hotels, interior designers, and brands worldwide. Let's discuss how we can collaborate.
          </p>
          <a
            href="mailto:prateekgarg@yarnsmitharts.com"
            className="btn-filled"
          >
            PARTNER WITH US
          </a>
        </div>
      </section>
    </>
  );
}
