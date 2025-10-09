import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/Gemini_Generated_Image_lmlx9zlmlx9zlmlx%20copy.png)',
          backgroundPosition: 'center center',
        }}
      />

      <div className="relative z-10 text-center text-gray-900 max-w-5xl px-6 mt-32">
        <h1
          className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Where Global Brands Meet<br />Proven Retail Execution.
        </h1>
        <p className="text-base md:text-lg mb-12 text-gray-900 max-w-3xl mx-auto leading-relaxed">
          Retail Inc connects world-class fashion labels with Lebanon's most dynamic retail network.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('brands')}
            className="bg-gray-900 text-white px-7 py-3 text-xs tracking-wide font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
          >
            EXPLORE OUR BRANDS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
}
