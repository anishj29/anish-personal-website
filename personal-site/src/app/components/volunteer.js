'use client';
import React, { useEffect } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Volunteer() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const boxes = document.querySelectorAll('.volunteer-box');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <div className="volunteer-section bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 sm:py-24 w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Volunteering Experience
          </h1>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full"></div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="volunteer-box relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 ml-4 sm:ml-8 md:ml-16 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute -left-3 sm:-left-6 md:-left-12 top-4 sm:top-6 md:top-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                <div>
                  <time className="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-wide">
                    September 2020 - Present
                  </time>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    <a 
                      href="https://snugglesforchildren.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors duration-300"
                    >
                      Snuggles for Children
                    </a>
                  </h3>
                  <h4 className="text-base sm:text-lg font-medium text-purple-200">Director of Technology and Policy</h4>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-3 sm:px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium">
                    Leadership
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-200 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Built a donation website using Squarespace, CSS, and HTML to support initiatives such as sending care packages, distributing books and clothes, and awarding college scholarships.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Increased website traffic by 300% via the Google Ad Grant program, winning $120,000 in ad credits.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <a 
                  href="https://snugglesforchildren.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium transition-colors duration-300"
                >
                  Visit Snuggles for Children
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={scrollToProjects}
            className="text-white hover:text-purple-300 transition-colors duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll to projects section"
          >
            <KeyboardArrowDown className="text-4xl md:text-5xl drop-shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
