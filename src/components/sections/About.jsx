import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#133c55] to-[#386fa4] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6 animate-fade-in animation-delay-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate mobile app developer with solid experience crafting high-impact Android and Flutter applications. 
              With 8+ enterprise apps developed and 6+ apps published on the Play Store and App Store, I specialize in 
              building robust mobile solutions that integrate GPS tracking, real-time messaging, secure storage, and modern UI components.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently based in Vadodara, Gujarat, I've worked on multiple end-to-end projects, including CRMs, chat apps, 
              and e-commerce solutions. Whether native Android or cross-platform with Flutter, I ensure smooth, secure, 
              and scalable apps.
            </p>

            {/* Commented out statistics */}
            {/* <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-blue-600 font-semibold">5+ Years Experience</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-sky-600 font-semibold">50+ Projects Completed</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-blue-600 font-semibold">Happy Clients</span>
              </div>
            </div> */}
          </div>

          {/* Commented out testimonials section */}
          {/* <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What Clients Say</h3>
            
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
