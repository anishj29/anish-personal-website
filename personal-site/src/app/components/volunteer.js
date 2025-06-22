'use client';
import React, { useEffect } from 'react';

export default function Volunteer() {
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
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-24 w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Volunteering Experience
          </h1>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full"></div>
          
          <div className="space-y-8">
            <div className="volunteer-box relative bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-8 ml-16 transform transition-all duration-700 hover:scale-105 hover:bg-white hover:border-white/60 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <time className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                    September 2020 - Present
                  </time>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    <a 
                      href="https://snugglesforchildren.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors duration-300"
                    >
                      Snuggles for Children
                    </a>
                  </h3>
                  <h4 className="text-lg font-medium text-gray-600">Director of Technology and Policy</h4>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-700 text-sm font-medium">
                    Leadership
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built a donation website using Squarespace, CSS, and HTML to support initiatives such as sending care packages, distributing books and clothes, and awarding college scholarships.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Increased website traffic by 300% via the Google Ad Grant program, winning $120,000 in ad credits.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a 
                  href="https://snugglesforchildren.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
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
      </div>
    </div>
  );
}
