
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-blue-600 text-sm rounded-full">
                Developer
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                Macharla
                <br />
                <span className="text-blue-400">Anvesh</span>
                <ArrowRight className="inline-block ml-4 text-blue-400" size={48} />
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Aspiring Full-Stack Developer | Passionate Learner
              </p>
              <p className="text-gray-400 max-w-lg">
                A passionate and dedicated student developer from Hyderabad, India. 
                Building scalable solutions with modern technologies.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/Anveshmacharla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/anvesh-macharla-304b62303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Statistics */}
            <div className="flex space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-gray-400 text-sm">Years of Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-gray-400 text-sm">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">AM</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Full Stack</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
