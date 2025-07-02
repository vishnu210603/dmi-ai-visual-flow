
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TemplateCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const templates = [
    { name: 'Presentations', color: 'from-blue-400 to-blue-600', icon: '📊' },
    { name: 'Whiteboards', color: 'from-green-400 to-green-600', icon: '📝' },
    { name: 'Posters', color: 'from-purple-400 to-purple-600', icon: '🎨' },
    { name: 'Social Posts', color: 'from-pink-400 to-pink-600', icon: '📱' },
    { name: 'Videos', color: 'from-red-400 to-red-600', icon: '🎬' },
    { name: 'Brochures', color: 'from-yellow-400 to-yellow-600', icon: '📋' },
    { name: 'Newsletters', color: 'from-indigo-400 to-indigo-600', icon: '📰' },
    { name: 'Instagram Posts', color: 'from-orange-400 to-orange-600', icon: '📸' },
    { name: 'Magazine Covers', color: 'from-teal-400 to-teal-600', icon: '📖' },
    { name: 'Website Banners', color: 'from-cyan-400 to-cyan-600', icon: '🌐' }
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 280;
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % templates.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + templates.length) % templates.length;
    scrollToIndex(prev);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f8ff] to-[#f0f0ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            Templates for Every Idea
          </h2>
          <p className="text-lg text-[#444] max-w-2xl mx-auto">
            Choose from thousands of professionally designed templates and customize them to match your brand
          </p>
        </div>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {templates.map((template, index) => (
              <div
                key={template.name}
                className="flex-shrink-0 w-64 snap-center group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${template.color} flex items-center justify-center relative`}>
                    <div className="text-6xl">{template.icon}</div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                        <Play size={20} className="text-[#8A3FFC] ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#121212] mb-2">{template.name}</h3>
                    <p className="text-sm text-[#444] mb-3">Professional templates ready to customize</p>
                    <button className="w-full bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft size={24} className="text-[#8A3FFC]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight size={24} className="text-[#8A3FFC]" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {templates.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#8A3FFC] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateCarouselSection;
