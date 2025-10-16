import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '12+', label: 'Years of Market Experience' },
  { value: '500K+', label: 'Clients' },
  { value: '130+', label: 'Employees' },
];

export default function ByTheNumbers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          By the Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div
                className="text-5xl md:text-6xl font-semibold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-700 text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
