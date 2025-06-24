
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, Send } from 'lucide-react';
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
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "anvesh.macharla@aurora.edu.in",
      href: "mailto:anvesh.macharla@aurora.edu.in"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9390127724",
      href: "tel:+919390127724"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "anvesh-macharla-304b62303",
      href: "https://linkedin.com/in/anvesh-macharla-304b62303"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "Anveshmacharla",
      href: "https://github.com/Anveshmacharla"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, India",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-300">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {info.value}
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

            {/* Resume Download */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-4">
                Get a detailed overview of my skills, experience, and projects in a downloadable format.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Download size={20} className="mr-2" />
                Download Resume (PDF)
              </Button>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Anveshmacharla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/anvesh-macharla-304b62303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="mt-2 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to connect, 
              I'm always excited to meet new people and explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anvesh.macharla@aurora.edu.in"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Email Me Directly
              </a>
              <a
                href="https://linkedin.com/in/anvesh-macharla-304b62303"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
