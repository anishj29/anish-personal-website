'use client';
import React, { useEffect } from 'react';

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

  return (
    <div className="w-full p-20 bg-cyan-900 education-container">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
        My Education
      </h1>
      <ol className="relative border-l border-white">
        <li className="mb-10 ml-6 education-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            September 2023 - Present
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Rutgers University-New Brunswick
          </h3>
          <div className="flex flex-row mb-4 text-sm text-gray-600 dark:text-gray-300">
            <h4 className="mr-2">BSc Degree</h4>
          </div>
          <div className="mb-2 text-gray-700 dark:text-gray-300">
            <h4>
              <b>Major:</b> Computer Science
            </h4>
            <h4>
              <b>Second Major:</b> Data Science
            </h4>
            <h4>
              <b>Minor:</b> Business Administration
            </h4>
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <h4>
              <b>Relevant Coursework:</b> Calculus 1, Data Structures, Data 101, Intro to Linear Algebra, Intro to Financial Accounting
            </h4>
            <h4>
              <b>Awards & Activities:</b> Dean’s List, RU MAD, RU BITS, Rutgers Competitive Programming
            </h4>
          </div>
        </li>
        <li className="mb-10 ml-6 education-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            September 2019 - June 2023
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            West-Windsor Plainsboro High School South
          </h3>
          <div className="flex flex-row mb-4 text-sm text-gray-600 dark:text-gray-300">
            <h4 className="mr-2">High School Degree</h4>
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <h4>
              <b>Relevant Coursework:</b> AP Computer Science A, Advanced Topics (Data Structures), AP Microeconomics, AP Spanish Language and Culture (Seal of Biliteracy Recipient)
            </h4>
          </div>
        </li>
      </ol>
    </div>
  );
}
