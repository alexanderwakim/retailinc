import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import BrandsShowcase from './components/BrandsShowcase';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsAdminPage(window.location.hash === '#admin');
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (isAdminPage) {
    return <Admin />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BrandsShowcase />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
