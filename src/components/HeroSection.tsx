
import React from 'react';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent uppercase tracking-wider">AI-First Brand Platform</span>
              <div className="w-2 h-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-full"></div>  
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Launch Your Brand
              <br />
              <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Create consistent, professional brand experiences across all platforms with our AI-powered design platform. 
              From social media to presentations, maintain your brand identity automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-16">
              <button 
                onClick={() => navigate('/templates')}
                className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Sparkles size={24} />
                Start Building Now
                <ArrowRight size={24} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-[#8A3FFC] hover:text-[#8A3FFC] transition-all duration-300 bg-white/50 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Design</h3>
                <p className="text-gray-600 text-sm">Generate professional designs with intelligent AI suggestions</p>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Create designs in minutes, not hours</p>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded-xl flex items-center justify-center mb-4">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Consistent</h3>
                <p className="text-gray-600 text-sm">Maintain perfect brand consistency across all platforms</p>
              </div>
            </div>
          </div>

          {/* Right Side - Graphics */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Design Canvas Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] rounded flex-1"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <Sparkles className="text-purple-500" size={24} />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-lg animate-ping">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
