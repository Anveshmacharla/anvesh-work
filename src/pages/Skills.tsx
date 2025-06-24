
import React from 'react';
import { Code, Database, Globe, Users, Clock, Lightbulb, Zap, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 90 }
      ],
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-600/20 to-blue-700/20"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 }
      ],
      color: "from-green-600 to-green-700",
      bgColor: "from-green-600/20 to-green-700/20"
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: [
        { name: "SQL", level: 75 }
      ],
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-600/20 to-purple-700/20"
    },
    {
      title: "Development Areas",
      icon: <Zap size={24} />,
      skills: [
        { name: "Frontend Development", level: 70 },
        { name: "Backend Development", level: 65 },
        { name: "Full Stack Development", level: 60 }
      ],
      color: "from-orange-600 to-orange-700",
      bgColor: "from-orange-600/20 to-orange-700/20",
      level: "Beginner"
    }
  ];

  const softSkills = [
    {
      title: "Time Management",
      icon: <Clock size={24} />,
      description: "Efficiently managing multiple projects and deadlines",
      color: "from-cyan-600 to-cyan-700"
    },
    {
      title: "Problem Solving",
      icon: <Lightbulb size={24} />,
      description: "Analytical thinking and creative solution development",
      color: "from-yellow-600 to-yellow-700"
    },
    {
      title: "Team Collaboration",
      icon: <Users size={24} />,
      description: "Working effectively in diverse team environments",
      color: "from-indigo-600 to-indigo-700"
    },
    {
      title: "Active Listening",
      icon: <BookOpen size={24} />,
      description: "Understanding requirements and feedback effectively",
      color: "from-pink-600 to-pink-700"
    }
  ];

  const learningSkills = [
    "React", "Node.js", "MongoDB", "Cloud Computing", "DevOps", "Docker", "Git", "Linux"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-blue-500/30 h-full">
                  <div className={`bg-gradient-to-r ${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">{category.title}</h3>
                  {category.level && (
                    <span className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 text-yellow-100 px-3 py-1 rounded-full text-xs mb-4 font-medium shadow-lg">
                      {category.level} Level
                    </span>
                  )}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16 animate-fade-in delay-400">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 text-center">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-purple-500/30">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">{skill.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="text-center animate-fade-in delay-600">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12">Continuous Learning</h2>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6 shadow-lg">
                <BookOpen size={32} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently expanding my knowledge in modern frameworks and cloud technologies.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {learningSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-r from-gray-700/80 to-gray-700/40 backdrop-blur-sm px-6 py-3 rounded-full text-gray-300 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group-hover:text-cyan-300">
                    <span className="font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
