import React from 'react';
import Navigation from '@/components/Navigation';
import FloatingParticles from '@/components/FloatingParticles';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-sky-50/30">
      <FloatingParticles />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Meet Vaghela. Built with passion using Flutter & Firebase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
