import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll navigation on mobile to show active section
  useEffect(() => {
    if (navRef.current && window.innerWidth < 768) {
      const activeButton = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center w-full">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    activeSection === item.id
                      ? 'text-[#133c55] bg-blue-50 shadow-md'
                      : 'text-gray-700 hover:text-[#133c55] hover:bg-blue-50/50'
                  } hover:shadow-lg hover:scale-105`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - Horizontal Scrollable */}
          <div className="md:hidden flex-1 overflow-hidden">
            <div 
              ref={navRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 font-medium text-sm whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-[#133c55] bg-blue-50 shadow-md'
                      : 'text-gray-700 hover:text-[#133c55] hover:bg-blue-50/50'
                  } hover:shadow-lg hover:scale-105`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Hidden as we now use horizontal scroll */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#133c55]/10 transition-colors hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown - Hidden as we now use horizontal scroll */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-3 bg-white/10 backdrop-blur-md rounded-lg animate-fade-in hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                  activeSection === item.id
                    ? 'text-[#133c55] bg-[#133c55]/10'
                    : 'text-gray-700 hover:text-[#133c55] hover:bg-[#133c55]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
