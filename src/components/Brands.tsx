import { ExternalLink, Phone } from 'lucide-react';
import { useState } from 'react';

const brands = [
  {
    name: 'Subdued',
    description: 'Gen Z-focused Italian fashion brand delivering contemporary streetwear and bold statement pieces.',
    image: '/WhatsApp Image 2025-10-13 at 8.58.56 PM.jpeg',
    link: 'https://subdued.retail-inc.com',
    id: 'brand-subdued',
  },
  {
    name: 'Parfois',
    description: 'Affordable European accessories label for fashion-forward women seeking timeless elegance.',
    image: '/2_clothing copy copy.webp',
    link: 'https://parfois.retail-inc.com',
    id: 'brand-parfois',
    contacts: [
      { location: 'ABC Achrafieh L1', phone: '+961 01 322 361' },
      { location: 'ABC Verdun L1', phone: '+961 01 798 604' },
      { location: 'ABC Dbayeh L0', phone: '+961 04 407 305' },
      { location: 'Beirut City Centre L0', phone: '+961 01 291 251' },
      { location: 'City Mall GF', phone: '+961 01 899 542' },
    ],
  },
  {
    name: 'Jaune',
    description: 'Lebanese menswear brand blending active, casual, and formal styles with Mediterranean flair.',
    image: '/Jaune 61.jpg',
    link: 'https://jaune.retail-inc.com',
    id: 'brand-jaune',
    contacts: [
      { location: 'ABC Achrafieh', phone: '+961 81 227 100' },
      { location: 'ABC Dbayeh', phone: '+961 81 227 100' },
      { location: 'City Mall', phone: '+961 81 227 100' },
      { location: 'Beirut City Centre', phone: '+961 81 227 100' },
      { location: 'Tripoli Square', phone: '+961 81 227 100' },
    ],
  },
  {
    name: 'OXXO',
    description: 'Turkish womenswear brand offering bold everyday fashion for the modern, confident woman.',
    image: '/oxxo image.jpg',
    link: '#',
    id: 'brand-oxxo',
    contacts: [
      { location: 'Beirut City Centre, L0', phone: '+961 01 291 255' },
    ],
  },
  {
    name: 'Kusmi Tea',
    description: 'Parisian heritage luxury tea brand with organic blends and artisanal craftsmanship.',
    image: '/pexels-dickydikiw-34170576 copy.jpg',
    link: '#',
    id: 'brand-kusmi-tea',
    contacts: [
      { location: 'ABC Achrafieh', phone: '+961 01 322 066' },
    ],
  },
];

export default function Brands() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Our Brands
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          We represent a curated portfolio of internationally recognized fashion and lifestyle brands, each bringing unique value to the Lebanese market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {brands.slice(0, 3).map((brand, index) => (
            <div
              key={index}
              id={brand.id}
              className={`relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${brand.name === 'Subdued' ? 'cursor-pointer' : 'cursor-pointer'}`}
              style={{ perspective: '1000px', minHeight: '540px' }}
              onClick={brand.name === 'Subdued' ? () => window.open(brand.link, '_blank') : () => toggleCard(index)}
            >
              <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ${brand.name === 'Subdued' ? '' : flippedCards.has(index) ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 w-full h-full bg-white" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className={`w-full h-full object-cover ${brand.name === 'Subdued' ? 'object-[center_30%]' : 'object-top'}`}
                    />
                    {brand.name === 'Subdued' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="bg-white text-black px-8 py-3 text-sm tracking-wide font-medium inline-flex items-center gap-2">
                          SHOP NOW
                          <ExternalLink size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
                    {brand.name === 'Subdued' ? (
                      <div className="mb-8 h-12 flex items-center justify-center">
                        <img
                          src="/image.png"
                          alt="Subdued"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : brand.name === 'Parfois' ? (
                      <div className="mb-8 h-12 flex items-center justify-center">
                        <img
                          src="/image copy.png"
                          alt="Parfois"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : brand.name === 'Jaune' ? (
                      <div className="mb-8 h-12 flex items-center justify-center">
                        <img
                          src="/JAUNE Logo Navy.png"
                          alt="Jaune"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <h3
                        className="text-2xl font-semibold mb-3 tracking-tight"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {brand.name}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed text-sm text-center">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {brand.name !== 'Subdued' && (
                  <div
                    className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center p-8 pt-16"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    {brand.contacts ? (
                      <>
                        <div className="flex flex-col items-center mb-6">
                          <Phone size={48} className="text-black mb-4" />
                          <h3 className="text-2xl font-semibold text-black tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Contact {brand.name}
                          </h3>
                        </div>
                        <ul className="space-y-3 text-black text-center w-full max-h-80 overflow-y-auto">
                          {brand.contacts.map((contact, idx) => (
                            <li key={idx} className="flex flex-col">
                              <span className="font-semibold text-sm">{contact.location}</span>
                              <span className="text-sm opacity-90">{contact.phone}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <a
                          href={brand.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-8 py-3 text-sm tracking-wide font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                        >
                          SHOP NOW
                          <ExternalLink size={16} />
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {brands.slice(3).map((brand, index) => (
            <div
              key={index + 3}
              id={brand.id}
              className="relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ perspective: '1000px', minHeight: '540px' }}
              onClick={() => toggleCard(index + 3)}
            >
              <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ${flippedCards.has(index + 3) ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 w-full h-full bg-white" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 flex flex-col items-center">
                    {brand.name === 'OXXO' ? (
                      <div className="mb-8 h-12 flex items-center justify-center">
                        <img
                          src="/image copy copy.png"
                          alt="OXXO"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : brand.name === 'Kusmi Tea' ? (
                      <div className="mb-8 h-12 flex items-center justify-center">
                        <img
                          src="/image copy copy copy.png"
                          alt="Kusmi Tea"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <h3
                        className="text-2xl font-semibold mb-3 tracking-tight"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {brand.name}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed text-sm text-center max-w-xs">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center p-8"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  {brand.contacts ? (
                    <>
                      <div className="flex flex-col items-center">
                        <Phone size={48} className="text-black mb-4" />
                        <h3 className="text-2xl font-semibold text-black mb-6 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Contact {brand.name}
                        </h3>
                      </div>
                      <ul className="space-y-3 text-black text-center w-full max-h-80 overflow-y-auto">
                        {brand.contacts.map((contact, idx) => (
                          <li key={idx} className="flex flex-col">
                            <span className="font-semibold text-sm">{contact.location}</span>
                            <span className="text-sm opacity-90">{contact.phone}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-8 py-3 text-sm tracking-wide font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                    >
                      SHOP NOW
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
