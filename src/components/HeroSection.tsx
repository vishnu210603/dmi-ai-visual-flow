
import React from 'react';
import { Play, Sparkles, Palette, Layout, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-20 bg-white overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#4F82FF] to-[#8A3FFC] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Elements Animation */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-[#8A3FFC] rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#4F82FF] rounded-full animate-bounce opacity-40" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/20 to-blue-50/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-opacity-10 rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-[#8A3FFC]" />
              <span className="text-[#8A3FFC] text-sm font-medium">AI-First Brand Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#121212] leading-tight mb-6">
              Empower Your Brand. 
              <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
                {" "}Launch Anywhere.
              </span>
              <br />With AI.
            </h1>
            <p className="text-xl text-[#444] mb-8 leading-relaxed">
              The intelligent design assistant that auto-generates on-brand content, websites, and mobile apps—based entirely on your brand kit. Think Canva meets OpenAI, but for B2B brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/editor')}
                className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                Start Building
              </button>
              <button className="border-2 border-[#8A3FFC] text-[#8A3FFC] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8A3FFC] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Layout size={20} />
                View Demo
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
                  <div className="ml-auto text-sm text-gray-500">DMI.ai Studio</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="bg-[#8A3FFC] text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                      <Palette size={12} />
                      Brand Kit
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
                      <p className="text-gray-600 text-sm">Generating brand assets...</p>
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
