
import React from 'react';
import { GraduationCap, MapPin, Calendar, Star, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Aurora Deemed to be University, Hyderabad",
      period: "2024 - 2027",
      status: "Current",
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Intermediate",
      institution: "Toppers Junior College, Hyderabad",
      period: "2021 - 2023",
      status: "Completed",
      icon: <Award size={20} />
    },
    {
      degree: "High School",
      institution: "Sri Vignan School, Hyderabad",
      period: "Graduated 2021",
      status: "Completed",
      icon: <Award size={20} />
    }
  ];

  const highlights = [
    { label: "Years of Learning", value: "3+" },
    { label: "Academic Focus", value: "CS" },
    { label: "Current CGPA", value: "8.5+" },
    { label: "Projects Done", value: "3" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in delay-200">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Bio */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center">
                <Star className="mr-3 text-blue-400" size={28} />
                My Story
              </h2>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I am a <span className="text-blue-400 font-semibold">dedicated college student</span> with a passion for learning and commitment to academic excellence. 
                    My journey in technology began with curiosity and has evolved into a deep commitment to creating 
                    meaningful digital solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Based in <span className="text-purple-400 font-semibold">Hyderabad, India</span>, I'm proficient in time management, collaboration, and problem-solving. 
                    I'm eager to contribute my skills and enthusiasm to diverse projects and opportunities.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and continuously expanding my knowledge in the ever-evolving field of <span className="text-cyan-400 font-semibold">software development</span>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-400 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm">
              <MapPin size={24} className="text-blue-400" />
              <span className="text-lg">Hyderabad, India</span>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex justify-center items-center animate-fade-in delay-500">
            <div className="relative group">
              {/* Main Profile Circle with enhanced styling */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AM</div>
                  
                  {/* Enhanced inner elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)] rounded-full"></div>
                </div>
              </div>

              {/* Enhanced floating badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium border border-blue-500/30 animate-bounce delay-500 backdrop-blur-sm">
                Student Dev
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium border border-purple-500/30 animate-bounce delay-700 backdrop-blur-sm">
                CS Major
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Education Section */}
        <div className="mb-16 animate-fade-in delay-700">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center flex items-center justify-center">
            <GraduationCap className="mr-3 text-blue-400" size={32} />
            Educational Journey
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 group">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{edu.degree}</h3>
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 shadow-lg'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 text-lg">{edu.institution}</p>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Languages Section */}
        <div className="text-center animate-fade-in delay-900">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">Languages</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Telugu', 'Hindi', 'English'].map((language, index) => (
              <div key={language} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
                  <span className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">{language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
