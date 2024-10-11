import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white text-black'>
      <h1 className='text-3xl font-bold text-black navbar-title'>Anish Jha</h1>
      <ul className='md:flex'>
        <button className='p-4'><Link href="/">
          <p>Home</p>
        </Link></button>
        <button className='p-4'><Link href="/about">
          <p>About</p>
        </Link></button>
        <button className='p-4'><Link href="/resume">
          <p>Resume</p>
        </Link></button>
        <button className='p-4'><Link href="/contact">
          <p>Contact</p>
        </Link></button>
      </ul>
    </div>
  );

};

export default Navbar;