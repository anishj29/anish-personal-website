"use client";
import React, { useState, useEffect } from "react";
import Intro from "./components/intro";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Spline from '@splinetool/react-spline';
import { VoiceChat } from "@mui/icons-material";
import Volunteer from "./components/volunteer";

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  // Preload the Spline scene
  useEffect(() => {
    const preloadSpline = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'fetch';
      link.href = 'https://prod.spline.design/VwwmjsK-wk5ymozv/scene.splinecode';
      document.head.appendChild(link);
    };
    preloadSpline();
  }, []);

  return (
    <div className="flex items-center justify-items-center text-black flex-col">
      {/* Spline 3D Scene Background */}
      <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-screen">
        {/* Spline Scene */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Spline
            scene="https://prod.spline.design/VwwmjsK-wk5ymozv/scene.splinecode"
            className="w-full h-full"
            onLoad={handleSplineLoad}
            loadingFallback={null}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center flex flex-row items-center justify-center px-4 md:px-0">
            <div className="flex flex-col items-center mr-3 md:mr-10">
              <img
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full drop-shadow-2xl"
                src="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com/1703063558690.jpeg"
                alt="Anish_Logo"
              />
            </div>
            
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-white mb-2 drop-shadow-2xl">Hello, I am Anish!</h1>
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-sans text-white drop-shadow-lg">Student, Developer, Innovator</h4>
            </div>
          </div>
        </div>
      </div>

      <Intro />
      <Education />
      <Experience />
      <Volunteer />
      <Projects />
      <Footer />
    </div>
  );
}
