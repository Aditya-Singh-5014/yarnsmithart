import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="bg-tan-light py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="section-label mb-4">STAY CONNECTED</p>

        <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-5">
          Join the Yarnsmitharts <br/>
          World
        </h2>

        <p className="text-warm-gray text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Be the first to discover new collections, design inspirations, and
          exclusive events.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3.5 bg-white border border-tan text-charcoal text-sm rounded-sm outline-none focus:border-copper transition-colors placeholder:text-warm-gray-light"
            required
          />
          <button type="submit" className="btn-filled whitespace-nowrap">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
