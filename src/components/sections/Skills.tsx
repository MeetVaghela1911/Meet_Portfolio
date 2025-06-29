import React from 'react';
import { Code, Smartphone, Database, Github, Figma, Cpu, Zap, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Flutter", icon: <Code className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Android", icon: <Smartphone className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "iOS", icon: <Smartphone className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Firebase", icon: <Database className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Supabase", icon: <Server className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "MySQL", icon: <Database className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    // { name: "Git", icon: <GitBranch className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "GitHub", icon: <Github className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Figma", icon: <Figma className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Java", icon: <Code className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Dart", icon: <Globe className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Kotlin", icon: <Cpu className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" },
    { name: "Python", icon: <Zap className="w-16 h-16 text-[#133c55]" />, color: "from-[#133c55] to-[#386fa4]" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#133c55] to-[#386fa4] bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#133c55] to-[#386fa4] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            I use modern tools and frameworks to build user-centric, high-performance mobile applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white aspect-square p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="flex flex-col items-center justify-center h-full relative z-10">
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                <h4 className="font-semibold text-gray-800 group-hover:text-[#133c55] transition-colors duration-300 text-center text-sm">{skill.name}</h4>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Commented out Skill Bars */}
        {/* <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Frontend Development", level: 95 },
              { skill: "Backend Development", level: 88 },
              { skill: "UI/UX Design", level: 85 },
              { skill: "Mobile Development", level: 80 },
              { skill: "DevOps & Deployment", level: 75 },
              { skill: "Database Management", level: 82 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{item.skill}</span>
                  <span className="text-blue-600 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-sky-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
