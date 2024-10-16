import React from "react";
import Intro from "./components/intro";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center text-black flex-col main-img">
      {/* <button className="text-black">Discover More</button> */}
      <div className="flex item-center justify-items-center">
        <div className="text-black text-center flex flex-row mt-40">
          <div className="flex text-left flex-col mr-10">
            <img className="anish-logo" src="https://media.licdn.com/dms/image/v2/D4E03AQFjWH7cAGNMtw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703063558690?e=1733961600&v=beta&t=hMjehcto8_Ad2TyV5ePaRW4KAeddMKDU4UZztqYdwMo" alt="Anish_Logo" />
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
