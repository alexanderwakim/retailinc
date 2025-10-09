import { Building2, TrendingUp, Award } from 'lucide-react';

const timeline = [
  {
    year: '2012',
    title: 'Foundation',
    description: 'Retail Inc was established with a mission to introduce premium global brands to the Lebanese market.',
    icon: Building2,
  },
  {
    year: '2022',
    title: 'Karlson Acquisition',
    description: 'Karlson Holding acquired full ownership to scale operations and expand market footprint.',
    icon: TrendingUp,
  },
  {
    year: 'Today',
    title: 'Market Leadership',
    description: 'A prominent player with a robust network of experts, partners, and internationally trusted brands.',
    icon: Award,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-12 tracking-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          About Retail Inc
        </h2>

        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Founded in 2012, Retail Inc was built on a mission to introduce premium global brands to the Lebanese market. Grounded in a franchise-based model and prime mall locations, we quickly emerged as a benchmark of retail excellence.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            In 2022, Karlson Holding acquired full ownership to scale operations and expand our market footprint — strengthening our capabilities across logistics, IT, marketing, and brand onboarding.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Today, Retail Inc stands as a prominent player with a robust network of experts, partners, and internationally trusted brands.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 px-4 md:px-8 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div
                        className="text-2xl md:text-3xl font-semibold mb-1 md:mb-2 text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white border-[3px] md:border-4 border-black rounded-full items-center justify-center z-10">
                    <item.icon size={20} className="text-black" strokeWidth={2} />
                  </div>

                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
