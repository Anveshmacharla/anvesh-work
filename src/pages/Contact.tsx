
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, Send, ExternalLink, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "anvesh.macharla@aurora.edu.in",
      href: "mailto:anvesh.macharla@aurora.edu.in",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:border-red-500/50"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9390127724",
      href: "tel:+919390127724",
      color: "from-green-600 to-green-700",
      hoverColor: "hover:border-green-500/50"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "anvesh-macharla-304b62303",
      href: "https://linkedin.com/in/anvesh-macharla-304b62303",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:border-blue-500/50"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "Anveshmacharla",
      href: "https://github.com/Anveshmacharla",
      color: "from-gray-600 to-gray-700",
      hoverColor: "hover:border-gray-500/50"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      color: "from-purple-600 to-purple-700",
      hoverColor: "hover:border-purple-500/50"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/Anveshmacharla",
      label: "GitHub",
      color: "hover:bg-gray-600/20 hover:border-gray-500/50"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/anvesh-macharla-304b62303",
      label: "LinkedIn",
      color: "hover:bg-blue-600/20 hover:border-blue-500/50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-200">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 flex items-center">
                <User className="mr-3 text-blue-400" size={32} />
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 ${info.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-lg group`}>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${info.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-300 mb-1">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all group flex items-center"
                          >
                            <span className="truncate">{info.value}</span>
                            {info.href.startsWith('http') && <ExternalLink size={14} className="ml-2 flex-shrink-0" />}
                          </a>
                        ) : (
                          <span className="text-white">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Resume Download */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Download size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">Download Resume</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Get a detailed overview of my skills, experience, and projects in a downloadable format.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                  <Download size={20} className="mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Connect on Social Media</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl border border-gray-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    title={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-fade-in delay-400">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 flex items-center">
                <MessageSquare className="mr-3 text-purple-400" size={32} />
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/25 transition-all duration-300 rounded-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700/50 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/25 transition-all duration-300 rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 font-medium">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 py-3 font-medium"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Additional CTA */}
        <div className="text-center mt-16 animate-fade-in delay-600">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Ready to Work Together?</h2>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to connect, 
                I'm always excited to meet new people and explore opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:anvesh.macharla@aurora.edu.in"
                  className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-white/25 hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Email Me Directly</span>
                </a>
                <a
                  href="https://linkedin.com/in/anvesh-macharla-304b62303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
