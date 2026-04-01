import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import tradeShowImg from '../assets/Events and fairs.png';
import Container from '../assets/Container.png';
import Container1 from '../assets/Container-1.png';
import Container2 from '../assets/Container-2.png';
import Container3 from '../assets/Container-3.png';
import Container4 from '../assets/Container-4.png';
import Container5 from '../assets/Container-5.png';
import Container6 from '../assets/Container-6.png';
import Container7 from '../assets/Container-7.png';

const events = [
  {
    name: 'IHGF Delhi Fair – Spring 2026',
    badge: 'SPRING EDITION',
    badgeType: 'spring',
    date: '14 February 2026 – 18 February 2026',
    venue: 'India Expo Centre & Mart',
    address: 'Greater Noida, Uttar Pradesh, India',
    description:
      'IHGF Delhi Fair – Spring 2026 is one of the most influential international trade shows for handicrafts, home décor, and lifestyle products. Organised by the Export Promotion Council for Handicrafts, the fair brings together thousands of manufacturers, exporters, designers, and artisans from across India. The exhibition provides global buyers with an opportunity to explore innovative collections in furniture, home accessories, fashion jewellery, gifts, and eco-friendly products.',
    imagePosition: 'left',
    image: Container,
  },
  {
    name: 'IHGF Delhi Fair – Autumn 2025',
    badge: 'AUTUMN EDITION',
    badgeType: 'autumn',
    date: '13 October 2025 – 17 October 2025',
    venue: 'India Expo Centre & Mart',
    address: 'Greater Noida, Uttar Pradesh, India',
    description:
      'IHGF Delhi Fair – Autumn 2025 is a prestigious global trade fair that highlights India\'s diverse range of handicrafts, home décor, furnishings, furniture, and lifestyle products. The exhibition hosts thousands of exhibitors and attracts buyers from over 100 countries. The event provides an excellent platform for global sourcing, design inspiration, and business networking.',
    imagePosition: 'right',
    image: Container1,
  },
  {
    name: 'IHGF Delhi Fair – Spring 2025',
    badge: 'SPRING EDITION',
    badgeType: 'spring',
    date: '18 April 2025 – 30 April 2025',
    venue: 'India Expo Centre & Mart',
    address: 'Greater Noida, Uttar Pradesh, India',
    description:
      'IHGF Delhi Fair – Spring 2025 continues to strengthen India\'s position as a leading global sourcing destination for handicrafts and lifestyle products. The fair features thousands of exhibitors presenting furniture, home décor, gifts, textiles, fashion accessories, and eco-friendly products. With trend zones, product displays, and networking opportunities, the fair helps businesses expand their presence in global markets.',
    imagePosition: 'left',
    image: Container2,
  },
  {
    name: 'IHGF Delhi Fair – Autumn 2024',
    badge: 'AUTUMN EDITION',
    badgeType: 'autumn',
    date: '16 October 2024 – 20 October 2024',
    venue: 'India Expo Centre & Mart',
    address: 'Greater Noida, Uttar Pradesh, India',
    description:
      'IHGF Delhi Fair – Autumn 2024 is a globally recognized B2B trade exhibition dedicated to home, lifestyle, fashion, and handicraft products. The event showcases thousands of innovative handcrafted products created by Indian artisans and exporters. With multiple exhibition halls, theme displays, and live craft demonstrations, the fair provides a dynamic platform for networking, sourcing, and expanding global trade partnerships.',
    imagePosition: 'right',
    image: Container3,
  },
  {
    name: 'IHGF Delhi Fair – Spring 2024',
    badge: 'SPRING EDITION',
    badgeType: 'spring',
    date: '6 February 2024 – 10 February 2024',
    venue: 'India Expo Centre & Mart',
    address: 'Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India',
    description:
      'IHGF Delhi Fair – Spring 2024 is a major international sourcing platform that showcases India\'s rich heritage of handcrafted products and modern lifestyle goods. The exhibition features thousands of exhibitors presenting innovative collections in home décor, furnishings, furniture, lighting, fashion accessories, and eco-friendly products. The event plays a vital role in promoting India\'s handicraft exports globally.',
    imagePosition: 'left',
    image: Container4,
  },
  {
    name: 'IHGF Delhi Fair – Autumn 2023',
    badge: 'AUTUMN EDITION',
    badgeType: 'autumn',
    date: '12 October 2023 – 16 October 2023',
    venue: 'India Expo Centre & Mart',
    address: 'Plot No. 23-25 & 27-29, Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India',
    description:
      'IHGF Delhi Fair – Autumn 2023 is an internationally recognised trade show dedicated to handicrafts, home furnishings, fashion accessories, and lifestyle products. The fair features a wide variety of handcrafted items including furniture, lighting, home décor, textiles, gifts, and festive decorations. With theme pavilions, craft demonstrations, and trend displays, the fair offers valuable insights into global design trends.',
    imagePosition: 'right',
    image: Container5,
  },
  {
    name: 'IHGF Delhi Fair – Spring 2023',
    badge: 'SPRING EDITION',
    badgeType: 'spring',
    date: '13 March 2023 – 17 March 2023',
    venue: 'India Expo Centre & Mart',
    address: 'Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India',
    description:
      'IHGF Delhi Fair – Spring 2023 continued the legacy of connecting international buyers with India\'s vibrant handicraft industry. Visitors explored diverse segments such as home décor, furniture, fashion jewellery, gifts, carpets, textiles, and eco-friendly products. The event serves as a premier B2B platform where global importers, wholesalers, retailers, and designers discover innovative products and establish long-term sourcing partnerships.',
    imagePosition: 'left',
    image: Container6,
  },
  {
    name: 'IHGF Delhi Fair – Autumn 2022',
    badge: 'AUTUMN EDITION',
    badgeType: 'autumn',
    date: '14 October 2022 – 18 October 2022',
    venue: 'India Expo Centre & Mart',
    address: 'Plot No. 23-25, 27-29, Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India',
    description:
      'IHGF Delhi Fair – Autumn 2022 is one of the world\'s largest sourcing events for home décor, handicrafts, furniture, lifestyle products, textiles, and gifts. Buyers from more than 100 countries visit the exhibition to discover new product designs and sourcing opportunities. The event showcases handcrafted products across multiple categories including home accessories, furnishings, fashion accessories, lighting, garden décor, and festive items.',
    imagePosition: 'right',
    image: Container7,
  },
];

function EventCard({ event, index }) {
  const isImageLeft = event.imagePosition === 'left';
  const badgeColor = event.badgeType === 'spring' ? 'bg-[#5A7A3A]' : 'bg-[#B8864E]';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start py-12 lg:py-16 ${index !== 0 ? 'border-t border-tan/50' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-sm ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <span className={`absolute left-3 z-10 ${badgeColor} text-white text-[10px] font-medium tracking-[0.15em] uppercase px-4 py-2 rounded-sm`}>
          {event.badge}
        </span>
        <img
          src={event.image || tradeShowImg}
          alt={event.name}
          className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] text-charcoal font-normal mb-4 leading-tight">
          {event.name}
        </h3>

        <div className="flex items-center gap-2 text-charcoal text-[13px] mb-2">
          <Calendar size={14} className="text-copper flex-shrink-0" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-start gap-2 text-charcoal text-[13px] mb-1">
          <MapPin size={14} className="text-copper flex-shrink-0 mt-0.5" />
          <span>{event.venue}</span>
        </div>

        <p className="text-warm-gray text-[12px] ml-[22px] mb-5 leading-relaxed">
          {event.address}
        </p>

        <p className="text-warm-gray text-[13px] leading-[1.8]">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative mt-16 lg:mt-20 bg-charcoal overflow-hidden group">
        <img
          src={tradeShowImg}
          alt="Exhibition booth"
          className="w-full h-auto object-cover opacity-80 block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="section-label text-copper-light mb-2 sm:mb-4 tracking-[0.3em] text-[10px] sm:text-xs">GLOBAL PRESENCE</p>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight italic">
              Events & Fair
            </h1>
          </div>
        </div>
      </section>

      {/* Flagship Exhibition - IHGF Delhi Fair */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label mb-4 tracking-[0.3em]">FLAGSHIP EXHIBITION</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-5">
              IHGF Delhi Fair
            </h2>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our consistent presence at India's premier handicrafts and home décor trade
              show, organized by the Export Promotion Council for Handicrafts (EPCH).
            </p>
          </div>

          {/* Event Cards - Alternating Layout */}
          <div>
            {events.map((event, index) => (
              <EventCard key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-5">
            Meet Us at Our Next Event
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a meeting with our team at an upcoming exhibition.
          </p>
          <Link to="/contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal hover:border-white">
            BOOK A MEETING
          </Link>
        </div>
      </section>
    </>
  );
}
