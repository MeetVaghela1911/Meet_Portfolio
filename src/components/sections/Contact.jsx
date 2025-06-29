import React from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("myzjlqbp");

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info.dev.meet@gmail.com",
      href: "mailto:info.dev.meet@gmail.com"
    },
    // Commented out phone section
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Phone",
    //   value: "+91 8980325172",
    //   href: "tel:+918980325172"
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Vadodara, Gujarat",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/MeetVaghela1911",
      color: "hover:text-[#133c55]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/meet-vaghela-8ab3b7267",
      color: "hover:text-[#133c55]"
    },
    {
      name: "Leetcode",
      icon: <Code className="w-6 h-6" />,
      href: "https://leetcode.com/u/MEET1911",
      color: "hover:text-[#133c55]"
    }
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gradient-to-r from-[#133c55] to-[#386fa4] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#133c55] to-[#386fa4] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's turn your ideas into powerful mobile apps!
          </p>
        </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#133c55] mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#133c55] focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#133c55] focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#133c55] focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#133c55] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#133c55] to-[#386fa4] text-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mb-4"></div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#133c55] mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="block flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >

                    <div className="w-20 h-12 bg-gradient-to-br from-[#133c55] to-[#386fa4] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.title}</div>
                      <div className="font-semibold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#133c55] group-hover:to-[#386fa4] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-4"></div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-[#133c55] mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-20 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 text-[#133c55] hover:bg-blue-50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-4"></div>

            {/* Availability */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#133c55] mb-3">Current Availability</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Available for new projects</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
