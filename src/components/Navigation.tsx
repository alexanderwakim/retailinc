import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="h-8 md:h-10">
            <img
              src="/WhatsApp_Image_2025-10-08_at_5.57.47_PM-removebg-preview.png"
              alt="Retail Inc"
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm tracking-wide hover:text-gray-600 transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-sm tracking-wide hover:text-gray-600 transition-colors">
              BRANDS
            </button>
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
            <button onClick={() => scrollToSection('brands')} className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors">
              BRANDS
            </button>
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
