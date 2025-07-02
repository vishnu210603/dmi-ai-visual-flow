
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "With DMI.ai, we cut design time in half and unlocked creativity across our team.",
      name: "Molly Chen",
      role: "Art Director",
      company: "Expedia",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      companyLogo: "EX"
    },
    {
      quote: "The AI tools are incredibly intuitive. Our marketing campaigns have never looked better.",
      name: "David Rodriguez",
      role: "Creative Lead",
      company: "Spotify",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      companyLogo: "SP"
    },
    {
      quote: "Real-time collaboration changed how our distributed team works together on designs.",
      name: "Sarah Kim",
      role: "Design Manager",
      company: "Shopify",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      companyLogo: "SH"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Teams Love DMI.ai
          </h2>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Join thousands of creative professionals who trust DMI.ai for their design needs
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'scale-105 ring-4 ring-white ring-opacity-50' 
                    : 'scale-95 opacity-70'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-[#444] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-[#121212]">{testimonial.name}</div>
                    <div className="text-sm text-[#444]">{testimonial.role}</div>
                  </div>
                  <div className="w-10 h-10 bg-[#8A3FFC] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{testimonial.companyLogo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          <div className="text-center">
            <button className="bg-white text-[#8A3FFC] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Designing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
