
import React from 'react';
import HeroSection from '../components/HeroSection';
import CreateWithAISection from '../components/CreateWithAISection';
import CollaborativeDesignSection from '../components/CollaborativeDesignSection';
import PrintReadySection from '../components/PrintReadySection';
import TemplateCarouselSection from '../components/TemplateCarouselSection';
import TrustedBrandsSection from '../components/TrustedBrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTAFooterSection from '../components/CTAFooterSection';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CreateWithAISection />
      <CollaborativeDesignSection />
      <PrintReadySection />
      <TemplateCarouselSection />
      <TrustedBrandsSection />
      <TestimonialsSection />
      <CTAFooterSection />
    </div>
  );
};

export default Index;
