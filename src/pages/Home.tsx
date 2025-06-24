import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Code, Sparkles, Download } from 'lucide-react';
const Home = () => {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Available for Opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Macharla
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Anvesh
                  </span>
                  <div className="inline-flex items-center ml-4 group">
                    <ArrowRight className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2" size={48} />
                  </div>
                </h1>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  Aspiring Full-Stack Developer
                </p>
                <p className="text-lg text-blue-400 font-medium">
                  Passionate Learner & Problem Solver
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                A passionate and dedicated student developer from Hyderabad, India. 
                Building scalable solutions with modern technologies and turning ideas into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                <Code className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="group border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:bg-blue-400/10 hover:scale-105">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-6">
              <a href="https://github.com/Anveshmacharla" target="_blank" rel="noopener noreferrer" className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-gray-600">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com/in/anvesh-macharla-304b62303" target="_blank" rel="noopener noreferrer" className="group p-3 bg-gray-800/50 hover:bg-blue-600/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500">
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-gray-400 text-sm mt-1">Years Learning</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-gray-400 text-sm mt-1">Technologies</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="text-gray-400 text-sm mt-1">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image Section */}
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 animate-fade-in delay-300">
            <div className="relative group">
              {/* Main Profile Circle with Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img src="/lovable-uploads/fa0ac814-5f1d-4672-af43-aaba7993093d.png" alt="Macharla Anvesh" className="w-full h-full object-cover object-center filter brightness-110 contrast-105 saturate-110 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"></div>
                  
                  {/* Professional lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-blue-500/30 animate-bounce delay-500">
                Full Stack
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-purple-500/30 animate-bounce delay-700">Java</div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-3 py-2 rounded-full shadow-lg text-xs font-medium border border-cyan-500/30 animate-bounce delay-1000">
                Python
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{
              animationDuration: '20s'
            }}></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse mt-2"></div>
          </div>
          <p className="text-gray-500 text-xs mt-2 text-center">Scroll Down</p>
        </div>
      </div>
    </div>;
};
export default Home;