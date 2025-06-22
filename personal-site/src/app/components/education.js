'use client';
import React, { useEffect } from 'react';
import educationData from '../data/education.json';

export default function Education() {
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
    <div className="pt-24 pb-24 education-container w-full bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Education
          </h1>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full"></div>
          
          <div className="space-y-12">
            {educationData.map((education, index) => {
              const colors = getColorClasses(education.color);
              return (
                <div 
                  key={education.id}
                  className={`education-box relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 ml-16 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl ${colors.shadow}`}
                >
                  <div className={`absolute -left-12 top-8 w-8 h-8 bg-gradient-to-r ${colors.bg} rounded-full border-4 border-white shadow-lg`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <time className={`text-sm font-semibold ${colors.text} uppercase tracking-wide`}>
                        {education.period}
                      </time>
                      <h3 className="text-2xl font-bold text-white mt-1">{education.institution}</h3>
                      <h4 className={`text-lg font-medium ${colors.textLight}`}>{education.degree}</h4>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`inline-block px-4 py-2 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm font-medium`}>
                        {education.degree.includes('BSc') ? 'University' : 'High School'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Majors and Minor */}
                    {education.majors && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Majors:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.majors.map((major, idx) => (
                            <span key={idx} className={`px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm`}>
                              {major}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {education.minors && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Minors:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.minors.map((minor, idx) => (
                            <span key={idx} className={`px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm`}>
                              {minor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Relevant Coursework */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.relevantCoursework.map((course, idx) => (
                          <span key={idx} className={`px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm`}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Awards and Activities */}
                    {education.awardsAndActivities && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Awards & Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.awardsAndActivities.map((award, idx) => (
                            <span key={idx} className={`px-3 py-1 ${colors.bgLight} border ${colors.border} rounded-full ${colors.textLight} text-sm`}>
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
      </div>
    </div>
  );
}
