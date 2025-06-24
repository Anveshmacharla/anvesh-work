
import React from 'react';
import { ExternalLink, Code, Database } from 'lucide-react';

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
      color: "bg-blue-600"
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
      color: "bg-green-600"
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
      icon: <Database size={32} />,
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my development work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              {/* Project Header */}
              <div className={`${project.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    {project.icon}
                  </div>
                  <ExternalLink size={20} className="text-white opacity-70" />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Code size={16} />
                    <span>View Code</span>
                  </button>
                  <button className="flex-1 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Anveshmacharla"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Code size={20} />
                <span>View All Projects</span>
              </a>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
