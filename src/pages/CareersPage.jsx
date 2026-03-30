import { Link } from 'react-router-dom';
import { Heart, TrendingUp, Users, Clock, Briefcase } from 'lucide-react';
import craftsmanshipImg from '../assets/Craftsmanship.png';
import lifestyleImg from '../assets/Lifestyle inspiration.png';

const cultureHighlights = [
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Create products that bring beauty to homes worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Professional development and learning opportunities.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'A diverse, supportive workplace that values every voice.',
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and a healthy work environment.',
  },
];

const openPositions = [
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Bahadurgarh, India',
    type: 'Full-time',
  },
  {
    title: 'Export Sales Manager',
    department: 'Sales',
    location: 'Bahadurgarh, India',
    type: 'Full-time',
  },
  {
    title: 'Quality Control Supervisor',
    department: 'Operations',
    location: 'Bahadurgarh, India',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={lifestyleImg}
            alt="Yarnsmitharts workspace"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-copper-light mb-4 tracking-[0.3em]">JOIN OUR TEAM</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Careers
          </h1>
        </div>
      </section>

      {/* Build Something Beautiful */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4 tracking-[0.3em]">WORK WITH US</p>
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-5">
            Build Something Beautiful
          </h2>
          <p className="text-warm-gray text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Yarnsmitharts, we're more than a brand — we're a community of passionate individuals
            dedicated to craftsmanship, design, and sustainability. Join us and be part of a team that's
            shaping the future of premium home accessories.
          </p>
        </div>
      </section>

      {/* Why Work at YARNSMITH ARTS */}
      <section className="bg-tan-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4 tracking-[0.3em]">CULTURE</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              Why Work at YARNSMITH ARTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {cultureHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="flex justify-center mb-5">
                    <Icon size={28} className="text-copper" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base lg:text-lg text-charcoal mb-3 italic">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4 tracking-[0.3em]">OPPORTUNITIES</p>
            <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] mb-5">
              Open Positions
            </h2>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Explore current openings and find the role that's right for you.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((pos) => (
              <div
                key={pos.title}
                className="bg-cream border border-charcoal/10 p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow duration-300 rounded-sm"
              >
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-1.5 font-medium">
                    {pos.title}
                  </h3>
                  <p className="text-warm-gray text-[13px]">
                    {pos.department} · {pos.location} · {pos.type}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="btn-filled whitespace-nowrap text-center"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Briefcase size={15} strokeWidth={1.5} />
                  APPLY NOW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
