import { useState, useEffect } from 'react';

const brandsData = [
  {
    name: 'Subdued',
    videoUrl: '/subdued video faster.mp4',
    posterImage: '/pn0daficol1bb-1.jpg',
    isYouTube: false,
    sectionId: 'brand-subdued',
  },
  {
    name: 'Parfois',
    videoUrl: '/parfois short.mp4',
    posterImage: '/2_clothing copy copy.webp',
    isYouTube: false,
    sectionId: 'brand-parfois',
  },
  {
    name: 'Jaune',
    videoUrl: '/jaune.mp4',
    posterImage: '/image copy copy copy copy copy copy copy copy copy copy.png',
    isYouTube: false,
    sectionId: 'brand-jaune',
  },
  {
    name: 'OXXO',
    videoUrl: '/oxxo video.mp4',
    posterImage: '/Gemini_Generated_Image_q8im0hq8im0hq8im.png',
    isYouTube: false,
    sectionId: 'brand-oxxo',
  },
  {
    name: 'Kusmi Tea',
    videoUrl: '/kusmi tea video.mp4',
    posterImage: '/pexels-dickydikiw-34170576 copy.jpg',
    isYouTube: false,
    sectionId: 'brand-kusmi-tea',
  },
];

export default function BrandsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    brandsData.forEach((brand, index) => {
      if (!brand.isYouTube && index !== 0) {
        const video = document.createElement('video');
        video.src = brand.videoUrl;
        video.preload = 'auto';
        video.onloadeddata = () => {
          setLoadedVideos(prev => new Set([...prev, index]));
        };
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % brandsData.length;
      setNextIndex(next);
      setTimeout(() => {
        setCurrentIndex(next);
        setNextIndex(null);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleBrandClick = (index: number) => {
    if (index === currentIndex) return;
    setNextIndex(index);
    setTimeout(() => {
      setCurrentIndex(index);
      setNextIndex(null);
    }, 300);
  };

  const renderVideo = (brand: typeof brandsData[0], isNext: boolean) => {
    const baseClasses = "absolute inset-0 transition-opacity duration-300";
    const opacityClass = isNext ? "opacity-100" : "opacity-0";

    return brand.isYouTube ? (
      <iframe
        src={`${brand.videoUrl}?autoplay=1&mute=1&loop=1&playlist=y0mhodH7A2k&controls=0&modestbranding=1&rel=0`}
        className={`${baseClasses} ${opacityClass}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ border: 'none', pointerEvents: 'none', width: '100vw', height: '80vh', objectFit: 'cover', objectPosition: 'center' }}
      />
    ) : (
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`${baseClasses} ${opacityClass}`}
        style={{ width: '100vw', height: '80vh', objectFit: 'cover', objectPosition: 'center' }}
      >
        <source src={brand.videoUrl} type="video/mp4" />
      </video>
    );
  };

  const currentBrand = brandsData[currentIndex];
  const nextBrand = nextIndex !== null ? brandsData[nextIndex] : null;

  return (
    <section className="relative min-h-screen bg-white -mx-0 px-0">
      <div className="relative w-screen h-[80vh] overflow-hidden left-1/2 right-1/2 -mx-[50vw] bg-black">
        {brandsData.map((brand, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentIndex && nextIndex === null ? 'opacity-100 z-10' :
              index === nextIndex ? 'opacity-100 z-20' :
              'opacity-0 z-0'
            }`}
          >
            {renderVideo(brand, index === nextIndex || (index === currentIndex && nextIndex === null))}
          </div>
        ))}

        <div className="absolute inset-0 bg-black/30 z-30"></div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 z-40 ${
            nextIndex !== null ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h2
            className="text-5xl md:text-7xl text-white font-light mb-4 tracking-wider"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {currentBrand.name}
          </h2>
          <button
            onClick={() => {
              const element = document.getElementById(currentBrand.sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="text-white text-sm tracking-widest uppercase border-b border-white pb-1 hover:opacity-70 transition-opacity"
          >
            Discover More
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-center items-center overflow-x-auto">
            {brandsData.map((brand, index) => (
              <button
                key={brand.name}
                onClick={() => handleBrandClick(index)}
                className={`px-8 py-6 text-sm tracking-widest whitespace-nowrap transition-all uppercase ${
                  currentIndex === index
                    ? 'border-b-2 border-black text-black font-semibold'
                    : 'text-gray-600 hover:text-black'
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
