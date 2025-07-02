
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TemplateCarouselSection = () => {
  const templates = [
    { 
      name: 'Presentations', 
      color: 'from-blue-500 to-purple-600',
      description: 'Professional slide decks and pitch presentations',
      image: 'photo-1560472354-b33ff0c44a43'
    },
    { 
      name: 'Whiteboards', 
      color: 'from-green-500 to-teal-600',
      description: 'Collaborative brainstorming and planning boards',
      image: 'photo-1552664730-d307ca884978'
    },
    { 
      name: 'Posters', 
      color: 'from-pink-500 to-rose-600',
      description: 'Eye-catching promotional and event posters',
      image: 'photo-1561070791-2526d30994b5'
    },
    { 
      name: 'Social Posts', 
      color: 'from-orange-500 to-red-600',
      description: 'Engaging content for all social platforms',
      image: 'photo-1611162617474-5b21e879e113'
    },
    { 
      name: 'Videos', 
      color: 'from-indigo-500 to-blue-600',
      description: 'Dynamic video content and animations',
      image: 'photo-1574717024653-61fd2cf4d44d'
    },
    { 
      name: 'Brochures', 
      color: 'from-purple-500 to-pink-600',
      description: 'Professional marketing materials and catalogs',
      image: 'photo-1586953208448-b95a79798f07'
    },
    { 
      name: 'Newsletters', 
      color: 'from-cyan-500 to-blue-600',
      description: 'Engaging email and digital newsletters',
      image: 'photo-1586953208448-b95a79798f07'
    },
    { 
      name: 'Instagram Posts', 
      color: 'from-gradient-to-r from-purple-400 via-pink-500 to-red-500',
      description: 'Stories, posts, and reels for Instagram',
      image: 'photo-1611162618071-b39a2ec055fb'
    },
    { 
      name: 'Magazine Covers', 
      color: 'from-yellow-500 to-orange-600',
      description: 'Professional magazine and publication covers',
      image: 'photo-1586953208448-b95a79798f07'
    },
    { 
      name: 'Website Banners', 
      color: 'from-teal-500 to-green-600',
      description: 'Web headers, banners, and digital assets',
      image: 'photo-1460925895917-afdab827c52f'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">Design Templates</span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            Templates for Every Brand Need
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From presentations to social media, get professionally designed templates that adapt to your brand instantly
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {templates.map((template, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer snap-start"
              >
                <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${template.image}?w=400&h=600&fit=crop)`
                      }}
                    />
                  </div>
                  
                  <div className="relative h-full p-6 flex flex-col">
                    <div className="text-center mb-auto">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {template.name}
                      </h3>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-gray-700 text-sm mb-3">
                          {template.description}
                        </p>
                        <button className="w-full bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                          Use Template
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Browse All Templates
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplateCarouselSection;
