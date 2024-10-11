import React from "react";
import Link from "next/link";
import Education from './components/education'
import Experience from "./components/experience";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center text-black flex-col">
      <img className="rounded-full anish-logo" src="https://media.licdn.com/dms/image/v2/D4E03AQFjWH7cAGNMtw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703063558690?e=1733961600&v=beta&t=hMjehcto8_Ad2TyV5ePaRW4KAeddMKDU4UZztqYdwMo" alt="Anish_Logo" />
      {/* <button className="text-black">Discover More</button> */}
      <div className="text-black text-center">
        <h1 className="text-3xl">Anish Jha</h1>
        <h4>
          <a className="pr-2 text-sky-600	" target='_blank'
            rel='noopener noreferrer' href="mailto:anishj2900@gmail.com">anishj2900@gmail.com</a> 
            | 609-454-1784 | 
          <a className="pl-2 pr-2 text-sky-600	" target='_blank'
            rel='noopener noreferrer' href="http://linkedin.com/in/anishjha1">linkedin.com/in/anishjha1</a>
          |
          <a className="pl-2 text-sky-600	" target='_blank'
            rel='noopener noreferrer' href="http://github.com/anishj29">github.com/anishj29</a>
        </h4>
      </div>
      <Education />
      <Experience />
      <Footer />

    </div>
  );
}
