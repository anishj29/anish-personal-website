'use client';
import React, { useEffect } from 'react';

export default function Experience() {
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

  return (
    <div className="pt-20 pb-10 experience-container bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
        My Experience
      </h1>
      <ol className="relative border-l border-gray-300 dark:border-gray-700">
        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            May 2024 - September 2024
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Nao Now
          </h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Operations Intern
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Migrated startup from Monday.com to ClickUp, improving workflows for marketing, sales,
              operations, and HR with automation and integrations.
            </li>
          </ul>
        </li>

        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            June 2024 - August 2024
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Movement Labs
          </h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Frontend Web Developer Intern
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Collaborated with the CEO of Axial to revamp the frontend using React, Tailwind CSS,
              and Ethereum API for integration into a modular blockchain framework.
            </li>
          </ul>
        </li>

        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-red-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            December 2021 - May 2024
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fiverr</h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Full-Stack Freelance Web Developer
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Developed university-level projects including a book catalog and coding prep platform
              using Vue.js, JavaScript, HTML, and CSS.
            </li>
            <li>
              Researched and applied effective marketing strategies to secure project requests.
            </li>
          </ul>
        </li>

        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-purple-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            September 2020 - Present
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Snuggles for Children
          </h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Director of Technology and Policy
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Built a donation website using Squarespace, CSS, and HTML to support initiatives such as
              sending care packages, distributing books and clothes, and awarding college scholarships.
            </li>
            <li>
              Increased website traffic by 300% via the Google Ad Grant program, winning $120,000 in ad
              credits.
            </li>
          </ul>
        </li>

        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            January 2022 - December 2022
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Vact</h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Chief Technology Officer
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Developed new features for Android and iOS using Dart, Flutter, and AWS.
            </li>
            <li>
              Modernized website design using Wordpress and created marketing visuals with Figma.
            </li>
          </ul>
        </li>

        <li className="mb-10 ml-6 experience-box bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 transition-all duration-500">
          <div className="absolute -left-3 top-3 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            November 2020 - May 2021
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Ensemble Education
          </h3>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
            Frontend Web Developer
          </h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              Developed an AI-based test prep website for international exams like the SAT and ACT.
            </li>
            <li>
              Collaborated on product design and helped implement an adaptive AI algorithm for personalized test questions.
            </li>
            <li>
              Utilized a tech stack including Vue.js, HTML, CSS, Tailwind, Python, and Postman.
            </li>
            <li>
              Designed wireframes and testing protocols with Figma and Postman.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
