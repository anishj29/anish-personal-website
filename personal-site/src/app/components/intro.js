'use client';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Intro() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-24 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anish Jha</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <EmailIcon className="text-gray-600" />
                  <a
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:anishj2900@gmail.com"
                  >
                    anishj2900@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <PhoneIcon className="text-gray-600" />
                  <span className="text-gray-700">609-454-1784</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <LinkedInIcon className="text-gray-600" />
                  <a
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://linkedin.com/in/anishjha1"
                  >
                    linkedin.com/in/anishjha1
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <GitHubIcon className="text-gray-600" />
                  <a
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://github.com/anishj29"
                  >
                    github.com/anishj29
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm a Computer Science major at Rutgers, with a dual minor in Business
                  Administration and Data Science, possessing strong skills in Python, JavaScript, Vue.js, and React.js.
                  In my most recent role, I'm working as an IT Utilities Technology Operations Intern at PSEG. Previously, I've worked as a Frontend Web Developer at Movement Labs, where I enhanced
                  the UI for blockchain partners, and as Chief Technology Officer at Vact, leading the
                  development of mobile app features. In addition, I've worked on client projects through Fiverr,
                  creating coding prep platforms and AI-integrated book catalogs.
                </p>
                
                <p className="text-lg">
                  Outside of my technical work, I'm actively involved in extracurriculars like Rutgers Mobile App
                  Development club and the Competitive Programming club, both of which help sharpen my
                  problem-solving abilities. I'm also passionate about hackathons, and my team even won first
                  place at the 2024 HackRU Hackathon. In my free time, I love diving into personal projects and
                  always look for new ways to grow my technical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
