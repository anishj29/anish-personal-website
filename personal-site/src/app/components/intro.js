'use client';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

export default function Intro() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 md:py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 lg:gap-16">
          
          {/* Contact Card */}
          <div className="lg:col-span-1 order-1">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8 lg:p-10 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Anish Jha</h2>
                <p className="text-blue-200 font-medium text-xs md:text-sm uppercase tracking-wide">Computer Science Student</p>
              </div>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg border border-white/10">
                  <div className="p-2 md:p-2.5 bg-blue-500/20 rounded-lg md:rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                    <EmailIcon className="text-blue-300 text-base md:text-lg" />
                  </div>
                  <a
                    className="text-gray-200 hover:text-blue-300 font-medium transition-colors duration-200 flex-1 text-sm md:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:anishj2900@gmail.com"
                  >
                    anishj2900@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg border border-white/10">
                  <div className="p-2 md:p-2.5 bg-green-500/20 rounded-lg md:rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                    <PhoneIcon className="text-green-300 text-base md:text-lg" />
                  </div>
                  <span className="text-gray-200 font-medium flex-1 text-sm md:text-base">609-454-1784</span>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg border border-white/10">
                  <div className="p-2 md:p-2.5 bg-blue-500/20 rounded-lg md:rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                    <LinkedInIcon className="text-blue-300 text-base md:text-lg" />
                  </div>
                  <a
                    className="text-gray-200 hover:text-blue-300 font-medium transition-colors duration-200 flex-1 text-sm md:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://linkedin.com/in/anishjha1"
                  >
                    linkedin.com/in/anishjha1
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg border border-white/10">
                  <div className="p-2 md:p-2.5 bg-gray-500/20 rounded-lg md:rounded-xl group-hover:bg-gray-500/30 transition-colors duration-300">
                    <GitHubIcon className="text-gray-300 text-base md:text-lg" />
                  </div>
                  <a
                    className="text-gray-200 hover:text-gray-300 font-medium transition-colors duration-200 flex-1 text-sm md:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://github.com/anishj29"
                  >
                    github.com/anishj29
                  </a>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg border border-white/10">
                  <div className="p-2 md:p-2.5 bg-purple-500/20 rounded-lg md:rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
                    <DownloadIcon className="text-purple-300 text-base md:text-lg" />
                  </div>
                  <a
                    className="text-gray-200 hover:text-purple-300 font-medium transition-colors duration-200 flex-1 text-sm md:text-base"
                    href="/Anish_Jha_Resume.pdf"
                    download="Anish_Jha_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8 lg:p-10 xl:p-12 hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] group">
              <div className="space-y-6 md:space-y-8 text-gray-200 leading-relaxed">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 border-b border-white/20 pb-2 md:pb-3">
                    About Me
                  </h3>
                  <p className="text-base md:text-lg leading-6 md:leading-7 text-gray-200">
                    I'm a Computer Science major at Rutgers, with a dual minor in 
                    Business Administration and Data Science, possessing strong skills in 
                    Python, JavaScript, Vue.js, and React.js.
                  </p>
                  
                  <p className="text-base md:text-lg leading-6 md:leading-7 text-gray-200">
                    In my most recent role, I'm working as an IT Utilities Technology Operations Intern at PSEG. 
                    Previously, I've worked as a Frontend Web Developer at Movement Labs, where I enhanced
                    the UI for blockchain partners, and as Chief Technology Officer at Vact, leading the
                    development of mobile app features. In addition, I've worked on client projects through Fiverr,
                    creating coding prep platforms and AI-integrated book catalogs.
                  </p>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 border-b border-white/20 pb-2 md:pb-3">
                    Beyond the Code
                  </h3>
                  <p className="text-base md:text-lg leading-6 md:leading-7 text-gray-200">
                    Outside of my technical work, I'm actively involved in extracurriculars like 
                    Rutgers Mobile App Development club and the 
                    Competitive Programming club, both of which help sharpen my
                    problem-solving abilities. I'm also passionate about hackathons, and my team even won 
                    first place at the 2024 HackRU Hackathon. 
                    In my free time, I love diving into personal projects and always look for new ways to grow my technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
