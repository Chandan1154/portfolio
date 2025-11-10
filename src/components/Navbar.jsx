import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-sm fixed w-full top-0 z-10">
      <h1 className="text-2xl font-bold">Chandan C C</h1>

      <ul className="flex space-x-8">
        <li className="cursor-pointer">
          <Link to="hero" smooth={true} duration={500} className="flex items-center space-x-1">
            <span>Home</span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="projects" smooth={true} duration={500} className="flex items-center space-x-1">
            <span>Projects</span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="experience-timeline" smooth={true} duration={500} className="flex items-center space-x-1">
            <span>Experience</span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-1">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
