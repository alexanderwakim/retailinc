import { MapPin, ShoppingBag, Handshake } from 'lucide-react';

const strengths = [
  {
    icon: MapPin,
    title: 'Prime Retail Locations',
    description: 'Strategically securing high-footfall spaces to maximize brand exposure.',
  },
  {
    icon: ShoppingBag,
    title: 'Omnichannel Strategy',
    description: 'Blending digital and physical retail for a seamless shopping experience.',
  },
  {
    icon: Handshake,
    title: 'Strong Brand Partnerships',
    description: 'Working with globally recognized fashion and lifestyle brands.',
  },
];

export default function OurStrengths() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Our Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <strength.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {strength.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
