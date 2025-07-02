
import React from 'react';
import { Play, Sparkles, Palette, Layout } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#121212] leading-tight mb-6">
              Design Anything. 
              <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
                {" "}Instantly.
              </span>
              <br />With AI.
            </h1>
            <p className="text-xl text-[#444] mb-8 leading-relaxed">
              From posters to presentations, let DMI.ai turn your ideas into powerful visuals in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Start Designing
              </button>
              <button className="border-2 border-[#8A3FFC] text-[#8A3FFC] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8A3FFC] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Layout size={20} />
                Explore Templates
              </button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-auto text-sm text-gray-500">DMI.ai Editor</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="bg-[#8A3FFC] text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                      <Palette size={12} />
                      Magic Edit
                    </div>
                    <div className="bg-[#4F82FF] text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                      <Sparkles size={12} />
                      AI Generate
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                        <Play size={24} fill="white" className="text-white ml-1" />
                      </div>
                      <p className="text-gray-600 text-sm">AI Design in Progress...</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-[#8A3FFC] h-8 rounded opacity-80"></div>
                    <div className="bg-[#4F82FF] h-8 rounded opacity-60"></div>
                    <div className="bg-purple-300 h-8 rounded opacity-40"></div>
                    <div className="bg-blue-300 h-8 rounded opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
