
import React from 'react';
import { ExternalLink, Code, Database, Globe, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Faculty Appraisal Evaluation System",
      description: "A responsive web system designed to streamline and digitize faculty evaluations, making the process more efficient and user-friendly.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
      features: [
        "Responsive design for all devices",
        "Digital evaluation forms",
        "Automated reporting system",
        "User-friendly interface"
      ],
      icon: <Database size={32} />,
      color: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-600/10 to-blue-800/5",
      status: "Completed"
    },
    {
      title: "Scientific Calculator App",
      description: "A browser-based scientific calculator that handles a comprehensive range of basic and advanced mathematical operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Basic arithmetic operations",
        "Advanced scientific functions",
        "Responsive design",
        "Clean user interface"
      ],
      icon: <Code size={32} />,
      color: "from-green-600 to-green-700",
      bgGradient: "from-green-600/10 to-green-800/5",
      status: "Completed"
    },
    {
      title: "Internship Management System",
      description: "A full-stack web system built to efficiently track internship postings and manage student applications.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
      features: [
        "Internship posting management",
        "Student application tracking",
        "Admin dashboard",
        "Database integration"
      ],
      icon: <Globe size={32} />,
      color: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-600/10 to-purple-800/5",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work and technical expertise
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in delay-200">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${300 + index * 200}ms` }}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 border border-gray-700/50 hover:border-blue-500/30 h-full flex flex-col">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-8 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        {project.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-500 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                          {project.status}
                        </span>
                        <ExternalLink size={20} className="text-white/70 hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide flex items-center">
                      <Star size={14} className="mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-700/80 to-gray-700/40 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide flex items-center">
                      <Star size={14} className="mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-start space-x-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-blue-500/25 hover:scale-105 group">
                      <Code size={16} />
                      <span>View Code</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="flex-1 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-medium hover:bg-blue-400/10 hover:scale-105 group backdrop-blur-sm">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Interested in My Work?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://github.com/Anveshmacharla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 font-medium shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <Code size={20} />
                  <span>View All Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button className="group border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 font-medium hover:bg-blue-400/10 hover:scale-105 backdrop-blur-sm">
                  <span>Get in Touch</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
