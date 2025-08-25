
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothscroll = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null; 

    const scrollStep = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      smoothscroll(element.offsetTop, 1000);
      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed overflow-hidden top-0 left-0 right-0 z-50 bg-[black] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif font-bold text-gray-100 text-2xl lg:text-3xl">
              MK <span className="text-red-600 font-light transition-colors duration-500">PUNK</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <span onClick={() => scrollToSection("Hero")} className="relative font-mono text-lg text-gray-100 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("Service")} className="relative font-mono text-lg text-gray-100 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("About")} className="relative font-mono text-lg text-gray-100 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("Skills")} className="relative font-mono text-lg text-gray-100 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer group">
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
              <li>
                <span onClick={() => scrollToSection("Contact")} className="relative font-mono text-lg text-gray-100 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full" />
                </span>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:text-red-500 transition-colors duration-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoCloseSharp className="h-6 w-6 transform transition-transform duration-500" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6 transform transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <span onClick={() => scrollToSection("Hero")} className="block font-mono text-lg text-gray-100 hover:text-red-500 hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                Home
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("Service")} className="block font-mono text-lg text-gray-100 hover:text-red-500 hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                Services
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("About")} className="block font-mono text-lg text-gray-100 hover:text-red-500 hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                About
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("Skills")} className="block font-mono text-lg text-gray-100 hover:text-red-500 hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                Skills
              </span>
            </li>
            <li>
              <span onClick={() => scrollToSection("Contact")} className="block font-mono text-lg text-gray-100 hover:text-red-500 hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;