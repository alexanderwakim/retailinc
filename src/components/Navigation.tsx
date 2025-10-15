import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const brands = [
  { name: 'Subdued', url: 'https://subdued.retail-inc.com', external: true, id: 'brand-subdued' },
  { name: 'Parfois', id: 'brand-parfois', external: false },
  { name: 'Jaune', id: 'brand-jaune', external: false },
  { name: 'OXXO', id: 'brand-oxxo', external: false },
  { name: 'Kusmi Tea', id: 'brand-kusmi-tea', external: false },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsBrandsDropdownOpen(false);
    }
  };

  const handleBrandClick = (brand: typeof brands[0]) => {
    if (brand.external && brand.url) {
      window.open(brand.url, '_blank', 'noopener,noreferrer');
    } else if (brand.id) {
      const element = document.getElementById(brand.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setIsOpen(false);
        setIsBrandsDropdownOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="h-8 md:h-10 -ml-2">
            <img
              src="/WhatsApp_Image_2025-10-08_at_5.57.47_PM-removebg-preview.png"
              alt="Retail Inc"
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-sm tracking-wide hover:text-gray-600 transition-colors">
              HOME
            </button>
            <div
              className="relative"
              onMouseEnter={() => setIsBrandsDropdownOpen(true)}
              onMouseLeave={() => setIsBrandsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('brands')}
                className="text-sm tracking-wide hover:text-gray-600 transition-colors flex items-center gap-1"
              >
                BRANDS
                <ChevronDown size={16} className={`transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isBrandsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-sm py-2">
                  {brands.map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => handleBrandClick(brand)}
                      className="block w-full text-left px-4 py-2 text-sm tracking-wide hover:bg-gray-50 transition-colors"
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection('about')} className="text-sm tracking-wide hover:text-gray-600 transition-colors">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('locations')} className="text-sm tracking-wide hover:text-gray-600 transition-colors">
              LOCATIONS
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors">
              HOME
            </button>
            <div>
              <button
                onClick={() => setIsBrandsDropdownOpen(!isBrandsDropdownOpen)}
                className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors flex items-center justify-between"
              >
                BRANDS
                <ChevronDown size={16} className={`transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isBrandsDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => handleBrandClick(brand)}
                      className="block w-full text-left text-sm tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('locations')} className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors">
              LOCATIONS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
