
import React from 'react';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">AI-First Brand Platform</span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>  
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Launch Your Brand
            <br />
            <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
              Everywhere
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create consistent, professional brand experiences across all platforms with our AI-powered design platform. 
            From social media to presentations, maintain your brand identity automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
            <button 
              onClick={() => navigate('/templates')}
              className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Sparkles size={24} />
              Start Building Now
              <ArrowRight size={24} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-[#8A3FFC] hover:text-[#8A3FFC] transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Design</h3>
              <p className="text-gray-600">Generate professional designs with intelligent AI suggestions</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Create designs in minutes, not hours</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Consistent</h3>
              <p className="text-gray-600">Maintain perfect brand consistency across all platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
