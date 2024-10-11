import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <button className="text-black">Discover More</button>
      <div className="text-black flex align-middle justify-items-center flex-col">
        <h1>Anish Jha</h1>
        <h4>
          <a className="pr-2" target='_blank'
            rel='noopener noreferrer' href="mailto:anishj2900@gmail.com">anishj2900@gmail.com</a> 
            | 609-454-1784 | 
          <a className="pl-2 pr-2" target='_blank'
            rel='noopener noreferrer' href="http://linkedin.com/in/anishjha1">linkedin.com/in/anishjha1</a>
          |
          <a className="pl-2" target='_blank'
            rel='noopener noreferrer' href="http://github.com/anishj29">github.com/anishj29</a>
        </h4>
      </div>
    </div>
  );
}
