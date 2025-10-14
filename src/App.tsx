import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandsShowcase from './components/BrandsShowcase';
import ByTheNumbers from './components/ByTheNumbers';
import OurStrengths from './components/OurStrengths';
import About from './components/About';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BrandsShowcase />
      <ByTheNumbers />
      <OurStrengths />
      <About />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
