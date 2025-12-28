'use client';
import React, { useEffect } from 'react';
import educationData from '../data/education.json';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function Education() {
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('.experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const boxes = document.querySelectorAll('.education-box');

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

    return () => boxes.forEach((box) => observer.unobserve(box));
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
    <div className="education-section pt-16 sm:pt-24 pb-16 sm:pb-24 education-container w-full bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Education
          </h1>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((education, index) => {
              const colors = getColorClasses(education.color);
              return (
                <div 
                  key={education.id}
                  className={`education-box relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 ml-4 sm:ml-8 md:ml-16 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl ${colors.shadow}`}
                >
                  <div className={`absolute -left-3 sm:-left-6 md:-left-12 top-4 sm:top-6 md:top-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r ${colors.bg} rounded-full border-2 sm:border-4 border-white shadow-lg`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                    <div>
                      <time className={`text-xs sm:text-sm font-semibold ${colors.text} uppercase tracking-wide`}>
                        {education.period}
                      </time>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">{education.institution}</h3>
                      <h4 className={`text-base sm:text-lg font-medium ${colors.textLight}`}>{education.degree}</h4>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className={`inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-2 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-xs sm:text-sm font-medium`}>
                        {education.degree.includes('BSc') ? 'University' : 'High School'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Majors and Minor */}
                    {education.majors && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm sm:text-base">Majors:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.majors.map((major, idx) => (
                            <span key={idx} className={`px-2 sm:px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-xs sm:text-sm`}>
                              {major}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {education.minors && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm sm:text-base">Minors:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.minors.map((minor, idx) => (
                            <span key={idx} className={`px-2 sm:px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-xs sm:text-sm`}>
                              {minor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Relevant Coursework */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm sm:text-base">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.relevantCoursework.map((course, idx) => (
                          <span key={idx} className={`px-2 sm:px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-xs sm:text-sm`}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Awards and Activities */}
                    {education.awardsAndActivities && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm sm:text-base">Awards & Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.awardsAndActivities.map((award, idx) => (
                            <span key={idx} className={`px-2 sm:px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-xs sm:text-sm`}>
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={scrollToExperience}
            className="text-white hover:text-emerald-300 transition-colors duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll to experience section"
          >
            <KeyboardArrowDown className="text-4xl md:text-5xl drop-shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
