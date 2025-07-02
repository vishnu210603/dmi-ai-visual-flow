
import React from 'react';

const TrustedBrandsSection = () => {
  const brands = [
    'Google', 'Microsoft', 'Adobe', 'Netflix', 'Salesforce', 'Meta', 
    'Shopify', 'Spotify', 'Airbnb', 'Uber', 'Tesla', 'PayPal'
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
            Trusted by Brands Worldwide
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="text-2xl font-bold text-gray-400 hover:text-[#8A3FFC] transition-colors duration-300 cursor-pointer">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrandsSection;
