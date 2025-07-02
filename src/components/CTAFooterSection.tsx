
import React from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const CTAFooterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-white" />
            <span className="text-white text-sm font-medium">AI-First Brand Platform</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Scale Your
            <br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Brand Everywhere?
            </span>
          </h2>
          
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking B2B brands who trust DMI.ai to amplify their digital identity at scale. Start building your brand ecosystem today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-[#8A3FFC] px-8 py-4 rounded-lg text-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
            <Sparkles size={20} />
            Start Building
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="text-white border-2 border-white border-opacity-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8A3FFC] transition-all duration-300 flex items-center gap-2 hover:border-opacity-100">
            Book Demo
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white text-opacity-75 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>White-glove onboarding</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white bg-opacity-5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default CTAFooterSection;
