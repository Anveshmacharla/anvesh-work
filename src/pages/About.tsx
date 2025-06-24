
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Aurora Deemed to be University, Hyderabad",
      period: "2024 - 2027",
      status: "Current"
    },
    {
      degree: "Intermediate",
      institution: "Toppers Junior College, Hyderabad",
      period: "2021 - 2023",
      status: "Completed"
    },
    {
      degree: "High School",
      institution: "Sri Vignan School, Hyderabad",
      period: "Graduated 2021",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">My Story</h2>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a dedicated college student with a passion for learning and commitment to academic excellence. 
                My journey in technology began with curiosity and has evolved into a deep commitment to creating 
                meaningful digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Based in Hyderabad, India, I'm proficient in time management, collaboration, and problem-solving. 
                I'm eager to contribute my skills and enthusiasm to diverse projects and opportunities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and continuously expanding my knowledge in the ever-evolving field of software development.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={20} />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-400">AM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Educational Journey</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        edu.status === 'Current' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-600 text-gray-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
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

        {/* Languages */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Languages</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <span className="text-white font-medium">Telugu</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <span className="text-white font-medium">Hindi</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <span className="text-white font-medium">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
