import React from "react";
import Intro from "./components/intro";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Image from 'next/image'
import turquoiseBG from './turquoise-ocean-watercolor-texture-background.jpg'

export default function Home() {
  return (
    <div className="flex items-center justify-items-center text-black flex-col ">
       <Image
        src={turquoiseBG}
        className="landingImage"
        alt="Picture of the author"
        placeholder="blur"
        quality={100}
        layout="fill" // Makes the image fill the container
      />

      <div className="absolute inset-0 flex items-center justify-center landingDiv">
        <div className="text-black text-center flex flex-row mt-40">
          <div className="flex text-left flex-col mr-10">
            <img
              className="anish-logo"
              src="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com/1703063558690.jpeg"
              alt="Anish_Logo"
            />
          </div>
          
          <div className="p-20 align-middle">
            <h1 className="text-4xl font-mono">Hello, I am Anish!</h1>
            <h4 className="text-xs text-right font-sans">Student, Developer, Innovator</h4>
          </div>
        </div>
      </div>
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Footer />

    </div>
  );
}
