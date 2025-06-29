import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Urja Sahayak CRM",
      description: "Enterprise CRM with GPS tracking, barcode scanning, and custom canvas annotations.",
      image: "https://play-lh.googleusercontent.com/tBcGKARULuYy69BhI5-gocyKqE9YOCVL7vPEGkoRVhdRFPKkxUj4xDLcv-3GLqunR1Y=w240-h480",
      category: "mobile",
      technologies: ["Android (Java)", "Firebase", "Google Maps API", "MLKit"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.scriptmatrix.urjastrots",
      githubUrl: null,
      showPlayStore: true,
      showGithub: false
    },
    {
      id: 2,
      title: "Matrix Convo",
      description: "A real-time messaging app with quick replies, media compression, and optimized APIs.",
      image: "https://play-lh.googleusercontent.com/fT1HcqMGmjzWCfE6KyC-MkVmrC9I_LITGg9GlKk0-3WIp7Q5RxEHCnLZkudmCCJjtCg=w240-h480",
      category: "mobile",
      technologies: ["Android (Java)", "Firebase", "Room DB"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.scriptmatrix.matrixconvo",
      githubUrl: null,
      showPlayStore: true,
      showGithub: false
    },
    {
      id: 3,
      title: "Solar Matrix CRM",
      description: "A scalable CRM app built with Flutter, integrating push notifications and camera features.",
      image: "https://play-lh.googleusercontent.com/g7DI8OroBfM660PsbXTK2sP6xaG5-PuZrh0WcifwEUj0_GVGVs6n7CJdQUUpNeyl8CSF=w240-h480",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase", "MLKit"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.scriptmatrix.solarmatrix",
      githubUrl: null,
      showPlayStore: true,
      showGithub: false
    },
    {
      id: 4,
      title: "Zlerts",
      description: "Secure messaging platform with fingerprint login and Firebase push notifications.",
      image: "https://play-lh.googleusercontent.com/fT1HcqMGmjzWCfE6KyC-MkVmrC9I_LITGg9GlKk0-3WIp7Q5RxEHCnLZkudmCCJjtCg=w240-h480",
      category: "mobile",
      technologies: ["Flutter", "Firebase Notification", "Biometric"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.scriptmatrix.matrixconvo",
      githubUrl: null,
      showPlayStore: true,
      showGithub: false
    },
    {
      id: 5,
      title: "OwnBook",
      description: "Collaborative real-time note-taking app with offline sync and audio/image support.",
      image: "https://cdn-icons-png.flaticon.com/128/1302/1302002.png",
      category: "mobile",
      technologies: ["Java", "Firebase", "RoomDB"],
      liveUrl: null,
      githubUrl: "https://github.com/MeetVaghela1911/OwnBook",
      showPlayStore: false,
      showGithub: true
    },
    {
      id: 6,
      title: "Zipcard",
      description: "Cross-platform eCommerce app with cart/wishlist and in-app payments.",
      image: "https://cdn-icons-png.flaticon.com/128/5033/5033286.png",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Razorpay"],
      liveUrl: null,
      githubUrl: null,
      showPlayStore: false,
      showGithub: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#133c55] to-[#386fa4] mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
              {/* Image Container - Updated for better centering and full image display */}
              <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center p-4" style={{ height: '250px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    width: 'auto', 
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                {(project.showPlayStore || project.showGithub) && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.showPlayStore && (
                        <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.showGithub && (
                        <a href={project.githubUrl!} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#133c55] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-[#133c55] text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.showPlayStore || project.showGithub) && (
                  <div className="flex space-x-4">
                    {project.showPlayStore && (
                      <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#133c55] hover:text-[#386fa4] transition-colors duration-300">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Play Store</span>
                      </a>
                    )}
                    {project.showGithub && (
                      <a href={project.githubUrl!} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        <Github size={16} />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
