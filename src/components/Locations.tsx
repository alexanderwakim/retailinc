const locations = [
  { name: 'ABC Dbayeh' },
  { name: 'ABC Ashrafieh' },
  { name: 'ABC Verdun' },
  { name: 'City Centre Beirut' },
  { name: 'CityMall Dora' },
  { name: 'Tripoli Square' },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-gradient-to-br from-[#F7F4EF] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Our Locations
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          Strategically positioned across Lebanon's premier shopping destinations, we bring global brands closer to you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                  <img
                    src="/image copy copy copy copy copy copy copy copy copy copy copy.png"
                    alt="Store location"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {location.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 shadow-lg rounded-sm">
          <div className="aspect-video w-full bg-gray-200 rounded-sm overflow-hidden md:aspect-video aspect-[4/5]">
            <img
              src="/pexels-pixabay-54581.jpg"
              alt="Lebanon retail locations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 leading-relaxed">
              Our strategically positioned stores across Lebanon ensure maximum accessibility and brand visibility in the country's most prestigious retail centers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
