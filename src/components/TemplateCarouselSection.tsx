
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TemplateCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const templates = [
    { name: 'Websites', color: 'from-blue-600 to-blue-800', icon: '🌐', description: 'Professional website templates ready to customize' },
    { name: 'Instagram Posts', color: 'from-pink-500 to-pink-700', icon: '📱', description: 'Engaging social media post templates' },
    { name: 'Brochures', color: 'from-purple-500 to-purple-700', icon: '📋', description: 'Professional brochure designs' },
    { name: 'Presentations', color: 'from-indigo-500 to-indigo-700', icon: '📊', description: 'Stunning presentation templates' },
    { name: 'Videos', color: 'from-red-500 to-red-700', icon: '🎬', description: 'Video content templates and layouts' },
    { name: 'Posters', color: 'from-green-500 to-green-700', icon: '🎨', description: 'Eye-catching poster designs' },
    { name: 'Social Posts', color: 'from-yellow-500 to-yellow-700', icon: '📸', description: 'Social media content templates' },
    { name: 'Newsletters', color: 'from-teal-500 to-teal-700', icon: '📰', description: 'Professional newsletter layouts' },
    { name: 'Magazine Covers', color: 'from-orange-500 to-orange-700', icon: '📖', description: 'Magazine cover designs' },
    { name: 'Website Banners', color: 'from-cyan-500 to-cyan-700', icon: '🌐', description: 'Web banner templates' }
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
                className="flex-shrink-0 w-64 h-80 snap-center group cursor-pointer"
              >
                <div className={`h-full bg-gradient-to-br ${template.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative`}>
                  {/* Template Name at Top */}
                  <div className="absolute top-0 left-0 right-0 p-4 z-10">
                    <h3 className="font-bold text-white text-xl">{template.name}</h3>
                  </div>
                  
                  {/* Background Image/Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">{template.icon}</div>
                  </div>
                  
                  {/* Hover Overlay with Description */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-sm mb-3">{template.description}</p>
                      <button className="w-full bg-white text-[#8A3FFC] py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <Play size={16} />
                        Use Template
                      </button>
                    </div>
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
