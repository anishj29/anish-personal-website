'use client';
import React, { useEffect } from 'react';
import experienceData from '../data/experience.json';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Experience() {
  const scrollToVolunteer = () => {
    const volunteerSection = document.querySelector('.volunteer-section');
    if (volunteerSection) {
      volunteerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const boxes = document.querySelectorAll('.experience-box');

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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-500 to-cyan-500',
        text: 'text-blue-300',
        textLight: 'text-blue-200',
        border: 'border-blue-400/30',
        bgLight: 'bg-blue-500/20',
        dot: 'bg-blue-400',
        shadow: 'hover:shadow-blue-500/25'
      },
      green: {
        bg: 'from-green-500 to-emerald-500',
        text: 'text-green-300',
        textLight: 'text-green-200',
        border: 'border-green-400/30',
        bgLight: 'bg-green-500/20',
        dot: 'bg-green-400',
        shadow: 'hover:shadow-green-500/25'
      },
      red: {
        bg: 'from-red-500 to-pink-500',
        text: 'text-red-300',
        textLight: 'text-red-200',
        border: 'border-red-400/30',
        bgLight: 'bg-red-500/20',
        dot: 'bg-red-400',
        shadow: 'hover:shadow-red-500/25'
      },
      purple: {
        bg: 'from-purple-500 to-violet-500',
        text: 'text-purple-300',
        textLight: 'text-purple-200',
        border: 'border-purple-400/30',
        bgLight: 'bg-purple-500/20',
        dot: 'bg-purple-400',
        shadow: 'hover:shadow-purple-500/25'
      },
      yellow: {
        bg: 'from-yellow-500 to-orange-500',
        text: 'text-yellow-300',
        textLight: 'text-yellow-200',
        border: 'border-yellow-400/30',
        bgLight: 'bg-yellow-500/20',
        dot: 'bg-yellow-400',
        shadow: 'hover:shadow-yellow-500/25'
      },
      indigo: {
        bg: 'from-indigo-500 to-blue-500',
        text: 'text-indigo-300',
        textLight: 'text-indigo-200',
        border: 'border-indigo-400/30',
        bgLight: 'bg-indigo-500/20',
        dot: 'bg-indigo-400',
        shadow: 'hover:shadow-indigo-500/25'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="experience-section pt-16 sm:pt-24 pb-16 sm:pb-24 experience-container w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Work Experience
          </h1>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((experience, index) => {
              const colors = getColorClasses(experience.color);
              return (
                <div 
                  key={experience.id}
                  className={`experience-box relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 ml-4 sm:ml-8 md:ml-16 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl ${colors.shadow}`}
                >
                  <div className={`absolute -left-3 sm:-left-6 md:-left-12 top-4 sm:top-6 md:top-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r ${colors.bg} rounded-full border-2 sm:border-4 border-white shadow-lg`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <time className={`text-xs sm:text-sm font-semibold ${colors.text} uppercase tracking-wide`}>
                        {experience.period}
                      </time>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{experience.company}</h3>
                      <h4 className={`text-base sm:text-lg font-medium ${colors.textLight}`}>{experience.position}</h4>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`inline-block px-3 sm:px-4 py-2 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm font-medium`}>
                        {experience.category}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-gray-200 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-sm sm:text-base">{experience.description}</span>
                    </li>
                    {experience.additionalDescription && (
                      <li className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base">{experience.additionalDescription}</span>
                      </li>
                    )}
                    {experience.thirdDescription && (
                      <li className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base">{experience.thirdDescription}</span>
                      </li>
                    )}
                    {experience.fourthDescription && (
                      <li className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base">{experience.fourthDescription}</span>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={scrollToVolunteer}
            className="text-white hover:text-blue-300 transition-colors duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll to volunteer section"
          >
            <KeyboardArrowDown className="text-4xl md:text-5xl drop-shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
