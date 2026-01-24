"use client";

import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const AboutPranavPage = () => {
  const skills = [
    "Python",
    "API Intergration",
    "ChatGPT and AI tools Expert",
    "Web Development",
    "AI / ML",
    "Desktop Application Development",
    "AI-Assisted Development",
    "Reverse Engineering"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/pranav-kadam-2ab2893a7",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/pranavop45",
      color: "hover:text-gray-300"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/mr.pranav_0x",
      color: "hover:text-pink-400"
    },
    {
      name: "Telegram",
      icon: FaTelegramPlane,
      url: "https://t.me/DEVID_xx",
      color: "hover:text-blue-300"
    },
    {
      name: "Email",
      icon: MdEmail,
      url: "mailto:iampranavkadam@gmail.com",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-500">Pranav Kadam</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">
            Software Engineer | Desktop, Web & AI Applications
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a dedicated Software Engineer specializing in developing robust desktop applications (EXE), 
            modern web applications, and AI-powered tools. My approach combines traditional software engineering 
            principles with cutting-edge AI technologies to deliver efficient solutions. I leverage AI tools like 
            ChatGPT to accelerate development cycles and enhance debugging processes, enabling faster problem-solving 
            and innovation in software development.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <span className="text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-purple-400">Bachelor of Technology</h3>
              <p className="text-gray-300">Artificial Intelligence & Machine Learning</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Professional Experience
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>• Developed desktop applications with secure licensing systems and automatic update mechanisms</p>
            <p>• Created modern web applications and professional portfolios using contemporary frameworks</p>
            <p>• Integrated AI-assisted workflows to optimize development processes and debugging</p>
            <p>• Managed complete software development lifecycle from conception to deployment</p>
          </div>
        </div>

        {/* Social & Contact Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Connect With Me
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 ${link.color} group`}
                >
                  <Icon className="text-2xl mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* View Resume Button */}
        <div className="text-center">
          <Link
            href="/resume"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPranavPage;