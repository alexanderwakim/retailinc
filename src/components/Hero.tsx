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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/subdued.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center text-gray-900 max-w-5xl px-6 mt-32">
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
