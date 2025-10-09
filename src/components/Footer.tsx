import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              RETAIL INC
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lebanon's premier fashion holding group representing global brands under Karlson Holding.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Our Brands</a></li>
              <li><a href="#franchise" className="hover:text-white transition-colors">Franchise</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Karlson Holding Bldg, Bishop Abou Jawde St, Bkennaya Road, Jal el Dib, Lebanon</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+961 4 723 723</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@retail-inc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Retail Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
