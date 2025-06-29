import React from 'react';
import { Smartphone, Server, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Custom native and cross-platform mobile apps built with Flutter and Android.",
      features: ["Flutter & Dart", "Android Native (Java/Kotlin)", "Firebase & Push Notifications", "App Store & Play Store Publishing"],
      bgColor: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Full-Stack Mobile Solutions",
      description: "End-to-end mobile architecture, real-time database sync, and cloud integrations.",
      features: ["Firebase Integration (Realtime, Firestore)", "API Integration & Development", "Secure Data Storage with RoomDB", "App Performance Optimization"],
      bgColor: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "App Optimization & Security",
      description: "Optimize existing apps for performance, load, and security.",
      features: ["Code Refactoring", "Caching & Lazy Loading", "Offline Access with Room", "Biometric Authentication"],
      bgColor: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#133c55] to-[#386fa4] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Comprehensive mobile development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#133c55]/5 to-[#386fa4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon with different colors */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.bgColor} ${service.hoverColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#133c55] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#133c55] to-[#386fa4] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Commented out */}
                {/* <button className="mt-6 w-full py-3 border-2 border-[#133c55] text-[#133c55] rounded-xl hover:bg-[#133c55] hover:text-white hover:border-[#133c55] transition-all duration-300 font-medium">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-700">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help bring your mobile app ideas to life with custom solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-[#133c55] to-[#386fa4] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
