import { useState, useEffect } from 'react';

const brandsData = [
  {
    name: 'Subdued',
    videoUrl: '/subdued.mp4',
    posterImage: '/pn0daficol1bb-1.jpg',
  },
  {
    name: 'Parfois',
    videoUrl: '/parfois.mp4',
    posterImage: '/2_clothing copy copy.webp',
  },
  {
    name: 'Jaune',
    videoUrl: '/jaune.mp4',
    posterImage: '/image copy copy copy copy copy copy copy copy copy copy.png',
  },
  {
    name: 'OXXO',
    videoUrl: '/oxxo.mp4',
    posterImage: '/Gemini_Generated_Image_q8im0hq8im0hq8im.png',
  },
  {
    name: 'Kusmi Tea',
    videoUrl: '/kusmi.mp4',
    posterImage: '/pexels-dickydikiw-34170576 copy.jpg',
  },
];

export default function BrandsShowcase() {
  const [selectedBrand, setSelectedBrand] = useState(brandsData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % brandsData.length;
        setSelectedBrand(brandsData[nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      <div className="relative w-full h-screen">
        <video
          key={selectedBrand.name}
          autoPlay
          loop
          muted
          playsInline
          poster={selectedBrand.posterImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={selectedBrand.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="text-5xl md:text-7xl text-white font-light mb-4 tracking-wider"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {selectedBrand.name}
          </h2>
          <button className="text-white text-sm tracking-widest uppercase border-b border-white pb-1 hover:opacity-70 transition-opacity">
            Discover More
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-center items-center overflow-x-auto">
            {brandsData.map((brand, index) => (
              <button
                key={brand.name}
                onClick={() => {
                  setSelectedBrand(brand);
                  setCurrentIndex(index);
                }}
                className={`px-8 py-6 text-sm tracking-widest whitespace-nowrap transition-all ${
                  selectedBrand.name === brand.name
                    ? 'border-b-2 border-black text-black font-medium'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {brand.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
