import Navigation from './components/Navigation';
import BrandsShowcase from './components/BrandsShowcase';
import Brands from './components/Brands';
import About from './components/About';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BrandsShowcase />
      <Brands />
      <About />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
