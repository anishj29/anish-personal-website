'use client';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Intro() {
  return (
    <div className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start px-6 space-y-8 md:space-y-0 md:space-x-10">
        {/* Contact Details Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col space-y-4 w-full md:w-1/3">
          <h2 className="text-xl font-bold text-gray-900">Anish Jha</h2>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center space-x-2">
            <EmailIcon className="text-sky-600" />
            <a
              className="text-gray-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:anishj2900@gmail.com"
            >
              anishj2900@gmail.com
            </a>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="text-sky-600" />
            <span className="text-gray-700">609-454-1784</span>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center space-x-2">
            <LinkedInIcon className="text-sky-600" />
            <a
              className="text-gray-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="http://linkedin.com/in/anishjha1"
            >
              linkedin.com/in/anishjha1
            </a>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center space-x-2">
            <GitHubIcon className="text-sky-600" />
            <a
              className="text-gray-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="http://github.com/anishj29"
            >
              github.com/anishj29
            </a>
          </div>
        </div>
        {/* Introductory Text Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1">
          <p className="text-gray-800">
            I’m a Computer Science and Data Science student at Rutgers, with a minor in Business
            Administration, and possessing strong skills in Python, JavaScript, Vue.js, and React.js.
            My experience includes working as a Frontend Web Developer at Movement Labs, where I enhanced
            the UI for blockchain partners, and as Chief Technology Officer at Vact, leading the
            development of mobile app features. In addition, I’ve worked on client projects through Fiverr,
            creating coding prep platforms and AI-integrated book catalogs.
          </p>
          <p className="mt-4 text-gray-800">
            Outside of my technical work, I’m actively involved in extracurriculars like Rutgers Mobile App
            Development club and the Competitive Programming club, both of which help sharpen my
            problem-solving abilities. I’m also passionate about hackathons, and my team even won first
            place at the 2024 HackRU Hackathon. In my free time, I love diving into personal projects and
            always look for new ways to grow my technical skills.
          </p>
        </div>
      </div>
    </div>
  );
}
