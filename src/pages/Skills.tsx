
import React from 'react';
import { Code, Database, Globe, Users, Clock, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["C", "C++", "Java", "Python"],
      color: "bg-blue-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-green-600"
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["SQL"],
      color: "bg-purple-600"
    },
    {
      title: "Development Areas",
      icon: <Code size={24} />,
      skills: ["Frontend Development", "Backend Development", "Full Stack Development"],
      color: "bg-orange-600",
      level: "Beginner"
    }
  ];

  const softSkills = [
    {
      title: "Time Management",
      icon: <Clock size={24} />,
      description: "Efficiently managing multiple projects and deadlines"
    },
    {
      title: "Problem Solving",
      icon: <Lightbulb size={24} />,
      description: "Analytical thinking and creative solution development"
    },
    {
      title: "Team Collaboration",
      icon: <Users size={24} />,
      description: "Working effectively in diverse team environments"
    },
    {
      title: "Active Listening",
      icon: <Users size={24} />,
      description: "Understanding requirements and feedback effectively"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                {category.level && (
                  <span className="inline-block bg-yellow-600 text-yellow-100 px-2 py-1 rounded text-xs mb-3">
                    {category.level} Level
                  </span>
                )}
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Progression */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Continuous Learning</h2>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently expanding my knowledge in modern frameworks and cloud technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">React</span>
              <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">Node.js</span>
              <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">MongoDB</span>
              <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">Cloud Computing</span>
              <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
