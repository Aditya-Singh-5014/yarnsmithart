import { Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Target,
    title: 'Growth',
    description: 'Professional development and learning opportunities.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'A diverse, supportive workplace that values every voice.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and a healthy work environment.',
  },
];

const positions = [
  {
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Remote / India',
  },
  {
    title: 'Export Sales Manager',
    type: 'Full-time',
    location: 'New Delhi, India',
  },
  {
    title: 'Quality Control Supervisor',
    type: 'Contract',
    location: 'Haryana, India',
  },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">CAREERS</p>
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Why work at YARNSMITH ARTS
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-24 max-w-5xl mx-auto">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-charcoal/10 rounded-full group-hover:border-copper transition-colors duration-300">
                  <Icon size={28} className="text-charcoal group-hover:text-copper transition-colors" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  {val.title}
                </h3>
                <p className="text-warm-gray text-base leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="section-heading text-xl md:text-2xl text-center mb-10">Open Positions</h3>
          <div className="space-y-4">
            {positions.map((pos) => (
              <div 
                key={pos.title} 
                className="bg-white border border-charcoal/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow duration-300 rounded-sm"
              >
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-2">{pos.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-warm-gray">
                    <span className="uppercase tracking-widest text-xs font-medium">{pos.type}</span>
                    <span className="w-1 h-1 bg-copper rounded-full"></span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <div>
                  <Link to="/contact" className="btn-filled whitespace-nowrap">
                    APPLY NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
