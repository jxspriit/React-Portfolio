import React, { useState } from "react";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="group flex items-center gap-2 text-white font-bold text-xl">
          <img
            src="https://www.shutterstock.com/image-vector/lion-king-mascot-logo-team-600nw-2603055397.jpg"
            alt="logo"
            className="w-8 cursor-pointer"
          />
          <span className="cursor-pointer group-hover:text-cyan-400 trasistion all 2s">Jaspreet Singh
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white text-lg">
           {/* Home */}
          <Link to="home" smooth={true} duration={300} activeClass="active" spy={true}><li className="relative group cursor-pointer">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li></Link>
             {/* About */}
          <Link to="about" smooth={true} duration={300} activeClass="active" spy={true}><li className="relative group cursor-pointer">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li> </Link>
             {/* Skills */}
           <Link to="skill" smooth={true} duration={300} activeClass="active" spy={true}><li className="relative group cursor-pointer">
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
               {/* Projects */}
          <Link to="projects" smooth={true} duration={300} activeClass="active" spy={true}><li className="relative group cursor-pointer">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
               {/*Contacts */}
          <Link to="contact" smooth={true} duration={300} activeClass="active" spy={true}><li className="relative group cursor-pointer">
            Contacts
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer text-white text-2xl"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menu ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white backdrop-blur-md">

          <Link to="home" smooth={true} duration={300} activeClass="active" spy={true}><li className="hover:text-cyan-400 transition">Home</li></Link>
          <Link to="about" smooth={true} duration={300} activeClass="active" spy={true}><li className="hover:text-cyan-400 transition">About</li></Link>
          <Link to="skill" smooth={true} duration={300} activeClass="active" spy={true}><li className="hover:text-cyan-400 transition">Skills</li></Link>
          <Link to="projects" smooth={true} duration={300} activeClass="active" spy={true}><li className="hover:text-cyan-400 transition">Projects</li></Link>
          <Link to="contact" smooth={true} duration={300} activeClass="active" spy={true}><li className="hover:text-cyan-400 transition">Contacts</li></Link>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;