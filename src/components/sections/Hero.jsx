import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Commented out 3D Character */}
      {/* <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-64 h-64 bg-gradient-to-br from-[#133c55] via-[#386fa4] to-[#59a5d8] rounded-full relative animate-bounce">
          <div className="absolute inset-4 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
            <div className="text-6xl">👨‍💻</div>
          </div>
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#84d2f6] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#91e5f6] rounded-full animate-pulse animation-delay-75"></div>
          <div className="absolute top-1/4 -left-6 w-4 h-4 bg-[#59a5d8] rounded-full animate-pulse animation-delay-150"></div>
        </div>
      </div> */}

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="block text-gray-800 mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-[#133c55] via-[#386fa4] to-[#386fa4] bg-clip-text text-transparent">
              Meet Vaghela
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 animate-fade-in animation-delay-300">
            Flutter & Android Developer | Mobile App Specialist
          </p>
          
          <p className="text-base md:text-lg text-gray-500 mb-0 max-w-3xl mx-auto animate-fade-in animation-delay-500 leading-relaxed">
            I build real-time, scalable, and cross-platform mobile experiences. From concept to deployment, 
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-500 leading-relaxed">
            I create solutions that blend performance with intuitive UI/UX.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-700">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-[#133c55] to-[#386fa4] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-[#133c55] text-[#133c55] rounded-full hover:bg-[#133c55] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} className="text-[#133c55]" />
      </button> */}
    </section>
  );
};

export default Hero;
